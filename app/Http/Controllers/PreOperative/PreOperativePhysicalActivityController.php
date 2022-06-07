<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PhysicalActivity;
use App\Models\PreOperativeData;
use App\Services\PhysicalActivityService;
use Illuminate\Http\Request;

class PreOperativePhysicalActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $storeUri = 'crf.preoperative.physicalactivity.store';
        $destroyUri = 'crf.preoperative.physicalactivity.destroy';
        
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];
        return view('casereportforms.FormFields.PhysicalActivity.index', compact('storeUri','destroyUri', 'storeParameters', 'breadcrumb', 'crf', 'preoperative'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, PhysicalActivityService $physicalActivityService)
    {
        $storeUri = 'crf.preoperative.physicalactivity.store';
        $destroyUri = 'crf.preoperative.physicalactivity.destroy';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        $physicalactivity = $physicalActivityService->createPreoperativePhysicalActivity($request);
        return view('casereportforms.FormFields.PhysicalActivity.index', compact('storeUri', 'destroyUri', 'crf','preoperative','storeParameters', 'breadcrumb'));
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
    public function destroy(CaseReportForm $crf, PreOperativeData $preoperative, PhysicalActivity $physicalactivity)
    {
        
        $storeUri = 'crf.preoperative.physicalactivity.store';
        $destroyUri = 'crf.preoperative.physicalactivity.destroy';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        $physicalactivity->delete();
        return view('casereportforms.FormFields.PhysicalActivity.index', compact('storeUri','destroyUri', 'storeParameters', 'breadcrumb', 'crf', 'preoperative'));

    }
}
