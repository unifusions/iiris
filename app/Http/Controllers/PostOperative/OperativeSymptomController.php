<?php

namespace App\Http\Controllers\PostOperative;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOperativeSymptomsRequest;
use App\Models\CaseReportForm;
use App\Models\OperativeSymptoms;
use App\Models\PostOperativeData;
use App\Services\OperativeSymptomsService;
use Illuminate\Http\Request;

class OperativeSymptomController extends Controller
{ public function index(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        

        if (!empty($postoperative->symptoms))
            return $this->show($crf, $postoperative, $postoperative->symptoms);

        return $this->create($crf, $postoperative);
    }

   
    public function create(CaseReportForm $crf, PostOperativeData $postoperative)
    {

        $storeUri = 'crf.postoperative.symptoms.store';
        $storeParameters = [
            'crf' => $crf,
            'postoperative' => $postoperative,
            'operative' => 'Postoperative'
        ];



        $breadcrumb = [
            'name' => 'Post Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        return view('casereportforms.FormFields.OperativeSymptoms.create', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf'));
    }

  
    public function store(StoreOperativeSymptomsRequest $request,  CaseReportForm $crf, PostOperativeData $postoperative, OperativeSymptomsService $operativeSymptomsService)
    {
        
        if($operativeSymptomsService->createPostOperativeSymptoms($request) )
            return redirect()->route('crf.postoperative.index', ['crf' => $crf, 'postoperative' => $postoperative]);
    }

   
    public function show($id)
    {
        //
    }

   
    public function edit(CaseReportForm $crf, PostOperativeData $postoperative, OperativeSymptoms $symptom)
    {
      
        $storeUri = 'crf.postoperative.symptoms.update';
        $storeParameters = [
            'crf' => $crf,
            'postoperative' => $postoperative,
            'symptom' => $symptom,
            'operative' => 'Preoperative'

        ];

        $breadcrumb = [
            'name' => 'Pre Operative Data',
            'link' => 'crf.preoperative.index'
        ];

        return view('casereportforms.FormFields.OperativeSymptoms.edit', compact('storeUri', 'storeParameters', 'breadcrumb', 'crf', 'symptom'));
    }

 
    public function update(StoreOperativeSymptomsRequest $request,  CaseReportForm $crf, PostOperativeData $postoperative, OperativeSymptoms $symptom, OperativeSymptomsService $operativeSymptomsService)
    {
        
        if($operativeSymptomsService->updateOperativeSymptoms($request))
            return redirect()->route('crf.postoperative.index', ['crf' => $crf, 'postoperative' => $postoperative]);
    }

    public function destroy($id)
    {
        //
    }
}
