<?php

namespace App\Traits;

use Illuminate\Support\Facades\Auth;

trait FilterByFacility{
     protected static function bootFilterByFacility(){
          if(Auth::check()){
               static::creating(function ($model){

                    $model->facility_id = Auth::user()->facility_id;
               });
          }

          // {
          //      if (auth()->check()) {
          //          static::creating(function ($model) {
          //              $model->created_by_user_id = auth()->id();
          //          });
           
          //          // if user is not administrator - role_id 1
          //          if (auth()->user()->role_id != 1) {
          //              static::addGlobalScope('created_by_user_id', function (Builder $builder) {
          //                  $builder->where('created_by_user_id', auth()->id());
          //              });
          //          }
          //      }
          //  }
     }
}

