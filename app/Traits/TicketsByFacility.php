<?php

namespace App\Traits;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

trait TicketsByFacility{
     protected static function bootTicketsByFacility(){

          // static::creating(function ($model)
          // {
          //     if (auth()->check()) {
          //         $model->user_id = auth()->id();
          //     }
          // });
          
          
          static::addGlobalScope('facility_id', function (Builder $builder) {
              if (auth()->check()) {
               if(auth()->user()->role_id===4 || auth()->user()->role_id===3){
                    $builder->where('facility_id', auth()->user()->facility_id)->where('to_user_id', auth()->id())->orWhere('from_user_id', auth()->id());
               }

               // if(auth()->user()->role_id===3){
               //      $builder->where('facility_id', auth()->user()->facility_id)->where('from_user_id', auth()->id());
               // }
                  
              }
          });
      
          //dd(auth()->user());


               //     if (Auth::user()->role_id === 4) {
               //         static::addGlobalScope('user_id', function (Builder $builder) {
               //             $builder->where('user_id', auth()->id());
               //         });
               //     }
               
           
     }
}


