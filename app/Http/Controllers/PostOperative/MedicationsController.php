<?php

namespace App\Http\Controllers\PostOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Medication;
use App\Models\PostOperativeData;
use App\Models\PreOperativeData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MedicationsController extends Controller
{
    public function index(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        return Inertia::render('CaseReportForm/FormFields/Medications/Index', [
            'crf' => $crf,
            'mode' => 'postoperative',
            'postoperative' => $postoperative,
            'medications' => $postoperative->medications,
            'updateUrl' => 'crf.postoperative.update',
            'backUrl' => route('crf.postoperative.show', [$crf, $postoperative])
        ]);
    }

    public function create()
    {
        //
    }

    
    public function store(Request $request, CaseReportForm $crf, PostOperativeData $postoperative)
    {
        

        Medication::create([
            'post_operative_data_id' => $request->postoperative->id,
            'medication' => $request->medication_name,
            'indication' => $request->indication,
            'status' => $request->status,
            'dosage' => $request->dosage,
            'reason' => $request->reason,
            'start_date' => $request->start_date,
            'stop_date' => $request->stop_date
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
    public function destroy(CaseReportForm $crf, PostOperativeData $postoperative, Medication $medication)
    {
         
        $medication->delete();
        return redirect()->back()->with(['message' => 'Medication '. $medication->id .' Deleted successfully']);

    }
}
