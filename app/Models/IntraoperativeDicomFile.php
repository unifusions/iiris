<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class IntraoperativeDicomFile extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'intra_operative_data_id',
        'uuid',
        'file_name',
        'file_path',
    ];
    
}
