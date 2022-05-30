<?php

namespace App\Models;

use Attribute;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LabInvestigation extends Model
{
    use HasFactory;
    protected $fillable=[

        'case_report_form_id', 'pre_operative_data_id', 'post_operative_data_id',
        'scheduled_visits_id', 'unscheduled_visits_id',
        'li_date',
        'rbc',
        'wbc',
        'hemoglobin',
        'hematocrit',
        'platelet',
        'blood_urea',
        'serum_creatinine',
        'alt',
        'ast',
        'alp',
        'albumin',
        'total_protein',
        'bilirubin',
        'pt_inr'
    ];

    protected $dates = ['li_date'];

   

    // public function setLiDateAttribute(){
    //     return Carbon::parse('d/m/Y', $this->attributes['li_date'])->format('Y-m-d');
    // }
    
    // public function getLiDateAttribute(){
    //     return Carbon::createFromFormat('Y-m-d', $this->attributes['li_date'])->format('d/m/Y');
    // }




}
