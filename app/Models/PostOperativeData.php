<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostOperativeData extends Model
{
    use HasFactory;
    protected $fillable = [
        'case_report_form_id',
        'visit_no',
        'form_status',
        'visit_status',
    ];
    public function casereportform(){
        return $this->belongsTo(CaseReportForm::class, 'case_report_form_id', 'id');
    }
    public function physicalexaminations()
    {
        return $this->hasOne(PhysicalExamination::class);
    }

    public function symptoms(){
        return $this->hasOne(OperativeSymptoms::class);
    }

    public function labinvestigations(){
        return $this->hasOne(LabInvestigation::class);
    }
    public function electrocardiograms()
    {
        return $this->hasOne(Electrocardiogram::class);
    }
    public function echocardiographies()
    {
        return $this->hasOne(Echocardiography::class);
    }
    public function safetyparameters(){
        return $this->hasOne(SafetyParameter::class);
    }
    public function medications(){
        return $this->hasMany(Medication::class);
    }
}
