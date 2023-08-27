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
            'createUrl' => route('crf.scheduledvisit.medication.create', [$crf, $scheduledvisit]),
            'medications' => $scheduledvisit->medications->map(function ($medication) {
                return [
                    'medication' => $medication,
                    'editUrl' => route('crf.scheduledvisit.medication.edit', [$medication->scheduledvisit->casereportform, $medication->scheduledvisit, $medication]),
                    'deleteUrl' => route('crf.scheduledvisit.medication.destroy', [$medication->scheduledvisit->casereportform, $medication->scheduledvisit, $medication]),
                ];
            }),
            'updateUrl' => 'crf.scheduledvisit.update',
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit])
        ]);

    }

    public function create(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/Medications/CreateMedications', [
            'crf' => $crf,
            'mode' => 'scheduledvisit',
            'scheduledvisit' => $scheduledvisit,
            'storeUrl' => route('crf.scheduledvisit.medication.store', [$crf, $scheduledvisit]),
            'backUrl' => route('crf.scheduledvisit.medication.index', [$crf, $scheduledvisit])
        ]);
    }


    public function store(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {

        
        Medication::create([
            'scheduled_visits_id' => $request->scheduledvisit->id,
            'medication' => $request->medication,
            'indication' => $request->indication,
            'medicine_type' => $request->medicine_type,
            'status' => $request->status,
            'dosage' => $request->dosage,
            'reason' => $request->reason,
            'start_date' => $request->start_date !== null ?  Carbon::parse($request->start_date)->addHours(5)->addMinutes(30) : null,
            'stop_date' => $request->status === 'Discontinued' ? ($request->stop_date !== null ? Carbon::parse($request->stop_date)->addHours(5)->addMinutes(30) : null) : null,
        ]);

        return redirect()->route('crf.scheduledvisit.medication.index', [$crf,$scheduledvisit])->with(['message' => 'Medication Added successfully']);
    }

    public function show($id)
    {
        //
    }

    public function edit(CaseReportForm $crf, ScheduledVisit $scheduledvisit, Medication $medication)
    {
        return Inertia::render('CaseReportForm/FormFields/Medications/EditMedications', [
            'crf' => $crf,
            'mode' => 'scheduledvisit',
            'scheduledvisit' => $scheduledvisit,
            'medication' => $medication,
            'updateUrl' => route('crf.scheduledvisit.medication.update', [$crf,$scheduledvisit, $medication]),
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit])
        ]);
    }

    public function update(Request $request,CaseReportForm $crf, ScheduledVisit $scheduledvisit, Medication $medication)
    {
        $medication->medication = $request->medication;
        $medication->indication = $request->indication;
        $medication->status = $request->status;
        $medication->dosage = $request->dosage;
        $medication->reason = $request->reason;
        $medication->start_date = $request->start_date !== null ?  Carbon::parse($request->start_date)->addHours(5)->addMinutes(30) : null;
        $medication->stop_date = $request->status === 'Discontinued' ? ($request->stop_date !== null ? Carbon::parse($request->stop_date)->addHours(5)->addMinutes(30) : null) : null;
        $medication->save();
        return redirect()->route('crf.scheduledvisit.medication.index', [$crf, $scheduledvisit])->with(['message' => 'Medication Edited successfully']);
    }
    public function destroy(CaseReportForm $crf, ScheduledVisit $scheduledvisit, Medication $medication)
    {

        $medication->delete();
        return redirect()->back()->with(['message' => 'Medication ' . $medication->id . ' Deleted successfully']);
    }
}
