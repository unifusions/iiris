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

    public function show(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, UnscheduledVisitDicomFile $fileupload)
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

    public function destroy(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, UnscheduledVisitDicomFile $fileupload)
    {
        $fileupload->delete();
        return redirect()->back()->with(['message' => 'File Deleted successfully']);
    }
}
