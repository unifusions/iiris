<?php

namespace App\Http\Controllers\Reviewer;

use App\Http\Controllers\Controller;
use App\Models\Echocardiography;
use Illuminate\Http\Request;

class EchocardiographyReviewed extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, Echocardiography $echocardiography)
    {
      $echocardiography->is_reviewed = true;
      $echocardiography->save();
      $message = 'Echocardiography has been reviewed';
      return redirect()->back()->with(['message' => $message]);
      
    }
}
