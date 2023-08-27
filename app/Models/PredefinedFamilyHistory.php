<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PredefinedFamilyHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'pre_operative_data_id',
        'diabetes_mellitus',
        'diabetes_mellitus_relation',
        'hypertension',
        'hypertension_relation',
        'coronary_artery_disease',
        'coronary_artery_disease_relation',
        'aortic_disease',
        'aortic_disease_relation',
        'others',
        'others_specify',
        'others_relation'
    ];

    protected $casts = [
        'diabetes_mellitus_relation' =>  AsArrayObject::class,
        'hypertension_relation' => AsArrayObject::class,
        'coronary_artery_disease_relation' => AsArrayObject::class,
        'aortic_disease_relation' => AsArrayObject::class,
        'others_relation' => AsArrayObject::class,
    ];



}
