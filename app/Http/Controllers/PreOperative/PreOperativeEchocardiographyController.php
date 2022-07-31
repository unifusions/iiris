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
        $files = $request->file('files');
       
        if (isset($files)) {
         
            foreach ($files as $file) {
                $fileName = $file->getClientOriginalName();
                $uploadpath = 'uploads/' . $crf->subject_id . '/preoperative';
                $filepath = $file->storeAs($uploadpath, $fileName, 'public');
                
                EchoDicomFile::Create([
                    'echocardiography_id' => $echocardiography->id,
                    'file_name' => $fileName,
                    'file_path' => $filepath,
                ]);
            }
        }


        return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative]);
    }
    public function show($id)
    {
        //
    }
    public function edit(CaseReportForm $crf, PreOperativeData $preoperative, Echocardiography $echocardiography)
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
    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative, Echocardiography $echocardiography, EchocardiographyService $echocardiographyService)
    {
        $echocardiographyService->updatePreoperativeEchocardiography($request, $echocardiography);
        return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative])->with(['message' => 'Updated Successfully']);
    }
    public function destroy($id)
    {
        //
    }
}
