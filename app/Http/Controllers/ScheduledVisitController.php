<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\ScheduledVisit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduledVisitController extends Controller
{
    
    public function index()
    {
        
    }

    
    public function create()
    {
       
    }

  
    public function store(Request $request)
    {
    }

  
    public function show(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        
        return Inertia::render('CaseReportForm/ScheduledVisit/Show', [
            'crf' =>  $crf,
            'scheduledvisit' => $scheduledvisit,
            'physicalexamination' => $scheduledvisit->physicalexaminations,
            'symptoms' => $scheduledvisit->symptoms, 
            'personalhistories' => $scheduledvisit->personalhistories,
            'labinvestigations' => $scheduledvisit->labinvestigations,
            'physicalactivities' => $scheduledvisit->physicalactivities,
            'echocardiographies' => $scheduledvisit->echocardiographies,
            'electrocardiograms'=>$scheduledvisit->electrocardiograms,
            'safetyparameters'=>$scheduledvisit->safetyparameters,
            'medications'=>$scheduledvisit->medications,
            'backUrl' => route('crf.show', [$crf])
        ]);
    }

   
    public function edit(ScheduledVisit $scheduledVisit)
    {
       
    }

    
    public function update(Request $request,CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        if (isset($request->svHasMedications)) {
            $scheduledvisit->hasMedications = $request->svHasMedications;
            $scheduledvisit->save();
            if ($scheduledvisit->hasMedications)
                return redirect()->route('crf.scheduledvisit.medication.index', [$crf, $scheduledvisit]);
            return redirect()->route('crf.scheduledvisit.index', compact('crf', 'scheduledvisit'));
        }

        if (isset($request->sv_physical_activity)) {
            $scheduledvisit->physical_activity = $request->sv_physical_activity;
            $scheduledvisit->save();
            if ($scheduledvisit->physical_activity)
                return redirect()->route('crf.scheduledvisit.physicalactivity.index', [$crf, $scheduledvisit]);
            return redirect()->route('crf.scheduledvisit.show', [$crf,$scheduledvisit]);
        }

    }

    
    public function destroy(ScheduledVisit $scheduledVisit)
    {
        
    }
}
