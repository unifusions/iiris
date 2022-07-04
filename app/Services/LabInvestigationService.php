<?php

namespace App\Services;

use App\Models\LabInvestigation;
use Illuminate\Http\Request;

class LabInvestigationService
{
     public function createPreoperativeLabInvestigation(Request $request): LabInvestigation
     {
          $labinvestiagtions = LabInvestigation::Create([
               'case_report_form_id' => $request->case_report_form_id,
               'pre_operative_data_id' => $request->pre_operative_data_id,
               'li_date'=> $request->li_date,
               'rbc'=> $request->rbc,
               'wbc'=> $request->wbc,
               'hemoglobin'=> $request->hemoglobin,
               'hematocrit'=> $request->hematocrit,
               'platelet'=> $request->platelet,
               'blood_urea'=> $request->blood_urea,
               'serum_creatinine'=> $request->serum_creatinine,
               'alt'=> $request->alt,
               'ast'=> $request->ast,
               'alp'=> $request->alp,
               'albumin'=> $request->albumin,
               'total_protein'=> $request->total_protein,
               'bilirubin'=> $request->bilirubin,
               'pt_inr'=> $request->pt_inr
          ]);

          return $labinvestiagtions;
     }

     public function createPostoperativeLabInvestigation(Request $request): LabInvestigation
     {
          $labinvestiagtions = LabInvestigation::Create([
               'case_report_form_id' => $request->crf->id,
               'post_operative_data_id' => $request->postoperative->id,
               'li_date'=> $request->li_date,
               'rbc'=> $request->rbc,
               'wbc'=> $request->wbc,
               'hemoglobin'=> $request->hemoglobin,
               'hematocrit'=> $request->hematocrit,
               'platelet'=> $request->platelet,
               'blood_urea'=> $request->blood_urea,
               'serum_creatinine'=> $request->serum_creatinine,
               'alt'=> $request->alt,
               'ast'=> $request->ast,
               'alp'=> $request->alp,
               'albumin'=> $request->albumin,
               'total_protein'=> $request->total_protein,
               'bilirubin'=> $request->bilirubin,
               'pt_inr'=> $request->pt_inr
          ]);

          return $labinvestiagtions;
     }


     public function updatePreoperativeLabInvestigation(Request $request, LabInvestigation $labinvestigation): LabInvestigation
     {
          $labinvestigation->li_date = $request->li_date;
          $labinvestigation->rbc= $request->rbc;
          $labinvestigation->wbc= $request->wbc;
          $labinvestigation->hemoglobin= $request->hemoglobin;
          $labinvestigation->hematocrit= $request->hematocrit;
          $labinvestigation->platelet= $request->platelet;
          $labinvestigation->blood_urea= $request->blood_urea;
          $labinvestigation->serum_creatinine=  $request->serum_creatinine;
          $labinvestigation->alt= $request->alt;
          $labinvestigation->ast= $request->ast;
          $labinvestigation->alp= $request->alp;
          $labinvestigation->albumin= $request->albumin;
          $labinvestigation->total_protein = $request->total_protein;
          $labinvestigation->bilirubin = $request->bilirubin;
          $labinvestigation->pt_inr = $request->pt_inr;
          
          $labinvestigation->save();

          return $labinvestigation;
     }
}
