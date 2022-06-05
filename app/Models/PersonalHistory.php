<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PersonalHistory extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'pre_operative_data_id',
        'scheduled_visits_id',
        'unscheduled_visits_id',
        'smoking',
        'cigarettes',
        'smoking_since',
        'smoking_stopped',
        'alchohol',
        'quantity',
        'alchohol_since',
        'alchohol_stopped',
        'tobacco',
        'tobacco_type',
        'tobacco_quantity',
        'tobacco_since',
        'tobacco_stopped',
    ];

    protected $dates=[ 'smoking_since',
    'smoking_stopped',
    
    'alchohol_since',
    'alchohol_stopped',
    
    'tobacco_since',
    'tobacco_stopped',];


    protected function smokingSince(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => !empty($value) ? Carbon::createFromFormat('Y-m-d', $value)->format('F Y') : null,
            set: fn ($value) => !empty($value) ? Carbon::createFromFormat('F Y', $value)->format('Y-m-d') : null
        );
    }

    protected function smokingStopped(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => !empty($value) ? Carbon::createFromFormat('Y-m-d', $value)->format('F Y') : null,
            set: fn ($value) => !empty($value) ? Carbon::createFromFormat('F Y', $value)->format('Y-m-d') : null
        );
    }

    protected function alchoholSince(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => !empty($value) ? Carbon::createFromFormat('Y-m-d', $value)->format('F Y') : null,
            set: fn ($value) => !empty($value) ? Carbon::createFromFormat('F Y', $value)->format('Y-m-d') : null
        );
    }

    protected function alchoholStopped(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => !empty($value) ? Carbon::createFromFormat('Y-m-d', $value)->format('F Y') : null,
            set: fn ($value) => !empty($value) ? Carbon::createFromFormat('F Y', $value)->format('Y-m-d') : null
        );
    }

    protected function tobaccoSince(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => !empty($value) ? Carbon::createFromFormat('Y-m-d', $value)->format('F Y') : null,
            set: fn ($value) => !empty($value) ? Carbon::createFromFormat('F Y', $value)->format('Y-m-d') : null
        );
    }
    protected function tobaccoStopped(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => !empty($value) ? Carbon::createFromFormat('Y-m-d', $value)->format('F Y') : null,
            set: fn ($value) => !empty($value) ? Carbon::createFromFormat('F Y', $value)->format('Y-m-d') : null
        );
    }    
}
