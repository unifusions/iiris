<?php

namespace App\Http\Controllers\ScheduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Echocardiography;
use App\Models\ScheduledVisit;
use App\Services\EchocardiographyService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SVEchocardiographyController extends Controller
{
    public function index(ScheduledVisit $scheduledvisit)
    {
      
    }
    public function create(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/Echocardiography/Create', [
            'crf' => $crf,
            'scheduledvisit' => $scheduledvisit,
            'mode' => 'scheduledvisit',
            'postUrl' => 'crf.scheduledvisit.echocardiography.store',
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit])
        ]);

    }
    public function store(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, EchocardiographyService $echocardiographyService)
    {
        $echocardiographyService->createSVEchocardiography($request);
        return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit]);
    }
    public function show($id)
    {
        //
    }
    public function edit(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, Echocardiography $echocardiography)
    {
        return Inertia::render('CaseReportForm/FormFields/Echocardiography/Edit', [
            'crf' => $crf,
            'scheduledvisit' => $scheduledvisit,
            'echocardiography' => $echocardiography,
            'mode' => 'scheduledvisit',
            'putUrl' => 'crf.scheduledvisit.echocardiography.update',
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit])
        ]);
    }
    public function update(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, Echocardiography $echocardiography, EchocardiographyService  $echocardiographyService)
    {
        $echocardiographyService->updatePreoperativeEchocardiography($request, $echocardiography);
        return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit])->with(['message' => 'Updated Successfully']);
    }
    public function destroy($id)
    {
        //
    }
}
