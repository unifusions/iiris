<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\LabInvestigation;
use App\Models\PreOperativeData;
use App\Services\LabInvestigationService;
use Illuminate\Http\Request;
use Inertia\Inertia;

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

        // return view('casereportforms.FormFields.LabInvestigation.create', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf'));
        return Inertia::render('CaseReportForm/FormFields/LabInvestigation/Create', [
            'postUrl' => 'crf.preoperative.labinvestigation.store',
            'backUrl' => route('crf.preoperative.show', [$crf, $preoperative]),
            'crf' => $crf,
            'preoperative' => $preoperative,
            'mode' => 'preoperative',

        ]);
    }

   
    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, LabInvestigationService $labInvestigationService )
    {
        
       $labInvestigationService->createPreoperativeLabInvestigation($request);
       return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative]);
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
        
        // return view('casereportforms.FormFields.LabInvestigation.edit', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf' ,'labinvestigation'));
        return Inertia::render('CaseReportForm/FormFields/LabInvestigation/Edit', [
            'putUrl' => 'crf.preoperative.labinvestigation.update',
            'backUrl' => route('crf.preoperative.show', [$crf, $preoperative]),
            'crf' => $crf,
            'preoperative' => $preoperative,
            'labinvestigation' => $labinvestigation,
            'mode' => 'preoperative',

        ]);
    }

    
    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, LabInvestigation $labinvestigation, LabInvestigationService $labInvestigationService)
    {
        $labInvestigationService->updatePreoperativeLabInvestigation($request, $labinvestigation);
        return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative]);
    }

   
    public function destroy(LabInvestigation $labInvestigation)
    {
       
    }
}
