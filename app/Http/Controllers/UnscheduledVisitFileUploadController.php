<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\UnscheduledVisit;
use App\Models\UnscheduledVisitDicomFile;
use Illuminate\Http\Request;
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
            ]

        );
    }

    
    public function create()
    {
        //
    }

   
    public function store(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
        $files = $request->file('files');
        if (isset($files)) {
            foreach ($files as $file) {
                $fileName = $file->getClientOriginalName();
                $uploadpath = 'uploads/' . $crf->subject_id . '/unscheduledvisit';
                $filepath = $file->storeAs($uploadpath, $fileName, 'public');
                UnscheduledVisitDicomFile::Create([
                    'unscheduled_visits_id' => $unscheduledvisit->id,
                    'file_name' => $fileName,
                    'file_path' => $filepath,
                ]);
            }
        }
        return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]);
    }

    public function show($id)
    {
        
    }

    public function edit($id)
    {
        
    }

    public function update(Request $request, $id)
    {
        
    }

    public function destroy($id)
    {
      
    }
}
