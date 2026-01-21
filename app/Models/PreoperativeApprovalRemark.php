<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreoperativeApprovalRemark extends Model
{
    use HasFactory;
    protected $fillable = [
        'pre_operative_data_id',
        'user_id',
        'action',
        'remarks'
    ];

    protected $casts = [
            'created_at' => 'datetime:d/m/Y HH:mm',
    ];
}
