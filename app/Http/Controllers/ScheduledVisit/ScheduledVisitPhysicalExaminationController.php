<?php

namespace App\Http\Controllers\ScheduledVisit;

use App\Http\Controllers\Controller;
use App\Http\Requests\PhysicalExaminationStoreRequest;
use App\Models\CaseReportForm;
use App\Models\PhysicalExamination;
use App\Models\ScheduledVisit;
use App\Services\PhysicalExaminationService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduledVisitPhysicalExaminationController extends Controller
{
    
    public function index()
    {
        //
    }

   
    public function create(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/PhysicalExamination/Create', [
            'postUrl' => 'crf.scheduledvisit.physicalexamination.store',
            'crf' => $crf,
            'mode' => 'scheduledvisit',
            'scheduledvisit' => $scheduledvisit,
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit]),


        ]);
    }

    
    public function store(PhysicalExaminationStoreRequest $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, PhysicalExaminationService $physicalExaminationService)
    {
        $physicalExaminationService->createScheduledVisitPhysicalExamination($request);
        return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit]);
    }

    public function show($id)
    {
        //
    }

    
    public function edit(CaseReportForm $crf, ScheduledVisit $scheduledvisit, PhysicalExamination $physicalexamination)
    {
        return Inertia::render('CaseReportForm/FormFields/PhysicalExamination/Edit', [
            'postUrl' => 'crf.scheduledvisit.physicalexamination.update',
            'crf' => $crf,
            'mode' => 'scheduledvisit',
            'scheduledvisit' => $scheduledvisit,
            'physicalexamination' => $physicalexamination,
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit])
        ]);
    }
    public function update(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, PhysicalExamination $physicalexamination, PhysicalExaminationService $physicalExaminationService)
    {
        $physicalExaminationService->updatePreOperativePhysicalExamination($request, $physicalexamination);
        return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit]);
    }

    public function destroy($id)
    {
        //
    }
}
