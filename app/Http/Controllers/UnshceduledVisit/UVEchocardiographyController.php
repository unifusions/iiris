<?php

namespace App\Http\Controllers\UnshceduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Echocardiography;
use App\Models\UnscheduledVisit;
use App\Services\EchocardiographyService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\EchoDicomFile;

use function PHPUnit\Framework\isEmpty;

class UVEchocardiographyController extends Controller
{
    public function index(UnscheduledVisit $unscheduledvisit)
    {
    }
    public function create(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/Echocardiography/Create', [
            'crf' => $crf,
            'unscheduledvisit' => $unscheduledvisit,
            'mode' => 'unscheduledvisit',
            'postUrl' => 'crf.unscheduledvisit.echocardiography.store',
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]),
            
        ]);
    }
    public function store(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, EchocardiographyService $echocardiographyService)
    {
        $echocardiography = $echocardiographyService->createUSVEchocardiography($request);
        $files = $request->file('files');





        if (isset($files)) {

            foreach ($files as $file) {
                $echodicomfilemodel = new EchoDicomFile;
                $fileName = $file->getClientOriginalName();
                $uploadpath = 'uploads/' . $crf->subject_id . '/scheduledvisit/' . $unscheduledvisit->visit_no . '/';
                $filepath = $file->storeAs($uploadpath, $fileName, 'public');
                EchoDicomFile::Create([
                    'echocardiography_id' => $echocardiography->id,
                    'file_name' => $fileName,
                    'file_path' => $filepath,
                ]);
            }
        }
        return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]);
    }
    public function show($id)
    {
        //
    }
    public function edit(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, Echocardiography $echocardiography)
    {
        return Inertia::render('CaseReportForm/FormFields/Echocardiography/Edit', [
            'crf' => $crf,
            'unscheduledvisit' => $unscheduledvisit,
            'echocardiography' => $echocardiography,
            'mode' => 'unscheduledvisit',
            'putUrl' => 'crf.unscheduledvisit.echocardiography.update',
            'backUrl' => route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]),
            'echodicomfiles' => $unscheduledvisit->echocardiographies ? 
            EchoDicomFile::where('echocardiography_id', $echocardiography->id)->get()->map(fn ($file) => [
                'id' => $file->id,
                'file_name' => $file->file_name,
                'download_url' => storage_path('app/public/' . $file->file_path)
            ]) : null
        ]);
    }
    public function update(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit, Echocardiography $echocardiography, EchocardiographyService  $echocardiographyService)
    {
        $echocardiographyService->updatePreoperativeEchocardiography($request, $echocardiography);
        return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit])->with(['message' => 'Updated Successfully']);
    }
    public function destroy($id)
    {
        //
    }
}
