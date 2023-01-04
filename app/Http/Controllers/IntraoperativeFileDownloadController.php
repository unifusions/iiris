<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\IntraOperativeData;
use App\Models\IntraoperativeDicomFile;
use Illuminate\Http\Request;

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
        
            $pathToFile = storage_path('app/public/' . $fileupload->file_path);
            return response()->download($pathToFile);
       
    }
}
