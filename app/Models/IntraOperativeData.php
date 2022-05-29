<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IntraOperativeData extends Model
{
    use HasFactory;

    protected $fillable = [
        'case_report_form_id' ,
        'visit_no',
        'form_status',
        'visit_status',
    ];
}
