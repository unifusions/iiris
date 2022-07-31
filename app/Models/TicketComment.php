<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketComment extends Model
{
    use HasFactory;
    protected $fillable = [
        'content',
        'user_id',
        'ticket_id',

    ];
    protected $casts = [
       
        'created_at' => 'datetime:d/m/Y',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
