<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\PostOperativeData;
use App\Models\PostoperativeDicomFile;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;

use Inertia\Inertia;

class PostoperativeFileUploadController extends Controller
{
    public function index(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        return Inertia::render(
            'CaseReportForm/Postoperative/FileUpload',
            [
                'crf' => $crf,
                'postoperative' => $postoperative,
                'csrf_token' => csrf_token(),
            ]

        );
    }


    public function create()
    {
    }


    public function store(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, PostoperativeDicomFile $fileupload)
    {

        $uploadpath = 'uploads/' . $crf->subject_id . '/postoperative';
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
        $fileupload->post_operative_data_id = $postoperative->id;
        $fileupload->file_name = $file->getClientOriginalName();
        $fileupload->file_path = $newFile;
        $fileupload->save();
        return Response::make($fileupload->id, 200, [
            'Content-Type' => 'text/plain',
        ]);

        // if ($request->hasFile('files')) {
        //     $file = $request->file('files');
        //     $fileName = $file->getClientOriginalName();
        //     $folder = uniqid();
        //     $uploadpath = 'uploads/' . $crf->subject_id . '/postoperative';
        //     $filepath = $file->storeAs($uploadpath, $fileName, 'public');
        //     PostoperativeDicomFile::Create([
        //         'post_operative_data_id' => $postoperative->id,
        //         'file_name' => $fileName,
        //         'file_path' => $filepath,
        //     ]);
        //     return true;
        // }
    }

    private function handleChunkInitialization()
    {

        $filelocation =  'uploads/temp/' . uniqid();
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
        $postop = $request->input('postop');
        $chunkfilepath = 'uploads/' . $crf . '/postoperative/';
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
        $this->persistFileIfDone($basePath, $length, $finalFilePath, $fileName, $chunkfilepath, $postop);

        return Response::make('', 204);
    }

    private function persistFileIfDone($basePath, $length, $finalFilePath, $fileName, $chunkfilepath, $postop)
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
        PostoperativeDicomFile::Create([
            'post_operative_data_id' => $postop,
            'file_name' => $fileName,
            'file_path' => $chunkfilepath . $fileName,
        ]);
    }

    public function show(CaseReportForm $crf, PostOperativeData $postoperative, PostoperativeDicomFile $fileupload)
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


    public function destroy(CaseReportForm $crf, PostOperativeData $postoperative, PostoperativeDicomFile $fileupload)
    {

        $fileupload->delete();
        return redirect()->back()->with(['message' => 'File Deleted successfully']);
    }
}
