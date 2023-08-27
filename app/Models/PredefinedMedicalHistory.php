<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PredefinedMedicalHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'pre_operative_data_id',
        'hasMedHis',
        'diabetes_mellitus',
        'diabetes_mellitus_duration',
        'diabetes_mellitus_treatment',
        'hypertension',
        'hypertension_duration',
        'hypertension_treatment',
        'copd',
        'copd_duration',
        'copd_treatment',
        'respiratory_failure',
        'respiratory_failure_duration',
        'respiratory_failure_treatment',
        'stroke',
        'stroke_duration',
        'stroke_treatment',
        'peripheral_vascular_disease',
        'peripheral_vascular_disease_duration',
        'peripheral_vascular_disease_treatment',
        'others',
        'others_specify',
        'others_duration',
        'others_treatment',
    ];


    public function preoperatives()
    {
        return $this->belongsTo(PreOperativeData::class);
    }
}
