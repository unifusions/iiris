<?php

namespace App\Http\Controllers\UnshceduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Echocardiography;
use App\Models\UnscheduledVisit;
use App\Services\EchocardiographyService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UVEchocardiographyController extends Controller
{
    public function index(UnscheduledVisit $unscheduledvisit)
    {
      
    }
    public function create(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/Echocardiography/Create', [
            'crf' => $crf,
            'unscheduledvisit' => $unscheduledvisit,
            'mode' => 'unscheduledvisit',
            'postUrl' => 'crf.unscheduledvisit.echocardiography.store',
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit])
        ]);

    }
    public function store(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, EchocardiographyService $echocardiographyService)
    {
        $echocardiographyService->createUSVEchocardiography($request);
        return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]);
    }
    public function show($id)
    {
        //
    }
    public function edit(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, Echocardiography $echocardiography)
    {
        return Inertia::render('CaseReportForm/FormFields/Echocardiography/Edit', [
            'crf' => $crf,
            'unscheduledvisit' => $unscheduledvisit,
            'echocardiography' => $echocardiography,
            'mode' => 'unscheduledvisit',
            'putUrl' => 'crf.unscheduledvisit.echocardiography.update',
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit])
        ]);
    }
    public function update(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, Echocardiography $echocardiography, EchocardiographyService  $echocardiographyService)
    {
        $echocardiographyService->updatePreoperativeEchocardiography($request, $echocardiography);
        return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit])->with(['message' => 'Updated Successfully']);
    }
    public function destroy($id)
    {
        //
    }
}
