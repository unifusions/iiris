<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IntraoperativeApprovalRemark extends Model
{
    use HasFactory;
    protected $fillable = [
        'intra_operative_data_id',
        'user_id',
        'action',
        'remarks'
    ];

    protected $casts = [
            'created_at' => 'datetime:d/m/Y HH:mm',
    ];
}
