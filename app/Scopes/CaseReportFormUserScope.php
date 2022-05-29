<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class CaseReportFormUserScope implements Scope{
     public function apply(Builder $builder, Model $model)
     {
          if(auth()->check){
               $builder->where('user_id', auth()->id());
          }
     }
}