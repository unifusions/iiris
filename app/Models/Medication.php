<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Medication extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'pre_operative_data_id',
        'post_operative_data_id',
        'scheduled_visits_id',
        'unscheduled_visits_id',
        'medication',
        'indication',
        'status',
        'start_date',
        'stop_date',
        'dosage',
        'reason',
        
    ];
    protected $dates = [
        'start_date',
        'stop_date'
    ];
    public function preoperative(){
        return $this->belongsTo(PreOperativeData::class);
    }
}
