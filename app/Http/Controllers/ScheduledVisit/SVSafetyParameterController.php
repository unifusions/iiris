<?php

namespace App\Http\Controllers\ScheduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\SafetyParameter;
use App\Models\ScheduledVisit;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SVSafetyParameterController extends Controller
{
    public function index(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
    
    }

   
    public function create(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/SafetyParameters/Create', [
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit]),
            'postUrl' => 'crf.scheduledvisit.safetyparameter.store',
            'crf' => $crf,
            'scheduledvisit' => $scheduledvisit,
            'mode' => 'scheduledvisit'
        ]);
    }

    
    public function store(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {

        $storeParameters = [
            'crf' => $crf,
            'scheduledvisit' => $scheduledvisit,

        ];
        SafetyParameter::Create([
            'scheduled_visits_id' => $request->scheduledvisit->id,
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
            'cardiac_death' => $request->cardiac_death,

            'date_structural_value_deterioration' => $request->date_structural_value_deterioration !== null ? Carbon::parse($request->date_structural_value_deterioration)->addHours(5)->addMinutes(30) : null,
            'date_valve_thrombosis' => $request->date_valve_thrombosis !== null ? Carbon::parse($request->date_valve_thrombosis)->addHours(5)->addMinutes(30) : null,
            'date_all_paravalvular_leak' => $request->date_all_paravalvular_leak !== null ? Carbon::parse($request->date_all_paravalvular_leak)->addHours(5)->addMinutes(30) : null,
            'date_major_paravalvular_leak' => $request->date_major_paravalvular_leak !== null ? Carbon::parse($request->date_major_paravalvular_leak)->addHours(5)->addMinutes(30) : null,
            'date_non_structural_value_deterioration' => $request->date_non_structural_value_deterioration !== null ? Carbon::parse($request->date_non_structural_value_deterioration)->addHours(5)->addMinutes(30) : null,
            'date_thromboembolism' => $request->date_thromboembolism !== null ? Carbon::parse($request->date_thromboembolism)->addHours(5)->addMinutes(30) : null,
            'date_all_bleeding' => $request->date_all_bleeding !== null ? Carbon::parse($request->date_all_bleeding)->addHours(5)->addMinutes(30) : null,
            'date_major_bleeding' => $request->date_major_bleeding !== null ? Carbon::parse($request->date_major_bleeding)->addHours(5)->addMinutes(30) : null,
            'date_endocarditis' => $request->date_endocarditis !== null ? Carbon::parse($request->date_endocarditis)->addHours(5)->addMinutes(30) : null,
            'date_all_mortality' => $request->date_all_mortality !== null ? Carbon::parse($request->date_all_mortality)->addHours(5)->addMinutes(30) : null,
            'date_valve_mortality' => $request->date_valve_mortality !== null ? Carbon::parse($request->date_valve_mortality)->addHours(5)->addMinutes(30) : null,
            'date_valve_related_operation' => $request->date_valve_related_operation !== null ? Carbon::parse($request->date_valve_related_operation)->addHours(5)->addMinutes(30) : null,
            'date_explant' => $request->date_explant !== null ? Carbon::parse($request->date_explant)->addHours(5)->addMinutes(30) : null,
            'date_haemolysis' => $request->date_haemolysis !== null ? Carbon::parse($request->date_haemolysis)->addHours(5)->addMinutes(30) : null,
            'date_sudden_unexplained_death' => $request->date_sudden_unexplained_death !== null ? Carbon::parse($request->date_sudden_unexplained_death)->addHours(5)->addMinutes(30) : null,
            'date_cardiac_death' => $request->date_cardiac_death !== null ? Carbon::parse($request->date_cardiac_death)->addHours(5)->addMinutes(30) : null,

            'has_structural_value_deterioration' => $request->has_structural_value_deterioration,
            'has_valve_thrombosis'=> $request->has_valve_thrombosis,
            'has_all_paravalvular_leak'=> $request->has_all_paravalvular_leak,
            'has_major_paravalvular_leak'=> $request->has_major_paravalvular_leak,
            'has_non_structural_value_deterioration'=> $request->has_non_structural_value_deterioration,
            'has_thromboembolism'=> $request->has_thromboembolism,
            'has_all_bleeding'=> $request->has_all_bleeding,
            'has_major_bleeding'=> $request->has_major_bleeding,
            'has_endocarditis'=> $request->has_endocarditis,
            'has_all_mortality'=> $request->has_all_mortality,
            'has_valve_mortality'=> $request->has_valve_mortality,
            'has_valve_related_operation'=> $request->has_valve_related_operation,
            'has_explant'=> $request->has_explant,
            'has_haemolysis'=> $request->has_haemolysis,
            'has_sudden_unexplained_death'=> $request->has_sudden_unexplained_death,
            'has_cardiac_death'=> $request->has_cardiac_death
        ]);


        $message = "Safety Parameters has been saved successfully";
        return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit])->with(['message' => $message]);
    }

   
    public function show($id)
    {
        
    }

  
    public function edit(CaseReportForm $crf, ScheduledVisit $scheduledvisit, SafetyParameter $safetyparameter)
    {
        return Inertia::render('CaseReportForm/FormFields/SafetyParameters/Edit', [
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit]),
            'putUrl' => 'crf.scheduledvisit.safetyparameter.update',
            'crf' => $crf,
            'scheduledvisit' => $scheduledvisit,
            'safetyparameter' => $safetyparameter,
            'mode' => 'scheduledvisit'
        ]);
    }

    
    public function update(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, SafetyParameter $safetyparameter)
    {

        $safetyparameter->scheduled_visits_id = $request->scheduledvisit->id;
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


        $safetyparameter->date_structural_value_deterioration = $request->date_structural_value_deterioration !== null ? Carbon::parse($request->date_structural_value_deterioration)->addHours(5)->addMinutes(30) : null;
        $safetyparameter->date_valve_thrombosis = $request->date_valve_thrombosis !== null ? Carbon::parse($request->date_valve_thrombosis)->addHours(5)->addMinutes(30) : null;
        $safetyparameter->date_all_paravalvular_leak = $request->date_all_paravalvular_leak !== null ? Carbon::parse($request->date_all_paravalvular_leak)->addHours(5)->addMinutes(30) : null;
        $safetyparameter->date_major_paravalvular_leak = $request->date_major_paravalvular_leak !== null ? Carbon::parse($request->date_major_paravalvular_leak)->addHours(5)->addMinutes(30) : null;
        $safetyparameter->date_non_structural_value_deterioration = $request->date_non_structural_value_deterioration !== null ? Carbon::parse($request->date_non_structural_value_deterioration)->addHours(5)->addMinutes(30) : null;
        $safetyparameter->date_thromboembolism = $request->date_thromboembolism !== null ? Carbon::parse($request->date_thromboembolism)->addHours(5)->addMinutes(30) : null;
        $safetyparameter->date_all_bleeding = $request->date_all_bleeding !== null ? Carbon::parse($request->date_all_bleeding)->addHours(5)->addMinutes(30) : null;
        $safetyparameter->date_major_bleeding = $request->date_major_bleeding !== null ? Carbon::parse($request->date_major_bleeding)->addHours(5)->addMinutes(30) : null;
        $safetyparameter->date_endocarditis = $request->date_endocarditis !== null ? Carbon::parse($request->date_endocarditis)->addHours(5)->addMinutes(30) : null;
        $safetyparameter->date_all_mortality = $request->date_all_mortality !== null ? Carbon::parse($request->date_all_mortality)->addHours(5)->addMinutes(30) : null;
        $safetyparameter->date_valve_mortality = $request->date_valve_mortality !== null ? Carbon::parse($request->date_valve_mortality)->addHours(5)->addMinutes(30) : null;
        $safetyparameter->date_valve_related_operation = $request->date_valve_related_operation !== null ? Carbon::parse($request->date_valve_related_operation)->addHours(5)->addMinutes(30) : null;
        $safetyparameter->date_explant = $request->date_explant !== null ? Carbon::parse($request->date_explant)->addHours(5)->addMinutes(30) : null;
        $safetyparameter->date_haemolysis = $request->date_haemolysis !== null ? Carbon::parse($request->date_haemolysis)->addHours(5)->addMinutes(30) : null;
        $safetyparameter->date_sudden_unexplained_death = $request->date_sudden_unexplained_death !== null ? Carbon::parse($request->date_sudden_unexplained_death)->addHours(5)->addMinutes(30) : null;
        $safetyparameter->date_cardiac_death = $request->date_cardiac_death !== null ? Carbon::parse($request->date_cardiac_death)->addHours(5)->addMinutes(30) : null;

        $safetyparameter->has_structural_value_deterioration = $request->has_structural_value_deterioration;
        $safetyparameter->has_valve_thrombosis= $request->has_valve_thrombosis;
        $safetyparameter->has_all_paravalvular_leak= $request->has_all_paravalvular_leak;
        $safetyparameter->has_major_paravalvular_leak= $request->has_major_paravalvular_leak;
        $safetyparameter->has_non_structural_value_deterioration= $request->has_non_structural_value_deterioration;
        $safetyparameter->has_thromboembolism= $request->has_thromboembolism;
        $safetyparameter->has_all_bleeding= $request->has_all_bleeding;
        $safetyparameter->has_major_bleeding= $request->has_major_bleeding;
        $safetyparameter->has_endocarditis= $request->has_endocarditis;
        $safetyparameter->has_all_mortality= $request->has_all_mortality;
        $safetyparameter->has_valve_mortality= $request->has_valve_mortality;
        $safetyparameter->has_valve_related_operation= $request->has_valve_related_operation;
        $safetyparameter->has_explant= $request->has_explant;
        $safetyparameter->has_haemolysis= $request->has_haemolysis;
        $safetyparameter->has_sudden_unexplained_death= $request->has_sudden_unexplained_death;
        $safetyparameter->has_cardiac_death= $request->has_cardiac_death;

        $safetyparameter->save();


        $message = "Safety Parameters has been updated successfully";
        return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit])->with(['message' => $message]);
    }

    public function destroy($id)
    {
    }
}
