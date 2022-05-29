<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaseReportFormVisit extends Model
{
    use HasFactory;
    protected $fillable = [
        'case_report_forms_id',
        'form_status',
        'visit_no',
        'visit_status'
    ];

    public function casereportform(){
        return $this->belongsTo(CaseReportForm::class);
    }
    public function casereportformvisitmode(){
        return $this->hasMany(CaseReportFormVisitMode::class);
    }
}
