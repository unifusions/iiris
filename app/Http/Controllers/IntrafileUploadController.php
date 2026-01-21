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




        IntraoperativeDicomFile::Create([
            'intra_operative_data_id' => $intraoperative->id,
            'file_name' => $request->input('fileName'),
            'file_path' => $request->input('url'),
        ]);
        return Response::make('', 200, [
            'Content-Type' => 'text/plain',
        ]);
    }





    public function show(CaseReportForm $crf, IntraOperativeData $intraoperative, IntraoperativeDicomFile $fileupload)
    {
        $extension = pathinfo($fileupload->file_path, PATHINFO_EXTENSION);

        if ($extension === 'jpg' || $extension === 'jpeg' || $extension === 'png')
            return  response()->json(
                ['imageurl' => Storage::temporaryUrl(
                    $fileupload->file_path,
                    now()->addMinutes(1)
                )]
            );
        if ($fileupload->file_path)
            return Inertia::render(
                'EchoDicomFiles/EchoRDicomViewer',
                [
                    'file' => preg_replace("(^https?://)", "", Storage::url($fileupload->file_path))
                ]
            );
        else
            return 'File Not Found';
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
