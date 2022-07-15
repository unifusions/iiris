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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(CaseReportForm $crf, ScheduledVisit $scheduledvisit, PhysicalActivity $physicalactivity)
    {
        $physicalactivity->delete();
        return redirect()->back()->with(['message' => 'Physical Activity Deleted !']);
    }
}
