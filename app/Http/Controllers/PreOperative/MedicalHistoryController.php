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
                'predefinedmedicalhistories' => $preoperative->predefinedmedicalhistories,
                'updateUrl' => 'crf.preoperative.update',
                'backUrl' => route('crf.preoperative.show', [$crf,$preoperative])
            ]
        );
    }
   
    public function create()
    {
        
    }
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

   
    public function show($id)
    {
       
    }

    
    public function edit($id)
    {
        
    }

    public function update(Request $request, $id)
    {
      
    }

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
