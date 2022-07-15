<?php

namespace App\Http\Controllers\PostOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\LabInvestigation;
use App\Models\PostOperativeData;
use App\Services\LabInvestigationService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LabInvestigationController extends Controller
{
    public function index()
    {
        //
    }

    public function create(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        return Inertia::render('CaseReportForm/FormFields/LabInvestigation/Create', [
            'postUrl' => 'crf.postoperative.labinvestigation.store',
            'backUrl' => route('crf.postoperative.show', [$crf, $postoperative]),
            'crf' => $crf,
            'postoperative' => $postoperative,
            'mode' => 'postoperative',

        ]);
    }

   
    public function store(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, LabInvestigationService $labInvestigationService )
    {
        
       $labInvestigationService->createPostoperativeLabInvestigation($request);
       return redirect()->route('crf.postoperative.show', [$crf, $postoperative])->with(['message' => 'Lab Investigation created successfully']);
    }

   
    public function show(LabInvestigation $labinvestigation)
    {
        //
    }

   
    public function edit(CaseReportForm $crf, PostOperativeData $postoperative ,LabInvestigation $labinvestigation)
    {
        return Inertia::render('CaseReportForm/FormFields/LabInvestigation/Edit', [
            'putUrl' => 'crf.postoperative.labinvestigation.update',
            'backUrl' => route('crf.postoperative.show', [$crf, $postoperative]),
            'crf' => $crf,
            'postoperative' => $postoperative,
            'labinvestigation' => $labinvestigation,
            'mode' => 'postoperative',

        ]);
    }

    
    public function update(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, LabInvestigation $labinvestigation, LabInvestigationService $labInvestigationService)
    {
        $labInvestigationService->updatePreoperativeLabInvestigation($request, $labinvestigation);
        return redirect()->route('crf.postoperative.show', ['crf' => $crf, 'postoperative' => $postoperative])->with(['message' => 'Lab Investigation updated successfully']);
    }

   
    public function destroy(LabInvestigation $labInvestigation)
    {
       
    }
}
