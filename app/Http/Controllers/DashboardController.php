<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\Facility;
use App\Models\ScheduledVisit;
use App\Models\UnscheduledVisit;
use App\Models\User;
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

        $adminData = [
            'allcrfcount' => count(CaseReportForm::withoutGlobalScope('facility_id')->get()),
            'usersCount' => count(User::where('role_id', '3')->orWhere('role_id', '4')->get()),
            'facilityCount' => count(Facility::all())
        ];
        // return view('dashboard')->with($data);

        return Inertia::render('Dashboard', ['adminData' => $adminData, 'data' => $data,'facility' => auth()->user()->facility->name ?? '']);
    }
}
