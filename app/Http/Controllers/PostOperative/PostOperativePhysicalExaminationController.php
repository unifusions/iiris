<?php

namespace App\Http\Controllers\PostOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PhysicalExamination;
use App\Models\PostOperativeData;
use App\Services\PhysicalExaminationService;
use Illuminate\Http\Request;

class PostOperativePhysicalExaminationController extends Controller
{
    public function index(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        if (!empty($postoperative->physicalexaminations))
        return $this->show($crf, $postoperative, $postoperative->physicalexaminations);

    return $this->create($crf, $postoperative);
        
    }

    public function create(CaseReportForm $crf, PostOperativeData $postoperative)
    {

        $storeUri = 'crf.postoperative.physicalexamination.store';
        $storeParameters = [
            'crf' => $crf,
            'mode' => $postoperative
        ];

        $breadcrumb = [
            'name' => 'Post Operative Data',
            'link' => 'crf.postoperative.index'
        ];

        return view('casereportforms.FormFields.PhysicalExamination.create', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf'));
    }

    
    public function store(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, PhysicalExaminationService $physicalExaminationService)
    {
        $physicalExaminationService->createPostOperativePhysicalExamination($request);
        $message = 'Physical examination for the post operative date has been created successfully';
       // return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative])->with(['crf' => $crf]);
       //return view('casereportforms.PreOperativeData.show', compact('crf', 'postoperative'));
       return redirect()->route('crf.postoperative.index', ['crf' => $crf ])->with(['message' => $message]);
    }

   
    public function show(CaseReportForm $crf, PostOperativeData $postoperative, PhysicalExamination $physicalexamination)
    {
        //
        $storeUri = 'crf.postoperative.physicalexamination.store';
        $storeParameters = [
            'crf' => $crf,
            'mode' => $postoperative
        ];

        $breadcrumb = [
            'name' => 'Post Operative Data',
            'link' => 'crf.postoperative.index'
        ];

        return view('casereportforms.FormFields.PhysicalExamination.show', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf','physicalexamination'));
    }

    
    public function edit(CaseReportForm $crf, PostOperativeData $postoperative, PhysicalExamination $physicalexamination)
    {
        $storeUri = 'crf.preoperative.physicalexamination.update';
        $storeParameters = [
            'crf' => $crf,
            'mode' => $postoperative,
            'physicalexamination' => $physicalexamination
        ];

        $breadcrumb = [
            'name' => 'Post Operative Data',
            'link' => 'crf.postoperative.index'
        ];

        return view('casereportforms.FormFields.PhysicalExamination.edit', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf', 'physicalexamination'));
    }

   
    public function update(Request $request, CaseReportForm $crf, PostOperativeData $preoperative,PhysicalExamination $physicalexamination, PhysicalExaminationService $physicalExaminationService)
    {
        $physicalexaminationUpdate = $physicalExaminationService->updatePreOperativePhysicalExamination($request,$physicalexamination);
        
        return redirect()->route('crf.postoperative.index', ['crf' => $crf, 'preoperative' => $preoperative]);
    }

    
    public function destroy($id)
    {
        //
    }
}
