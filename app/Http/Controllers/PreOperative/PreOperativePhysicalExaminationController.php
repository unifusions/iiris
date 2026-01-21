<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Http\Requests\PhysicalExaminationStoreRequest;
use App\Models\CaseReportForm;
use App\Models\PhysicalExamination;
use App\Models\PreOperativeData;
use App\Services\PhysicalExaminationService;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use Throwable;

class PreOperativePhysicalExaminationController extends Controller
{
    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        if (!empty($preoperative->physicalexaminations))
            return redirect()->route('crf.preoperative.physicalexamination.edit', $crf, $preoperative, $preoperative->physicalexaminations);
        return redirect()->route($crf, $preoperative);
    }

    public function create(CaseReportForm $crf, PreOperativeData $preoperative)
    {

  

        return Inertia::render('CaseReportForm/FormFields/PhysicalExamination/Create', [
           
            'crf' => $crf,             
            'entity' => $preoperative,
            'entityType' => 'preoperative'


        ]);
       
    }

    public function store(PhysicalExaminationStoreRequest $request, CaseReportForm $crf, PreOperativeData $preoperative, PhysicalExaminationService $physicalExaminationService)
    {
        try {
            $physicalExaminationService->createPreOperativePhysicalExamination($request);
            return redirect()->route('crf.preoperative.show', [$crf, $preoperative])->with(['crf' => $crf]);
        } catch (Throwable $e) {

            return redirect()->back()->withErrors($e);
        }
    }

    
    public function show(CaseReportForm $crf, PreOperativeData $preoperative, PhysicalExamination $physicalexamination)
    {
        //
        $storeUri = 'crf.preoperative.physicalexamination.store';
        $storeParameters = [
            'crf' => $crf,
            'mode' => $preoperative
        ];

        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        return view('casereportforms.FormFields.PhysicalExamination.show', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf', 'physicalexamination'));
    }
    public function edit(CaseReportForm $crf, PreOperativeData $preoperative, PhysicalExamination $physicalexamination)
    {
         

        return Inertia::render('CaseReportForm/FormFields/PhysicalExamination/Edit', [
            'postUrl' => 'crf.preoperative.physicalexamination.update',
            'crf' => $crf,
            'entity' => $preoperative,
            'entityType' => 'preoperative',

             
            'physicalexamination' => $physicalexamination,
          
        ]);

     
    }

    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, PhysicalExamination $physicalexamination, PhysicalExaminationService $physicalExaminationService)
    {
        $physicalexaminationUpdate = $physicalExaminationService->updatePreOperativePhysicalExamination($request, $physicalexamination);

        return redirect()->route('crf.preoperative.show', [$crf, $preoperative]);
    }


    public function destroy($id)
    {
        //
    }
}
