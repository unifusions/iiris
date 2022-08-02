<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PersonalHistory;
use App\Models\PreOperativeData;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PreOperativePersonalHistoryController extends Controller
{
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

        return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative]);
        // return view('casereportforms.FormFields.PersonalHistory.index', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf', 'preoperative'));
    }

    
    public function show($id)
    {
    }

    
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

   
    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, PersonalHistory $personalhistory)
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
            return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative])->with(['message'=>'Personal History Updated Successfully']);
    }

   
    public function destroy($id)
    {
        
    }
}
