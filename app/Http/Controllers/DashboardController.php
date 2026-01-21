<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\Facility;
use App\Models\ScheduledVisit;
use App\Models\Tickets;
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
            'facilityCount' => count(Facility::all()),
            'tickets' => count(Tickets::all()),
        ];


        // $adminCards = [
        //     'crfs' => CaseReportForm::all(),
        //     'crfreg' => CaseReportForm::selectRaw('year(created_at) as year, monthname(created_at) as month,count(subject_id) as total')
        //     ->groupBy('year', 'month')->get()
        // ];

        $adminCards = [
    'crfs' => CaseReportForm::all(),

    'crfreg' => CaseReportForm::query()
    ->get()
    ->groupBy(fn ($row) => $row->created_at->format('Y-m'))
    ->map(function ($group) {
        return [
            'year'  => $group->first()->created_at->year,
            'month' => $group->first()->created_at->month,
            'total' => $group->count(),
        ];
    })
    ->values()

];

        // return view('dashboard')->with($data);

        return Inertia::render('dashboard', [
            'adminData' => $adminData,
            'adminCards' => $adminCards,
            'data' => $data,
            'facility' => auth()->user()->facility->name ?? ''
        ]);
    }
}
