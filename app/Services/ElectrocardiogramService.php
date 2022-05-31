<?php

namespace App\Services;

use App\Models\Electrocardiogram;
use Illuminate\Http\Request;

class ElectrocardiogramService
{
     public function createPreoperativeElectrocardiogram(Request $request): Electrocardiogram
     {
          $electrocardiogram = Electrocardiogram::Create([
               'case_report_form_id' => $request->crf->id,
               'pre_operative_data_id'  => $request->preoperative->id,
               'ecg_date' => $request->ecg_date,
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


          $electrocardiogram->ecg_date = $request->ecg_date;
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
