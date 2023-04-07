<?php

namespace App\Http\Controllers;

use App\Mail\CrfApproval;
use App\Mail\PreoperativeApprovalMail;
use App\Models\CaseReportForm;
use App\Models\CaseReportFormVisit;
use App\Models\CaseReportFormVisitMode;
use App\Models\EchoDicomFile;
use App\Models\PreOperative;
use App\Models\PreoperativeApprovalRemark;
use App\Models\PreOperativeData;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class PreOperativeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf)
    {


        // $casereportform = CaseReportForm::where('subject_id', $subject_id)->first();
        // $preop = CaseReportFormVisit::where('case_report_form_id', $casereportform->id)
        //     ->first()
        //     ->casereportformvisitmode
        //     ->where('mode', 'preop')->first();


        // // $preop = CaseReportFormVisitMode::find($id);
        // return view('casereportforms.visits.preoperative.index', compact('subject_id', 'visit_no', 'preop'));



        if ($crf->preoperatives)
            $preoperative = $crf->preoperatives;
        return view('casereportforms.PreOperativeData.show', compact('crf', 'preoperative'));
    }
    public function create()
    {
    }

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
    public function show(CaseReportForm $crf, PreOperativeData $preoperative)
    {

        // dd($preoperative->fileuploads->map(fn($file) => ['extension' =>  pathinfo(storage_path('app/public/' . $file->file_path), PATHINFO_EXTENSION)]));

        // $preop = CaseReportFormVisitMode::find($id);
        // return view('casereportforms.visits.preoperative.show', compact('preop'));
        return Inertia::render('CaseReportForm/Preoperative/Index', [
            'crf' => $crf,
            'preoperative' => $preoperative,
            'physicalexamination' => $preoperative->physicalexaminations,
            'symptoms' => $preoperative->symptoms,
            'medicalhistories' => $preoperative->medicalhistories,
            'surgicalhistories' => $preoperative->surgicalhistories,
            'familyhistories' => $preoperative->familyhistories,
            'physicalactivities' => $preoperative->physicalactivities,
            'personalhistories' => $preoperative->personalhistories,
            'echocardiographies' => $preoperative->echocardiographies,
            'electrocardiograms' => $preoperative->electrocardiograms,
            'labinvestigations' => $preoperative->labinvestigations,
            'medications' => $preoperative->medications,
            'preopdicomfiles' => $preoperative->fileuploads,
            'preopfileswext' => $preoperative->fileuploads->map(fn ($file) => [
                'file' => $file,

                'extension' =>  pathinfo(storage_path('app/public/' . $file->file_path), PATHINFO_EXTENSION)
            ]),
            'approvalremarks' => $preoperative->approvalremarks,
            'echodicomfiles' => $preoperative->echocardiographies ?
                EchoDicomFile::where('echocardiography_id', $preoperative->echocardiographies->id)->get()->map(fn ($file) => [
                    'id' => $file->id,
                    'file_name' => $file->file_name,
                    'download_url' => storage_path('app/public/' . $file->file_path)
                ]) : null
        ]);
    }

    public function edit($id)
    {
    }

    public function update(Request $request, CaseReportForm $crf, PreOperativeData $preoperative)
    {
        $investigators = User::where('facility_id', $crf->facility->id)->where('role_id', '3')->pluck('email');
        // dd($investigators);

        if (isset($request->medical_history)) {
            $preoperative->medical_history = $request->medical_history;
            $preoperative->save();
            if ($preoperative->medical_history)
                return redirect()->route('crf.preoperative.medicalhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]);
            return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative]);
        }

        if (isset($request->surgical_history)) {
            $preoperative->surgical_history = $request->surgical_history;
            $preoperative->save();
            if ($preoperative->surgical_history)
                return redirect()->route('crf.preoperative.surgicalhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]);
            return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative]);
        }

        if (isset($request->family_history)) {
            $preoperative->family_history = $request->family_history;
            $preoperative->save();
            if ($preoperative->family_history)
                return redirect()->route('crf.preoperative.familyhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]);
            return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative]);
        }

        if (isset($request->physical_activity)) {
            $preoperative->physical_activity = $request->physical_activity;
            $preoperative->save();
            if ($preoperative->physical_activity)
                return redirect()->route('crf.preoperative.physicalactivity.index', ['crf' => $crf, 'preoperative' => $preoperative]);
            return redirect()->route('crf.preoperative.show', ['crf' => $crf, 'preoperative' => $preoperative]);
        }

        if (isset($request->hasMedications)) {
            $preoperative->hasMedications = $request->hasMedications;
            $preoperative->save();
            if ($preoperative->hasMedications)
                return redirect()->route('crf.preoperative.medication.index', ['crf' => $crf, 'preoperative' => $preoperative]);
            return redirect()->route('crf.preoperative.index', compact('crf', 'preoperative'));
        }

        if (isset($request->is_submitted)) {
            $preoperative->is_submitted = $request->is_submitted;
            $remarks = PreoperativeApprovalRemark::Create([
                'pre_operative_data_id' => $preoperative->id,
                'user_id' => auth()->user()->id,
                'action' => $request->action,
                'remarks' => $request->remarks,
            ]);
            $preoperative->save();
            $message = 'Preoperative Data successfully submitted for approval';
            Mail::to($investigators)->send(new PreoperativeApprovalMail($crf, $preoperative, $remarks));
            return redirect()->route('crf.show', $crf)->with(['message' => $message]);
        }


        if (isset($request->approve)) {
            $preoperative->visit_status = $request->approve;
            $remarks = PreoperativeApprovalRemark::Create([
                'pre_operative_data_id' => $preoperative->id,
                'user_id' => auth()->user()->id,
                'action' => $request->action,
                'remarks' => $request->remarks,
            ]);
            $preoperative->save();
            $message = 'Preoperative Data has been approved';
            Mail::to($crf->user->email)->send(new PreoperativeApprovalMail($crf, $preoperative, $remarks));
            return redirect()->route('crf.show', $crf)->with(['message' => $message]);
        }

        // dd($request->disapprove);
        if (isset($request->disapprove)) {
            $preoperative->is_submitted = !$request->disapprove;
            $preoperative->visit_status = !$request->disapprove;
            $remarks = PreoperativeApprovalRemark::Create([
                'pre_operative_data_id' => $preoperative->id,
                'user_id' => auth()->user()->id,
                'action' => $request->action,
                'remarks' => $request->remarks,
            ]);
            $preoperative->save();
            $message = 'Preoperative Data has been disapproved';
            Mail::to($crf->user->email)->send(new PreoperativeApprovalMail($crf, $preoperative, $remarks));
            return redirect()->route('crf.show', $crf)->with(['message' => $message]);
        }

        if (isset($request->action)) {
            if ($request->action == 'Unlocked') {
                $preoperative->visit_status = 0;
                $preoperative->is_submitted = 0;
                PreoperativeApprovalRemark::Create([
                    'pre_operative_data_id' => $preoperative->id,
                    'user_id' => auth()->user()->id,
                    'action' => $request->action,
                    'remarks' => $request->remarks,
                ]);
                $preoperative->save();
                $message = 'Preoperative Data has been unlocked to edit';
                return redirect()->route('crf.show', $crf)->with(['message' => $message]);
            }
        }
    }


    public function destroy($id)
    {
    }
}
