<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Http\Requests\PredefinedMedicalHistoryFormRequest;
use App\Models\CaseReportForm;
use App\Models\PredefinedMedicalHistory;
use App\Models\PreOperativeData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PredefinedMedicalHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        return Inertia::render(
            'CaseReportForm/FormFields/MedicalHistory/PredefinedMedicalHistoryIndex',
            [
                'crf' => $crf,
                'mode' => 'preoperative',
                'preoperative' => $preoperative,
                'predefinedmedicalhistories' => $preoperative->predefinedmedicalhistories,
                'updateUrl' => 'crf.preoperative.update',
                'backUrl' => route('crf.preoperative.show', [$crf,$preoperative])
            ]
        );
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
    public function store(PredefinedMedicalHistoryFormRequest $request)
    {
     
    
       PredefinedMedicalHistory::create($request->validated());
       return redirect()->back()->with(['message' => 'Medical history saved successfully']);
    
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
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
    public function update(PredefinedMedicalHistoryFormRequest $request, CaseReportForm $crf, PreOperativeData $preoperative, PredefinedMedicalHistory $predefinedmedicalhistory)
    {
        $predefinedmedicalhistory->fill($request->validated());
        $predefinedmedicalhistory->save();
        return redirect()->back()->with(['message' => 'Medical History Updated successfully !']);
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
