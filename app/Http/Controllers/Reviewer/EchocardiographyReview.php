<?php

namespace App\Http\Controllers\Reviewer;

use App\Http\Controllers\Controller;
use App\Models\Echocardiography;
use Carbon\Carbon;
use Illuminate\Http\Request;

class EchocardiographyReview extends Controller
{
    public function __invoke(Request $request, Echocardiography $echocardiography)
    {
        
        $echocardiography->r_echodate =  Carbon::parse($request->r_echodate)->addHours(5)->addMinutes(30);

        $echocardiography->r_peak_velocity = $request->r_peak_velocity;
        $echocardiography->r_velocity_time_integral= $request->r_velocity_time_integral;
        $echocardiography->r_peak_gradient= $request->r_peak_gradient;
        $echocardiography->r_mean_gradient= $request->r_mean_gradient;
        $echocardiography->r_heart_rate= $request->r_heart_rate;
        $echocardiography->r_stroke_volume= $request->r_stroke_volume;
        $echocardiography->r_dvi= $request->r_dvi;
        $echocardiography->r_eoa= $request->r_eoa;
        $echocardiography->r_acceleration_time= $request->r_acceleration_time;
        $echocardiography->r_lvot_vti= $request->r_lvot_vti;
        $echocardiography->r_lv_mass= $request->r_lv_mass;
        $echocardiography->r_ivs_diastole= $request->r_ivs_diastole;
        $echocardiography->r_pw_diastole= $request->r_pw_diastole;
        $echocardiography->r_lvidend_systole= $request->r_lvidend_systole;
        $echocardiography->r_lvidend_diastole= $request->r_lvidend_diastole;
        $echocardiography->r_ejection_fraction= $request->r_ejection_fraction;

        $echocardiography->peak_velocity_normality =  $request->peak_velocity_normality;
        $echocardiography->velocity_time_integral_normality =  $request->velocity_time_integral_normality;
        $echocardiography->peak_gradient_normality =  $request->peak_gradient_normality;
        $echocardiography->mean_gradient_normality =  $request->mean_gradient_normality;
        $echocardiography->heart_rate_normality =  $request->heart_rate_normality;
        $echocardiography->stroke_volume_normality =  $request->stroke_volume_normality;
        $echocardiography->dvi_normality =  $request->dvi_normality;
        $echocardiography->eoa_normality =  $request->eoa_normality;
        $echocardiography->acceleration_time_normality =  $request->acceleration_time_normality;
        $echocardiography->lvot_vti_normality =  $request->lvot_vti_normality;
        $echocardiography->lv_mass_normality =  $request->lv_mass_normality;
        $echocardiography->ivs_diastole_normality =  $request->ivs_diastole_normality;
        $echocardiography->pw_diastole_normality =  $request->pw_diastole_normality;
        $echocardiography->lvidend_systole_normality =  $request->lvidend_systole_normality;
        $echocardiography->lvidend_diastole_normality =  $request->lvidend_diastole_normality;
        $echocardiography->ejection_fraction_normality =  $request->ejection_fraction_normality;


        $echocardiography->peak_velocity_abnormality =  $request->peak_velocity_abnormality;
        $echocardiography->velocity_time_integral_abnormality =  $request->velocity_time_integral_abnormality;
        $echocardiography->peak_gradient_abnormality =  $request->peak_gradient_abnormality;
        $echocardiography->mean_gradient_abnormality =  $request->mean_gradient_abnormality;
        $echocardiography->heart_rate_abnormality =  $request->heart_rate_abnormality;
        $echocardiography->stroke_volume_abnormality =  $request->stroke_volume_abnormality;
        $echocardiography->dvi_abnormality =  $request->dvi_abnormality;
        $echocardiography->eoa_abnormality =  $request->eoa_abnormality;
        $echocardiography->acceleration_time_abnormality =  $request->acceleration_time_abnormality;
        $echocardiography->lvot_vti_abnormality =  $request->lvot_vti_abnormality;
        $echocardiography->lv_mass_abnormality =  $request->lv_mass_abnormality;
        $echocardiography->ivs_diastole_abnormality =  $request->ivs_diastole_abnormality;
        $echocardiography->pw_diastole_abnormality =  $request->pw_diastole_abnormality;
        $echocardiography->lvidend_systole_abnormality =  $request->lvidend_systole_abnormality;
        $echocardiography->lvidend_diastole_abnormality =  $request->lvidend_diastole_abnormality;
        $echocardiography->ejection_fraction_abnormality =  $request->ejection_fraction_abnormality;


        $echocardiography->save();
        $message = 'Echocardiography reviewed has been submitted';
        return redirect()->back()->with(['message' => $message]);
    }
}
