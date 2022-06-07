<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\IntraOperativeData;
use App\Models\PreOperativeData;
use Illuminate\Http\Request;

class IntraOperativeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf, IntraOperativeData $intraoperative)
    {
        $intraoperative = $crf->intraoperatives;
        
        return view('casereportforms.IntraOperativeData.index', compact('crf', 'intraoperative'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, CaseReportForm $crf)
    {
        
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\IntraOperativeData  $intraOperativeData
     * @return \Illuminate\Http\Response
     */
    public function show(CaseReportForm $crf, IntraOperativeData $intraoperative)
    {
        return view('casereportforms.IntraOperativeData.index', compact('crf', 'intraoperative'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\IntraOperativeData  $intraOperativeData
     * @return \Illuminate\Http\Response
     */
    public function edit(IntraOperativeData $intraOperativeData)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\IntraOperativeData  $intraOperativeData
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CaseReportForm $crf, IntraOperativeData $intraoperative)
    {
        
        $intraoperative->case_report_form_id = $request->crf->id;
        $intraoperative->date_of_procedure = $request->date_of_procedure;
        $intraoperative->arterial_cannulation = $request->arterial_cannulation;
        $intraoperative->venous_cannulation= $request->venous_cannulation;
        $intraoperative->cardioplegia= $request->cardioplegia;
        $intraoperative->aortotomy= $request->aortotomy;
        $intraoperative->aortotomy_others= $request->aortotomy_others;
        $intraoperative->annular_suturing_technique= $request->annular_suturing_technique;
        $intraoperative->annular_suturing_others= $request->annular_suturing_others;
        $intraoperative->tcb_time= $request->tcb_time;
        $intraoperative->acc_time= $request->acc_time;
        $intraoperative->concomitant_procedure= $request->concomitant_procedure;
        $intraoperative->all_paravalvular_leak= $request->all_paravalvular_leak;
        $intraoperative->major_paravalvular_leak = $request->major_paravalvular_leak;
        $intraoperative->save();
        return redirect()->route('crf.index', ['crf' => $crf]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\IntraOperativeData  $intraOperativeData
     * @return \Illuminate\Http\Response
     */
    public function destroy(IntraOperativeData $intraOperativeData)
    {
        //
    }
}
