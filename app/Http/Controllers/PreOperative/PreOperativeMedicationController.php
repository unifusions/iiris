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
            'medications' => $preoperative->medications,
            'updateUrl' => 'crf.preoperative.update',
            'backUrl' => route('crf.preoperative.show', [$crf, $preoperative])
        ]);
    }

    public function create()
    {
        //
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
    public function destroy(CaseReportForm $crf, PreOperativeData $preoperative, Medication $medication)
    {
        
        $medication->delete();
        return redirect()->back()->with(['message' => 'Medication '. $medication->id .' Deleted successfully']);
        
    }
}
