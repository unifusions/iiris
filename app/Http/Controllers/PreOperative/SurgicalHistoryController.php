<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PreOperativeData;
use App\Models\SurgicalHistory;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SurgicalHistoryController extends Controller
{

    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        // return view('casereportforms.FormFields.SurgicalHistory.index', compact('crf', 'preoperative', 'storeParameters', 'breadcrumb'));

        return Inertia::render(
            'CaseReportForm/FormFields/SurgicalHistory/Index',
            [
                'crf' => $crf,
                'mode' => 'preoperative',
                'preoperative' => $preoperative,
                'surgicalhistories' => $preoperative->surgicalhistories,
                'updateUrl' => 'crf.preoperative.update',
                'backUrl' => route('crf.preoperative.show', [$crf, $preoperative])
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

    
        SurgicalHistory::Create([
            'pre_operative_data_id' =>  $request->preoperative->id,
            'sh_date' => Carbon::parse($request->sh_date)->addHours(5)->addMinutes(30),
            'diagnosis' => $request->diagnosis,
            'treatment' => $request->treatment,
        ]);

        return redirect()->back()->with(['message' => 'Operation Successful !', 'modalClose' => true]);

        // return view('casereportforms.FormFields.SurgicalHistory.index', compact('crf', 'preoperative', 'storeParameters', 'breadcrumb'));
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


    public function destroy(CaseReportForm $crf, PreoperativeData $preoperative, SurgicalHistory $surgicalhistory)
    {
        $surgicalhistory->delete();
        $message = 'Record ID:' . $surgicalhistory->id . ' deleted successfully';
        return redirect()->back()->with(['message' => $message]);
    }
}
