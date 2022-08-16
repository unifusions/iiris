<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UserRegisteredMail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public function __construct(User $user)
    {
        $this->user = $user;
        
    }
    

    public function build()
    {
       
        $subject = "User Created : " .  $this->user->name;
        return $this->view('mails.userregistered')
        ->subject($subject)
        ->from('no-reply@cliniquest.in', 'IIRIS Admin Team');
    }
}
