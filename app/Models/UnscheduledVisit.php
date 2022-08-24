<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnscheduledVisit extends Model
{
    use HasFactory;
    protected $fillable = [
        'case_report_form_id',
        'pod',
        'visit_no',
        
    ];

    public function casereportform(){

        return $this->belongsTo(CaseReportForm::class, 'case_report_form_id', 'id');
    }
    
    public function approvalremarks(){
        return $this->hasOne(UnscheduledVisitApprovalRemark::class);
    }

    public function physicalexaminations()
    {
        return $this->hasOne(PhysicalExamination::class, 'unscheduled_visits_id', 'id');
    }

    public function symptoms(){
        return $this->hasOne(OperativeSymptoms::class);
    }
    public function personalhistories()
    {
        return $this->hasOne(PersonalHistory::class, 'unscheduled_visits_id', 'id');
    }

    public function labinvestigations(){
        return $this->hasOne(LabInvestigation::class, 'unscheduled_visits_id', 'id');
    }

    public function echocardiographies(){
        return $this->hasOne(Echocardiography::class, 'unscheduled_visits_id', 'id');
    }

    public function electrocardiograms(){
        return $this->hasOne(Electrocardiogram::class, 'unscheduled_visits_id', 'id');
    }

    public function safetyparameters(){
        return $this->hasOne(SafetyParameter::class, 'unscheduled_visits_id', 'id');
    }

    public function physicalactivities(){
        return $this->hasMany(PhysicalActivity::class, 'unscheduled_visits_id', 'id');
    }
    public function medications(){
        return $this->hasMany(Medication::class, 'unscheduled_visits_id', 'id');
    }
}
