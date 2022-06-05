<?php

namespace App\Http\Controllers\Preoperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PreOperativeData;
use App\Services\EchocardiographyService;
use Illuminate\Http\Request;

class PreOperativeEchocardiographyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(PreOperativeData $preoperative)
    {
        return 'Index';
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $storeUri = 'crf.preoperative.echocardiography.store';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];
        return  view('casereportforms.FormFields.Echocardiography.create', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf'));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, EchocardiographyService $echocardiographyService)
    {
        $echocardiography = $echocardiographyService->createPreoperativeEchocardiography($request);
        return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative]);
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
    public function update(Request $request, $id)
    {
        //
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
