<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class TicketsUserScope implements Scope{
     public function apply(Builder $builder, Model $model)
     {
          if(auth()->check){
               $builder->where('from_user_id', auth()->id());
          }
     }
}