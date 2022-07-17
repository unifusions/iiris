<?php

namespace App\Http\Controllers\UnshceduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\SafetyParameter;
use App\Models\UnscheduledVisit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UVSafetyParameterController extends Controller
{
   
    public function index(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
    
    }

   
    public function create(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/SafetyParameters/Create', [
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]),
            'postUrl' => 'crf.unscheduledvisit.safetyparameter.store',
            'crf' => $crf,
            'unscheduledvisit' => $unscheduledvisit,
            'mode' => 'unscheduledvisit'
        ]);
    }

    
    public function store(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {

       
        SafetyParameter::Create([
            'unscheduled_visits_id' => $request->unscheduledvisit->id,
            'structural_value_deterioration' => $request->structural_value_deterioration,
            'valve_thrombosis' => $request->valve_thrombosis,
            'all_paravalvular_leak' => $request->all_paravalvular_leak,
            'major_paravalvular_leak' => $request->major_paravalvular_leak,
            'non_structural_value_deterioration' => $request->non_structural_value_deterioration,
            'thromboembolism' => $request->thromboembolism,
            'all_bleeding' => $request->all_bleeding,
            'major_bleeding' => $request->major_bleeding,
            'endocarditis' => $request->endocarditis,
            'all_mortality' => $request->all_mortality,
            'valve_mortality' => $request->valve_mortality,
            'valve_related_operation' => $request->valve_related_operation,
            'explant' => $request->explant,
            'haemolysis' => $request->haemolysis,
            'sudden_unexplained_death' => $request->sudden_unexplained_death,
            'cardiac_death' => $request->cardiac_death
        ]);


        $message = "Safety Parameters has been saved successfully";
        return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit])->with(['message' => $message]);
    }

   
    public function show($id)
    {
        
    }

  
    public function edit(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, SafetyParameter $safetyparameter)
    {
        return Inertia::render('CaseReportForm/FormFields/SafetyParameters/Edit', [
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]),
            'putUrl' => 'crf.unscheduledvisit.safetyparameter.update',
            'crf' => $crf,
            'unscheduledvisit' => $unscheduledvisit,
            'safetyparameter' => $safetyparameter,
            'mode' => 'unscheduledvisit'
        ]);
    }

    
    public function update(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, SafetyParameter $safetyparameter)
    {

        $safetyparameter->unscheduled_visits_id = $request->unscheduledvisit->id;
        $safetyparameter->structural_value_deterioration = $request->structural_value_deterioration;
        $safetyparameter->valve_thrombosis = $request->valve_thrombosis;
        $safetyparameter->all_paravalvular_leak = $request->all_paravalvular_leak;
        $safetyparameter->major_paravalvular_leak = $request->major_paravalvular_leak;
        $safetyparameter->non_structural_value_deterioration = $request->non_structural_value_deterioration;
        $safetyparameter->thromboembolism = $request->thromboembolism;
        $safetyparameter->all_bleeding = $request->all_bleeding;
        $safetyparameter->major_bleeding = $request->major_bleeding;
        $safetyparameter->endocarditis = $request->endocarditis;
        $safetyparameter->all_mortality = $request->all_mortality;
        $safetyparameter->valve_mortality = $request->valve_mortality;
        $safetyparameter->valve_related_operation = $request->valve_related_operation;
        $safetyparameter->explant = $request->explant;
        $safetyparameter->haemolysis = $request->haemolysis;
        $safetyparameter->sudden_unexplained_death = $request->sudden_unexplained_death;
        $safetyparameter->cardiac_death = $request->cardiac_death;
        $safetyparameter->save();


        $message = "Safety Parameters has been updated successfully";
        return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit])->with(['message' => $message]);
    }

    public function destroy($id)
    {
    }
}
