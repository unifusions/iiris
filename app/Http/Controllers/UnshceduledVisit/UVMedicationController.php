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
            'createUrl' => route('crf.unscheduledvisit.medication.create', [$crf, $unscheduledvisit]),
            'medications' => $unscheduledvisit->medications->map(function ($medication) {
                return [
                    'medication' => $medication,
                    'editUrl' => route('crf.unscheduledvisit.medication.edit', [$medication->unscheduledvisit->casereportform, $medication->unscheduledvisit, $medication]),
                    'deleteUrl' => route('crf.unscheduledvisit.medication.destroy', [$medication->unscheduledvisit->casereportform, $medication->unscheduledvisit, $medication]),
                ];
            }),
            'updateUrl' => 'crf.unscheduledvisit.update',
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit])
        ]);
    }

    public function create(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {

        return Inertia::render('CaseReportForm/FormFields/Medications/CreateMedications', [
            'crf' => $crf,
            'mode' => 'unscheduledvisit',
            'unscheduledvisit' => $unscheduledvisit,
            'storeUrl' => route('crf.unscheduledvisit.medication.store', [$crf, $unscheduledvisit]),
            'backUrl' => route('crf.unscheduledvisit.medication.index', [$crf, $unscheduledvisit])
        ]);
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

        return redirect()->route('crf.unscheduledvisit.medication.index', [$crf, $unscheduledvisit])->with(['message' => 'Medication Added successfully']);
    }

    public function show($id)
    {
        //
    }

    public function edit(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, Medication $medication)
    {
        return Inertia::render('CaseReportForm/FormFields/Medications/EditMedications', [
            'crf' => $crf,
            'mode' => 'unscheduledvisit',
            'unscheduledvisit' => $unscheduledvisit,
            'medication' => $medication,
            'updateUrl' => 'crf.unscheduledvisit.update',
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit])
        ]);
    }

    public function update(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, Medication $medication)
    {
        $medication->medication = $request->medication;
        $medication->indication = $request->indication;
        $medication->status = $request->status;
        $medication->dosage = $request->dosage;
        $medication->reason = $request->reason;
        $medication->start_date = Carbon::parse($request->start_date)->addHours(5)->addMinutes(30);
        $medication->stop_date = $request->stop_date !== null ? Carbon::parse($request->stop_date)->addHours(5)->addMinutes(30) : null;
        $medication->save();
        return redirect()->route('crf.unscheduledvisit.medication.index', [$crf, $unscheduledvisit])->with(['message' => 'Medication Edited successfully']);
    }
    public function destroy(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, Medication $medication)
    {

        $medication->delete();
        return redirect()->back()->with(['message' => 'Medication ' . $medication->id . ' Deleted successfully']);
    }
}
