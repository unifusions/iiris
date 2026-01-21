<?php

namespace App\Mail;

use App\Models\CaseReportForm;
use App\Models\IntraoperativeApprovalRemark;
use App\Models\IntraOperativeData;
use App\Models\PreoperativeApprovalRemark;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class IntraoperativeApprovalMail extends Mailable
{
    use Queueable, SerializesModels;

    public $crf, $intraoperative, $remarks;
    public $mode = "Intra Operative";
    public function __construct(CaseReportForm $crf,IntraOperativeData $intraoperative, IntraoperativeApprovalRemark $remarks)
    {
        $this->crf = $crf;
        $this->intraoperative = $intraoperative;
        $this->remarks = $remarks;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $subject =  'Intraoperative Data has been ' . $this->remarks->action;

        return $this->view('mails.crfapproval')
        ->subject($subject);
    }
}
