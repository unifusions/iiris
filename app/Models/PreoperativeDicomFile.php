<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreoperativeDicomFile extends Model
{
    use HasFactory;
    protected $fillable = [
        'pre_operative_data_id',
        'uuid',
        'file_name',
        'file_path',
    ];
}
