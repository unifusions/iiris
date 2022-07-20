<?php

namespace App\Http\Controllers\PostOperative;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOperativeSymptomsRequest;
use App\Models\CaseReportForm;
use App\Models\OperativeSymptoms;
use App\Models\PostOperativeData;
use App\Services\OperativeSymptomsService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OperativeSymptomController extends Controller
{
    public function index(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        if (!empty($postoperative->symptoms))
            return route('crf.postoperative.symptoms.show', [$crf, $postoperative, $postoperative->symptoms]);
        return route('crf.postoperative.symptoms.create', [$crf, $postoperative]);
    }


    public function create(CaseReportForm $crf, PostOperativeData $postoperative)
    {

        return Inertia::render('CaseReportForm/FormFields/Symptoms/Create', [
            'postUrl' => 'crf.postoperative.symptoms.store',
            'crf' => $crf,
            'mode' => 'postoperative',
            'postoperative' => $postoperative,
            'backUrl' => route('crf.postoperative.show', [$crf, $postoperative]),
            'title' => 'Post Operative'
        ]);
    }


    public function store(StoreOperativeSymptomsRequest $request,  CaseReportForm $crf, PostOperativeData $postoperative, OperativeSymptomsService $operativeSymptomsService)
    {

        if ($operativeSymptomsService->createPostOperativeSymptoms($request))
            return redirect()->route('crf.postoperative.show', [$crf, $postoperative]);
    }


    public function show($id)
    {
        //
    }


    public function edit(CaseReportForm $crf, PostOperativeData $postoperative, OperativeSymptoms $symptom)
    {

        return Inertia::render('CaseReportForm/FormFields/Symptoms/Edit', [
            'putUrl' => 'crf.postoperative.symptoms.update',
            'crf' => $crf,
            'mode' => 'postoperative',
            'postoperative' => $postoperative,
            'symptom' => $symptom,
            'backUrl' => route('crf.postoperative.show', [$crf, $postoperative])
        ]);
    }


    public function update(StoreOperativeSymptomsRequest $request,  CaseReportForm $crf, PostOperativeData $postoperative, OperativeSymptoms $symptom, OperativeSymptomsService $operativeSymptomsService)
    {

        if ($operativeSymptomsService->updateOperativeSymptoms($request))
            return redirect()->route('crf.postoperative.show', [$crf, $postoperative]);
    }

    public function destroy($id)
    {
        //
    }
}
