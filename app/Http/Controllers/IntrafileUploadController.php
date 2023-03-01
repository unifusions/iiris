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
                'csrf_token' => csrf_token()
            ]

        );
    }

    public function create()
    {
    }

    public function store(Request $request, CaseReportForm $crf, IntraOperativeData $intraoperative)
    {
        if ($request->hasFile('files')) {
            $file = $request->file('files');
            $fileName = $file->getClientOriginalName();

            $uploadpath = 'uploads/' . $crf->subject_id  . '/intraoperative';
            $filepath = $file->storeAs($uploadpath, $fileName, 'public');
            IntraoperativeDicomFile::Create([
                'intra_operative_data_id' => $intraoperative->id,
                'file_name' => $fileName,
                'file_path' => $filepath,
            ]);
            return true;
        }
    }


    public function show(CaseReportForm $crf, IntraOperativeData $intraoperative, IntraoperativeDicomFile $fileupload)
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


    public function destroy(CaseReportForm $crf, IntraOperativeData $intraoperative, IntraoperativeDicomFile $fileupload)
    {
        $fileupload->delete();
        return redirect()->back()->with(['message' => 'File Deleted successfully']);
    }
}
