<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Echocardiography extends Model
{
    use HasFactory;

    // public function casereportforms(){
    //     return $this->belongsTo(CaseReportForm::class);
    // }
    protected $fillable = [
        'pre_operative_data_id',
        'post_operative_data_id',
        'scheduled_visits_id',
        'unscheduled_visits_id',
        'echodate',

        'peak_velocity',
        'velocity_time_integral',
        'peak_gradient',
        'mean_gradient',
        'heart_rate',
        'stroke_volume',
        'dvi',
        'eoa',
        'acceleration_time',
        'lvot_vti',
        'lv_mass',
        'ivs_diastole',
        'pw_diastole',
        'lvidend_systole',
        'lvidend_diastole',
        'ejection_fraction'
    ];
    protected $dates = ['echodate'];

    public function preoperatives()
    {
        return $this->belongsTo(PreOperativeData::class);
    }
}
