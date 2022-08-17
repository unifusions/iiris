<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Medication;
use App\Models\PreOperativeData;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PreOperativeMedicationController extends Controller
{
    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        return Inertia::render('CaseReportForm/FormFields/Medications/Index', [
            'crf' => $crf,
            'mode' => 'preoperative',
            'preoperative' => $preoperative,
            'createUrl' => route('crf.preoperative.medication.create', [$crf, $preoperative]),
            'medications' => $preoperative->medications->map(function ($medication) {
                return [
                    'medication' => $medication,
                    'editUrl' => route('crf.preoperative.medication.edit', [$medication->preoperatives->casereportform, $medication->preoperatives, $medication]),
                    'deleteUrl' => route('crf.preoperative.medication.destroy', [$medication->preoperatives->casereportform, $medication->preoperatives, $medication]),
                ];
            }),

            'postopmedications' => $crf->postoperatives->medications->map(function ($medication) {
                return [
                    'medication' => $medication,
                    'editUrl' => route('crf.postoperative.medication.edit', [$medication->postoperatives->casereportform, $medication->postoperatives, $medication]),
                    'deleteUrl' => route('crf.postoperative.medication.destroy', [$medication->postoperatives->casereportform, $medication->postoperatives, $medication]),
                ];
            }),

           
            'updateUrl' => 'crf.preoperative.update',
            'backUrl' => route('crf.preoperative.show', [$crf, $preoperative])
        ]);
    }

    public function create(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        return Inertia::render('CaseReportForm/FormFields/Medications/CreateMedications', [
            'crf' => $crf,
            'mode' => 'preoperative',
            'preoperative' => $preoperative,
            'storeUrl' => route('crf.preoperative.medication.store', [$crf, $preoperative]),
            'backUrl' => route('crf.preoperative.medication.index', [$crf, $preoperative])
        ]);
    }


    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative)
    {
        Medication::create([
            'pre_operative_data_id' => $request->preoperative->id,
            'medication' => $request->medication,
            'indication' => $request->indication,
            'status' => $request->status,
            'dosage' => $request->dosage,
            'reason' => $request->reason,
            'start_date' => Carbon::parse($request->start_date)->addHours(5)->addMinutes(30),
            'stop_date' => $request->stop_date !== null ? Carbon::parse($request->stop_date)->addHours(5)->addMinutes(30) : null
        ]);

        return redirect()->route('crf.preoperative.medication.index', [$crf,$preoperative])->with(['message' => 'Medication Added successfully']);
    }

    public function show($id)
    {
        //
    }

    public function edit(CaseReportForm $crf, PreOperativeData $preoperative, Medication $medication)
    {
        return Inertia::render('CaseReportForm/FormFields/Medications/EditMedications', [
            'crf' => $crf,
            'mode' => 'preoperative',
            'preoperative' => $preoperative,
            'medication' => $medication,
            'updateUrl' => 'crf.preoperative.update',
            'backUrl' => route('crf.preoperative.show', [$crf, $preoperative])
        ]);
    }

    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, Medication $medication)
    {
        $medication->medication = $request->medication;
        $medication->indication = $request->indication;
        $medication->status = $request->status;
        $medication->dosage = $request->dosage;
        $medication->reason = $request->reason;
        $medication->start_date = Carbon::parse($request->start_date)->addHours(5)->addMinutes(30);
        $medication->stop_date = $request->stop_date !== null ? Carbon::parse($request->stop_date)->addHours(5)->addMinutes(30) : null;
        $medication->save();
        return redirect()->route('crf.preoperative.medication.index', [$crf, $preoperative])->with(['message' => 'Medication Edited successfully']);
    }
    public function destroy(CaseReportForm $crf, PreOperativeData $preoperative, Medication $medication)
    {

        $medication->delete();
        return redirect()->back()->with(['message' => 'Medication ' . $medication->id . ' Deleted successfully']);
    }
}
