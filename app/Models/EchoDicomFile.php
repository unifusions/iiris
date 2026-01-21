<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EchoDicomFile extends Model
{
    use HasFactory;
    protected $fillable = [
        'echocardiography_id',
        'uuid',
        'file_name',
        'file_path',
    ];
    public function echocardiographies(){
        return $this->belongsTo(Echocardiography::class);
    }
}
