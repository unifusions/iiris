<?php

namespace App\Services;

use App\Models\Echocardiography;
use Illuminate\Http\Request;

class EchocardiographyService
{
     public function createPreoperativeEchocardiography(Request $request): Echocardiography
     {
          $echocardiography = Echocardiography::Create([
               'case_report_form_id' => $request->crf->id,
               'pre_operative_data_id'  => $request->preoperative->id,
               'echodate'=> $request->echodate,
               'peak_velocity'=> $request->peak_velocity,
               'velocity_time_integral'=> $request->velocity_time_integral,
               'peak_gradient'=> $request->peak_gradient,
               'mean_gradient'=> $request->mean_gradient,
               'heart_rate'=> $request->heart_rate,
               'stroke_volume'=> $request->stroke_volume,
               'dvi'=> $request->dvi,
               'eoa'=> $request->eoa,
               'acceleration_time'=> $request->acceleration_time,
               'lvot_vti'=> $request->lvot_vti,
               'lv_mass'=> $request->lv_mass,
               'ivs_diastole'=> $request->ivs_diastole,
               'pw_diastole'=> $request->pw_diastole,
               'lvidend_systole'=> $request->lvidend_systole,
               'lvidend_diastole'=> $request->lvidend_diastole,
               'ejection_fraction'=> $request->ejection_fraction
          ]);

          return $echocardiography;
     }

     public function createPostoperativeEchocardiography(Request $request): Echocardiography
     {
          $echocardiography = Echocardiography::Create([
               'case_report_form_id' => $request->crf->id,
               'post_operative_data_id'  => $request->postoperative->id,
               'echodate'=> $request->echodate,
               'peak_velocity'=> $request->peak_velocity,
               'velocity_time_integral'=> $request->velocity_time_integral,
               'peak_gradient'=> $request->peak_gradient,
               'mean_gradient'=> $request->mean_gradient,
               'heart_rate'=> $request->heart_rate,
               'stroke_volume'=> $request->stroke_volume,
               'dvi'=> $request->dvi,
               'eoa'=> $request->eoa,
               'acceleration_time'=> $request->acceleration_time,
               'lvot_vti'=> $request->lvot_vti,
               'lv_mass'=> $request->lv_mass,
               'ivs_diastole'=> $request->ivs_diastole,
               'pw_diastole'=> $request->pw_diastole,
               'lvidend_systole'=> $request->lvidend_systole,
               'lvidend_diastole'=> $request->lvidend_diastole,
               'ejection_fraction'=> $request->ejection_fraction
          ]);

          return $echocardiography;
     }

     public function updatePreoperativeEchocardiography(Request $request, Echocardiography $echocardiography): Echocardiography
     {

          $echocardiography->echodate= $request->echodate;
          $echocardiography->peak_velocity= $request->peak_velocity;
          $echocardiography->velocity_time_integral= $request->velocity_time_integral;
          $echocardiography->peak_gradient= $request->peak_gradient;
          $echocardiography->mean_gradient= $request->mean_gradient;
          $echocardiography->heart_rate= $request->heart_rate;
          $echocardiography->stroke_volume= $request->stroke_volume;
          $echocardiography->dvi= $request->dvi;
          $echocardiography->eoa= $request->eoa;
          $echocardiography->acceleration_time= $request->acceleration_time;
          $echocardiography->lvot_vti= $request->lvot_vti;
          $echocardiography->lv_mass= $request->lv_mass;
          $echocardiography->ivs_diastole= $request->ivs_diastole;
          $echocardiography->pw_diastole= $request->pw_diastole;
          $echocardiography->lvidend_systole= $request->lvidend_systole;
          $echocardiography->lvidend_diastole= $request->lvidend_diastole;
          $echocardiography->ejection_fraction= $request->ejection_fraction;

          
          $echocardiography->save();
          return $echocardiography;
     }
}
