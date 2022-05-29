<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\IntraOperativeData;
use Illuminate\Http\Request;

class IntraOperativeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
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
     * @param  \App\Models\IntraOperativeData  $intraOperativeData
     * @return \Illuminate\Http\Response
     */
    public function show(CaseReportForm $crf, IntraOperativeData $intraoperative)
    {
        return $intraoperative;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\IntraOperativeData  $intraOperativeData
     * @return \Illuminate\Http\Response
     */
    public function edit(IntraOperativeData $intraOperativeData)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\IntraOperativeData  $intraOperativeData
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, IntraOperativeData $intraOperativeData)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\IntraOperativeData  $intraOperativeData
     * @return \Illuminate\Http\Response
     */
    public function destroy(IntraOperativeData $intraOperativeData)
    {
        //
    }
}
