<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use Illuminate\Http\Request;

class CaseReportFormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $caseReportForm = CaseReportForm::orderBy('subject_id', 'desc')->paginate(10);
        return view('casereportforms.index', compact('caseReportForm'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('casereportforms.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([]);
        $crf = new CaseReportForm;
        $crf->date_of_consent = $request->dateOfConsent;
        $crf->uhid = $request->uhid;
        $crf->gender = $request->gender;
        $crf->date_of_birth = $request->subjectDob;
        $crf->save();

        $subject_id = $crf->subject_id;
        $message = 'Case Report Form with'  . $crf->subject_id . 'created succesfully';

        return view('casereportforms.show', compact('crf'))->with(['message', '$message',  'type' => 'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CaseReportForm  $caseReportForm
     * @return \Illuminate\Http\Response
     */
    public function show(CaseReportForm $crf)
    {
        //
        return view('casereportforms.show', compact('crf'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CaseReportForm  $caseReportForm
     * @return \Illuminate\Http\Response
     */
    public function edit(CaseReportForm $caseReportForm)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CaseReportForm  $caseReportForm
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CaseReportForm $caseReportForm)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CaseReportForm  $caseReportForm
     * @return \Illuminate\Http\Response
     */
    public function destroy(CaseReportForm $caseReportForm)
    {
        //
    }
}
