<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnscheduledVisitApprovalRemark extends Model
{
    use HasFactory;
    protected $fillable = [
        'unscheduled_visits_id',
        'user_id',
        'action',
        'remarks'
    ];

    protected $casts = [
            'created_at' => 'datetime:d/m/Y HH:mm',
    ];
}
