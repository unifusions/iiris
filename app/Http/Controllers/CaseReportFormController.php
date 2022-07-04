<?php

namespace App\Http\Controllers;

use App\Http\Requests\CaseReportFormStoreRequest;
use App\Models\CaseReportForm;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CaseReportFormController extends Controller
{
    public function index()
    {
        $caseReportForm = CaseReportForm::orderBy('subject_id', 'desc')->paginate(10);
        // return view('casereportforms.index', compact('caseReportForm'));

        return Inertia::render('CaseReportForm/Index', [
            'crf' => $caseReportForm,
            'facility' => auth()->user()->facility->name ?? ''
        ]);
    }

   
    public function create()
    {
       
        return Inertia::render('CaseReportForm/Create', ['facility' => auth()->user()->facility->name]);
    }
    
    public function store(CaseReportFormStoreRequest $request, CaseReportForm $crf)
    {
        $request->validated();
        $crf->date_of_consent =  Carbon::parse($request->date_of_consent)->addHours(5)->addMinutes(30);
        $crf->uhid = $request->uhid;
        $crf->gender = $request->gender;
        $crf->date_of_birth = Carbon::parse($request->date_of_birth)->addHours(5)->addMinutes(30);
        $crf->save();

        $message = 'Case Report Form with ' . $crf->subject_id . ' created succesfully';
        
        return redirect()->route('crf.show', $crf)->with(['message' => $message]);

    }

  
    public function show(CaseReportForm $crf)
    {
        return Inertia::render('CaseReportForm/Show', [
            'crf' => $crf,
            'facility' => auth()->user()->facility->name ?? '',
            'backUrl' => route('crf.index'),
            'preoperativeUrl' => route('crf.preoperative.show', [$crf, $crf->preoperatives])
        ]);
        // return view('casereportforms.show', compact('crf'));
    }

    
    public function edit(CaseReportForm $caseReportForm)
    {
        //
        return 'edit';
    }

   
    public function update(Request $request, CaseReportForm $caseReportForm)
    {
        return 'update';
    }

    
    public function destroy(CaseReportForm $crf)
    {
        $crf->delete();
        return $this->index();
    }
}
