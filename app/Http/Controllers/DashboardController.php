<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\ScheduledVisit;
use App\Models\UnscheduledVisit;
use App\Scopes\CaseReportFormUserScope;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $data = [
            'crfcount' => count(CaseReportForm::all()),
            'allcrfcount' => count(CaseReportForm::withoutGlobalScope('facility_id')->get()),
            'scheduledVisitCount' => count(ScheduledVisit::all()),
            'unscheduledVisitCount' => count(UnscheduledVisit::all()),
        ];
        return view('dashboard')->with($data);
    }
}
