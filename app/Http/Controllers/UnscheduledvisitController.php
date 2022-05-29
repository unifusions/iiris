<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\UnscheduledVisit;
use Illuminate\Http\Request;

class UnscheduledvisitController extends Controller
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
     * @param  \App\Models\UnscheduledVisit  $unscheduledVisit
     * @return \Illuminate\Http\Response
     */
    public function show(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
        //
        return $unscheduledvisit;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UnscheduledVisit  $unscheduledVisit
     * @return \Illuminate\Http\Response
     */
    public function edit(UnscheduledVisit $unscheduledVisit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UnscheduledVisit  $unscheduledVisit
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UnscheduledVisit $unscheduledVisit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UnscheduledVisit  $unscheduledVisit
     * @return \Illuminate\Http\Response
     */
    public function destroy(UnscheduledVisit $unscheduledVisit)
    {
        //
    }
}
