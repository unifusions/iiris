<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MedicalHistory extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'pre_operative_data_id',
        'diagnosis',
        'duration',
        'treatment',
        'on_treatment',

    ];
    public function preoperatives()
    {
        return $this->belongsTo(PreOperativeData::class);
    }
}
