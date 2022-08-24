<?php

namespace App\Mail;

use App\Models\CaseReportForm;
use App\Models\UnscheduledVisit;
use App\Models\UnscheduledVisitApprovalRemark;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UnscheduledVisitApprovalMail extends Mailable
{
    use Queueable, SerializesModels;

    public $crf, $unscheduledvisit, $remarks;
    public $mode = "Uncheduled Visit";

    public function __construct(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, UnscheduledVisitApprovalRemark $remarks)
    {
        $this->crf = $crf;
        $this->unscheduledvisit = $unscheduledvisit;
        $this->remarks = $remarks;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $subject =  'Unscheduled Visit - No. ' . $this->unscheduledvisit->visit_no .' Data has been ' . $this->remarks->action;
        return $this->view('mails.crfapproval')
            ->subject($subject);
    }
}
