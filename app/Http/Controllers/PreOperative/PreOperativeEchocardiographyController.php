<?php

namespace App\Http\Controllers\Preoperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\PreOperativeData;
use App\Services\EchocardiographyService;
use Illuminate\Http\Request;

class PreOperativeEchocardiographyController extends Controller
{
    public function index(PreOperativeData $preoperative)
    {
        return 'Index';
    }
    public function create(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $storeUri = 'crf.preoperative.echocardiography.store';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];
        return  view('casereportforms.FormFields.Echocardiography.create', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf'));

    }
    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, EchocardiographyService $echocardiographyService)
    {
        $echocardiography = $echocardiographyService->createPreoperativeEchocardiography($request);
        return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative]);
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
