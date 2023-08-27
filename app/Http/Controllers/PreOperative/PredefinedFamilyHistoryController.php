<?php

namespace App\Http\Controllers\Preoperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use Illuminate\Http\Request;
use App\Models\PredefinedFamilyHistory;
use App\Models\PreOperativeData;

class PredefinedFamilyHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative)
    {

        PredefinedFamilyHistory::create([
            'pre_operative_data_id' => $request->preoperative->id,
            'diabetes_mellitus' => $request->diabetes_mellitus,
            'diabetes_mellitus_relation' => $request->diabetes_mellitus_relation,
            'hypertension' => $request->hypertension,
            'hypertension_relation' => $request->hypertension_relation,
            'coronary_artery_disease' => $request->coronary_artery_disease,
            'coronary_artery_disease_relation' => $request->coronary_artery_disease_relation,
            'aortic_disease' => $request->aortic_disease,
            'aortic_disease_relation' => $request->aortic_disease_relation,
            'others' => $request->others,
            'others_specify' => $request->others_specify,
            'others_relation' => $request->others_relation
        ]);
        return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative])->with(['message' => 'Operation Successful !']);
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
    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, PredefinedFamilyHistory $predefinedfamilyhistory)
    {

        $predefinedfamilyhistory->diabetes_mellitus = $request->diabetes_mellitus;
        $predefinedfamilyhistory->diabetes_mellitus_relation = $request->diabetes_mellitus_relation;
        $predefinedfamilyhistory->hypertension = $request->hypertension;
        $predefinedfamilyhistory->hypertension_relation = $request->hypertension_relation;
        $predefinedfamilyhistory->coronary_artery_disease = $request->coronary_artery_disease;
        $predefinedfamilyhistory->coronary_artery_disease_relation = $request->coronary_artery_disease_relation;
        $predefinedfamilyhistory->aortic_disease = $request->aortic_disease;
        $predefinedfamilyhistory->aortic_disease_relation = $request->aortic_disease_relation;
        $predefinedfamilyhistory->others = $request->others;
        $predefinedfamilyhistory->others_specify = $request->others_specify;
        $predefinedfamilyhistory->others_relation = $request->others_relation;
        $predefinedfamilyhistory->save();

        return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative])->with(['message' => 'Operation Successful !']);
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
