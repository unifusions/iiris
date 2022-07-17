<?php

namespace App\Http\Controllers\ScheduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PhysicalActivity;
use App\Models\ScheduledVisit;
use App\Services\PhysicalActivityService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SVPhysicalActivity extends Controller
{
    public function index(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/PhysicalActivity/Index', [
            'postUrl' => 'crf.scheduledvisit.physicalactivity.store',
            'updateUrl' => 'crf.scheduledvisit.update',
            'crf' => $crf,
            'mode' => 'scheduledvisit',
            'scheduledvisit' => $scheduledvisit,
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit]),
            'physicalactivities'=> $scheduledvisit->physicalactivities
        ]);
    }

    public function create()
    {
       

    }

    
    public function store(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, PhysicalActivityService $physicalActivityService)
    {
         $physicalactivity = $physicalActivityService->createScheduledVisitPhysicalActivity($request);
        return redirect()->back()->with(['message' => 'Physical Activity Created !']);
    }

    
    public function show($id)
    {
        //
    }

    
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        //
    }

   
    public function destroy(CaseReportForm $crf, ScheduledVisit $scheduledvisit, PhysicalActivity $physicalactivity)
    {
        $physicalactivity->delete();
        return redirect()->back()->with(['message' => 'Physical Activity Deleted !']);
    }
}
