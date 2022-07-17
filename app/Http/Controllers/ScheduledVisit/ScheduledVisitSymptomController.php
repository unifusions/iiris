<?php

namespace App\Http\Controllers\ScheduledVisit;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOperativeSymptomsRequest;
use App\Models\CaseReportForm;
use App\Models\OperativeSymptoms;
use App\Models\ScheduledVisit;
use App\Services\OperativeSymptomsService;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit]),
            'title' => 'Post Operative'
        ]);
    }

    public function store(StoreOperativeSymptomsRequest $request,  CaseReportForm $crf, ScheduledVisit $scheduledvisit, OperativeSymptomsService $operativeSymptomsService)
    {   
        // dd($request->input());
        if ($operativeSymptomsService->createScheduledVisitOperativeSymptoms($request))
            return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit]);
    }
    public function show($id)
    {
    }

    public function edit(CaseReportForm $crf, ScheduledVisit $scheduledvisit, OperativeSymptoms $symptom)
    {
        return Inertia::render('CaseReportForm/FormFields/Symptoms/Edit', [
            'putUrl' => 'crf.scheduledvisit.symptoms.update',
            'crf' => $crf,
            'mode' => 'scheduledvisit',
            'scheduledvisit' => $scheduledvisit,
            'symptom' => $symptom,
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit])
        ]);
    }

    public function update(StoreOperativeSymptomsRequest $request,  CaseReportForm $crf, ScheduledVisit $scheduledvisit, OperativeSymptoms $symptom, OperativeSymptomsService $operativeSymptomsService)
    {
        if ($operativeSymptomsService->updateOperativeSymptoms($request))
        return redirect()->route('crf.scheduledvisit.show', [$crf,$scheduledvisit]);
    }

    public function destroy($id)
    {
    }
}
