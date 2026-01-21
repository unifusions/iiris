<?php

namespace App\Http\Controllers\ScheduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PersonalHistory;
use App\Models\ScheduledVisit;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduledVisitPersonalHistoryController extends Controller
{
    public function index()
    {
    }


    public function create(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/PersonalHistory/Create', [
            'postUrl' => 'crf.scheduledvisit.personalhistory.store',
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit]),
            'mode' => 'scheduledvisit',
            'crf' => $crf,
            'scheduledvisit' => $scheduledvisit,

        ]);
    }


    public function store(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        PersonalHistory::Create([
            'scheduled_visits_id' => $scheduledvisit->id,
            'smoking' => $request->smoking,
            'cigarettes' => $request->cigarettes,
            'smoking_since' => $request->smoking_since !== null ?  Carbon::parse($request->smoking_since)->addHours(5)->addMinutes(30) : null,
            'smoking_stopped' =>  $request->smoking === 'Used to consume in the past' ? ($request->smoking_stopped !== null ?   Carbon::parse($request->smoking_stopped)->addHours(5)->addMinutes(30) : null) : null,
            'alchohol' => $request->alchohol,
            'quantity' => $request->quantity,
            'alchohol_since' =>  $request->alchohol_since !== null ?  Carbon::parse($request->alchohol_since)->addHours(5)->addMinutes(30) : null,
            'alchohol_stopped' => $request->alchohol === 'Used to consume in the past' ? ($request->alchohol_stopped !== null ?   Carbon::parse($request->alchohol_stopped)->addHours(5)->addMinutes(30) : null) : null,
            'tobacco' => $request->tobacco,
            'tobacco_type' => $request->tobacco_type,
            'tobacco_quantity' => $request->tobacco_quantity,
            'tobacco_since' =>   $request->tobacco_since !== null ? Carbon::parse($request->tobacco_since)->addHours(5)->addMinutes(30) : null,
            'tobacco_stopped' =>   $request->tobacco === 'Used to consume in the past' ? ($request->tobacco_stopped !== null ?   Carbon::parse($request->tobacco_stopped)->addHours(5)->addMinutes(30) : null) : null
        ]);

        return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit]);
    }

    public function show($id)
    {
    }

    public function edit(CaseReportForm $crf, ScheduledVisit $scheduledvisit, PersonalHistory $personalhistory)
    {
        return Inertia::render('CaseReportForm/FormFields/PersonalHistory/Edit', [
            'putUrl' => 'crf.scheduledvisit.personalhistory.update',
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit]),
            'mode' => 'scheduledvisit',
            'crf' => $crf,
            'scheduledvisit' => $scheduledvisit,
            'personalhistories' => $personalhistory
        ]);
    }

    public function update(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, PersonalHistory $personalhistory)
    {

        $personalhistory->smoking = $request->smoking;
        $personalhistory->cigarettes = $request->cigarettes;
        $personalhistory->smoking_since =  $request->smoking_since !== null ?  Carbon::parse($request->smoking_since)->addHours(5)->addMinutes(30) : null;
        $personalhistory->smoking_stopped = $request->smoking === 'Used to consume in the past' ? ($request->smoking_stopped !== null ?   Carbon::parse($request->smoking_stopped)->addHours(5)->addMinutes(30) : null) : null;
        $personalhistory->alchohol = $request->alchohol;
        $personalhistory->quantity = $request->quantity;
        $personalhistory->alchohol_since =  $request->alchohol_since !== null ?  Carbon::parse($request->alchohol_since)->addHours(5)->addMinutes(30) : null;
        $personalhistory->alchohol_stopped = $request->alchohol === 'Used to consume in the past' ? ($request->alchohol_stopped !== null ?   Carbon::parse($request->alchohol_stopped)->addHours(5)->addMinutes(30) : null) : null;
        $personalhistory->tobacco = $request->tobacco;
        $personalhistory->tobacco_type = $request->tobacco_type;
        $personalhistory->tobacco_quantity = $request->tobacco_quantity;
        $personalhistory->tobacco_since =  $request->tobacco_since !== null ? Carbon::parse($request->tobacco_since)->addHours(5)->addMinutes(30) : null;
        $personalhistory->tobacco_stopped = $request->tobacco === 'Used to consume in the past' ? ($request->tobacco_stopped !== null ?   Carbon::parse($request->tobacco_stopped)->addHours(5)->addMinutes(30) : null) : null;

        $personalhistory->save();
        return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit])->with(['message' => 'Personal History Updated Successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    }
}
