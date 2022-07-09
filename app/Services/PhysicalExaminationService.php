<?php

namespace App\Services;

use App\Models\PhysicalExamination;



use Illuminate\Http\Request;


class PhysicalExaminationService
{

     public function createPreOperativePhysicalExamination(Request $request): PhysicalExamination
     {
          $physicalexamination = PhysicalExamination::Create([
               'case_report_form_id' => $request->crf->id,
               'pre_operative_data_id' => $request->preoperative->id,
               'height' => $request->height,
               'weight' => $request->weight,
               'bsa' => $request->bsa,
               'heart_rate' => $request->heart_rate,
               'systolic_bp' => $request->systolic_bp,
               'diastolic_bp' => $request->diastolic_bp
          ]);

          return $physicalexamination;
     }

     public function updatePreOperativePhysicalExamination(Request $request, $physicalexamination): PhysicalExamination
     {
          
          $physicalexamination = PhysicalExamination::find($physicalexamination->id);
          $physicalexamination->height = $request->height;
          $physicalexamination->weight = $request->weight;
          $physicalexamination->bsa = $request->bsa;
          $physicalexamination->heart_rate = $request->heart_rate;
          $physicalexamination->systolic_bp =  $request->systolic_bp;
          $physicalexamination->diastolic_bp =  $request->diastolic_bp;
          $physicalexamination->save();
          return $physicalexamination;
     }

     public function createPostOperativePhysicalExamination(Request $request): PhysicalExamination
     {
          $physicalexamination = PhysicalExamination::Create([
               'case_report_form_id' => $request->crf->id,
               'post_operative_data_id' => $request->postoperative->id,
               'height' => $request->height,
               'weight' => $request->weight,
               'bsa' => $request->bsa,
               'heart_rate' => $request->heart_rate,
               'systolic_bp' => $request->systolic_bp,
               'diastolic_bp' => $request->diastolic_bp
          ]);

          return $physicalexamination;
     }

     public function createScheduledVisitPhysicalExamination(Request $request): PhysicalExamination
     {
          $physicalexamination = PhysicalExamination::Create([
               'case_report_form_id' => $request->crf->id,
               'scheduled_visits_id' => $request->scheduledvisit->id,
               'height' => $request->height,
               'weight' => $request->weight,
               'bsa' => $request->bsa,
               'heart_rate' => $request->heart_rate,
               'systolic_bp' => $request->systolic_bp,
               'diastolic_bp' => $request->diastolic_bp
          ]);

          return $physicalexamination;
     }


}
