<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScheduledVisit extends Model
{
    use HasFactory;
    protected $fillable = [
        'case_report_form_id',
        'hasMedications','physical_activity', 'pod',
        'visit_no',
        'form_status',
        'visit_status',
    ];


    public function casereportform(){
        return $this->belongsTo(CaseReportForm::class, 'case_report_form_id', 'id');
    }

    public function approvalremarks(){
        return $this->hasOne(ScheduledVisitApprovalRemark::class);
    }

    public function fileuploads(){
        return $this->hasMany(ScheduledVisitDicomFile::class, 'scheduled_visits_id', 'id');
    }

    public function physicalexaminations()
    {
        return $this->hasOne(PhysicalExamination::class, 'scheduled_visits_id', 'id');
    }

    public function symptoms(){
        return $this->hasOne(OperativeSymptoms::class);
    }
    public function personalhistories()
    {
        return $this->hasOne(PersonalHistory::class, 'scheduled_visits_id', 'id');
    }

    public function labinvestigations(){
        return $this->hasOne(LabInvestigation::class, 'scheduled_visits_id', 'id');
    }

    public function echocardiographies(){
        return $this->hasOne(Echocardiography::class, 'scheduled_visits_id', 'id');
    }

    public function electrocardiograms(){
        return $this->hasOne(Electrocardiogram::class, 'scheduled_visits_id', 'id');
    }

    public function safetyparameters(){
        return $this->hasOne(SafetyParameter::class, 'scheduled_visits_id', 'id');
    }

    public function physicalactivities(){
        return $this->hasMany(PhysicalActivity::class, 'scheduled_visits_id', 'id');
    }
    public function medications(){
        return $this->hasMany(Medication::class, 'scheduled_visits_id', 'id');
    }

}
