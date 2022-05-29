<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreOperativeData extends Model
{
    use HasFactory;

    protected $fillable = [
        'case_report_form_id' ,
        'visit_no',
        'form_status',
        'visit_status',


    ];

    public function physicalexaminations(){
        return $this->hasOne(PhysicalExamination::class);
    }

    public function symptoms(){
        return $this->hasOne(OperativeSymptoms::class);
    }

    public function crf(){
        return $this->belongsTo(CaseReportForm::class);
    }

}



