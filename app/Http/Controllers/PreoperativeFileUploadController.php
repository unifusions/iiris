<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\PreOperativeData;
use App\Models\PreoperativeDicomFile;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Response;

class PreoperativeFileUploadController extends Controller
{
    protected $crf;
    protected $chunkUploadPath;
    protected $preoperative_id;
    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        return Inertia::render(
            'CaseReportForm/Preoperative/FileUpload',
            [
                'crf' => $crf,
                'preoperative' => $preoperative,
                'csrf_token' => csrf_token(),
            ]

        );
    }

    public function create()
    {
    }


    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, PreoperativeDicomFile $fileupload)
    {
        $uploadpath = 'uploads/' . $crf->subject_id . '/preoperative';
        $input =  $request->file('files');

        if ($input === null) {

            return $this->handleChunkInitialization();
        }
        $file = is_array($input) ? $input[0] : $input;

        if (!($newFile = $file->storeAs($uploadpath, $file->getClientOriginalName()))) {
            // if (!($newFile = Storage::putFileAs($uploadpath, new File($file), $file->getClientOriginalName()))) {


            return Response::make('Could not save file', 500, [
                'Content-Type' => 'text/plain',
            ]);
        }
        $fileupload->pre_operative_data_id = $preoperative->id;
        $fileupload->file_name = $file->getClientOriginalName();

        // https://stagingcliniquest.s3.ap-south-1.amazonaws.com/uploads/001-002/preoperative/m1_small.jpg

        // $fileupload->file_path = 'https://' . env('AWS_BUCKET') . 's3.' . env('AWS_DEFAULT_REGION') . '.amazonaws.com/'  . $newFile;
        $fileupload->file_path = $newFile;
        
        $fileupload->save();
        return Response::make($fileupload->id, 200, [
            'Content-Type' => 'text/plain',
        ]);
    }



    private function handleChunkInitialization()
    {

        $filelocation =  'uploads/temp/'  . uniqid();
        $fileCreated = Storage::disk('local')->put($filelocation, '');

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
        $preop = $request->input('preop');
        $chunkfilepath = 'uploads/' . $crf . '/preoperative/';
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

        Storage::disk('local')->put($basePath . '/patch.' . $offset, $request->getContent(), ['mimetype' => 'application/octet-stream']);
        $this->persistFileIfDone($basePath, $length, $finalFilePath, $fileName, $chunkfilepath, $preop);

        return Response::make('', 204,);
    }

    private function persistFileIfDone($basePath, $length, $finalFilePath, $fileName, $chunkfilepath, $preop)
    {
        $storage = Storage::disk('public');
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
        
        Storage::disk('public')->deleteDirectory($basePath);
        Storage::disk('public')->move($finalFilePath, $chunkfilepath . $fileName);
        
        $finalFileStream = Storage::disk('public')->get($finalFilePath, $chunkfilepath . $fileName);
        Storage::put($finalFilePath, $finalFileStream->stream());
        
        PreoperativeDicomFile::Create([
            'pre_operative_data_id' => $preop,
            'file_name' => $fileName,
            'file_path' => $chunkfilepath . $fileName,
        ]);
    }


    public function show(CaseReportForm $crf, PreOperativeData $preoperative, PreoperativeDicomFile $fileupload)
    {

        // $pathToFile = storage_path('app/public/' . $fileupload->file_path);
        $pathToFile = Storage::url($fileupload->file_path);
        
        $fileUrl = url('/storage/app/public', $fileupload->file_path);
        $extension = pathinfo(storage_path('app/public/' . $fileupload->file_path), PATHINFO_EXTENSION);
        if ($extension === 'jpg' || $extension === 'jpeg' || $extension === 'png')
            return Storage::download($fileupload->file_path);
        // return response()->file($pathToFile);
        return Inertia::render(
            'EchoDicomFiles/EchoRDicomViewer',
            [
                'file' => preg_replace("(^https?://)", "", urldecode($fileUrl))
                // 'file' => $fileUrl
            ]
        );
    }



    public function edit($id)
    {
    }
    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, $id)
    {
    }


    public function destroy(CaseReportForm $crf, PreOperativeData $preoperative, PreoperativeDicomFile $fileupload)
    {
        // Storage::disk('public')->delete($fileupload->file_path);
        $fileupload->delete();
        return redirect()->back()->with(['message' => 'File Deleted successfully']);
    }
}
