<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IntraOperativeData extends Model
{
    use HasFactory;

    protected $fillable = [
        'case_report_form_id',
        'visit_no',
        'form_status',
        'is_submitted',
        'visit_status',
        'date_of_procedure',
        'arterial_cannulation',
        'venous_cannulation',
        'cardioplegia',
        'aortotomy',
        'aortotomy_others',
        'annular_suturing_technique',
        'annular_suturing_others',
        'tcb_time',
        'acc_time',
        'concomitant_procedure',
        'all_paravalvular_leak',
        'all_paravalvular_leak_specify',
        'major_paravalvular_leak',
        'major_paravalvular_leak_specify'
    ];
    protected $dates = ['date_of_procedure'];



    public function casereportform()
    {
        return $this->belongsTo(CaseReportForm::class);
    }
    public function fileuploads()
    {
        return $this->hasMany(IntraoperativeDicomFile::class);
    }
}
