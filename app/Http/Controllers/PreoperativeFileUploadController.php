<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\PreOperativeData;
use App\Models\PreoperativeDicomFile;
use Aws\Exception\MultipartUploadException;
use Aws\S3\MultipartUploader;
use Aws\S3\ObjectUploader;
use Aws\S3\S3Client;
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
                'accessId' => env('AWS_ACCESS_KEY_ID'),
                'accessKey' => env('AWS_SECRET_ACCESS_KEY'),
                'bucket' => env('AWS_BUCKET')
            ]

        );
    }

    public function create()
    {
    }


    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, PreoperativeDicomFile $fileupload)
    {
        PreoperativeDicomFile::Create([
            'pre_operative_data_id' => $preoperative->id,
            'file_name' => $request->input('fileName'),
            'file_path' => $request->input('url'),
        ]);

        return Response::make('', 200, [
            'Content-Type' => 'text/plain',
        ]);
    }





    public function show(CaseReportForm $crf, PreOperativeData $preoperative, PreoperativeDicomFile $fileupload)
    {
        return Inertia::render(
            'EchoDicomFiles/EchoRDicomViewer',
            [
                'file' => preg_replace("(^https?://)", "", Storage::url($fileupload->file_path))
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
