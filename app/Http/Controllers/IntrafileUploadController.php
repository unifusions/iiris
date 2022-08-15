<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\IntraOperativeData;
use App\Models\IntraoperativeDicomFile;
use Illuminate\Http\Request;
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
            ]

        );
    }

    public function create()
    {
    }

    public function store(Request $request, CaseReportForm $crf, IntraOperativeData $intraoperative)
    {
        $files = $request->file('files');

        if (isset($files)) {

            foreach ($files as $file) {
                $fileName = $file->getClientOriginalName();
                $uploadpath = 'uploads/' . $crf->subject_id . '/intraoperative';
                $filepath = $file->storeAs($uploadpath, $fileName, 'public');

                IntraoperativeDicomFile::Create([
                    'intra_operative_data_id' => $intraoperative->id,
                    'file_name' => $fileName,
                    'file_path' => $filepath,
                ]);
            }
        }
        return redirect()->route('crf.intraoperative.show', [$crf, $intraoperative]);
    }


    public function show(CaseReportForm $crf, IntraOperativeData $intraoperative, IntraoperativeDicomFile $fileupload)
    {
        $pathToFile = storage_path('app/public/'. $fileupload->file_path);
        return response()->download($pathToFile);
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
