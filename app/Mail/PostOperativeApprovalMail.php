<?php

namespace App\Mail;

use App\Models\CaseReportForm;
use App\Models\PostoperativeApprovalRemark;
use App\Models\PostOperativeData;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use PhpParser\Node\Stmt\Case_;

class PostOperativeApprovalMail extends Mailable
{
    use Queueable, SerializesModels;

    public $crf, $postoperative, $remarks;
    public $mode = "Post Operative";
    public function __construct(CaseReportForm $crf, PostOperativeData $postoperative, PostoperativeApprovalRemark $remarks)
    {
        $this->crf = $crf;
        $this->postoperative = $postoperative;
        $this->remarks = $remarks;
    }

    public function build()
    {
        $subject =  'Postoperative Data has been ' . $this->remarks->action;
        return $this->view('mails.crfapproval')
            ->subject($subject);
    }
}
