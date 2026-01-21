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
 
        $postoperative = array();
        $intraoperative = array();
        

        $caseReportForm->preoperatives()->create(
[ 'case_report_form_id' => $caseReportForm->id,
                'visit_no' => 1,
                'form_status' => true]
        );

         $caseReportForm->intraoperatives()->create([
'case_report_form_id' => $caseReportForm->id,
                'visit_no' => 1,
                'form_status' => true
         ]);

       
           $caseReportForm->postoperatives()->create([
  'case_report_form_id' => $caseReportForm->id,
                'visit_no' => 1,
                'form_status' => true
           ]);

        
$scheduledVisits = [];
        for ($i = 2; $i <= 7; $i++) {


            $scheduledVisits[] =  
                [
                    'case_report_form_id' => $caseReportForm->id,
                    'visit_no' => $i,

                ];
             
        }

        
      
       

        $caseReportForm->scheduledvisits()->createMany($scheduledVisits);
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
