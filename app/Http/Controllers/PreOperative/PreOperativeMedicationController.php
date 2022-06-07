<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Medication;
use App\Models\PreOperativeData;
use Illuminate\Http\Request;

class PreOperativeMedicationController extends Controller
{
    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $storeUri = 'crf.preoperative.medication.store';
        $opStoreUri = 'crf.preoperative.update';
        $destroyUri = 'crf.preoperative.medication.destroy';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
            
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index',
            'mode' => 'preoperative'
        ];

        return view('casereportforms.FormFields.Medications.index', compact('storeUri','opStoreUri','destroyUri','storeParameters', 'breadcrumb', 'crf', 'preoperative'));
    }

    public function create()
    {
        //
    }

    
    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $storeUri = 'crf.preoperative.medication.store';
        $destroyUri = 'crf.preoperative.medication.destroy';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index',
            'mode' => 'preoperative'
        ];

        Medication::create([
            'pre_operative_data_id' => $request->preoperative->id,
            'medication' => $request->medication_name,
            'indication' => $request->indication,
            'status' => $request->status,
            'dosage' => $request->dosage,
            'reason' => $request->reason,
            'start_date' => $request->mstart_date,
            'stop_date' => $request->mstop_date
        ]);

        return view('casereportforms.FormFields.Medications.index', compact('storeUri','destroyUri','storeParameters', 'breadcrumb', 'crf', 'preoperative'));
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
        $storeUri = 'crf.preoperative.medication.store';
        $destroyUri = 'crf.preoperative.medication.destroy';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index',
            'mode' => 'preoperative'
        ];

        $medication->delete();
        return view('casereportforms.FormFields.Medications.index', compact('storeUri','destroyUri','storeParameters', 'breadcrumb', 'crf', 'preoperative'));

    }
}
