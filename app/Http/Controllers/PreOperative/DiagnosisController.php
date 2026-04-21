<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Diagnosis;
use App\Models\PreOperativeData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DiagnosisController extends Controller
{

    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        return Inertia::render('CaseReportForm/FormFields/Diagnosis/Create', [
            'postUrl' => 'crf.preoperative.diagnosis.store',
            'crf' => $crf,
            'preoperative' => $preoperative,
            'backUrl' => route('crf.preoperative.show', [$crf, $preoperative]),
            'title' => 'Pre Operative'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, CaseReportForm $crf, PreoperativeData $preoperative)
    {
        Diagnosis::create([
            'pre_operative_data_id' => $request->pre_operative_data_id,
            'diagnosis_data' => $request->diagnosis !== null ? $request->diagnosis : null,

        ]);


        return back()->with(['success' => 'Properative Diagnosis for subject' . $crf->subject_id . 'created successfully']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(CaseReportForm $crf, PreoperativeData $preoperative, Diagnosis $diagnosi)
    {

        // dd($preoperative->diagnosis);
        return Inertia::render('CaseReportForm/FormFields/Diagnosis/Edit', [

            'crf' => $crf,
            'preoperative' => $preoperative,
            'diagnosis' => $diagnosi,
            'backUrl' => route('crf.preoperative.show', [$crf, $preoperative]),
            'title' => 'Pre Operative'
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CaseReportForm $crf, PreoperativeData $preoperative, Diagnosis $diagnosi)
    {
        $diagnosi->diagnosis_data = $request->diagnosis;
        $diagnosi->save();
        return back()->with(['success' => 'Properative Diagnosis for subject ' . $crf->subject_id . ' updated successfully']);

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
