<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\MedicalHistory;
use App\Models\PreOperativeData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MedicalHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $storeUri = 'crf.preoperative.medicalhistoty.store';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        // return view('casereportforms.FormFields.MedicalHistory.index', compact('crf', 'preoperative', 'storeParameters', 'breadcrumb'));

        return Inertia::render(
            'CaseReportForm/FormFields/MedicalHistory/Index',
            [
                'crf' => $crf,
                'mode' => 'preoperative',
                'preoperative' => $preoperative,
                'medicalhistories' => $preoperative->medicalhistories,
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
    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];


        $medicalhistory = MedicalHistory::Create([
            'pre_operative_data_id' =>  $request->pre_operative_data_id,
            'diagnosis' => $request->diagnosis,
            'duration' => $request->duration,
            'treatment' => $request->treatment,
            'on_treatment' => $request->on_treatment
        ]);
        
        return redirect()->back()->with(['message' => 'Operation Successful !', 'modalClose' => true]);
     
        // return view('casereportforms.FormFields.MedicalHistory.index', compact('crf', 'preoperative', 'storeParameters', 'breadcrumb'));
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
    public function destroy(CaseReportForm $crf, PreoperativeData $preoperative, MedicalHistory $medicalhistory)
    {
        // $storeParameters = [
        //     'crf' => $crf,
        //     'preoperative' => $preoperative,
        // ];
        // $breadcrumb = [
        //     'name' => 'Pre Operative Data',
        //     'link' => 'crf.preoperative.index'
        // ];

        $medicalhistory->delete();
        $message = 'Record ID:' . $medicalhistory->id . ' deleted successfully';
        return redirect()->back()->with(['message'=>$message]);
        // return view('casereportforms.FormFields.MedicalHistory.index', compact('crf', 'preoperative', 'storeParameters', 'breadcrumb'));
    }
}
