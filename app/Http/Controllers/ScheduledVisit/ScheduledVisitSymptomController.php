<?php

namespace App\Http\Controllers\ScheduledVisit;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOperativeSymptomsRequest;
use App\Models\CaseReportForm;
use App\Models\ScheduledVisit;
use App\Services\OperativeSymptomsService;
use Illuminate\Http\Request;

class ScheduledVisitSymptomController extends Controller
{
    public function index(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        if (!empty($scheduledvisit->symptoms))
            return route('crf.scheduledvisit.symptoms.show', [$crf, $scheduledvisit, $scheduledvisit->symptoms]);
        return route('crf.scheduledvisit.symptoms.create', [$crf, $scheduledvisit]);
    }


    public function create(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/Symptoms/Create', [
            'postUrl' => 'crf.scheduledvisit.symptoms.store',
            'crf' => $crf,
            'mode' => 'scheduledvisit',
            'scheduledvisit' => $scheduledvisit,
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit])
        ]);
    }

    public function store(StoreOperativeSymptomsRequest $request,  CaseReportForm $crf, ScheduledVisit $scheduledvisit, OperativeSymptomsService $operativeSymptomsService)
    {
        if ($operativeSymptomsService->createPostOperativeSymptoms($request))
            return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit]);
    }
    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
    }

    public function destroy($id)
    {
    }
}
