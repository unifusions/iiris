<?php

namespace App\Http\Controllers\UnshceduledVisit;

use App\Http\Controllers\Controller;
use App\Http\Requests\PhysicalExaminationStoreRequest;
use App\Models\CaseReportForm;
use App\Models\UnscheduledVisit;
use App\Services\PhysicalExaminationService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UVPhysicalExaminationController extends Controller
{
    public function index()
    {
        //
    }

   
    public function create(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/PhysicalExamination/Create', [
             
            'crf' => $crf,
            'entityType' => 'unscheduledvisit',
            'entity' => $unscheduledvisit,
        ]);
    }

    
    public function store(PhysicalExaminationStoreRequest $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, PhysicalExaminationService $physicalExaminationService)
    {
        $physicalExaminationService->createUnscheduledVisitPhysicalExamination($request);
        return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]);
    }

    public function show($id)
    {
        //
    }

    
    public function edit(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, PhysicalExamination $physicalexamination)
    {
        return Inertia::render('CaseReportForm/FormFields/PhysicalExamination/Edit', [
             'crf' => $crf,
            'entityType' => 'unscheduledvisit',
            'entity' => $unscheduledvisit,
            'physicalexamination' => $physicalexamination,
            
        ]);
    }
    public function update(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, PhysicalExamination $physicalexamination, PhysicalExaminationService $physicalExaminationService)
    {
        $physicalExaminationService->updatePreOperativePhysicalExamination($request, $physicalexamination);
        return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]);
    }

    public function destroy($id)
    {
        //
    }
}
