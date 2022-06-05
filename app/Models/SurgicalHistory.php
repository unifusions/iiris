<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SurgicalHistory extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'pre_operative_data_id',
        'diagnosis',
        'sh_date',
        'treatment'
    ];

    protected $dates = ['sh_date'];
    
    public function preoperatives(){
        return $this->belongsTo(PreOperativeData::class);
    }

}
