<?php

namespace App\Http\Controllers\ScheduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\LabInvestigation;
use App\Models\ScheduledVisit;
use App\Services\LabInvestigationService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SVLabInvestigation extends Controller
{
    public function index()
    {
        //
    }

    public function create(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/LabInvestigation/Create', [
            'postUrl' => 'crf.scheduledvisit.labinvestigation.store',
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit]),
            'crf' => $crf,
            'scheduledvisit' => $scheduledvisit,
            'mode' => 'scheduledvisit',

        ]);
    }

   
    public function store(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, LabInvestigationService $labInvestigationService )
    {
        
       $labInvestigationService->createSVLabInvestigation($request);
       return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit])->with(['message' => 'Lab Investigation created successfully']);
    }

   
    public function show(LabInvestigation $labinvestigation)
    {
        //
    }

   
    public function edit(CaseReportForm $crf, ScheduledVisit $scheduledvisit, LabInvestigation $labinvestigation)
    {
        return Inertia::render('CaseReportForm/FormFields/LabInvestigation/Edit', [
            'putUrl' => 'crf.scheduledvisit.labinvestigation.update',
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit]),
            'crf' => $crf,
            'scheduledvisit' => $scheduledvisit,
            'labinvestigation' => $labinvestigation,
            'mode' => 'scheduledvisit',

        ]);
    }

    
    public function update(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, LabInvestigation $labinvestigation, LabInvestigationService $labInvestigationService)
    {
        $labInvestigationService->updatePreoperativeLabInvestigation($request, $labinvestigation);
        return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit])->with(['message' => 'Lab Investigation updated successfully']);
    }

   
    public function destroy(LabInvestigation $labInvestigation)
    {
       
    }
}
