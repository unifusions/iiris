<?php

namespace App\Http\Controllers\PreOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Electrocardiogram;
use App\Models\PreOperativeData;
use App\Services\ElectrocardiogramService;
use Illuminate\Http\Request;

class PreOperativeElectrocardiogramController extends Controller
{
   
    public function index()
    {
        //
        return 'index';
    }

    
    public function create(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $storeUri = 'crf.preoperative.electrocardiogram.store';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];
        return  view('casereportforms.FormFields.Electrocardiogram.create', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf'));
    }

    
    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, ElectrocardiogramService $electrocardiogramService)
    {
        $electrocardiogram = $electrocardiogramService->createPreoperativeElectrocardiogram($request);
        return redirect()->route('crf.preoperative.index', ['crf' => $crf, 'preoperative' => $preoperative]);
    }

    public function show($id)
    {
        //
    }

    
    public function edit(CaseReportForm $crf, PreOperativeData $preoperative,Electrocardiogram $electrocardiogram, ElectrocardiogramService $electrocardiogramService)
    {
        $storeUri = 'crf.preoperative.electrocardiogram.update';
        $storeParameters = [
            'crf' => $crf,
            'preoperative' => $preoperative,
            'electrocardiogram' =>$electrocardiogram
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];
        
        return  view('casereportforms.FormFields.Electrocardiogram.edit', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf', 'electrocardiogram'));
    }

    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative,Electrocardiogram $electrocardiogram, ElectrocardiogramService $electrocardiogramService)
    {
        $electrocardiogram = $electrocardiogramService->updatePreoperativeElectrocardiogram($request, $electrocardiogram);
        return redirect()->route('crf.preoperative.index', ['crf' => $crf, 'preoperative' => $preoperative]);
    }

    public function destroy($id)
    {
        //
    }
}
