<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\ScheduledVisit;
use Illuminate\Http\Request;

class ScheduledVisitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ScheduledVisit  $scheduledVisit
     * @return \Illuminate\Http\Response
     */
    public function show(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
         return $scheduledvisit;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ScheduledVisit  $scheduledVisit
     * @return \Illuminate\Http\Response
     */
    public function edit(ScheduledVisit $scheduledVisit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ScheduledVisit  $scheduledVisit
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ScheduledVisit $scheduledVisit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ScheduledVisit  $scheduledVisit
     * @return \Illuminate\Http\Response
     */
    public function destroy(ScheduledVisit $scheduledVisit)
    {
        //
    }
}
