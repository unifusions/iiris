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
  
    public function index()
    {
        //
    }

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

   
    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, LabInvestigationService $labInvestigationService )
    {
        
       $labInvestigationService->createPreoperativeLabInvestigation($request);
       return redirect()->route('crf.preoperative.index', ['crf' => $crf, 'preoperative' => $preoperative]);
    }

   
    public function show(LabInvestigation $labinvestigation)
    {
        //
    }

   
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

    
    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, LabInvestigation $labinvestigation, LabInvestigationService $labInvestigationService)
    {
        $labInvestigationService->updatePreoperativeLabInvestigation($request, $labinvestigation);
        return redirect()->route('crf.preoperative.index', ['crf' => $crf, 'preoperative' => $preoperative]);
    }

   
    public function destroy(LabInvestigation $labInvestigation)
    {
       
    }
}
