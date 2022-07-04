<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Electrocardiogram extends Model
{
    use HasFactory;
    protected $fillable = [
        'case_report_form_id',
        'pre_operative_data_id',
        'post_operative_data_id',
        'scheduled_visits_id',
        'unscheduled_visits_id',
        'ecg_date',
        'rhythm',
        'rhythm_others',
        'rate', 'lvh', 'lvs','printerval', 'qrsduration'
    ];
    protected $dates = ['ecg_date'];
   

    public function preoperatives(){
        return $this->belongsTo(PreOperativeData::class);
    }
}
