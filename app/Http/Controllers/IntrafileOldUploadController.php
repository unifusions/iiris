<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\IntraOperativeData;
use App\Models\IntraoperativeDicomFile;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class IntrafileUploadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf, IntraOperativeData $intraoperative)
    {
        return Inertia::render(
            'CaseReportForm/Intraoperative/FileUpload',
            [
                'crf' => $crf,
                'intraoperative' => $intraoperative,
                'csrf_token' => csrf_token(),
                'accessId' => env('AWS_ACCESS_KEY_ID'),
                'accessKey' => env('AWS_SECRET_ACCESS_KEY'),
                'bucket' => env('AWS_BUCKET')
            ]

        );
    }

    public function create()
    {
    }

    public function store(Request $request, CaseReportForm $crf, IntraOperativeData $intraoperative, IntraoperativeDicomFile $fileupload)
    {

        $uploadpath = 'uploads/' . $crf->subject_id . '/intraoperative';
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
        $fileupload->intra_operative_data_id = $intraoperative->id;
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
        return Response::make(Crypt::encryptString($filelocation), 200, [
            'Content-Type' => 'text/plain',
        ]);
    }
    
    public function patch(Request $request)
    {
        $crf = $request->input('crf');
        $intraop = $request->input('intraop');
        $chunkfilepath = 'uploads/' . $crf . '/intraoperative/';
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
        $this->persistFileIfDone($basePath, $length, $finalFilePath, $fileName, $chunkfilepath, $intraop);

        return Response::make('', 204);
    }

    private function persistFileIfDone($basePath, $length, $finalFilePath, $fileName, $chunkfilepath, $intraop)
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
        IntraoperativeDicomFile::Create([
            'intra_operative_data_id' => $intraop,
            'file_name' => $fileName,
            'file_path' => $chunkfilepath . $fileName,
        ]);
    }


    public function show(CaseReportForm $crf, IntraOperativeData $intraoperative, IntraoperativeDicomFile $fileupload)
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
    }


    public function update(Request $request, $id)
    {
    }


    public function destroy(CaseReportForm $crf, IntraOperativeData $intraoperative, IntraoperativeDicomFile $fileupload)
    {
        $fileupload->delete();
        return redirect()->back()->with(['message' => 'File Deleted successfully']);
    }
}
