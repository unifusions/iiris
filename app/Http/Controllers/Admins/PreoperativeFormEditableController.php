<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PreoperativeApprovalRemark;
use App\Models\PreOperativeData;
use Illuminate\Http\Request;

class PreoperativeFormEditableController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $preoperative->visit_status = 0;
        $preoperative->is_submitted = 0;
        PreoperativeApprovalRemark::Create([
            'pre_operative_data_id' => $preoperative->id,
            'user_id' => auth()->user()->id,
            'action' => $request->action,
            'remarks' => $request->remarks,
        ]);
        $preoperative->save();
    }
}
