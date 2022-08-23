<?php

namespace App\Services;

use App\Http\Requests\StoreOperativeSymptomsRequest;
use App\Models\OperativeSymptoms;
use Illuminate\Http\Request;

class OperativeSymptomsService
{
     public function createOperativeSymptoms(StoreOperativeSymptomsRequest $request): OperativeSymptoms
     {

          $preopsymptoms = OperativeSymptoms::Create([
               'case_report_form_id' => $request->case_report_form_id,
               'pre_operative_data_id' => $request->pre_operative_data_id,
               'symptoms' => $request->symptoms ? true : false,
               'angina' => $request->angina !== null ? $request->angina : null,
               'angina_class' => $request->angina_class,
               'angina_duration' => $request->angina_duration,
               'dyspnea' => $request->dyspnea!== null ? $request->dyspnea : null,
               'dyspnea_class' => $request->dyspnea_class,
               'dyspnea_duration' => $request->dyspnea_duration,
               'syncope' => $request->syncope!== null ? $request->syncope : null,
               'syncope_duration' => $request->syncope_duration,
               'palpitation' => $request->palpitation!== null ? $request->palpitation : null,
               'palpitation_duration' => $request->palpitation_duration,
               'giddiness' => $request->giddiness !== null ? $request->giddiness : null, 
               'giddiness_duration' => $request->giddiness_duration,
               'fever' => $request->fever!== null ? $request->fever : null,
               'fever_duration' => $request->fever_duration,
               'heart_failure_admission' => $request->heart_failure_admission !==null ? $request->heart_failure_admission : null,
               'heart_failure_admission_duration' => $request->heart_failure_admission_duration,
               'others' => $request->others !==null ? $request->others : null,
               'others_text' => $request->others_text,
               'others_duration' => $request->others_duration
          ]);

          return $preopsymptoms;
     }

     public function createPostOperativeSymptoms(StoreOperativeSymptomsRequest $request): OperativeSymptoms
     {

        
          $preopsymptoms = OperativeSymptoms::Create([
               'case_report_form_id' => $request->case_report_form_id,
               'post_operative_data_id' => $request->post_operative_data_id,
               'symptoms' => $request->symptoms ? true : false,
               'angina' => $request->angina !== null ? $request->angina : null,
               'angina_class' => $request->angina_class,
               'angina_duration' => $request->angina_duration,
               'dyspnea' => $request->dyspnea!== null ? $request->dyspnea : null,
               'dyspnea_class' => $request->dyspnea_class,
               'dyspnea_duration' => $request->dyspnea_duration,
               'syncope' => $request->syncope!== null ? $request->syncope : null,
               'syncope_duration' => $request->syncope_duration,
               'palpitation' => $request->palpitation!== null ? $request->palpitation : null,
               'palpitation_duration' => $request->palpitation_duration,
               'giddiness' => $request->giddiness !== null ? $request->giddiness : null, 
               'giddiness_duration' => $request->giddiness_duration,
               'fever' => $request->fever!== null ? $request->fever : null,
               'fever_duration' => $request->fever_duration,
               'heart_failure_admission' => $request->heart_failure_admission !==null ? $request->heart_failure_admission : null,
               'heart_failure_admission_duration' => $request->heart_failure_admission_duration,
               'others' => $request->others !==null ? $request->others : null,
               'others_text' => $request->others_text,
               'others_duration' => $request->others_duration
          ]);

          return $preopsymptoms;
     }

     public function createScheduledVisitOperativeSymptoms(StoreOperativeSymptomsRequest $request): OperativeSymptoms
     {

         
          $preopsymptoms = OperativeSymptoms::Create([
               'case_report_form_id' => $request->case_report_form_id,
               'scheduled_visit_id' => $request->scheduled_visit_id,
               'symptoms' => $request->symptoms ? true : false,
               'angina' => $request->angina !== null ? $request->angina : null,
               'angina_class' => $request->angina_class,
               'angina_duration' => $request->angina_duration,
               'dyspnea' => $request->dyspnea!== null ? $request->dyspnea : null,
               'dyspnea_class' => $request->dyspnea_class,
               'dyspnea_duration' => $request->dyspnea_duration,
               'syncope' => $request->syncope!== null ? $request->syncope : null,
               'syncope_duration' => $request->syncope_duration,
               'palpitation' => $request->palpitation!== null ? $request->palpitation : null,
               'palpitation_duration' => $request->palpitation_duration,
               'giddiness' => $request->giddiness !== null ? $request->giddiness : null, 
               'giddiness_duration' => $request->giddiness_duration,
               'fever' => $request->fever!== null ? $request->fever : null,
               'fever_duration' => $request->fever_duration,
               'heart_failure_admission' => $request->heart_failure_admission !==null ? $request->heart_failure_admission : null,
               'heart_failure_admission_duration' => $request->heart_failure_admission_duration,
               'others' => $request->others !==null ? $request->others : null,
               'others_text' => $request->others_text,
               'others_duration' => $request->others_duration
          ]);

          return $preopsymptoms;
     }

