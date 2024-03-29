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

        'cabg',
        'mitral_valve',
        'mitral_valve_replacement',
        'aortic_root',
        'ascending_aorta',
        'aortic_arch',
        'concomitant_procedure_others',
        'concomitant_procedure_others_specify',

        'concomitant_procedure',
        'all_paravalvular_leak',
        'all_paravalvular_leak_specify',
        'major_paravalvular_leak',
        'major_paravalvular_leak_specify',

        'r_all_paravalvular_leak',
        'r_major_paravalvular_leak',
        'date_of_review',
        'r_comments'
    ];
    protected $dates = ['date_of_procedure', 'date_of_review'];



    public function casereportform()
    {
        return $this->belongsTo(CaseReportForm::class);
    }
    public function approvalremarks(){
        return $this->hasMany(IntraoperativeApprovalRemark::class);
    }

    public function fileuploads()
    {
        return $this->hasMany(IntraoperativeDicomFile::class);
    }
}
