<?php

namespace App\Http\Controllers\UnshceduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PhysicalActivity;
use App\Models\UnscheduledVisit;
use App\Services\PhysicalActivityService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UVPhysicalActivityController extends Controller
{
    public function index(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/PhysicalActivity/Index', [
            'postUrl' => 'crf.unscheduledvisit.physicalactivity.store',
            'updateUrl' => 'crf.unscheduledvisit.update',
            'crf' => $crf,
            'mode' => 'unscheduledvisit',
            'unscheduledvisit' => $unscheduledvisit,
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]),
            'physicalactivities' => $unscheduledvisit->physicalactivities
        ]);

  
    }

    public function create()
    {
    }


    public function store(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, PhysicalActivityService $physicalActivityService)
    {
        $physicalactivity = $physicalActivityService->createUnscheduledVisitPhysicalActivity($request);
        return redirect()->back()->with(['message' => 'Physical Activity Created !']);
    }


    public function show($id)
    {
        
    }


    public function edit($id)
    {
       
    }


    public function update(Request $request, $id)
    {
        
    }


    public function destroy(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, PhysicalActivity $physicalactivity)
    {
        $physicalactivity->delete();
        return redirect()->back()->with(['message' => 'Physical Activity Deleted !']);
    }
}
