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
        'ejection_fraction',
        

        'peak_velocity_normality',
        'velocity_time_integral_normality',
        'peak_gradient_normality',
        'mean_gradient_normality',
        'heart_rate_normality',
        'stroke_volume_normality',
        'dvi_normality',
        'eoa_normality',
        'acceleration_time_normality',
        'lvot_vti_normality',
        'lv_mass_normality',
        'ivs_diastole_normality',
        'pw_diastole_normality',
        'lvidend_systole_normality',
        'lvidend_diastole_normality',
        'ejection_fraction_normality',

        'peak_velocity_abnormality',
        'velocity_time_integral_abnormality',
        'peak_gradient_abnormality',
        'mean_gradient_abnormality',
        'heart_rate_abnormality',
        'stroke_volume_abnormality',
        'dvi_abnormality',
        'eoa_abnormality',
        'acceleration_time_abnormality',
        'lvot_vti_abnormality',
        'lv_mass_abnormality',
        'ivs_diastole_abnormality',
        'pw_diastole_abnormality',
        'lvidend_systole_abnormality',
        'lvidend_diastole_abnormality',
        'ejection_fraction_abnormality',
        
        'is_reviewed'

    ];
    protected $dates = ['echodate'];

    public function preoperatives()
    {
        return $this->belongsTo(PreOperativeData::class);
    }

    public function echodicomfiles(){
        return $this->hasMany(EchoDicomFile::class);
    }
}
