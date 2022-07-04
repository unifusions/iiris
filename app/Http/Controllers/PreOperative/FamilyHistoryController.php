<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\FamilyHistory;
use App\Models\PreOperativeData;
use Illuminate\Http\Request;
use Inertia\Inertia;
class FamilyHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $storeUri = 'crf.preoperative.familyhistory.store';
        
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];
        // return view('casereportforms.FormFields.FamilyHistory.index', compact('crf','preoperative','storeParameters', 'breadcrumb'));

        return Inertia::render(
            'CaseReportForm/FormFields/FamilyHistory/Index',
            [
                'crf' => $crf,
                'mode' => 'preoperative',
                'preoperative' => $preoperative,
                'familyhistories' => $preoperative->familyhistories,
                'updateUrl' => 'crf.preoperative.update',
                'backUrl' => route('crf.preoperative.show', [$crf, $preoperative])
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

       FamilyHistory::create([
            'pre_operative_data_id' => $request->preoperative->id,
            'diagnosis' => $request->diagnosis,
            'relation' => $request->relation,
        ]);
        return redirect()->back()->with(['message' => 'Operation Successful !', 'modalClose' => true]);

//        return view('casereportforms.FormFields.FamilyHistory.index', compact('crf','preoperative','storeParameters', 'breadcrumb'));
    }

  
    public function show($id)
    {
        //
    }

   
    public function edit($id)
    {
        //
    }

   
    public function update(Request $request, $id)
    {
        
    }

  
    public function destroy(CaseReportForm $crf, PreOperativeData $preoperative, FamilyHistory $familyhistory)
    {
        $familyhistory->delete();
        $message = 'Record ID:' . $familyhistory->id . ' deleted successfully';
        return redirect()->back()->with(['message' => $message]);
    }
}
