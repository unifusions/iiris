<?php

namespace App\Http\Controllers\PostOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Electrocardiogram;
use App\Models\PostOperativeData;
use App\Services\ElectrocardiogramService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ElectrocardiogramController extends Controller
{
    public function index()
    {
    }


    public function create(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        return Inertia::render('CaseReportForm/FormFields/Electrocardiogram/Create', [
            'crf' => $crf,
            'postoperative' => $postoperative,
            'mode' => 'postoperative',
            'postUrl' => 'crf.postoperative.electrocardiogram.store',
            'backUrl' => route('crf.postoperative.show', ['crf' => $crf, 'postoperative' => $postoperative])
        ]);
    }


    public function store(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, ElectrocardiogramService $electrocardiogramService)
    {
        $electrocardiogramService->createPostoperativeElectrocardiogram($request);
        return redirect()->route('crf.postoperative.show', ['crf' => $crf, 'postoperative' => $postoperative]);
    }

    public function show($id)
    {
    }


    public function edit(CaseReportForm $crf, PostOperativeData $postoperative, Electrocardiogram $electrocardiogram)
    {
        return Inertia::render('CaseReportForm/FormFields/Electrocardiogram/Edit', [
            'crf' => $crf,
            'postoperative' => $postoperative,
            'mode' => 'postoperative',
            'putUrl' => 'crf.postoperative.electrocardiogram.update',
            'electrocardiogram' => $electrocardiogram,
            'backUrl'=> route('crf.postoperative.show', ['crf' => $crf, 'postoperative' => $postoperative])
        ]);
    }

    public function update(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, Electrocardiogram $electrocardiogram, ElectrocardiogramService $electrocardiogramService)
    {
        $electrocardiogramService->updatePreoperativeElectrocardiogram($request, $electrocardiogram);
        return redirect()->route('crf.postoperative.show', ['crf' => $crf, 'postoperative' => $postoperative]);
    }

    public function destroy($id)
    {
        //
    }
}
