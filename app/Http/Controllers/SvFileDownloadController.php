<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\ScheduledVisit;
use App\Models\ScheduledVisitDicomFile;
use Illuminate\Http\Request;

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
        $pathToFile = storage_path('app/public/' . $fileupload->file_path);
        return response()->download($pathToFile);
    }
}
