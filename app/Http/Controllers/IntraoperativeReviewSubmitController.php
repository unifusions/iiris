<?php

namespace App\Http\Controllers;

use App\Models\IntraOperativeData;
use Illuminate\Http\Request;

class IntraoperativeReviewSubmitController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, IntraOperativeData $intraoperative)
    {
        $intraoperative->r_all_paravalvular_leak = $request->r_all_paravalvular_leak;
        $intraoperative->r_major_paravalvular_leak =$request->r_major_paravalvular_leak;
        $intraoperative->r_comments = $request->r_comments;
        $intraoperative->save();
        $message = 'Intraoperative review has been saved';
        return redirect()->back()->with(['message' => $message]);
    }
}
