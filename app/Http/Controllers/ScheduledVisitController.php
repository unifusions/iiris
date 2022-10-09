<?php

namespace App\Http\Controllers;

use App\Mail\ScheduledVisitApprovalMail;
use App\Models\CaseReportForm;
use App\Models\EchoDicomFile;
use App\Models\ScheduledVisit;
use App\Models\ScheduledVisitApprovalRemark;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ScheduledVisitController extends Controller
{

    public function index(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        
    }


    public function create()
    {
    }


    public function store(Request $request)
    {
    }


    public function show(CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {

        return Inertia::render('CaseReportForm/ScheduledVisit/Show', [
            'crf' =>  $crf,
            'scheduledvisit' => $scheduledvisit,
            'physicalexamination' => $scheduledvisit->physicalexaminations,
            'symptoms' => $scheduledvisit->symptoms,
            'personalhistories' => $scheduledvisit->personalhistories,
            'labinvestigations' => $scheduledvisit->labinvestigations,
            'physicalactivities' => $scheduledvisit->physicalactivities,
            'echocardiographies' => $scheduledvisit->echocardiographies,
            'svdicomfiles' => $scheduledvisit->fileuploads,
            'echodicomfiles' => $scheduledvisit->echocardiographies ?
                EchoDicomFile::where('echocardiography_id', $scheduledvisit->echocardiographies->id)->get()->map(fn ($file) => [
                    'id' => $file->id,
                    'file_name' => $file->file_name,
                    'download_url' => storage_path('app/public/' . $file->file_path)
                ]) : null,
            'electrocardiograms' => $scheduledvisit->electrocardiograms,
            'safetyparameters' => $scheduledvisit->safetyparameters,
            'medications' => $scheduledvisit->medications,
            'approvalremarks' => $scheduledvisit->approvalremarks,
            'backUrl' => route('crf.show', [$crf])
        ]);
    }


    public function edit(ScheduledVisit $scheduledVisit)
    {
    }


    public function update(Request $request, CaseReportForm $crf, ScheduledVisit $scheduledvisit)
    {
        $investigators = User::where('facility_id',$crf->facility->id)->where('role_id', '3')->pluck('email');

        if (isset($request->pod)) {
            $scheduledvisit->pod =  Carbon::parse($request->pod)->addHours(5)->addMinutes(30);
            $scheduledvisit->save();
            return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit]);
        }

        if (isset($request->svHasMedications)) {
            $scheduledvisit->hasMedications = $request->svHasMedications;
            $scheduledvisit->save();
            if ($scheduledvisit->hasMedications)
                return redirect()->route('crf.scheduledvisit.medication.index', [$crf, $scheduledvisit]);
            return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit]);
        }

        if (isset($request->sv_physical_activity)) {
            $scheduledvisit->physical_activity = $request->sv_physical_activity;
            $scheduledvisit->save();
            if ($scheduledvisit->physical_activity)
                return redirect()->route('crf.scheduledvisit.physicalactivity.index', [$crf, $scheduledvisit]);
            return redirect()->route('crf.scheduledvisit.show', [$crf, $scheduledvisit]);
        }

        if ($request->is_submitted) {

            $scheduledvisit->is_submitted = $request->is_submitted;
            $scheduledvisit->save();
            $remarks = ScheduledVisitApprovalRemark::Create([
                'scheduled_visits_id' => $scheduledvisit->id,
                'user_id' => auth()->user()->id,
                'action' => $request->action,
                'remarks' => $request->remarks,
            ]);
            Mail::to($investigators)->send(new ScheduledVisitApprovalMail($crf, $scheduledvisit, $remarks ));

            $message = 'Scheduled Visit Data for Subject: ' . $crf->subject_id . ' submitted Successfully';
            return redirect()->route('crf.show', [$crf])->with(['message' => $message]);
        }


        if (isset($request->approve)) {
            $scheduledvisit->visit_status = $request->approve;
            $scheduledvisit->save();
            $remarks = ScheduledVisitApprovalRemark::Create([
                'scheduled_visits_id' => $scheduledvisit->id,
                'user_id' => auth()->user()->id,
                'action' => $request->action,
                'remarks' => $request->remarks,
            ]);
            Mail::to($crf->user->email)->send(new ScheduledVisitApprovalMail($crf, $scheduledvisit, $remarks));
            $message = 'Scheduled Data has been approved';
            return redirect()->route('crf.show', $crf)->with(['message' => $message]);
        }

        if (isset($request->disapprove)) {
            $scheduledvisit->is_submitted = !$request->disapprove;
            $scheduledvisit->visit_status = !$request->disapprove;
            $scheduledvisit->save();
            $remarks = ScheduledVisitApprovalRemark::Create([
                'scheduled_visits_id' => $scheduledvisit->id,
                'user_id' => auth()->user()->id,
                'action' => $request->action,
                'remarks' => $request->remarks,
            ]);
            Mail::to($crf->user->email)->send(new ScheduledVisitApprovalMail($crf, $scheduledvisit, $remarks));
            $message = 'Scheduled Data has been disapproved';
            return redirect()->route('crf.show', $crf)->with(['message' => $message]);
        }
    }


    public function destroy(ScheduledVisit $scheduledVisit)
    {
    }
}
