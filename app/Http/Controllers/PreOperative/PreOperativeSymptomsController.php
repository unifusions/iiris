<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOperativeSymptomsRequest;
use App\Models\CaseReportForm;
use App\Models\OperativeSymptoms;
use App\Models\PreOperativeData;
use App\Services\OperativeSymptomsService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PreOperativeSymptomsController extends Controller
{
    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {



        if (!empty($preoperative->symptoms))
            return $this->show($crf, $preoperative, $preoperative->symptoms);

        return $this->create($crf, $preoperative);
    }


    public function create(CaseReportForm $crf, PreOperativeData $preoperative)
    {

        $storeUri = 'crf.preoperative.symptoms.store';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
            'operative' => 'Preoperative'
        ];



        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        // return view('casereportforms.FormFields.OperativeSymptoms.create', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf'));

        return Inertia::render('CaseReportForm/FormFields/Symptoms/Create', [
            'postUrl' => 'crf.preoperative.symptoms.store',
            'crf' => $crf,
            'mode' => 'preoperative',
            'preoperative' => $preoperative,
            'backUrl' => route('crf.preoperative.show', [$crf, $preoperative]),
            'title' => 'Pre Operative'
        ]);
    }


    public function store(StoreOperativeSymptomsRequest $request,  CaseReportForm $crf, PreOperativeData $preoperative, OperativeSymptomsService $operativeSymptomsService)
    {

        if ($operativeSymptomsService->createOperativeSymptoms($request))
            return redirect()->route('crf.preoperative.show', [$crf, $preoperative])->with(['message' => 'Properative Symptoms for subject' . $crf->subject_id . 'created successfully']);
    }


    public function show($id)
    {
    }


    public function edit(CaseReportForm $crf, PreOperativeData $preoperative, OperativeSymptoms $symptom)
    {

        $storeUri = 'crf.preoperative.symptoms.update';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
            'symptom' => $symptom,
            'operative' => 'Preoperative'

        ];

        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        return Inertia::render('CaseReportForm/FormFields/Symptoms/Edit', [
            'putUrl' => 'crf.preoperative.symptoms.update',
            'crf' => $crf,
            'mode' => 'preoperative',
            'preoperative' => $preoperative,
            'symptom' => $symptom,
            'backUrl' => route('crf.preoperative.show', [$crf, $preoperative]),
            'title' => 'Pre Operative'
        ]);

        // return view('casereportforms.FormFields.OperativeSymptoms.edit', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf', 'symptom'));
    }


    public function update(StoreOperativeSymptomsRequest $request,  CaseReportForm $crf, PreOperativeData $preoperative, OperativeSymptoms $symptom, OperativeSymptomsService $operativeSymptomsService)
    {

        if ($operativeSymptomsService->updateOperativeSymptoms($request))
            return redirect()->route('crf.preoperative.index', ['crf' => $crf, 'preoperative' => $preoperative]);
    }

    public function destroy($id)
    {
        //
    }
}
