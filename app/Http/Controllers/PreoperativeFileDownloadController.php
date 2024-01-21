<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\PreOperativeData;
use App\Models\PreoperativeDicomFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PreoperativeFileDownloadController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, PreoperativeDicomFile $fileupload)

    {
        // $pathToFile = storage_path('app/public/' . $fileupload->file_path);
       return Storage::download($fileupload->file_path);
        // return response()->download($pathToFile);
    }
}
