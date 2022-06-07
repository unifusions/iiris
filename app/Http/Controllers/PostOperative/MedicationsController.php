<?php

namespace App\Http\Controllers\PostOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Medication;
use App\Models\PostOperativeData;
use App\Models\PreOperativeData;
use Illuminate\Http\Request;

class MedicationsController extends Controller
{
    public function index(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        $storeUri = 'crf.postoperative.medication.store';
        $destroyUri = 'crf.postoperative.medication.destroy';
        $opStoreUri = 'crf.postoperative.update';
        $storeParameters = [
            'crf' => $crf,
            'postoperative' => $postoperative,
           
        ];
        $breadcrumb = [
            'name' => 'Post Operative Data',
            'link' => 'crf.postoperative.index',
            'mode' => 'postoperative'
        ];

        return view('casereportforms.FormFields.Medications.index', compact('storeUri','destroyUri','opStoreUri', 'storeParameters', 'breadcrumb', 'crf', 'postoperative'));
    }

    public function create()
    {
        //
    }

    
    public function store(Request $request, CaseReportForm $crf, PostOperativeData $postoperative)
    {
        $storeUri = 'crf.postoperative.medication.store';
        $destroyUri = 'crf.postoperative.medication.destroy';
        $storeParameters = [
            'crf' => $crf,
            'postoperative' => $postoperative,
        ];
        $breadcrumb = [
            'name' => 'Post Operative Data',
            'link' => 'crf.postoperative.index',
            'mode' => 'postoperative'
        ];

        Medication::create([
            'post_operative_data_id' => $request->postoperative->id,
            'medication' => $request->medication_name,
            'indication' => $request->indication,
            'status' => $request->status,
            'dosage' => $request->dosage,
            'reason' => $request->reason,
            'start_date' => $request->mstart_date,
            'stop_date' => $request->mstop_date
        ]);

        return view('casereportforms.FormFields.Medications.index', compact('storeUri','destroyUri','storeParameters', 'breadcrumb', 'crf', 'postoperative'));
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
    public function destroy(CaseReportForm $crf, PostOperativeData $postoperative, Medication $medication)
    {
        $storeUri = 'crf.postoperative.medication.store';
        $destroyUri = 'crf.postoperative.medication.destroy';
        $storeParameters = [
            'crf' => $crf,
            'postoperative' => $postoperative,
        ];
        $breadcrumb = [
            'name' => 'Post Operative Data',
            'link' => 'crf.postoperative.index',
            'mode' => 'postoperative'
        ];
        $medication->delete();
        return view('casereportforms.FormFields.Medications.index', compact('storeUri','destroyUri','storeParameters', 'breadcrumb', 'crf', 'postoperative'));

    }
}
