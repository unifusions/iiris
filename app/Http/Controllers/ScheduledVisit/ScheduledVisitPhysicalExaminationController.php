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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PhysicalExaminationStoreRequest $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, PhysicalExaminationService $physicalExaminationService)
    {
        $physicalExaminationService->createScheduledVisitPhysicalExamination($request);
        return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, PhysicalExamination $physicalexamination, PhysicalExaminationService $physicalExaminationService)
    {
        $physicalExaminationService->updatePreOperativePhysicalExamination($request, $physicalexamination);
        return redirect()->route('crf.preoperative.show', [$crf, $scheduledvisit]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
