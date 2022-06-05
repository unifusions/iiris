<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\CaseReportFormVisit;
use App\Models\CaseReportFormVisitMode;
use App\Models\PreOperative;
use App\Models\PreOperativeData;
use Illuminate\Http\Request;

class PreOperativeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf)
    {


        // $casereportform = CaseReportForm::where('subject_id', $subject_id)->first();
        // $preop = CaseReportFormVisit::where('case_report_form_id', $casereportform->id)
        //     ->first()
        //     ->casereportformvisitmode
        //     ->where('mode', 'preop')->first();


        // // $preop = CaseReportFormVisitMode::find($id);
        // return view('casereportforms.visits.preoperative.index', compact('subject_id', 'visit_no', 'preop'));

        if ($crf->preoperatives)
            $preoperative = $crf->preoperatives;
        return view('casereportforms.PreOperativeData.show', compact('crf', 'preoperative'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(CaseReportForm $crf, PreOperativeData $preoperative)
    {

        // $preop = CaseReportFormVisitMode::find($id);
        // return view('casereportforms.visits.preoperative.show', compact('preop'));

        return view('casereportforms.PreOperativeData.show', compact('crf', 'preoperative'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative)
    {


        if (isset($request->medical_history)) {
            $preoperative->medical_history = $request->medical_history;
            $preoperative->save();
            if ($preoperative->medical_history)
                return redirect()->route('crf.preoperative.medicalhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]);
        }

        if (isset($request->surgical_history)) {
            $preoperative->surgical_history = $request->surgical_history;
            $preoperative->save();
            if ($preoperative->surgical_history)
                return redirect()->route('crf.preoperative.surgicalhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]);
        }

        if (isset($request->family_history)) {
            $preoperative->family_history = $request->family_history;
            $preoperative->save();
            return redirect()->route('crf.preoperative.familyhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]);
        }

        if (isset($request->physical_activity)) {
            $preoperative->physical_activity = $request->physical_activity;
            $preoperative->save();
            if ($preoperative->physical_activity)
                return redirect()->route('crf.preoperative.physicalactivity.index', ['crf' => $crf, 'preoperative' => $preoperative]);
            return redirect()->route('crf.preoperative.index', compact('crf', 'preoperative'));
        }

        if (isset($request->hasMedications)) {
            $preoperative->hasMedications = $request->hasMedications;
            $preoperative->save();
            if ($preoperative->hasMedications)
                return redirect()->route('crf.preoperative.medication.index', ['crf' => $crf, 'preoperative' => $preoperative]);
            return redirect()->route('crf.preoperative.index', compact('crf', 'preoperative'));
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
