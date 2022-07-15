<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OperativeSymptoms extends Model
{
    use HasFactory;

    protected $fillable = [
        'case_report_form_id',
        'pre_operative_data_id',
        'post_operative_data_id',
        'scheduled_visit_id','unscheduled_visit_id',
        'symptoms',
        'angina', 'angina_class', 'angina_duration',
        'dyspnea', 'dyspnea_class', 'dyspnea_duration',
        'syncope', 'syncope_duration',
        'palpitation', 'palpitation_duration',
        'giddiness', 'giddiness_duration',
        'fever', 'fever_duration',
        'heart_failure_admission', 'heart_failure_admission_duration',
        'others', 'others_text', 'others_duration'

    ];

    protected $casts = [
        'angina_duration' => 'array',
        'dyspnea_duration' => 'array',
        'syncope_duration' => 'array',
        'palpitation_duration' => 'array',
        'giddiness_duration' => 'array',
        'fever_duration' => 'array',
        'heart_failure_admission_duration' => 'array',
        'others_duration' => 'array',
    ];

    public function preoperatives(){
        return $this->belongsTo(PreOperativeData::class);
    }
}
