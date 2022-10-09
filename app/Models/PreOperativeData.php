<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreOperativeData extends Model
{
    use HasFactory;

    protected $fillable = [
        'case_report_form_id',
        'visit_no',
        'medical_history',
        'surgical_history', 
        'family_history',
        'physical_activity',
        'hasMedications',
        'form_status',
        'visit_status',
        'is_submitted'


    ];
    protected $casts = [
        'medical_history' => 'boolean'
    ];

    public function casereportform()
    {
        return $this->belongsTo(CaseReportForm::class, 'case_report_form_id', 'id');
    }
    public function physicalexaminations()
    {
        return $this->hasOne(PhysicalExamination::class);
    }

    public function approvalremarks(){
        return $this->hasMany(PreoperativeApprovalRemark::class)->orderBy('created_at', 'DESC');
    }


    public function symptoms()
    {
        return $this->hasOne(OperativeSymptoms::class);
    }

    public function medicalhistories(){
        return $this->hasMany(MedicalHistory::class);
    }
    public function surgicalhistories(){
        return $this->hasMany(SurgicalHistory::class);
    }
    public function familyhistories(){
        return $this->hasMany(FamilyHistory::class);
    }
    public function personalhistories(){
        return $this->hasOne(PersonalHistory::class);
    }
    public function physicalactivities(){
        return $this->hasMany(PhysicalActivity::class);
    }
    public function labinvestigations()
    {
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

    public function echodicomfiles(){
        return $this->hasManyThrough(EchoDicomFile::class, Echocardiography::class);
    }

    public function fileuploads(){
        return $this->hasMany(PreoperativeDicomFile::class);
    }

    public function medications(){
        return $this->hasMany(Medication::class);
    }
}
