<?php

namespace App\Http\Controllers\PostOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Echocardiography;
use App\Models\PostOperativeData;
use App\Services\EchocardiographyService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EchocardiographyController extends Controller
{
    public function index(PostOperativeData $postoperative)
    {
        return 'Index';
    }
    public function create(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        return Inertia::render('CaseReportForm/FormFields/Echocardiography/Create', [
            'crf' => $crf,
            'postoperative' => $postoperative,
            'mode' => 'postoperative',
            'postUrl' => 'crf.postoperative.echocardiography.store',
            'backUrl' => route('crf.postoperative.show', ['crf' => $crf, 'postoperative' => $postoperative])
        ]);

    }
    public function store(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, EchocardiographyService $echocardiographyService)
    {
        $echocardiographyService->createPostoperativeEchocardiography($request);
        return redirect()->route('crf.postoperative.show', ['crf' => $crf, 'postoperative' => $postoperative]);
    }
    public function show($id)
    {
        //
    }
    public function edit(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, Echocardiography $echocardiography)
    {
        return Inertia::render('CaseReportForm/FormFields/Echocardiography/Edit', [
            'crf' => $crf,
            'postoperative' => $postoperative,
            'echocardiography' => $echocardiography,
            'mode' => 'postoperative',
            'putUrl' => 'crf.postoperative.echocardiography.update',
            'backUrl' => route('crf.postoperative.show', ['crf' => $crf, 'postoperative' => $postoperative])
        ]);
    }
    public function update(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, Echocardiography $echocardiography, EchocardiographyService  $echocardiographyService)
    {
        $echocardiographyService->updatePreoperativeEchocardiography($request, $echocardiography);
        return redirect()->route('crf.postoperative.show', ['crf' => $crf, 'postoperative' => $postoperative])->with(['message' => 'Updated Successfully']);
    }
    public function destroy($id)
    {
        //
    }
}
