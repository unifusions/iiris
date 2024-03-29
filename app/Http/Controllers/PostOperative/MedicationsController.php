<?php

namespace App\Http\Controllers\PostOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Medication;
use App\Models\PostOperativeData;
use App\Models\PreOperativeData;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MedicationsController extends Controller
{
    public function index(CaseReportForm $crf, PostOperativeData $postoperative)
    {

        return Inertia::render('CaseReportForm/FormFields/Medications/Index', [
            'crf' => $crf,
            'mode' => 'postoperative',
            'createUrl' => route('crf.postoperative.medication.create', [$crf,$postoperative]),
            'postoperative' => $postoperative,
            'preopmedications' => $crf->preoperatives->medications->map(function ($medication) {
                return [
                    'medication' => $medication,
                    'editUrl' => route('crf.preoperative.medication.edit', [$medication->preoperatives->casereportform, $medication->preoperatives, $medication]),
                    'updateUrl' => route('crf.preoperative.medication.update', [$medication->preoperatives->casereportform, $medication->preoperatives, $medication]),
                    'deleteUrl' => route('crf.preoperative.medication.destroy', [$medication->preoperatives->casereportform, $medication->preoperatives, $medication]),
                ];
            }),
            'medications' => $postoperative->medications->map(function ($medication) {
                return [
                    'medication' => $medication,
                    'editUrl' => route('crf.postoperative.medication.edit', [$medication->postoperatives->casereportform, $medication->postoperatives, $medication]),
                    'updateUrl' => route('crf.postoperative.medication.update', [$medication->postoperatives->casereportform, $medication->postoperatives, $medication]),
                    'deleteUrl' => route('crf.postoperative.medication.destroy', [$medication->postoperatives->casereportform, $medication->postoperatives, $medication]),
                ];
            }),
            
            'updateUrl' => 'crf.postoperative.update',
            'backUrl' => route('crf.postoperative.show', [$crf, $postoperative])
        ]);
    }

    public function create(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        return Inertia::render('CaseReportForm/FormFields/Medications/CreateMedications', [
            'crf' => $crf,
            'mode' => 'postoperative',
            'preoperative' => $postoperative,
            'storeUrl' => route('crf.postoperative.medication.store', [$crf, $postoperative]),
            'backUrl' => route('crf.postoperative.medication.index', [$crf, $postoperative])
        ]);
        
    }


    public function store(Request $request, CaseReportForm $crf, PostOperativeData $postoperative)
    {

   

        Medication::create([
            'post_operative_data_id' => $request->postoperative->id,
            'medication' => $request->medication,
            'indication' => $request->indication,
            'medicine_type' => $request->medicine_type,
            'status' => $request->status,
            'dosage' => $request->dosage,
            'reason' => $request->reason,
            'start_date' => $request->start_date !== null ?  Carbon::parse($request->start_date)->addHours(5)->addMinutes(30) : null,
            'stop_date' => $request->status === 'Discontinued' ? ($request->stop_date !== null ? Carbon::parse($request->stop_date)->addHours(5)->addMinutes(30) : null) : null,
        ]);

        return redirect()->route('crf.postoperative.medication.index', [$crf,$postoperative])->with(['message' => 'Medication Added successfully']);
    }

    public function show($id)
    {
        //
    }

    public function edit(CaseReportForm $crf, PostOperativeData $postoperative, Medication $medication)
    {
        return Inertia::render('CaseReportForm/FormFields/Medications/EditMedications', [
            'crf' => $crf,
            'mode' => 'postoperative',
            'postoperative' => $postoperative,
            'medication' => $medication,
            'updateUrl' => 'crf.postoperative.update',
            'backUrl' => route('crf.postoperative.show', [$crf, $postoperative])
        ]);
     
    }

    public function update(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, Medication $medication)
    {
        $medication->medication = $request->medication;
        $medication->indication = $request->indication;
        $medication->status = $request->status;
        $medication->dosage = $request->dosage;
        $medication->reason = $request->reason;
        $medication->start_date = $request->start_date !== null ?  Carbon::parse($request->start_date)->addHours(5)->addMinutes(30) : null;
        $medication->stop_date = $request->status === 'Discontinued' ? ($request->stop_date !== null ? Carbon::parse($request->stop_date)->addHours(5)->addMinutes(30) : null) : null;
        $medication->save();
        return redirect()->route('crf.postoperative.medication.index', [$crf, $postoperative])->with(['message' => 'Medication Edited successfully']);
    }
    public function destroy(CaseReportForm $crf, PostOperativeData $postoperative, Medication $medication)
    {

        $medication->delete();
        return redirect()->back()->with(['message' => 'Medication ' . $medication->id . ' Deleted successfully']);
    }
}
