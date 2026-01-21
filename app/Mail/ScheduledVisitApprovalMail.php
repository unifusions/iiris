<?php

namespace App\Mail;

use App\Models\CaseReportForm;
use App\Models\ScheduledVisit;
use App\Models\ScheduledVisitApprovalRemark;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ScheduledVisitApprovalMail extends Mailable
{
    use Queueable, SerializesModels;

    public $crf, $scheduledvisit, $remarks;
    public $mode = "Scheduled Visit";

    public function __construct(CaseReportForm $crf, ScheduledVisit $scheduledvisit, ScheduledVisitApprovalRemark $remarks)
    {
        $this->crf = $crf;
        $this->scheduledvisit = $scheduledvisit;
        $this->remarks = $remarks;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $subject =  'Scheduled Visit - No. ' . $this->scheduledvisit->visit_no .' Data has been ' . $this->remarks->action;
        return $this->view('mails.crfapproval')
            ->subject($subject);
    }
}
