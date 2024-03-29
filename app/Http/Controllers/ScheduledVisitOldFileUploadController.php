<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\ScheduledVisit;
use App\Models\ScheduledVisitDicomFile;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ScheduledVisitFileUploadController extends Controller
{

    public function index(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        return Inertia::render(
            'CaseReportForm/ScheduledVisit/FileUpload',
            [
                'crf' => $crf,
                'scheduledvisit' => $scheduledvisit,
                'csrf_token' => csrf_token()
            ]

        );
    }


    public function create()
    {
    }


    public function store(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, ScheduledVisitDicomFile $fileupload)
    {

        $uploadpath = 'uploads/' . $crf->subject_id . '/scheduledvisit';
        $input =  $request->file('files');

        if ($input === null) {

            return $this->handleChunkInitialization();
        }
        $file = is_array($input) ? $input[0] : $input;

        if (!($newFile = $file->storeAs($uploadpath, $file->getClientOriginalName(), 'public'))) {


            return Response::make('Could not save file', 500, [
                'Content-Type' => 'text/plain',
            ]);
        }
        $fileupload->scheduled_visits_id = $scheduledvisit->id;
        $fileupload->file_name = $file->getClientOriginalName();
        $fileupload->file_path = $newFile;
        $fileupload->save();
        return Response::make($fileupload->id, 200, [
            'Content-Type' => 'text/plain',
        ]);
    }

    private function handleChunkInitialization()
    {

        $filelocation =  'uploads/temp/'  . uniqid();
        $fileCreated = Storage::put($filelocation, '');

        if (!$fileCreated) {
            abort(500, 'Could not create file');
        }
        return Response::make(
            Crypt::encryptString($filelocation),
            200,
            [
                'Content-Type' => 'text/plain',
            ]
        );
    }

    public function patch(Request $request)
    {
     
        
        $crf = $request->input('crf');
        $svid = $request->input('svid');
        $chunkfilepath = 'uploads/' . $crf . '/scheduledvisit/';
        $encryptedPath = $request->input('patch');
        if (!$encryptedPath) {
            abort(400, 'No id given');
        }
        try {
            $finalFilePath = Crypt::decryptString($encryptedPath);
            $id = basename($encryptedPath);
        } catch (DecryptException $e) {
            abort(400, 'Invalid encryption for id');
        }
        $basePath = 'uploads/temp/' . $id;
        $offset = $request->server('HTTP_UPLOAD_OFFSET');
        $length = $request->server('HTTP_UPLOAD_LENGTH');
        $fileName = $request->server('HTTP_UPLOAD_NAME');

        Storage::put($basePath . '/patch.' . $offset, $request->getContent(), ['mimetype' => 'application/octet-stream']);
        $this->persistFileIfDone($basePath, $length, $finalFilePath, $fileName, $chunkfilepath, $svid);

        return Response::make('',204,);
    }
    
    private function persistFileIfDone($basePath, $length, $finalFilePath, $fileName, $chunkfilepath, $svid)
    {
        $storage = Storage::disk();
        $size = 0;
        $chunks = $storage->files($basePath);

        foreach ($chunks as $chunk) {
            $size += $storage
                ->size($chunk);
        }

        // Process finished upload
        if ($size < $length) {
            return;
        }

        $chunks = collect($chunks);
        $chunks = $chunks->keyBy(function ($chunk) {
            return substr($chunk, strrpos($chunk, '.') + 1);
        });
        $chunks = $chunks->sortKeys();
        $data = '';
        foreach ($chunks as $chunk) {
            $chunkContents = $storage
                ->get($chunk);
            $data .= $chunkContents;
            unset($chunkContents);
        }
        Storage::disk('public')->put($finalFilePath, $data, ['mimetype' => 'application/octet-stream']);
        Storage::deleteDirectory($basePath);
        Storage::disk('public')->move($finalFilePath, $chunkfilepath . $fileName);
        ScheduledVisitDicomFile::Create([
            'scheduled_visits_id' => $svid,
            'file_name' => $fileName,
            'file_path' => $chunkfilepath . $fileName,
        ]);
    }
    


    public function show(CaseReportForm $crf, ScheduledVisit $scheduledvisit, ScheduledVisitDicomFile $fileupload)
    {
        $pathToFile = storage_path('app/public/' . $fileupload->file_path);
        $fileUrl = url('/storage/app/public', $fileupload->file_path);
        $extension = pathinfo(storage_path('app/public/' . $fileupload->file_path), PATHINFO_EXTENSION);
        if ($extension === 'jpg' || $extension === 'jpeg' || $extension === 'png')
            return response()->file($pathToFile);
        return Inertia::render(
            'EchoDicomFiles/EchoRDicomViewer',
            [
                'file' => preg_replace("(^https?://)", "", urldecode($fileUrl))

            ]
        );
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
    }


    public function destroy(CaseReportForm $crf, ScheduledVisit $scheduledvisit, ScheduledVisitDicomFile $fileupload)
    {
        $fileupload->delete();
        return redirect()->back()->with(['message' => 'File Deleted successfully']);
    }
}
