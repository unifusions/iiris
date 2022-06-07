<?php

namespace App\Http\Controllers\PostOperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Electrocardiogram;
use App\Models\PostOperativeData;
use App\Services\ElectrocardiogramService;
use Illuminate\Http\Request;

class ElectrocardiogramController extends Controller
{
    public function index()
    {
        //
        return 'index';
    }

    
    public function create(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        $storeUri = 'crf.postoperative.electrocardiogram.store';
        $storeParameters = [
            'crf' => $crf,
            'postoperative' => $postoperative,
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.postoperative.index'
        ];
        return  view('casereportforms.FormFields.Electrocardiogram.create', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf'));
    }

    
    public function store(Request $request, CaseReportForm $crf, PostOperativeData $postoperative, ElectrocardiogramService $electrocardiogramService)
    {
        $electrocardiogram = $electrocardiogramService->createPostoperativeElectrocardiogram($request);
        return redirect()->route('crf.postoperative.index', ['crf' => $crf, 'postoperative' => $postoperative]);
    }

    public function show($id)
    {
     
    }

    
    public function edit(CaseReportForm $crf, PostOperativeData $postoperative,Electrocardiogram $electrocardiogram, ElectrocardiogramService $electrocardiogramService)
    {
        $storeUri = 'crf.postoperative.electrocardiogram.update';
        $storeParameters = [
            'crf' => $crf,
            'postoperative' => $postoperative,
            'electrocardiogram' =>$electrocardiogram
        ];
        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.postoperative.index'
        ];
        
        return  view('casereportforms.FormFields.Electrocardiogram.edit', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf', 'electrocardiogram'));
    }

    public function update(Request $request, CaseReportForm $crf, PostOperativeData $postoperative,Electrocardiogram $electrocardiogram, ElectrocardiogramService $electrocardiogramService)
    {
        $electrocardiogram = $electrocardiogramService->updatePreoperativeElectrocardiogram($request, $electrocardiogram);
        return redirect()->route('crf.postoperative.index', ['crf' => $crf, 'postoperative' => $postoperative]);
    }

    public function destroy($id)
    {
        //
    }
}
