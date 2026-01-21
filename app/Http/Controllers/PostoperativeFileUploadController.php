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
                'accessId' => env('AWS_ACCESS_KEY_ID'),
                'accessKey' => env('AWS_SECRET_ACCESS_KEY'),
                'bucket' => env('AWS_BUCKET')
            ]

        );
    }


    public function create()
    {
    }


    public function store(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, PostoperativeDicomFile $fileupload)
    {
        PostoperativeDicomFile::Create([
            'post_operative_data_id' => $postoperative->id,
            'file_name' => $request->input('fileName'),
            'file_path' => $request->input('url'),
        ]);
    }




    public function show(CaseReportForm $crf, PostOperativeData $postoperative, PostoperativeDicomFile $fileupload)
    {
        return Inertia::render(
            'EchoDicomFiles/EchoRDicomViewer',
            [
                'file' => preg_replace("(^https?://)", "",  Storage::url($fileupload->file_path)),
                'accessId' => env('AWS_ACCESS_KEY_ID'),
                'accessKey' => env('AWS_SECRET_ACCESS_KEY'),
                'bucket' => env('AWS_BUCKET')

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
