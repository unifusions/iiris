<?php

namespace App\Http\Controllers\UnshceduledVisit;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOperativeSymptomsRequest;
use App\Models\CaseReportForm;
use App\Models\OperativeSymptoms;
use App\Models\UnscheduledVisit;
use App\Services\OperativeSymptomsService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UVSymptomController extends Controller
{public function index(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
       
    }


    public function create(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/Symptoms/Create', [
            'postUrl' => 'crf.unscheduledvisit.symptoms.store',
            'crf' => $crf,
            'mode' => 'unscheduledvisit',
            'unscheduledvisit' => $unscheduledvisit,
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]),
            'title' => 'Post Operative'
        ]);
    }

    public function store(StoreOperativeSymptomsRequest $request,  CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, OperativeSymptomsService $operativeSymptomsService)
    {   
        // dd($request->input());
        if ($operativeSymptomsService->createUnscheduledVisitOperativeSymptoms($request))
            return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]);
    }
    public function show($id)
    {
    }

    public function edit(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, OperativeSymptoms $symptom)
    {
        return Inertia::render('CaseReportForm/FormFields/Symptoms/Edit', [
            'putUrl' => 'crf.unscheduledvisit.symptoms.update',
            'crf' => $crf,
            'mode' => 'unscheduledvisit',
            'unscheduledvisit' => $unscheduledvisit,
            'symptom' => $symptom,
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit])
        ]);
    }

    public function update(StoreOperativeSymptomsRequest $request,  CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, OperativeSymptoms $symptom, OperativeSymptomsService $operativeSymptomsService)
    {
        if ($operativeSymptomsService->updateOperativeSymptoms($request))
        return redirect()->route('crf.unscheduledvisit.show', [$crf,$unscheduledvisit]);
    }

    public function destroy($id)
    {
    }
}
