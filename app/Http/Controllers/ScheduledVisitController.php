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
        // dd($scheduledvisit);
        return Inertia::render('CaseReportForm/ScheduledVisit/Show', [
            'crf' =>  $crf,
            'scheduledvisit' => $scheduledvisit,
            'physicalexamination' => $scheduledvisit->physicalexaminations,
            'backUrl' => route('crf.show', [$crf])
        ]);
    }

   
    public function edit(ScheduledVisit $scheduledVisit)
    {
       
    }

    
    public function update(Request $request, ScheduledVisit $scheduledVisit)
    {
        
    }

    
    public function destroy(ScheduledVisit $scheduledVisit)
    {
        
    }
}
