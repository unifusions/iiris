<?php

namespace App\Http\Controllers\ScheduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Medication;
use App\Models\ScheduledVisit;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SVMedicationsController extends Controller
{
    public function index(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/Medications/Index', [
            'crf' => $crf,
            'mode' => 'scheduledvisit',
            'scheduledvisit' => $scheduledvisit,
            'medications' => $scheduledvisit->medications,
            'updateUrl' => 'crf.scheduledvisit.update',
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit])
        ]);
    }

    public function create()
    {
        //
    }


    public function store(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {


        Medication::create([
            'scheduled_visits_id' => $request->scheduledvisit->id,
            'medication' => $request->medication,
            'indication' => $request->indication,
            'status' => $request->status,
            'dosage' => $request->dosage,
            'reason' => $request->reason,
            'start_date' => Carbon::parse($request->start_date)->addHours(5)->addMinutes(30),
            'stop_date' => $request->stop_date !== null ? Carbon::parse($request->stop_date)->addHours(5)->addMinutes(30) : null
        ]);

        return redirect()->back()->with(['message' => 'Medication Added successfully']);
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }
    public function destroy(CaseReportForm $crf, ScheduledVisit $scheduledvisit, Medication $medication)
    {

        $medication->delete();
        return redirect()->back()->with(['message' => 'Medication ' . $medication->id . ' Deleted successfully']);
    }
}
