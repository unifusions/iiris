<?php

namespace App\Http\Controllers\ScheduledVisit;

use App\Http\Controllers\Controller;
use App\Models\CaseReportForm;
use App\Models\Echocardiography;
use App\Models\EchoDicomFile;
use App\Models\ScheduledVisit;
use App\Services\EchocardiographyService;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function PHPUnit\Framework\isEmpty;

class SVEchocardiographyController extends Controller
{
    public function index(ScheduledVisit $scheduledvisit)
    {
    }
    public function create(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        return Inertia::render('CaseReportForm/FormFields/Echocardiography/Create', [
            'crf' => $crf,
            'scheduledvisit' => $scheduledvisit,
            'mode' => 'scheduledvisit',
            'postUrl' => 'crf.scheduledvisit.echocardiography.store',
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit])
        ]);
    }
    public function store(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, EchocardiographyService $echocardiographyService)
    {
        $echocardiography = $echocardiographyService->createSVEchocardiography($request);

        $files = $request->file('files');
        if (!isEmpty($files)) {

            foreach ($files as $file) {
                $echodicomfilemodel = new EchoDicomFile;
                $fileName = $file->getClientOriginalName();
                $uploadpath = 'uploads/' . $crf->subject_id . '/scheduledvisit/' . $scheduledvisit->visit_no . '/';
                $filepath = $file->storeAs($uploadpath, $fileName, 'public');
                $echodicomfilemodel->echocardiography_id = $echocardiography->id;
                $echodicomfilemodel->file_name = $fileName;
                $echodicomfilemodel->file_path = $filepath;
                $echodicomfilemodel->save();
            }
        }
        return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit]);
    }
    public function show($id)
    {
        //
    }
    public function edit(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, Echocardiography $echocardiography)
    {
        return Inertia::render('CaseReportForm/FormFields/Echocardiography/Edit', [
            'crf' => $crf,
            'scheduledvisit' => $scheduledvisit,
            'echocardiography' => $echocardiography,
            'mode' => 'scheduledvisit',
            'putUrl' => 'crf.scheduledvisit.echocardiography.update',
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit])
        ]);
    }
    public function update(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit, Echocardiography $echocardiography, EchocardiographyService  $echocardiographyService)
    {
        $echocardiographyService->updatePreoperativeEchocardiography($request, $echocardiography);
        return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit])->with(['message' => 'Updated Successfully']);
    }
    public function destroy($id)
    {
        //
    }
}
