<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\PostOperativeData;
use App\Models\PostoperativeDicomFile;
use Illuminate\Http\Request;
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
            ]

        );
    }


    public function create()
    {
    }


    public function store(Request $request, CaseReportForm $crf, PostOperativeData $postoperative)
    {
        $files = $request->file('files');
        if (isset($files)) {
            foreach ($files as $file) {
                $fileName = $file->getClientOriginalName();
                $uploadpath = 'uploads/' . $crf->subject_id . '/postoperative';
                $filepath = $file->storeAs($uploadpath, $fileName, 'public');
                PostoperativeDicomFile::Create([
                    'post_operative_data_id' => $postoperative->id,
                    'file_name' => $fileName,
                    'file_path' => $filepath,
                ]);
            }
        }
        return redirect()->route('crf.postoperative.show', [$crf, $postoperative]);
    }


    public function show(CaseReportForm $crf, PostOperativeData $preoperative, PostoperativeDicomFile $fileupload)
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