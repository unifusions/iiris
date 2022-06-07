<?php

namespace App\Http\Controllers\PostOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\LabInvestigation;
use App\Models\PostOperativeData;
use App\Services\LabInvestigationService;
use Illuminate\Http\Request;

class LabInvestigationController extends Controller
{
    public function index()
    {
        //
    }

    public function create(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        $storeUri = 'crf.postoperative.labinvestigation.store';
        $storeParameters = [
            'crf' => $crf,
            'postoperative' => $postoperative,
        ];
        $breadcrumb = [
            'name' => 'Post Operative Data',
            'link' => 'crf.postoperative.index'
        ];

        return view('casereportforms.FormFields.LabInvestigation.create', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf'));
    }

   
    public function store(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, LabInvestigationService $labInvestigationService )
    {
        
       $labInvestigationService->createPostoperativeLabInvestigation($request);
       return redirect()->route('crf.postoperative.index', ['crf' => $crf, 'postoperative' => $postoperative]);
    }

   
    public function show(LabInvestigation $labinvestigation)
    {
        //
    }

   
    public function edit(CaseReportForm $crf, PostOperativeData $postoperative ,LabInvestigation $labinvestigation)
    {
        $storeUri = 'crf.preoperative.labinvestigation.update';
        $storeParameters = [
            'crf' => $crf,
            'postoperative' => $postoperative,
            'labinvestigation' => $labinvestigation,
        ];
        $breadcrumb = [
            'name' => 'Post Operative Data',
            'link' => 'crf.postoperative.index'
        ];
        
        return view('casereportforms.FormFields.LabInvestigation.edit', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf' ,'labinvestigation'));
    }

    
    public function update(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, LabInvestigation $labinvestigation, LabInvestigationService $labInvestigationService)
    {
        $labInvestigationService->updatePreoperativeLabInvestigation($request, $labinvestigation);
        return redirect()->route('crf.postoperative.index', ['crf' => $crf, 'preoperative' => $postoperative]);
    }

   
    public function destroy(LabInvestigation $labInvestigation)
    {
       
    }
}
