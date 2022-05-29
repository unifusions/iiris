<?php

namespace App\Observers;

use App\Models\CaseReportForm;

use App\Models\IntraOperativeData;
use App\Models\PostOperativeData;
use App\Models\PreOperativeData;
use App\Models\ScheduledVisit;
use Illuminate\Support\Facades\Auth;

class CaseReportFormObserver
{
    /**
     * Handle the CaseReportForm "created" event.
     *
     * @param  \App\Models\CaseReportForm  $caseReportForm
     * @return void
     */

    public function creating(CaseReportForm $caseReportForm)
    {

        $user = auth()->user();
        $caseReportForm->user_id = $user->id;
        $caseReportForm->facility_id = $user->facility_id;
    }

    public function created(CaseReportForm $caseReportForm)
    {
        $user = auth()->user();

        $crf_count = CaseReportForm::where('facility_id', '=', $user->facility_id)->count();

        $caseReportForm->subject_id = str_pad($user->facility_id, 3, '0', STR_PAD_LEFT) . '-' . str_pad($crf_count++, 3, '0', STR_PAD_LEFT);

        $caseReportForm->save();

        $preoperative = array();
        $postoperative = array();
        $intraoperative = array();
        $scheduledvisit = array();

        $preoperative = new PreOperativeData(
            array(
                'case_report_form_id' => $caseReportForm->id,
                'visit_no' => 1,
                'form_status' => true
            )
        );
        $intraoperative = new IntraOperativeData(
            array(
                'case_report_form_id' => $caseReportForm->id,
                'visit_no' => 1,
              
            )
        );

        $postoperative = new PostOperativeData([
                'case_report_form_id' => $caseReportForm->id,
                'visit_no' => 1,
        ]
        );

        for ($i = 2; $i <= 7; $i++) {


            $scheduledvisit[] = new ScheduledVisit(
                [
                    'case_report_form_id' => $caseReportForm->id,
                    'visit_no' => $i,
                    
                ]
            );
        }

        $caseReportForm->preoperatives()->save($preoperative);
        $caseReportForm->postoperatives()->save($postoperative);
        $caseReportForm->intraoperatives()->save($intraoperative);

        $caseReportForm->scheduledvisits()->saveMany($scheduledvisit);
    }

    /**
     * Handle the CaseReportForm "updated" event.
     *
     * @param  \App\Models\CaseReportForm  $caseReportForm
     * @return void
     */
    public function updated(CaseReportForm $caseReportForm)
    {
        //
    }

    /**
     * Handle the CaseReportForm "deleted" event.
     *
     * @param  \App\Models\CaseReportForm  $caseReportForm
     * @return void
     */
    public function deleted(CaseReportForm $caseReportForm)
    {
        //
    }

    /**
     * Handle the CaseReportForm "restored" event.
     *
     * @param  \App\Models\CaseReportForm  $caseReportForm
     * @return void
     */
    public function restored(CaseReportForm $caseReportForm)
    {
        //
    }

    /**
     * Handle the CaseReportForm "force deleted" event.
     *
     * @param  \App\Models\CaseReportForm  $caseReportForm
     * @return void
     */
    public function forceDeleted(CaseReportForm $caseReportForm)
    {
        //
    }
}
