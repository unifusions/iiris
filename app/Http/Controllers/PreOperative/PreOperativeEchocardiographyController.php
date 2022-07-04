<?php

namespace App\Http\Controllers\Preoperative;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Echocardiography;
use App\Models\EchoDicomFile;
use App\Models\PreOperativeData;
use App\Services\EchocardiographyService;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function PHPUnit\Framework\isEmpty;

class PreOperativeEchocardiographyController extends Controller
{
    public function index(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        return 'Index';
    }
    public function create(CaseReportForm $crf, PreOperativeData $preoperative)
    {
        return Inertia::render('CaseReportForm/FormFields/Echocardiography/Create', [
            'crf' => $crf,
            'preoperative' => $preoperative,
            'mode' => 'preoperative',
            'postUrl' => 'crf.preoperative.echocardiography.store',
            'backUrl' => route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative])
        ]);
    }
    public function store(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, EchocardiographyService $echocardiographyService)
    {
        $echocardiography = $echocardiographyService->createPreoperativeEchocardiography($request);

        if (!isEmpty($request->echofiles)) {
            $echodicomfilemodel = new EchoDicomFile;
            $fileName = $request->echofiles->getClientOriginalName();
            $uploadpath = 'uploads/' . $crf->subject_id . '/preoperative';
            $filepath = $request->echofiles->storeAs($uploadpath, $fileName, 'public');
            $echodicomfilemodel->echocardiography_id = $echocardiography->id;
            $echodicomfilemodel->file_name = $fileName;
            $echodicomfilemodel->file_path = $filepath;
            $echodicomfilemodel->save();
        }


        return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative]);
    }
    public function show($id)
    {
        //
    }
    public function edit(CaseReportForm $crf, PreOperativeData $preoperative,Echocardiography $echocardiography)
    {
        return Inertia::render('CaseReportForm/FormFields/Echocardiography/Edit', [
            'crf' => $crf,
            'preoperative' => $preoperative,
            'echocardiography' => $echocardiography,
            'mode' => 'preoperative',
            'putUrl' => 'crf.preoperative.echocardiography.update',
            'backUrl' => route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative])
        ]);
    }
    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative,Echocardiography $echocardiography, EchocardiographyService $echocardiographyService)
    {
        $echocardiographyService->updatePreoperativeEchocardiography($request, $echocardiography);
        return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative])->with(['message' => 'Updated Successfully']);
    }
    public function destroy($id)
    {
        //
    }
}
