<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOperativeSymptomsRequest;
use App\Models\CaseReportForm;
use App\Models\OperativeSymptoms;
use App\Models\PreOperativeData;
use App\Services\OperativeSymptomsService;
use Illuminate\Http\Request;

class PreOperativeSymptomsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        

        if (!empty($preoperative->symptoms))
            return $this->show($crf, $preoperative, $preoperative->symptoms);

        return $this->create($crf, $preoperative);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(CaseReportForm $crf, PreOperativeData $preoperative)
    {

        $storeUri = 'crf.preoperative.symptoms.store';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
            'operative' => 'Preoperative'
        ];



        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        return view('casereportforms.FormFields.OperativeSymptoms.create', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOperativeSymptomsRequest $request,  CaseReportForm $crf, PreOperativeData $preoperative, OperativeSymptomsService $operativeSymptomsService)
    {
        
        if($operativeSymptomsService->createOperativeSymptoms($request) )
            return redirect()->route('crf.preoperative.index', ['crf' => $crf, 'preoperative' => $preoperative]);
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
    public function edit(CaseReportForm $crf, PreOperativeData $preoperative, OperativeSymptoms $symptom)
    {
      
        $storeUri = 'crf.preoperative.symptoms.update';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
            'symptom' => $symptom,
            'operative' => 'Preoperative'

        ];



        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        return view('casereportforms.FormFields.OperativeSymptoms.edit', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf', 'symptom'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreOperativeSymptomsRequest $request,  CaseReportForm $crf, PreOperativeData $preoperative, OperativeSymptoms $symptom, OperativeSymptomsService $operativeSymptomsService)
    {
        
        if($operativeSymptomsService->updateOperativeSymptoms($request))
            return redirect()->route('crf.preoperative.index', ['crf' => $crf, 'preoperative' => $preoperative]);
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
