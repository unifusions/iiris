<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\LabInvestigation;
use App\Models\PreOperativeData;
use App\Services\LabInvestigationService;
use Illuminate\Http\Request;

class PreOperativeLabInvestigationController extends Controller
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
    public function create(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $storeUri = 'crf.preoperative.labinvestigation.store';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        return view('casereportforms.FormFields.LabInvestigation.create', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, LabInvestigationService $labInvestigationService )
    {
        
       return $labInvestigationService->createPreoperativeLabInvestigation($request);
       return redirect()->route('crf.preoperative.index', ['crf' => $crf, 'preoperative' => $preoperative]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LabInvestigation  $labInvestigation
     * @return \Illuminate\Http\Response
     */
    public function show(LabInvestigation $labinvestigation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LabInvestigation  $labInvestigation
     * @return \Illuminate\Http\Response
     */
    public function edit(CaseReportForm $crf, PreOperativeData $preoperative ,LabInvestigation $labinvestigation)
    {
        $storeUri = 'crf.preoperative.labinvestigation.update';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
            'labinvestigation' => $labinvestigation,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];
        
        return view('casereportforms.FormFields.LabInvestigation.edit', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf' ,'labinvestigation'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LabInvestigation  $labInvestigation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, LabInvestigation $labinvestigation, LabInvestigationService $labInvestigationService)
    {
        //
        
        $labinvestigations = $labInvestigationService->updatePreoperativeLabInvestigation($request, $labinvestigation);
        return redirect()->route('crf.preoperative.index', ['crf' => $crf, 'preoperative' => $preoperative]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LabInvestigation  $labInvestigation
     * @return \Illuminate\Http\Response
     */
    public function destroy(LabInvestigation $labInvestigation)
    {
        //
    }
}
