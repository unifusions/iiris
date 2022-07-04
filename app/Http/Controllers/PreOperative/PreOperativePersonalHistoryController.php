<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PersonalHistory;
use App\Models\PreOperativeData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PreOperativePersonalHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $storeUri = 'crf.preoperative.personalhistory.store';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        return view('casereportforms.FormFields.PersonalHistory.index', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf', 'preoperative'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        return Inertia::render('CaseReportForm/FormFields/PersonalHistory/Create', [
            'postUrl' => 'crf.preoperative.personalhistory.store',
            'backUrl' => route('crf.preoperative.show', [$crf, $preoperative]),
            'mode' => 'preoperative',
            'crf' => $crf,
            'preoperative' => $preoperative,
            
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $storeUri = 'crf.preoperative.personalhistory.store';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        PersonalHistory::Create([
            'pre_operative_data_id' => $preoperative->id,
            'smoking' => $request->smoking,
            'cigarettes' => $request->cigarettes,
            'smoking_since' => $request->smoking_since,
            'smoking_stopped' => $request->smoking_stopped,
            'alchohol' => $request->alcohol,
            'quantity' => $request->quantity,
            'alchohol_since' => $request->alchohol_since,
            'alchohol_stopped' => $request->alchohol_stopped,
            'tobacco' => $request->tobacco,
            'tobacco_type' => $request->tobacco_type,
            'tobacco_quantity' => $request->tobacco_quantity,
            'tobacco_since' => $request->tobacco_since,
            'tobacco_stopped' => $request->tobacco_stopped,
        ]);

        return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative]);
        // return view('casereportforms.FormFields.PersonalHistory.index', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf', 'preoperative'));
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
    public function edit(CaseReportForm $crf, PreOperativeData $preoperative, PersonalHistory $personalhistory)
    {
        return Inertia::render('CaseReportForm/FormFields/PersonalHistory/Edit', [
            'putUrl' => 'crf.preoperative.personalhistory.update',
            'backUrl' => route('crf.preoperative.show', [$crf, $preoperative]),
            'mode' => 'preoperative',
            'crf' => $crf,
            'preoperative' => $preoperative,
            'personalhistories' => $preoperative->personalhistories
        ]);
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, PersonalHistory $personalhistory)
    {
        
            
            $personalhistory->smoking = $request->smoking;
            $personalhistory->cigarettes = $request->cigarettes;
            $personalhistory->smoking_since = $request->smoking_since;
            $personalhistory->smoking_stopped = $request->smoking_stopped;
            $personalhistory->alchohol = $request->alcohol;
            $personalhistory->quantity = $request->quantity;
            $personalhistory->alchohol_since = $request->alchohol_since;
            $personalhistory->alchohol_stopped = $request->alchohol_stopped;
            $personalhistory->tobacco = $request->tobacco;
            $personalhistory->tobacco_type = $request->tobacco_type;
            $personalhistory->tobacco_quantity = $request->tobacco_quantity;
            $personalhistory->tobacco_since = $request->tobacco_since;
            $personalhistory->tobacco_stopped = $request->tobacco_stopped;
            $personalhistory->save();
            return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative])->with(['message'=>'Personal History Updated Successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
