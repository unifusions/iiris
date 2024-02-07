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


    public function store(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, ScheduledVisitDicomFile $fileupload)
    {
        ScheduledVisitDicomFile::Create([
            'scheduled_visits_id' => $scheduledvisit->id,
            'file_name' => $request->input('fileName'),
            'file_path' => $request->input('url'),
        ]);
       
        return Response::make('', 200, [
            'Content-Type' => 'text/plain',
        ]);
    }

    public function show(CaseReportForm $crf, ScheduledVisit $scheduledvisit, ScheduledVisitDicomFile $fileupload)
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


    public function destroy(CaseReportForm $crf, ScheduledVisit $scheduledvisit, ScheduledVisitDicomFile $fileupload)
    {
        $fileupload->delete();
        return redirect()->back()->with(['message' => 'File Deleted successfully']);
    }
}
