<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SafetyParameter extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'post_operative_data_id',
        'scheduled_visits_id',
        'unscheduled_visits_id',
        'structural_value_deterioration',
        'valve_thrombosis',
        'all_paravalvular_leak',
        'major_paravalvular_leak',
        'non_structural_value_deterioration',
        'thromboembolism',
        'all_bleeding',
        'major_bleeding',
        'endocarditis',
        'all_mortality',
        'valve_mortality',
        'valve_related_operation',
        'explant',
        'haemolysis',
        'sudden_unexplained_death',
        'cardiac_death',

        'has_structural_value_deterioration',
        'has_valve_thrombosis',
        'has_all_paravalvular_leak',
        'has_major_paravalvular_leak',
        'has_non_structural_value_deterioration',
        'has_thromboembolism',
        'has_all_bleeding',
        'has_major_bleeding',
        'has_endocarditis',
        'has_all_mortality',
        'has_valve_mortality',
        'has_valve_related_operation',
        'has_explant',
        'has_haemolysis',
        'has_sudden_unexplained_death',
        'has_cardiac_death'
    ];
}
