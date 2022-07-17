<?php

namespace App\Http\Controllers\UnshceduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Medication;
use App\Models\UnscheduledVisit;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UVMedicationController extends Controller
{
    public function index(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/Medications/Index', [
            'crf' => $crf,
            'mode' => 'unscheduledvisit',
            'unscheduledvisit' => $unscheduledvisit,
            'medications' => $unscheduledvisit->medications,
            'updateUrl' => 'crf.unscheduledvisit.update',
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit])
        ]);
    }

    public function create()
    {
        //
    }


    public function store(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {


        Medication::create([
            'unscheduled_visits_id' => $request->unscheduledvisit->id,
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
    public function destroy(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, Medication $medication)
    {

        $medication->delete();
        return redirect()->back()->with(['message' => 'Medication ' . $medication->id . ' Deleted successfully']);
    }
}
