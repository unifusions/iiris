<?php

namespace App\Http\Controllers\PostOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PostOperativeData;
use App\Services\EchocardiographyService;
use Illuminate\Http\Request;

class EchocardiographyController extends Controller
{
    public function index(PostOperativeData $postoperative)
    {
        return 'Index';
    }
    public function create(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        $storeUri = 'crf.postoperative.echocardiography.store';
        $storeParameters = [
            'crf' => $crf,
            'postoperative' => $postoperative,
        ];
        $breadcrumb = [
            'name' => 'Post Operative Data',
            'link' => 'crf.postoperative.index'
        ];
        return  view('casereportforms.FormFields.Echocardiography.create', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf'));

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
    public function edit($id)
    {
        //
    }
    public function update(Request $request, $id)
    {
        //
    }
    public function destroy($id)
    {
        //
    }
}
