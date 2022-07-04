<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\ScheduledVisit;
use App\Models\UnscheduledVisit;
use App\Scopes\CaseReportFormUserScope;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
        // return view('dashboard')->with($data);

        return Inertia::render('Dashboard', ['data' => $data,'facility' => auth()->user()->facility->name ?? '']);
    }
}
