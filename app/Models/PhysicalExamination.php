<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhysicalExamination extends Model
{
    use HasFactory;
protected $fillable = [
    'case_report_form_id' ,
    'pre_operative_data_id' ,
    'post_operative_data_id' ,
    'scheduled_visits_id' ,
    'unscheduled_visits_id' ,
    'height',
    'weight',
    'bsa',
    'heart_rate',
    'systolic_bp',
    'diastolic_bp',
];
    public function preoperative(){
        return $this->belongsTo(PreOperativeData::class, 'pre_operative_data_id');
    }

    public function postoperative(){
        return $this->belongsTo(PostOperativeData::class, 'post_operative_data_id');
    }

}


