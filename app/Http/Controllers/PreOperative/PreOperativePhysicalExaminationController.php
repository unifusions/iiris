<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PhysicalExamination;
use App\Models\PreOperativeData;
use App\Services\PhysicalExaminationService;
use Illuminate\Http\Request;

class PreOperativePhysicalExaminationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        if (!empty($preoperative->physicalexaminations))
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

        $storeUri = 'crf.preoperative.physicalexamination.store';
        $storeParameters = [
            'crf' => $crf,
            'mode' => $preoperative
        ];

        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        return view('casereportforms.FormFields.PhysicalExamination.create', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, PhysicalExaminationService $physicalExaminationService)
    {
        $physicalexamination = $physicalExaminationService->createPreOperativePhysicalExamination($request);
       // return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative])->with(['crf' => $crf]);
       return view('casereportforms.PreOperativeData.show', compact('crf', 'preoperative'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(CaseReportForm $crf, PreOperativeData $preoperative, PhysicalExamination $physicalexamination)
    {
        //
        $storeUri = 'crf.preoperative.physicalexamination.store';
        $storeParameters = [
            'crf' => $crf,
            'mode' => $preoperative
        ];

        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        return view('casereportforms.FormFields.PhysicalExamination.show', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf','physicalexamination'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(CaseReportForm $crf, PreOperativeData $preoperative, PhysicalExamination $physicalexamination)
    {
        $storeUri = 'crf.preoperative.physicalexamination.update';
        $storeParameters = [
            'crf' => $crf,
            'mode' => $preoperative,
            'physicalexamination' => $physicalexamination
        ];

        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        return view('casereportforms.FormFields.PhysicalExamination.edit', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf', 'physicalexamination'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative,PhysicalExamination $physicalexamination, PhysicalExaminationService $physicalExaminationService)
    {
        $physicalexaminationUpdate = $physicalExaminationService->updatePreOperativePhysicalExamination($request,$physicalexamination);
        
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
