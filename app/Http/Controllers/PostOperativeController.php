<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\EchoDicomFile;
use App\Models\PostOperativeData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostOperativeController extends Controller
{

    public function index(CaseReportForm $crf)
    {
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //
    }


    public function show(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        return Inertia::render('CaseReportForm/Postoperative/Index', [
            'crf' => $crf,
            'postoperative' => $postoperative,
            'physicalexamination' => $postoperative->physicalexaminations,
            'symptoms' => $postoperative->symptoms,
            'labinvestigations' => $postoperative->labinvestigations,
            'echocardiographies' => $postoperative->echocardiographies,
            'electrocardiograms' => $postoperative->electrocardiograms,
            'safetyparameters' => $postoperative->safetyparameters,

            'echodicomfiles' => $postoperative->echocardiographies ?
                EchoDicomFile::where('echocardiography_id', $postoperative->echocardiographies->id)->get()->map(fn ($file) => [
                    'id' => $file->id,
                    'file_name' => $file->file_name,
                    'download_url' => storage_path('app/public/' . $file->file_path)
                ]) : null            // 'echoFiles' => $preoperative->echocardiographies->echodicomfiles 
        ]);
    }

    public function edit($id)
    {
    }

    public function update(Request $request, CaseReportForm $crf, PostOperativeData $postoperative)
    {
        if (isset($request->postHasMedications)) {
            $postoperative->hasMedications = $request->postHasMedications;
            $postoperative->save();
            if ($postoperative->hasMedications)
                return redirect()->route('crf.postoperative.medication.index', [$crf, $postoperative]);
            return redirect()->route('crf.postoperative.show', [$crf, $postoperative]);
        }

        if (isset($request->is_submitted)) {
            $postoperative->is_submitted = $request->is_submitted;
            $postoperative->save();
            $message = 'Postoperative Data successfully submitted for approval';
            return redirect()->route('crf.show', $crf)->with(['message' => $message]);
        }

        if (isset($request->approve)) {
            $postoperative->visit_status = $request->approve;
            $postoperative->save();
            $message = 'Postoperative Data has been approved';
            return redirect()->route('crf.show', $crf)->with(['message' => $message]);
        }

        if (isset($request->disapprove)) {
            $postoperative->is_submitted = !$request->disapprove;
            $postoperative->visit_status = !$request->disapprove;
            $postoperative->save();
            $message = 'Postoperative Data has been disapproved';

            return redirect()->route('crf.postoperative.show', [$crf, $postoperative])->with(['message' => $message]);
        }
    }


    public function destroy($id)
    {
    }
}
