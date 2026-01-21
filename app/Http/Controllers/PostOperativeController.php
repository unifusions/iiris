<?php

namespace App\Http\Controllers;

use App\Mail\PostOperativeApprovalMail;
use App\Models\CaseReportForm;
use App\Models\EchoDicomFile;
use App\Models\PostoperativeApprovalRemark;
use App\Models\PostOperativeData;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
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
            'postopdicomfiles' => $postoperative->fileuploads,
            'postopfileswext' => $postoperative->fileuploads->map(fn ($file) => [
                'file' => $file,
                'extension' =>  pathinfo(storage_path('app/public/' . $file->file_path), PATHINFO_EXTENSION)
            ]),
            'approvalremarks' => $postoperative->approvalremarks,
            'medications' => $postoperative->medications,
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
        $investigators = User::where('facility_id', $crf->facility->id)->where('role_id', '3')->pluck('email');
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
            $remarks = PostoperativeApprovalRemark::Create([
                'post_operative_data_id' => $postoperative->id,
                'user_id' => auth()->user()->id,
                'action' => $request->action,
                'remarks' => $request->remarks,
            ]);
            Mail::to($investigators)->send(new PostOperativeApprovalMail($crf, $postoperative, $remarks));
            $message = 'Postoperative Data successfully submitted for approval';
            return redirect()->route('crf.show', $crf)->with(['message' => $message]);
        }

        if (isset($request->approve)) {
            $postoperative->visit_status = $request->approve;
            $postoperative->save();
            $remarks = PostoperativeApprovalRemark::Create([
                'post_operative_data_id' => $postoperative->id,
                'user_id' => auth()->user()->id,
                'action' => $request->action,
                'remarks' => $request->remarks,
            ]);
            Mail::to($crf->user->email)->send(new PostOperativeApprovalMail($crf, $postoperative, $remarks));
            $message = 'Postoperative Data has been approved';
            return redirect()->route('crf.show', $crf)->with(['message' => $message]);
        }

        if (isset($request->disapprove)) {
            $postoperative->is_submitted = !$request->disapprove;
            $postoperative->visit_status = !$request->disapprove;
            $postoperative->save();
            $remarks = PostoperativeApprovalRemark::Create([
                'post_operative_data_id' => $postoperative->id,
                'user_id' => auth()->user()->id,
                'action' => $request->action,
                'remarks' => $request->remarks,
            ]);
            Mail::to($crf->user->email)->send(new PostOperativeApprovalMail($crf, $postoperative, $remarks));
            $message = 'Postoperative Data has been disapproved';

            return redirect()->route('crf.postoperative.show', [$crf, $postoperative])->with(['message' => $message]);
        }

        if (isset($request->action)) {
            if ($request->action == 'Unlocked') {
                $postoperative->visit_status = 0;
                $postoperative->is_submitted = 0;
                PostoperativeApprovalRemark::Create([
                    'post_operative_data_id' => $postoperative->id,
                    'user_id' => auth()->user()->id,
                    'action' => $request->action,
                    'remarks' => $request->remarks,
                ]);
                $postoperative->save();
                $message = 'Preoperative Data has been unlocked to edit';
                return redirect()->route('crf.show', $crf)->with(['message' => $message]);
            }
        }
    }


    public function destroy($id)
    {
    }
}
