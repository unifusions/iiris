<?php

namespace App\Http\Controllers\UnshceduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Electrocardiogram;
use App\Models\UnscheduledVisit;
use App\Services\ElectrocardiogramService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UVElectrocardiogramController extends Controller
{
    
    public function index()
    {
    }


    public function create(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/Electrocardiogram/Create', [
            'crf' => $crf,
            'unscheduledvisit' => $unscheduledvisit,
            'mode' => 'unscheduledvisit',
            'postUrl' => 'crf.unscheduledvisit.electrocardiogram.store',
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit])
        ]);
    }


    public function store(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, ElectrocardiogramService $electrocardiogramService)
    {
        $electrocardiogramService->createUSVElectrocardiogram($request);
        return redirect()->route('crf.unscheduledvisit.show', [$crf,$unscheduledvisit]);
    }

    public function show($id)
    {
    }


    public function edit(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, Electrocardiogram $electrocardiogram)
    {
        return Inertia::render('CaseReportForm/FormFields/Electrocardiogram/Edit', [
            'crf' => $crf,
            'unscheduledvisit' => $unscheduledvisit,
            'mode' => 'unscheduledvisit',
            'putUrl' => 'crf.unscheduledvisit.electrocardiogram.update',
            'electrocardiogram' => $electrocardiogram,
            'backUrl'=> route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit])
        ]);
    }

    public function update(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, Electrocardiogram $electrocardiogram, ElectrocardiogramService $electrocardiogramService)
    {
        $electrocardiogramService->updatePreoperativeElectrocardiogram($request, $electrocardiogram);
        return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]);
    }

    public function destroy($id)
    {
        //
    }
}
