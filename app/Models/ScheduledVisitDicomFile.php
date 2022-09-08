<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScheduledVisitDicomFile extends Model
{
    use HasFactory;
    protected $fillable = [
        'scheduled_visits_id',
        'uuid',
        'file_name',
        'file_path',
    ];
}
