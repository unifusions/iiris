<?php

namespace App\Http\Controllers;

use App\Mail\IntraoperativeApprovalMail;
use App\Models\CaseReportForm;
use App\Models\IntraoperativeApprovalRemark;
use App\Models\IntraOperativeData;
use App\Models\IntraoperativeDicomFile;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;


class IntraOperativeController extends Controller
{
    public function index(CaseReportForm $crf)
    {
        $intraoperative = $crf->intraoperatives;
        // return view('casereportforms.IntraOperativeData.index', compact('crf', 'intraoperative'));
    }

    public function create()
    {
    }
    public function store(Request $request, CaseReportForm $crf)
    {
    }


    public function show(CaseReportForm $crf, IntraOperativeData $intraoperative)
    {

        return Inertia::render('CaseReportForm/Intraoperative/Index', [
            'crf' => $crf,
            'intraoperative' => $intraoperative,
            'approvalremarks' => $intraoperative->approvalremarks,
            'intraopfileswext' => $intraoperative->fileuploads->map(fn ($file) => [
                'file' => $file,
                'extension' =>  pathinfo(storage_path('app/public/' . $file->file_path), PATHINFO_EXTENSION)
            ]),
            'intradicomfiles' => $intraoperative->fileuploads  ?
                IntraoperativeDicomFile::where('intra_operative_data_id', $intraoperative->id)->get()->map(fn ($file) => [
                    'id' => $file->id,
                    'file_name' => $file->file_name,
                    'download_url' => storage_path('app/public/' . $file->file_path)
                ]) : null,
            'updateUrl' => route('crf.intraoperative.update', ['crf' => $crf, 'intraoperative' => $intraoperative]),
        ]);

        // return view('casereportforms.IntraOperativeData.index', compact('crf', 'intraoperative'));
    }

    public function edit(IntraOperativeData $intraOperativeData)
    {
    }


    public function update(Request $request, CaseReportForm $crf, IntraOperativeData $intraoperative)
    {

        $investigators = User::where('facility_id', $crf->facility->id)->where('role_id', '3')->pluck('email');

        if ($request->is_submitted) {
            $intraoperative->is_submitted = $request->is_submitted;
            $intraoperative->save();
            $remarks = IntraoperativeApprovalRemark::Create([
                'intra_operative_data_id' => $intraoperative->id,
                'user_id' => auth()->user()->id,
                'action' => $request->action,
                'remarks' => $request->remarks,
            ]);
            Mail::to($investigators)->send(new IntraoperativeApprovalMail($crf, $intraoperative, $remarks));

            $message = 'Intraoperative Data for Subject:' . $crf->subject_id . 'submitted Successfully';
            return redirect()->route('crf.show', $crf)->with(['message' => $message]);
        }


        if (isset($request->approve)) {
            $intraoperative->visit_status = $request->approve;
            $intraoperative->save();
            $remarks = IntraoperativeApprovalRemark::Create([
                'intra_operative_data_id' => $intraoperative->id,
                'user_id' => auth()->user()->id,
                'action' => $request->action,
                'remarks' => $request->remarks,
            ]);
            Mail::to($crf->user->email)->send(new IntraoperativeApprovalMail($crf, $intraoperative, $remarks));

            $message = 'Intraoperative Data has been approved';
            return redirect()->route('crf.show', $crf)->with(['message' => $message]);
        }

        if (isset($request->disapprove)) {
            $intraoperative->is_submitted = !$request->disapprove;
            $intraoperative->visit_status = !$request->disapprove;
            $intraoperative->save();
            $remarks = IntraoperativeApprovalRemark::Create([
                'intra_operative_data_id' => $intraoperative->id,
                'user_id' => auth()->user()->id,
                'action' => $request->action,
                'remarks' => $request->remarks,
            ]);
            Mail::to($crf->user->email)->send(new IntraoperativeApprovalMail($crf, $intraoperative, $remarks));
            $message = 'Intraoperative Data has been disapproved';
            return redirect()->route('crf.show', $crf)->with(['message' => $message]);
        }

        if (isset($request->action)) {
            if ($request->action == 'Unlocked') {
                $intraoperative->visit_status = 0;
                $intraoperative->is_submitted = 0;
                IntraoperativeApprovalRemark::Create([
                    'intra_operative_data_id' => $intraoperative->id,
                    'user_id' => auth()->user()->id,
                    'action' => $request->action,
                    'remarks' => $request->remarks,
                ]);
                $intraoperative->save();
                $message = 'Intraoperative Data has been unlocked to edit';
                return redirect()->route('crf.show', $crf)->with(['message' => $message]);
            }
        }

        $intraoperative->case_report_form_id = $request->crf->id;
        $intraoperative->date_of_procedure = $request->date_of_procedure !== null ? Carbon::parse($request->date_of_procedure)->addHours(5)->addMinutes(30) : null;
        $intraoperative->arterial_cannulation = $request->arterial_cannulation;
        $intraoperative->venous_cannulation = $request->venous_cannulation;
        $intraoperative->cardioplegia = $request->cardioplegia;
        $intraoperative->aortotomy = $request->aortotomy;
        $intraoperative->aortotomy_others = $request->aortotomy_others;
        $intraoperative->annular_suturing_technique = $request->annular_suturing_technique;
        $intraoperative->annular_suturing_others = $request->annular_suturing_others;
        $intraoperative->tcb_time = $request->tcb_time;
        $intraoperative->acc_time = $request->acc_time;
        $intraoperative->concomitant_procedure = $request->concomitant_procedure;
        $intraoperative->all_paravalvular_leak = $request->all_paravalvular_leak;
        $intraoperative->all_paravalvular_leak_specify = $request->all_paravalvular_leak_specify;
        $intraoperative->major_paravalvular_leak = $request->major_paravalvular_leak;
        $intraoperative->major_paravalvular_leak_specify = $request->major_paravalvular_leak_specify;

        $intraoperative->save();




        $message = 'Intraoperative Data for Subject:' . $crf->subject_id . ' updated Successfully';
        return redirect()->route('crf.show', $crf)->with(['message' => $message]);
    }

    public function destroy(IntraOperativeData $intraOperativeData)
    {
        //
    }
}
