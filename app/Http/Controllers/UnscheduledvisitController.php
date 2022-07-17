<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\UnscheduledVisit;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UnscheduledvisitController extends Controller
{
    public function index(CaseReportForm $crf)
    {
        return Inertia::render('CaseReportForm/UnscheduledVisit/Index', [
            'backUrl' => route('crf.show', [$crf]),
            'createUrl' => route('crf.unscheduledvisit.create', [$crf]),
            'crf' => $crf,
            'unscheduledvisits' => $crf->unscheduledvisits,
        ]);
    }

    public function create(CaseReportForm $crf)
    {
        return Inertia::render('CaseReportForm/UnscheduledVisit/Create', [
            'backUrl' => route('crf.unscheduledvisit.index',[$crf]),
            'crf' => $crf,
            'usvcount'=>count($crf->unscheduledvisits)
            
        ]);
        
    }

    public function store(Request $request, CaseReportForm $crf)
    {
        $unscheduledvisit = UnscheduledVisit::create([
            'case_report_form_id' => $crf->id,
            'pod' =>  Carbon::parse($request->pod)->addHours(5)->addMinutes(30),
            'visit_no' => $request->visit_no
        ]);

        return redirect()->route('crf.unscheduledvisit.show',[$crf,$unscheduledvisit]);
    }


    public function show(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {

        return Inertia::render('CaseReportForm/UnscheduledVisit/Show', [
            'crf' => $crf,
            'unscheduledvisit' => $unscheduledvisit,
            'physicalexamination' => $unscheduledvisit->physicalexaminations,
            'symptoms' => $unscheduledvisit->symptoms, 
            'personalhistories' => $unscheduledvisit->personalhistories,
            'labinvestigations' => $unscheduledvisit->labinvestigations,
            'physicalactivities' => $unscheduledvisit->physicalactivities,
            'echocardiographies' => $unscheduledvisit->echocardiographies,
            'electrocardiograms'=>$unscheduledvisit->electrocardiograms,
            'safetyparameters'=>$unscheduledvisit->safetyparameters,
            'medications'=>$unscheduledvisit->medications,
            'backUrl' => route('crf.unscheduledvisit.index', [$crf])
            
        ]);
    }

    public function edit(UnscheduledVisit $unscheduledVisit)
    {

    }

    public function update(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledVisit)
    {
        if (isset($request->usvHasMedications)) {
            $unscheduledVisit->hasMedications = $request->usvHasMedications;
            $unscheduledVisit->save();
            if ($unscheduledVisit->hasMedications)
                return redirect()->route('crf.scheduledvisit.medication.index', [$crf, $unscheduledVisit]);
            return redirect()->route('crf.scheduledvisit.index', compact('crf', 'scheduledvisit'));
        }

        if (isset($request->usv_physical_activity)) {
            $unscheduledVisit->physical_activity = $request->usv_physical_activity;
            $unscheduledVisit->save();
            if ($unscheduledVisit->physical_activity)
                return redirect()->route('crf.scheduledvisit.physicalactivity.index', [$crf, $unscheduledVisit]);
            return redirect()->route('crf.scheduledvisit.show', [$crf,$unscheduledVisit]);
        }
    }

    public function destroy(UnscheduledVisit $unscheduledVisit)
    {
    }
}
