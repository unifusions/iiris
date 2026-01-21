<?php

namespace App\Http\Controllers\UnshceduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\LabInvestigation;
use App\Models\UnscheduledVisit;
use App\Services\LabInvestigationService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UVLabInvestigationController extends Controller
{public function index()
    {
        //
    }

    public function create(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/LabInvestigation/Create', [
            'postUrl' => 'crf.unscheduledvisit.labinvestigation.store',
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]),
            'crf' => $crf,
            'unscheduledvisit' => $unscheduledvisit,
            'mode' => 'unscheduledvisit',

        ]);
    }

   
    public function store(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, LabInvestigationService $labInvestigationService )
    {
        
       $labInvestigationService->createUSVLabInvestigation($request);
       return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit])->with(['message' => 'Lab Investigation created successfully']);
    }

   
    public function show(LabInvestigation $labinvestigation)
    {
        //
    }

   
    public function edit(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, LabInvestigation $labinvestigation)
    {
        return Inertia::render('CaseReportForm/FormFields/LabInvestigation/Edit', [
            'putUrl' => 'crf.unscheduledvisit.labinvestigation.update',
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]),
            'crf' => $crf,
            'unscheduledvisit' => $unscheduledvisit,
            'labinvestigation' => $labinvestigation,
            'mode' => 'unscheduledvisit',

        ]);
    }

    
    public function update(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, LabInvestigation $labinvestigation, LabInvestigationService $labInvestigationService)
    {
        $labInvestigationService->updatePreoperativeLabInvestigation($request, $labinvestigation);
        return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit])->with(['message' => 'Lab Investigation updated successfully']);
    }

   
    public function destroy(LabInvestigation $labInvestigation)
    {
       
    }
}