     public function createUnscheduledVisitOperativeSymptoms(StoreOperativeSymptomsRequest $request): OperativeSymptoms
     {

         
          $preopsymptoms = OperativeSymptoms::Create([
               'case_report_form_id' => $request->case_report_form_id,
               'unscheduled_visit_id' => $request->unscheduled_visit_id,
               'symptoms' => $request->symptoms ? true : false,
               'angina' => $request->angina !== null ? $request->angina : null,
               'angina_class' => $request->angina_class,
               'angina_duration' => $request->angina_duration,
               'dyspnea' => $request->dyspnea!== null ? $request->dyspnea : null,
               'dyspnea_class' => $request->dyspnea_class,
               'dyspnea_duration' => $request->dyspnea_duration,
               'syncope' => $request->syncope!== null ? $request->syncope : null,
               'syncope_duration' => $request->syncope_duration,
               'palpitation' => $request->palpitation!== null ? $request->palpitation : null,
               'palpitation_duration' => $request->palpitation_duration,
               'giddiness' => $request->giddiness !== null ? $request->giddiness : null, 
               'giddiness_duration' => $request->giddiness_duration,
               'fever' => $request->fever!== null ? $request->fever : null,
               'fever_duration' => $request->fever_duration,
               'heart_failure_admission' => $request->heart_failure_admission !==null ? $request->heart_failure_admission : null,
               'heart_failure_admission_duration' => $request->heart_failure_admission_duration,
               'others' => $request->others !==null ? $request->others : null,
               'others_text' => $request->others_text,
               'others_duration' => $request->others_duration
          ]);

          return $preopsymptoms;
     }

     public function updateOperativeSymptoms(StoreOperativeSymptomsRequest $request): OperativeSymptoms
     {

          $preopsymptoms = OperativeSymptoms::find($request->symptom->id);
          
          $preopsymptoms->symptoms = $request->symptoms ? true : false;

          $preopsymptoms->angina =$request->angina!== null ? $request->angina : null;
          $preopsymptoms->angina_class = $request->angina_class;
          $preopsymptoms->angina_duration = $request->angina_duration;

          $preopsymptoms->dyspnea = $request->dyspnea!== null ? $request->dyspnea : null;
          $preopsymptoms->dyspnea_class = $request->dyspnea_class;
          $preopsymptoms->dyspnea_duration = $request->dyspnea_duration;

          $preopsymptoms->syncope =$request->syncope!== null ? $request->syncope : null;
          $preopsymptoms->syncope_duration = $request->syncope_duration;

          $preopsymptoms->palpitation = $request->palpitation!== null ? $request->palpitation : null;
          $preopsymptoms->palpitation_duration = $request->palpitation_duration;

          $preopsymptoms->giddiness =$request->giddiness!== null ? $request->giddiness : null;
          $preopsymptoms->giddiness_duration = $request->giddiness_duration;

          $preopsymptoms->fever = $request->fever!== null ? $request->fever : null;
          $preopsymptoms->fever_duration = $request->fever_duration;

          $preopsymptoms->heart_failure_admission =$request->heart_failure_admission!== null ? $request->heart_failure_admission : null;
          $preopsymptoms->heart_failure_admission_duration = $request->heart_failure_admission_duration;

          $preopsymptoms->others = $request->others!== null ? $request->others : null;
          $preopsymptoms->others_text = $request->others_text;
          $preopsymptoms->others_duration = $request->others_duration;
          
          $preopsymptoms->save();
          return $preopsymptoms;

     }
}
