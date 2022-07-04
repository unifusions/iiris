<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Electrocardiogram;
use App\Models\PreOperativeData;
use App\Services\ElectrocardiogramService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PreOperativeElectrocardiogramController extends Controller
{

    public function index()
    {
    }


    public function create(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        

        return Inertia::render('CaseReportForm/FormFields/Electrocardiogram/Create', [
            'crf' => $crf,
            'preoperative' => $preoperative,
            'mode' => 'preoperative',
            'postUrl' => 'crf.preoperative.electrocardiogram.store',
            'backUrl'=> route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative])
        ]);
    }


    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, ElectrocardiogramService $electrocardiogramService)
    {
        $electrocardiogram = $electrocardiogramService->createPreoperativeElectrocardiogram($request);
        return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative])->with(['message' => 'Electrocardiogram saved successfully']);
    }

    public function show($id)
    {
    }


    public function edit(CaseReportForm $crf, PreOperativeData $preoperative, Electrocardiogram $electrocardiogram, ElectrocardiogramService $electrocardiogramService)
    {
        return Inertia::render('CaseReportForm/FormFields/Electrocardiogram/Edit', [
            'crf' => $crf,
            'preoperative' => $preoperative,
            'mode' => 'preoperative',
            'putUrl' => 'crf.preoperative.electrocardiogram.update',
            'electrocardiogram' => $electrocardiogram,
            'backUrl'=> route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative])
        ]);
    }

    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, Electrocardiogram $electrocardiogram, ElectrocardiogramService $electrocardiogramService)
    {
        $electrocardiogram = $electrocardiogramService->updatePreoperativeElectrocardiogram($request, $electrocardiogram);
        return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative])->with(['message' => 'Electrocardiogram edited successfully']);
    }

    public function destroy($id)
    {
    }
}
