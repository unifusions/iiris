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
       
        if (isset($files)) {
         
            foreach ($files as $file) {
                $fileName = $file->getClientOriginalName();
                $uploadpath = 'uploads/' . $crf->subject_id . '/scheduledvisit';
                $filepath = $file->storeAs($uploadpath, $fileName, 'public');
                
                EchoDicomFile::Create([
                    'echocardiography_id' => $echocardiography->id,
                    'file_name' => $fileName,
                    'file_path' => $filepath,
                ]);
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
            'backUrl' => route('crf.scheduledvisit.show', [$crf, $scheduledvisit]),
            'echodicomfiles' => $scheduledvisit->echocardiographies ? 
            EchoDicomFile::where('echocardiography_id', $echocardiography->id)->get()->map(fn ($file) => [
                'id' => $file->id,
                'file_name' => $file->file_name,
                'download_url' => storage_path('app/public/' . $file->file_path)
            ]) : null
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
