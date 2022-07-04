<?php

namespace App\Http\Controllers\PostOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PostOperativeData;
use App\Models\SafetyParameter;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostOperativeSafetyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        $storeUri = 'crf.postoperative.safetyparameter.store';
        $destroyUri = 'crf.postoperative.safetyparameter.destroy';
        $opStoreUri = 'crf.postoperative.update';
        $storeParameters = [
            'crf' => $crf,
            'postoperative' => $postoperative,

        ];
        $breadcrumb = [
            'name' => 'Post Operative Data',
            'link' => 'crf.postoperative.index',
            'mode' => 'postoperative'
        ];
        return view('casereportforms.FormFields.SafetyParameter.index', compact('crf', 'storeUri', 'destroyUri', 'storeParameters', 'breadcrumb'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        return Inertia::render('CaseReportForm/FormFields/SafetyParameters/Create', [
            'backUrl' => route('crf.postoperative.show', [$crf, $postoperative]),
            'postUrl' => 'crf.postoperative.safetyparameter.store',
            'crf' => $crf,
            'postoperative' => $postoperative,
            'mode' => 'postoperative'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, CaseReportForm $crf, PostOperativeData $postoperative)
    {

        $storeParameters = [
            'crf' => $crf,
            'postoperative' => $postoperative,

        ];
        SafetyParameter::Create([
            'post_operative_data_id' => $request->postoperative->id,
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
        return redirect()->route('crf.postoperative.show', [$crf, $postoperative])->with(['message' => $message]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(CaseReportForm $crf, PostOperativeData $postoperative, SafetyParameter $safetyparameter)
    {
        return Inertia::render('CaseReportForm/FormFields/SafetyParameters/Edit', [
            'backUrl' => route('crf.postoperative.show', [$crf, $postoperative]),
            'putUrl' => 'crf.postoperative.safetyparameter.update',
            'crf' => $crf,
            'postoperative' => $postoperative,
            'safetyparameter' => $safetyparameter,
            'mode' => 'postoperative'
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, SafetyParameter $safetyparameter)
    {

        $safetyparameter->post_operative_data_id = $request->postoperative->id;
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
        return redirect()->route('crf.postoperative.show', [$crf, $postoperative])->with(['message' => $message]);
    }

    public function destroy($id)
    {
    }
}
