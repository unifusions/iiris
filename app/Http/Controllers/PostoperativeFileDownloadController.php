<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\PostOperativeData;
use App\Models\PostoperativeDicomFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostoperativeFileDownloadController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, PostoperativeDicomFile $fileupload)

    {
        // $pathToFile = storage_path('app/public/' . $fileupload->file_path);
        // return response()->download($pathToFile);
        //OLD CODE
       return Storage::download($fileupload->file_path);

    }
}
