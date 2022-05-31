<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Electrocardiogram;
use App\Models\PreOperativeData;
use App\Services\ElectrocardiogramService;
use Illuminate\Http\Request;

class PreOperativeElectrocardiogramController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return 'index';
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $storeUri = 'crf.preoperative.electrocardiogram.store';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];
        return  view('casereportforms.FormFields.Electrocardiogram.create', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, ElectrocardiogramService $electrocardiogramService)
    {
        $electrocardiogram = $electrocardiogramService->createPreoperativeElectrocardiogram($request);
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
    public function edit(CaseReportForm $crf, PreOperativeData $preoperative,Electrocardiogram $electrocardiogram, ElectrocardiogramService $electrocardiogramService)
    {
        $storeUri = 'crf.preoperative.electrocardiogram.update';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
            'electrocardiogram' =>$electrocardiogram
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];
        
        return  view('casereportforms.FormFields.Electrocardiogram.edit', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf', 'electrocardiogram'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative,Electrocardiogram $electrocardiogram, ElectrocardiogramService $electrocardiogramService)
    {
        $electrocardiogram = $electrocardiogramService->updatePreoperativeElectrocardiogram($request, $electrocardiogram);
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
