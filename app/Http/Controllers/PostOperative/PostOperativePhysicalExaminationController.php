<?php

namespace App\Http\Controllers\PostOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PhysicalExamination;
use App\Models\PostOperativeData;
use App\Services\PhysicalExaminationService;
use Illuminate\Http\Request;
use Inertia\Inertia;

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

        return Inertia::render('CaseReportForm/FormFields/PhysicalExamination/Create', [
            'postUrl' => 'crf.postoperative.physicalexamination.store',
            'crf' => $crf,
            'mode' => 'postoperative',
            'postoperative' => $postoperative,
            'backUrl' => route('crf.postoperative.show', [$crf, $postoperative])

        ]);
    }


    public function store(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, PhysicalExaminationService $physicalExaminationService)
    {
        $physicalExaminationService->createPostOperativePhysicalExamination($request);
        $message = 'Physical examination for the post operative date has been created successfully';
        return redirect()->route('crf.postoperative.show', [$crf, $postoperative])->with(['message' => $message]);
    }


    public function show(CaseReportForm $crf, PostOperativeData $postoperative, PhysicalExamination $physicalexamination)
    {
    }


    public function edit(CaseReportForm $crf, PostOperativeData $postoperative, PhysicalExamination $physicalexamination)
    {
        return Inertia::render('CaseReportForm/FormFields/PhysicalExamination/Edit', [
            'postUrl' => 'crf.postoperative.physicalexamination.update',
            'crf' => $crf,
            'mode' => 'postoperative',
            'postoperative' => $postoperative,
            'physicalexamination' => $physicalexamination,
            'backUrl' => route('crf.postoperative.show', [$crf, $postoperative])
        ]);
    }


    public function update(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, PhysicalExamination $physicalexamination, PhysicalExaminationService $physicalExaminationService)
    {
        $physicalExaminationService->updatePreOperativePhysicalExamination($request, $physicalexamination);
        return redirect()->route('crf.postoperative.show', ['crf' => $crf, 'postoperative' => $postoperative]);
    }


    public function destroy($id)
    {
        //
    }
}
