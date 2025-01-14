<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\ScheduledVisit;
use App\Models\ScheduledVisitDicomFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SvFileDownloadController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, ScheduledVisitDicomFile $fileupload)

    {

        $fileUrl = Storage::disk('s3')->url($fileupload->file_path);
        $fileMetadata = Storage::disk('s3')->mimeType($fileupload->file_path) ?? 'application/octet-stream';
        // $pathToFile = storage_path('app/public/' . $fileupload->file_path);
        // return response()->download($pathToFile);

        // return Storage::download($fileupload->file_path);

        return response()->stream(function () use ($fileUrl) {
            // You can use file_get_contents, but ensure the proper headers are set
            echo file_get_contents($fileUrl);
        }, 200, [
            'Content-Type' => $fileMetadata,
            'Content-Disposition' => 'attachment; filename="' . basename($fileupload->file_path) . '"',
        ]);
        
    }
}
