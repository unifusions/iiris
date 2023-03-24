<?php

namespace App\Services;

use App\Models\Electrocardiogram;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ElectrocardiogramService
{
     public function createPreoperativeElectrocardiogram(Request $request): Electrocardiogram
     {
          $electrocardiogram = Electrocardiogram::Create([
               'case_report_form_id' => $request->crf->id,
               'pre_operative_data_id'  => $request->preoperative->id,
               'ecg_date' => Carbon::parse($request->ecg_date)->addHours(5)->addMinutes(30),
               'rhythm' => $request->rhythm,
               'rhythm_others' => $request->rhythm_others,
               'rate' => $request->rate,
               'lvh' => $request->lvh,
               'lvs' => $request->lvs,
               'printerval' => $request->printerval,
               'qrsduration' => $request->qrsduration
          ]);

          return $electrocardiogram;
     }

     public function createPostoperativeElectrocardiogram(Request $request): Electrocardiogram
     {
          $electrocardiogram = Electrocardiogram::Create([
               'case_report_form_id' => $request->crf->id,
               'post_operative_data_id'  => $request->postoperative->id,
               'ecg_date' => Carbon::parse($request->ecg_date)->addHours(5)->addMinutes(30),
               'rhythm' => $request->rhythm,
               'rhythm_others' => $request->rhythm_others,
               'rate' => $request->rate,
               'lvh' => $request->lvh,
               'lvs' => $request->lvs,
               'printerval' => $request->printerval,
               'qrsduration' => $request->qrsduration
          ]);

          return $electrocardiogram;
     }

     public function createSVElectrocardiogram(Request $request): Electrocardiogram
     {
          $electrocardiogram = Electrocardiogram::Create([
               'case_report_form_id' => $request->crf->id,
               'scheduled_visits_id'  => $request->scheduledvisit->id,
               'ecg_date' => Carbon::parse($request->ecg_date)->addHours(5)->addMinutes(30),
               'rhythm' => $request->rhythm,
               'rhythm_others' => $request->rhythm_others,
               'rate' => $request->rate,
               'lvh' => $request->lvh,
               'lvs' => $request->lvs,
               'printerval' => $request->printerval,
               'qrsduration' => $request->qrsduration
          ]);

          return $electrocardiogram;
     }


     public function createUSVElectrocardiogram(Request $request): Electrocardiogram
     {
          $electrocardiogram = Electrocardiogram::Create([
               'case_report_form_id' => $request->crf->id,
               'unscheduled_visits_id'  => $request->unscheduledvisit->id,
               'ecg_date' =>  Carbon::parse($request->ecg_date)->addHours(5)->addMinutes(30),
               'rhythm' => $request->rhythm,
               'rhythm_others' => $request->rhythm_others,
               'rate' => $request->rate,
               'lvh' => $request->lvh,
               'lvs' => $request->lvs,
               'printerval' => $request->printerval,
               'qrsduration' => $request->qrsduration
          ]);

          return $electrocardiogram;
     }


     public function updatePreoperativeElectrocardiogram(Request $request, Electrocardiogram $electrocardiogram): Electrocardiogram
     {


          $electrocardiogram->ecg_date = Carbon::parse($request->ecg_date)->addHours(5)->addMinutes(30);
          $electrocardiogram->rhythm = $request->rhythm;
          $electrocardiogram->rhythm_others = $request->rhythm_others;
          $electrocardiogram->rate = $request->rate;
          $electrocardiogram->lvh = $request->lvh;
          $electrocardiogram->lvs = $request->lvs;
          $electrocardiogram->printerval = $request->printerval;
          $electrocardiogram->qrsduration = $request->qrsduration;
          $electrocardiogram->save();
          return $electrocardiogram;
     }
}
