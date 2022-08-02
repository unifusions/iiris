<?php

namespace App\Http\Controllers\UnshceduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PersonalHistory;
use App\Models\UnscheduledVisit;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UVPersonalHistoryController extends Controller
{
    public function index()
    {
    }


    public function create(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/PersonalHistory/Create', [
            'postUrl' => 'crf.unscheduledvisit.personalhistory.store',
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]),
            'mode' => 'unscheduledvisit',
            'crf' => $crf,
            'unscheduledvisit' => $unscheduledvisit,

        ]);
    }


    public function store(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
        PersonalHistory::Create([
            'unscheduled_visits_id' => $unscheduledvisit->id,
            'smoking' => $request->smoking,
            'cigarettes' => $request->cigarettes,
            'smoking_since' => Carbon::parse($request->smoking_since)->addHours(5)->addMinutes(30),
            'smoking_stopped' =>  Carbon::parse($request->smoking_stopped)->addHours(5)->addMinutes(30),
            'alchohol' => $request->alchohol,
            'quantity' => $request->quantity,
            'alchohol_since' =>  Carbon::parse($request->alchohol_since)->addHours(5)->addMinutes(30),
            'alchohol_stopped' =>  Carbon::parse($request->alchohol_stopped)->addHours(5)->addMinutes(30),
            'tobacco' => $request->tobacco,
            'tobacco_type' => $request->tobacco_type,
            'tobacco_quantity' => $request->tobacco_quantity,
            'tobacco_since' =>  Carbon::parse($request->tobacco_since)->addHours(5)->addMinutes(30),
            'tobacco_stopped' =>  Carbon::parse($request->tobacco_stopped)->addHours(5)->addMinutes(30),
        ]);

        return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]);
    }

    public function show($id)
    {
    }

    public function edit(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, PersonalHistory $personalhistory)
    {
        return Inertia::render('CaseReportForm/FormFields/PersonalHistory/Edit', [
            'putUrl' => 'crf.unscheduledvisit.personalhistory.update',
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]),
            'mode' => 'unscheduledvisit',
            'crf' => $crf,
            'scheduledvisit' => $unscheduledvisit,
            'personalhistories' => $personalhistory
        ]);
    }

    public function update(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, PersonalHistory $personalhistory)
    {

        $personalhistory->smoking = $request->smoking;
        $personalhistory->cigarettes = $request->cigarettes;
        $personalhistory->smoking_since =  Carbon::parse($request->smoking_since)->addHours(5)->addMinutes(30);
        $personalhistory->smoking_stopped =  Carbon::parse($request->smoking_stopped)->addHours(5)->addMinutes(30);
        $personalhistory->alchohol = $request->alchohol;
        $personalhistory->quantity = $request->quantity;
        $personalhistory->alchohol_since =  Carbon::parse($request->alchohol_since)->addHours(5)->addMinutes(30);
        $personalhistory->alchohol_stopped =  Carbon::parse($request->alchohol_stopped)->addHours(5)->addMinutes(30);
        $personalhistory->tobacco = $request->tobacco;
        $personalhistory->tobacco_type = $request->tobacco_type;
        $personalhistory->tobacco_quantity = $request->tobacco_quantity;
        $personalhistory->tobacco_since =  Carbon::parse($request->tobacco_since)->addHours(5)->addMinutes(30);
        $personalhistory->tobacco_stopped =  Carbon::parse($request->tobacco_stopped)->addHours(5)->addMinutes(30);
        $personalhistory->save();
        return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit])->with(['message' => 'Personal History Updated Successfully']);
    }
    public function destroy($id)
    {
    }
}
