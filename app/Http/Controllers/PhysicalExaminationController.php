<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;

use App\Models\PhysicalExamination;
use App\Models\PostOperativeData;
use App\Models\PreOperativeData;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class PhysicalExaminationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    
    public function index($subject_id)
    {
      
        $query = '';

        if(!empty(request()->preoperative)){
            $query = ['pre_operative_data_id' => request()->preoperative];
        }

        if(!empty(request()->postoperative)){
            $query = ['post_operative_data_id' => request()->postoperative];
        }

        // $casereportformvisit=CaseReportFormVisit::find($visit);
        // if($casereportformvisit->visit_no === "1"){
        //     $casereportformvisitmode = CaseReportFormVisitMode::find(64);


        //     $physicalexamination = $casereportformvisitmode->physicalexamination;
        //     return view('physicalexamination.index', compact('physicalexamination'));
          
        // }
        
        // if(!empty($preoper)){
        //     $visit_mode = CaseReportFormVisitMode::find($preoper);
        //     return view('casereportforms.visits.physicalexamination.index', compact('subject_id', 'visit_no', 'visit_mode'));
        // }
        
        // return view('casereportforms.visits.physicalexamination.index', compact('subject_id', 'visit_no'));

        $physicalexamination = PhysicalExamination::where($query)->first();

        return view('casereportforms.FormFields.PhysicalExamination.index', compact('physicalexamination'));
      
        
        //$physicalexamination = PhysicalExamination::find
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($subject_id)
    {
        return view('casereportforms.FormFields.PhysicalExamination.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(CaseReportForm $crf, PreOperativeData $preoperative, PhysicalExamination $physicalexamination)
    {
        
        $action = 'show';
        return view('casereportforms.FormFields.PhysicalExamination.show', compact('action', 'physicalexamination'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id, $visit, $physicalexaminationid)
    {
        // $physicalexamination = PhysicalExamination::findOrFail($physicalexaminationid);
        // $action = 'edit';
        // return view('casereportforms.visits.physicalexamination.edit', compact('physicalexamination', 'action'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
