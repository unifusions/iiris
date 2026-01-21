<?php

namespace App\Mail;

use App\Models\CaseReportForm;
use App\Models\PreoperativeApprovalRemark;
use App\Models\PreOperativeData;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PreoperativeApprovalMail extends Mailable
{
    use Queueable, SerializesModels;

    public $crf, $preoperative, $remarks;
    public $mode = "Pre Operative";
    public function __construct(CaseReportForm $crf, PreOperativeData $preoperative, PreoperativeApprovalRemark $remarks)
    {

        $this->crf = $crf;
        $this->preoperative = $preoperative;
        $this->remarks = $remarks;
    }

    public function build()
    {
        $subject =  'Preoperative Data has been ' . $this->remarks->action;
        return $this->view('mails.crfapproval')
            ->subject($subject);
    }
}
