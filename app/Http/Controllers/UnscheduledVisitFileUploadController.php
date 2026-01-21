<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\UnscheduledVisit;
use App\Models\UnscheduledVisitDicomFile;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UnscheduledVisitFileUploadController extends Controller
{

    public function index(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
        return Inertia::render(
            'CaseReportForm/UnscheduledVisit/FileUpload',
            [
                'crf' => $crf,
                'unscheduledvisit' => $unscheduledvisit,
                'csrf_token' => csrf_token(),
                'accessId' => env('AWS_ACCESS_KEY_ID'),
                'accessKey' => env('AWS_SECRET_ACCESS_KEY'),
                'bucket' => env('AWS_BUCKET')
            ]

        );
    }


    public function create()
    {
        //
    }


    public function store(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, UnscheduledVisitDicomFile $fileupload)
    {
        $fileupload->unscheduled_visits_id = $unscheduledvisit->id;
        $fileupload->file_name =  $request->input('fileName');
        $fileupload->file_path = $request->input('url');
        $fileupload->save();
        return Response::make('', 200, [
            'Content-Type' => 'text/plain',
        ]);
    } 





    public function show(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, UnscheduledVisitDicomFile $fileupload)
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

    public function update(Request $request, $id)
    {
    }

    public function destroy(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, UnscheduledVisitDicomFile $fileupload)
    {
        $fileupload->delete();
        return redirect()->back()->with(['message' => 'File Deleted successfully']);
    }
}
