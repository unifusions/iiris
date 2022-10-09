<?php

namespace App\Http\Controllers;

use App\Mail\UnscheduledVisitApprovalMail;
use App\Models\CaseReportForm;
use App\Models\EchoDicomFile;
use App\Models\UnscheduledVisit;
use App\Models\UnscheduledVisitApprovalRemark;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class UnscheduledvisitController extends Controller
{
    public function index(CaseReportForm $crf)
    {
        return Inertia::render('CaseReportForm/UnscheduledVisit/Index', [
            'backUrl' => route('crf.show', [$crf]),
            'createUrl' => route('crf.unscheduledvisit.create', [$crf]),
            'crf' => $crf,
            'unscheduledvisits' => $crf->unscheduledvisits,
        ]);
    }

    public function create(CaseReportForm $crf)
    {
        return Inertia::render('CaseReportForm/UnscheduledVisit/Create', [
            'backUrl' => route('crf.unscheduledvisit.index', [$crf]),
            'crf' => $crf,
            'usvcount' => count($crf->unscheduledvisits)

        ]);
    }

    public function store(Request $request, CaseReportForm $crf)
    {
        $unscheduledvisit = UnscheduledVisit::create([
            'case_report_form_id' => $crf->id,
            'pod' =>  Carbon::parse($request->pod)->addHours(5)->addMinutes(30),
            'visit_no' => $request->visit_no
        ]);

        return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]);
    }


    public function show(CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {

      
        return Inertia::render('CaseReportForm/UnscheduledVisit/Show', [
            'crf' => $crf,
            'unscheduledvisit' => $unscheduledvisit,
            'physicalexamination' => $unscheduledvisit->physicalexaminations,
            'symptoms' => $unscheduledvisit->symptoms,
            'personalhistories' => $unscheduledvisit->personalhistories,
            'labinvestigations' => $unscheduledvisit->labinvestigations,
            'physicalactivities' => $unscheduledvisit->physicalactivities,
            'echocardiographies' => $unscheduledvisit->echocardiographies,
            'electrocardiograms' => $unscheduledvisit->electrocardiograms,
            'safetyparameters' => $unscheduledvisit->safetyparameters,
            'medications' => $unscheduledvisit->medications,
            'usvdicomfiles' => $unscheduledvisit->fileuploads,
            'approvalremarks' => $unscheduledvisit->approvalremarks,
            'echodicomfiles' => $unscheduledvisit->echocardiographies ?
                EchoDicomFile::where('echocardiography_id', $unscheduledvisit->echocardiographies->id)->get()->map(fn ($file) => [
                    'id' => $file->id,
                    'file_name' => $file->file_name,
                    'download_url' => storage_path('app/public/' . $file->file_path)
                ]) : null,
            'backUrl' => route('crf.unscheduledvisit.index', [$crf])

        ]);
    }

    public function edit(UnscheduledVisit $unscheduledVisit)
    {
    }

    public function update(Request $request, CaseReportForm $crf, UnscheduledVisit $unscheduledvisit)
    {

        if (isset($request->usvHasMedications)) {
            $unscheduledvisit->hasMedications = $request->usvHasMedications;
            $unscheduledvisit->save();
            if ($unscheduledvisit->hasMedications)
                return redirect()->route('crf.unscheduledvisit.medication.index', [$crf, $unscheduledvisit]);
            return redirect()->route('crf.unscheduledvisit.index', compact('crf', 'scheduledvisit'));
        }

        if (isset($request->usv_physical_activity)) {
            $unscheduledvisit->physical_activity = $request->usv_physical_activity;
            $unscheduledvisit->save();
            if ($unscheduledvisit->physical_activity)
                return redirect()->route('crf.unscheduledvisit.physicalactivity.index', [$crf, $unscheduledvisit]);
            return redirect()->route('crf.unscheduledvisit.show', [$crf, $unscheduledvisit]);
        }
        $investigators = User::where('facility_id', $crf->facility->id)->where('role_id', '3')->pluck('email');

        if ($request->is_submitted) {

            $unscheduledvisit->is_submitted = $request->is_submitted;
            $unscheduledvisit->save();
            $remarks = UnscheduledVisitApprovalRemark::Create([
                'unscheduled_visits_id' => $unscheduledvisit->id,
                'user_id' => auth()->user()->id,
                'action' => $request->action,
                'remarks' => $request->remarks,
            ]);
            Mail::to($investigators)->send(new UnscheduledVisitApprovalMail($crf, $unscheduledvisit, $remarks));

            $message = 'Unscheduled Visit Data for Subject: ' . $crf->subject_id . ' submitted Successfully';
            return redirect()->route('crf.show', [$crf])->with(['message' => $message]);
        }


        if (isset($request->approve)) {
            $unscheduledvisit->visit_status = $request->approve;
            $unscheduledvisit->save();
            $remarks = UnscheduledVisitApprovalRemark::Create([
                'unscheduled_visits_id' => $unscheduledvisit->id,
                'user_id' => auth()->user()->id,
                'action' => $request->action,
                'remarks' => $request->remarks,
            ]);
            Mail::to($crf->user->email)->send(new UnscheduledVisitApprovalMail($crf, $unscheduledvisit, $remarks));
            $message = 'Unscheduled Data has been approved';
            return redirect()->route('crf.show', $crf)->with(['message' => $message]);
        }

        if (isset($request->disapprove)) {
            $unscheduledvisit->is_submitted = !$request->disapprove;
            $unscheduledvisit->visit_status = !$request->disapprove;
            $unscheduledvisit->save();
            $remarks = UnscheduledVisitApprovalRemark::Create([
                'unscheduled_visits_id' => $unscheduledvisit->id,
                'user_id' => auth()->user()->id,
                'action' => $request->action,
                'remarks' => $request->remarks,
            ]);
            Mail::to($crf->user->email)->send(new UnscheduledVisitApprovalMail($crf, $unscheduledvisit, $remarks));
            $message = 'Unscheduled Data has been disapproved';
            return redirect()->route('crf.show', $crf)->with(['message' => $message]);
        }
    }

    public function destroy(UnscheduledVisit $unscheduledvisit)
    {
    }
}
