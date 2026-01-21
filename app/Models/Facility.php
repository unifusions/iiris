<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\FilterByFacility;
use Illuminate\Database\Eloquent\SoftDeletes;

class Facility extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'uid',
        'address_line_1',
        'address_line_2',
        'city',
        'state',
        'pin_code'
    ];

    public function users(){
        return $this->hasMany(User::class);
    }
}
