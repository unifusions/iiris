<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\IntraOperativeData;
use App\Models\IntraoperativeDicomFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class IntraoperativeFileDownloadController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, CaseReportForm $crf, IntraOperativeData $intraoperative, IntraoperativeDicomFile $fileupload)
    {
       
        $fileUrl = Storage::disk('s3')->url($fileupload->file_path);

       
        $fileMetadata = Storage::disk('s3')->mimeType($fileupload->file_path) ?? 'application/octet-stream';
       

        // return Storage::get($fileupload->file_name);
        return response()->stream(function () use ($fileUrl) {
            // You can use file_get_contents, but ensure the proper headers are set
            echo file_get_contents($fileUrl);
        }, 200, [
            'Content-Type' => $fileMetadata,
            'Content-Disposition' => 'attachment; filename="' . basename($fileupload->file_path) . '"',
        ]);
       
    }
}
