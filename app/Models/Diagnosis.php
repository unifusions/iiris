<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diagnosis extends Model
{
    use HasFactory;

    protected $fillable = [
        'pre_operative_data_id',
        'diagnosis_data'
    ];

    public function preoperatives()
    {
        return $this->belongsTo(PreOperativeData::class);
    }

}
