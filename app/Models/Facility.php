<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\FilterByFacility;

class Facility extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
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
