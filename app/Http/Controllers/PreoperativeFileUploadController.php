<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\PreOperativeData;
use App\Models\PreoperativeDicomFile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PreoperativeFileUploadController extends Controller
{
    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        return Inertia::render(
            'CaseReportForm/Preoperative/FileUpload',
            [
                'crf' => $crf,
                'preoperative' => $preoperative,
            ]

        );
    }

    public function create()
    {
        //
    }

  
    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $files = $request->file('files');

        if (isset($files)) {

            foreach ($files as $file) {
                $fileName = $file->getClientOriginalName();
                $uploadpath = 'uploads/' . $crf->subject_id . '/preoperative';
                $filepath = $file->storeAs($uploadpath, $fileName, 'public');

                PreoperativeDicomFile::Create([
                    'pre_operative_data_id' => $preoperative->id,
                    'file_name' => $fileName,
                    'file_path' => $filepath,
                ]);
            }
        }
        return redirect()->route('crf.preoperative.show', [$crf, $preoperative]);
    }

    public function show(CaseReportForm $crf, PreOperativeData $preoperative, PreoperativeDicomFile $fileupload)
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
        //
    }


    public function destroy($id)
    {
        //
    }
}