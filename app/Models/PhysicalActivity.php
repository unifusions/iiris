<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhysicalActivity extends Model
{
    use HasFactory;
    protected $fillable=[
        'pre_operative_data_id',
        'scheduled_visits_id',
        'unscheduled_visits_id',
        'activity_type',
        'duration',
    ];
}
