<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\UnscheduledVisit;
use App\Models\UnscheduledVisitDicomFile;
use Illuminate\Http\Request;

class UsvFileDownloadController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, UnscheduledVisitDicomFile $fileupload)
    {
        $pathToFile = storage_path('app/public/' . $fileupload->file_path);
        return response()->download($pathToFile);
    }
}
