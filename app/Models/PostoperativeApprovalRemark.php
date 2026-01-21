<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostoperativeApprovalRemark extends Model
{
    use HasFactory;
    protected $fillable = [
        'post_operative_data_id',
        'user_id',
        'action',
        'remarks'
    ];

    protected $casts = [
            'created_at' => 'datetime:d/m/Y HH:mm',
    ];
}
