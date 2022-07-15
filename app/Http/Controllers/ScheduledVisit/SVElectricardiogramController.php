<?php

namespace App\Http\Controllers\ScheduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Electrocardiogram;
use App\Models\ScheduledVisit;
use App\Services\ElectrocardiogramService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SVElectricardiogramController extends Controller
{
    public function index()
    {
    }


    public function create(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/Electrocardiogram/Create', [
            'crf' => $crf,
            'scheduledvisit' => $scheduledvisit,
            'mode' => 'scheduledvisit',
            'postUrl' => 'crf.scheduledvisit.electrocardiogram.store',
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit])
        ]);
    }


    public function store(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, ElectrocardiogramService $electrocardiogramService)
    {
        $electrocardiogramService->createSVElectrocardiogram($request);
        return redirect()->route('crf.scheduledvisit.show', [$crf,$scheduledvisit]);
    }

    public function show($id)
    {
    }


    public function edit(CaseReportForm $crf, ScheduledVisit $scheduledvisit, Electrocardiogram $electrocardiogram)
    {
        return Inertia::render('CaseReportForm/FormFields/Electrocardiogram/Edit', [
            'crf' => $crf,
            'scheduledvisit' => $scheduledvisit,
            'mode' => 'scheduledvisit',
            'putUrl' => 'crf.scheduledvisit.electrocardiogram.update',
            'electrocardiogram' => $electrocardiogram,
            'backUrl'=> route('crf.scheduledvisit.show', [$crf, $scheduledvisit])
        ]);
    }

    public function update(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, Electrocardiogram $electrocardiogram, ElectrocardiogramService $electrocardiogramService)
    {
        $electrocardiogramService->updatePreoperativeElectrocardiogram($request, $electrocardiogram);
        return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit]);
    }

    public function destroy($id)
    {
        //
    }
}
