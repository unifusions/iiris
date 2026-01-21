<?php

namespace App\Http\Controllers;

use App\Models\IntraOperativeData;
use Carbon\Carbon;
use Illuminate\Http\Request;

class IntraoperativeReviewerController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, IntraOperativeData $intraoperative)
    {
        $intraoperative->date_of_review = Carbon::now()->addHours(5)->addMinutes(30);
        $intraoperative->is_reviewed = true;
        $intraoperative->save();
        $message = 'Intraoperative has been marked as reviewed';
        return redirect()->back()->with(['message' => $message]);
    }
}
