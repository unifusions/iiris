<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\UnscheduledVisit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UnscheduledvisitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf)
    {
        return Inertia::render('CaseReportForm/UnscheduledVisit/Index',[
            'backUrl' => route('crf.show',[$crf]),
            'createUrl' => route('crf.unscheduledvisit.create', [$crf]),
            'crf' => $crf,
            'unscheduledvisits' => $crf->unscheduledvisits,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(CaseReportForm $crf)
    {
        dd($crf);
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
