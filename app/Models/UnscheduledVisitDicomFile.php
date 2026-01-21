<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnscheduledVisitDicomFile extends Model
{
    use HasFactory;
    protected $fillable = [
        'unscheduled_visits_id',
        'uuid',
        'file_name',
        'file_path',
    ];
}
