<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\ScheduledVisit;
use App\Models\ScheduledVisitDicomFile;
use Illuminate\Http\Request;
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
            ]

        );
    }

    
    public function create()
    {
    
    }

    
    public function store(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        $files = $request->file('files');
        if (isset($files)) {
            foreach ($files as $file) {
                $fileName = $file->getClientOriginalName();
                $uploadpath = 'uploads/' . $crf->subject_id . '/scheduledvisit';
                $filepath = $file->storeAs($uploadpath, $fileName, 'public');
                ScheduledVisitDicomFile::Create([
                    'scheduled_visits_id' => $scheduledvisit->id,
                    'file_name' => $fileName,
                    'file_path' => $filepath,
                ]);
            }
        }
        return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit]);
    }

    
    public function show(CaseReportForm $crf, ScheduledVisit $scheduledvisit, ScheduledVisitDicomFile $fileupload)
    {
        $pathToFile = storage_path('app/public/'. $fileupload->file_path);
        return response()->download($pathToFile);
    }

    
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
    
    }

    
    public function destroy($id)
    {
        //
    }
}
