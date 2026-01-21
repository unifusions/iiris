<?php

namespace App\Http\Controllers\Reports;

use App\Exports\CaseReportFormExport;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class CaseReportFormExportController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        // return (new CaseReportFormExport)->download('casereportforms.xlsx');

        return Excel::download(new CaseReportFormExport, 'casereportforms.xlsx');
    }
}
