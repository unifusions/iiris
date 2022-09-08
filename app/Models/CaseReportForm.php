<?php

namespace App\Models;

use App\Traits\FilterByFacility;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


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
   protected $appends = [
    'preoperative', 'intraoperative', 'postoperative',  'unscheduledvisits', 'scheduledvisits', 
    // 'physicalexaminations',
   'facility', 'user'
  ];
    // protected $dates = ['date_of_consent','date_of_birth'];

    protected $casts = [
        'date_of_consent' => 'datetime:d/m/Y',
       // 'date_of_birth' => 'datetime:d/m/Y',
        'created_at' => 'datetime:d/m/Y',
    ];
   
    public function user(){
        return $this->belongsTo(User::class);
    }

    public function getUserAttribute(){
        return $this->user()->first();
    }
   
    public function getAgeAttribute(){
        // $current = Carbon::now();
        // $subjectdoB = Carbon::createFromFormat('Y-m-d', $this->attributes['date_of_birth']);
        // $age = $subjectdoB->diffInYears($current);
        // return $age;
    }
    
    public function facility(){
        return $this->belongsTo(Facility::class);
    }
    public function getFacilityAttribute(){
        return $this->facility()->first();
    }

    public function preoperatives(){
        return $this->hasOne(PreOperativeData::class);
    }

    public function getPreoperativeAttribute(){
        return $this->preoperatives()->first();
    }


    public function intraoperatives(){
        return $this->hasOne(IntraOperativeData::class);
    }

    public function getIntraoperativeAttribute(){
        return $this->intraoperatives()->first();
    }


    public function postoperatives(){
        return $this->hasOne(PostOperativeData::class);
    }
    public function getPostoperativeAttribute(){
        return $this->postoperatives()->first();
    }
    

    public function scheduledvisits(){
        return $this->hasMany(ScheduledVisit::class);
    }

    public function getScheduledVisitsAttribute(){
        return $this->scheduledvisits()->get();
    }

    public function unscheduledvisits(){
        return $this->hasMany(UnscheduledVisit::class);
    }

    public function getUnscheduledVisitsAttribute(){
        return $this->unscheduledvisits()->get();
    }

    public function getPhysicalexaminationsAttribute(){
        $pe = [
            'preoperative' => $this->hasManyThrough(PhysicalExamination::class, PreOperativeData::class,'case_report_form_id','pre_operative_data_id','id','id')->first(),
            'postoperative' => $this->hasManyThrough(PhysicalExamination::class, PreOperativeData::class,'case_report_form_id','post_operative_data_id','id','id')->first(),
            'scheduledvisits' => $this->hasManyThrough(PhysicalExamination::class, ScheduledVisit::class,'case_report_form_id','scheduled_visits_id','id','id')->get(),
            'unscheduledvisits' => $this->hasManyThrough(PhysicalExamination::class, UnscheduledVisit::class,'case_report_form_id','unscheduled_visits_id','id','id')->get(),

        ];
        return $pe;

    }

    public function preoperativeEchocardiographies(){
        return $this->hasManyThrough(Echocardiography::class, PreOperativeData::class,'case_report_form_id','pre_operative_data_id','id','id');
    }
}