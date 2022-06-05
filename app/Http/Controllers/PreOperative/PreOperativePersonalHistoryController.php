<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PersonalHistory;
use App\Models\PreOperativeData;
use Illuminate\Http\Request;

class PreOperativePersonalHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $storeUri = 'crf.preoperative.personalhistory.store';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];
        return view('casereportforms.FormFields.PersonalHistory.index', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf', 'preoperative'));
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
        $storeUri = 'crf.preoperative.personalhistory.store';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        PersonalHistory::Create([
            'pre_operative_data_id' => $preoperative->id,
            'smoking' => $request->smoking,
            'cigarettes' => $request->cigarettes ,
            'smoking_since' => $request->smokingSince,
            'smoking_stopped'=> $request->smokingStoppedSince,
            'alchohol'=> $request->alcohol,
            'quantity'=> $request->alcoholQuantity,
            'alchohol_since'=> $request->alcoholSince,
            'alchohol_stopped'=>$request->alcoholStoppedSince,
            'tobacco'=> $request->tobacco,
            'tobacco_type'=> $request->tobacco_type,
            'tobacco_quantity'=> $request->tobacco_quantity,
            'tobacco_since'=> $request->tobaccoSince,
            'tobacco_stopped'=> $request->tobaccoStoppedSince,
        ]);

        return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative]);
        // return view('casereportforms.FormFields.PersonalHistory.index', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf', 'preoperative'));
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
    public function update(Request $request, $id)
    {
        //
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
