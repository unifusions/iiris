<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\PostOperativeData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostOperativeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf)
    {
        if ($crf->postoperatives)
            $postoperative = $crf->postoperatives;
        return view('casereportforms.PostOperativeData.index', compact('crf', 'postoperative'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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
            'medications' => $postoperative->medications,
            // 'echoFiles' => $preoperative->echocardiographies->echodicomfiles 
        ]);
    }

    public function edit($id)
    {
        //
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
            return redirect()->route('crf.postoperative.show', [$crf, $postoperative])->with(['message' => $message]);
        }

        if (isset($request->approve)) {
            $postoperative->visit_status = $request->approve;
            $postoperative->save();
            $message = 'Postoperative Data has been approved';
            return redirect()->route('crf.postoperative.show',[$crf, $postoperative])->with(['message' => $message]);
        }

        if (isset($request->disapprove)) {
            $postoperative->is_submitted = !$request->disapprove;
            $postoperative->visit_status = !$request->disapprove;
            $postoperative->save();
            $message = 'Postoperative Data has been disapproved';

            return redirect()->route('crf.postoperative.show', [$crf, $postoperative])->with(['message' => $message]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
