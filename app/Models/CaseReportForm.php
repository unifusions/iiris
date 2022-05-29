<?php

namespace App\Models;

use App\Traits\FilterByFacility;
use Attribute;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class CaseReportForm extends Model
{
    use HasFactory, FilterByFacility, SoftDeletes;
    
    protected $primarykey = 'subject_id';
    protected $fillable = [
        'user_id',
        'subject_id',
        'facility_id',
        'date_of_consent',
        'uhid',
        'gender',
        'date_of_birth',
        
    ];

    public function getDateOfConsentAttribute(){
        return Carbon::createFromFormat('Y-m-d', $this->attributes['date_of_consent'])->format('d/m/Y');
    }

    public function getDateOfBirthAttribute(){
        return Carbon::createFromFormat('Y-m-d', $this->attributes['date_of_birth'])->format('d/m/Y');
    }

    public function getCreatedAtAttribute(){
        return Carbon::createFromFormat('Y-m-d H:i:s', $this->attributes['created_at'])->format('d/m/Y');
    }


    public function getAgeAttribute(){
        $current = Carbon::now();
        $subjectdoB = Carbon::createFromFormat('Y-m-d', $this->attributes['date_of_birth']);
        $age = $subjectdoB->diffInYears($current);
        return $age;
    }
    
    public function facility(){
        return $this->belongsTo(Facility::class);
    }

    public function preoperatives(){
        return $this->hasOne(PreOperativeData::class);
    }

    public function intraoperatives(){
        return $this->hasOne(IntraOperativeData::class);
    }

    public function postoperatives(){
        return $this->hasOne(PostOperativeData::class);
    }

    public function scheduledvisits(){
        return $this->hasMany(ScheduledVisit::class);
    }

    public function unscheduledvisits(){
        return $this->hasMany(UnscheduledVisit::class);
    }
}
