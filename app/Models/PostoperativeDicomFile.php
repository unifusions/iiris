<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostoperativeDicomFile extends Model
{
    use HasFactory;
    protected $fillable = [
        'post_operative_data_id',
        'uuid',
        'file_name',
        'file_path',
    ];
}
