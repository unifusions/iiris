<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class admins
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if(auth()->check()){
            
            if(auth()->user()->role_id == '4' || auth()->user()->role_id == '3'  ){
                abort(403);
            }

        }
        return $next($request);
    }
}
