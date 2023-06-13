<?php

use App\Exports\PhysicalExaminationExport;
use App\Http\Controllers\Admins\PreoperativeFormEditableController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



use App\Http\Controllers\CaseReportFormController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EchocardiographyGetReviewController;
use App\Http\Controllers\EchoDicomFilesController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\PreOperativeController;
use App\Http\Controllers\PostOperativeController;


use App\Http\Controllers\IntraOperativeController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\PostOperative\EchocardiographyController;
use App\Http\Controllers\PostOperative\ElectrocardiogramController;
use App\Http\Controllers\PostOperative\LabInvestigationController;
use App\Http\Controllers\PostOperative\MedicationsController;
use App\Http\Controllers\PostOperative\OperativeSymptomController;
use App\Http\Controllers\PostOperative\PostOperativePhysicalExaminationController;
use App\Http\Controllers\PostOperative\PostOperativeSafetyController;
use App\Http\Controllers\PostOperative\SafetyParameterController;
use App\Http\Controllers\PreOperative\FamilyHistoryController;

use App\Http\Controllers\PreOperative\MedicalHistoryController;
use App\Http\Controllers\PreOperative\PreOperativeEchocardiographyController;
use App\Http\Controllers\PreOperative\PreOperativeElectrocardiogramController;

use App\Http\Controllers\ScheduledVisitController;
use App\Http\Controllers\UnscheduledvisitController;

use App\Http\Controllers\PreOperative\PreOperativePhysicalExaminationController;
use App\Http\Controllers\PreOperative\PreOperativeSymptomsController;
use App\Http\Controllers\PreOperative\PreOperativeLabInvestigationController;
use App\Http\Controllers\PreOperative\PreOperativeMedicationController;
use App\Http\Controllers\PreOperative\PreOperativePersonalHistoryController;
use App\Http\Controllers\PreOperative\PreOperativePhysicalActivityController;
use App\Http\Controllers\PreOperative\SurgicalHistoryController;
use App\Http\Controllers\ScheduledVisit\ScheduledVisitPersonalHistoryController;
use App\Http\Controllers\ScheduledVisit\ScheduledVisitPhysicalExaminationController;
use App\Http\Controllers\ScheduledVisit\ScheduledVisitSymptomController;
use App\Http\Controllers\ScheduledVisit\SVEchocardiographyController;
use App\Http\Controllers\ScheduledVisit\SVElectricardiogramController;
use App\Http\Controllers\ScheduledVisit\SVLabInvestigation;
use App\Http\Controllers\ScheduledVisit\SVMedicationsController;
use App\Http\Controllers\ScheduledVisit\SVPhysicalActivity;
use App\Http\Controllers\ScheduledVisit\SVSafetyParameterController;
use App\Http\Controllers\Tickets\TicketCommentController;
use App\Http\Controllers\TicketsController;
use App\Http\Controllers\UnshceduledVisit\UVEchocardiographyController;
use App\Http\Controllers\UnshceduledVisit\UVElectrocardiogramController;
use App\Http\Controllers\UnshceduledVisit\UVLabInvestigationController;
use App\Http\Controllers\UnshceduledVisit\UVMedicationController;
use App\Http\Controllers\UnshceduledVisit\UVPersonalHistoryController;
use App\Http\Controllers\UnshceduledVisit\UVPhysicalExaminationController;
use App\Http\Controllers\UnshceduledVisit\UVSymptomController;
use App\Http\Controllers\UnshceduledVisit\UVPhysicalActivityController;
use App\Http\Controllers\UnshceduledVisit\UVSafetyParameterController;
use App\Http\Controllers\UserController;
use App\Models\EchoDicomFile;
use App\Http\Controllers\IntrafileUploadController;
use App\Http\Controllers\IntraoperativeFileDownloadController;
use App\Http\Controllers\IntraoperativeReviewerController;
use App\Http\Controllers\IntraoperativeReviewSubmitController;
use App\Http\Controllers\PhysicalExaminationController;
use App\Http\Controllers\PostoperativeFileDownloadController;
use App\Http\Controllers\PostoperativeFileUploadController;
use App\Http\Controllers\PreOperative\DiagnosisController;
use App\Http\Controllers\Preoperative\PreopEchoReviewController;
use App\Http\Controllers\PreoperativeFileDownloadController;
use App\Http\Controllers\PreoperativeFileUploadController;
use App\Http\Controllers\PreoperativeNewFileUploadController;
use App\Http\Controllers\Reports\CaseReportFormExportController;
use App\Http\Controllers\Reports\PhysicalExaminationExportController;
use App\Http\Controllers\Reports\ReportsViewController;
use App\Http\Controllers\Reports\UserExportController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\Reviewer\EchocardiographyReview;
use App\Http\Controllers\Reviewer\EchocardiographyReviewed;
use App\Http\Controllers\ScheduledVisitFileUploadController;
use App\Http\Controllers\SvFileDownloadController;
use App\Http\Controllers\UnscheduledVisitFileUploadController;
use App\Http\Controllers\UsvFileDownloadController;
use App\Models\Echocardiography;
use Maatwebsite\Excel\Facades\Excel;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/react-dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('rd');

require __DIR__ . '/auth.php';

Route::group(['middleware' => 'auth'], function () {

    Route::get('/', DashboardController::class)->name('home');
    Route::get('/dashboard', DashboardController::class)->name('dashboard');

    // Route::get('/dcmviewer', function () {
    //     return Inertia::render(
    //         'EchoDicomFiles/EchoRDicomViewer',


    //     );
    // })->middleware(['auth'])->name('dcmviewer');
    //Admin Specific ROutes

    Route::resource('facility', FacilityController::class)->parameters(['facility' => 'facility:uid']);
    Route::resource('tickets', TicketsController::class);
    Route::resource('logs', LogController::class);
    Route::resource('users', UserController::class);
    Route::resource('reports', ReportsController::class);

    Route::get('reports/export/users', UserExportController::class)->name('downloadReport');
    Route::get('/reports/export/crf', CaseReportFormExportController::class)->name('downloadCrfReport');
    // Route::get('/reports/view/crf', ReportsViewController::class)->name('queryReport');
    Route::get('/reports/export/physicalexamination', PhysicalExaminationExportController::class)->name('downloadPhysicalExaminationReport');




    Route::resource('crf', CaseReportFormController::class)->parameters(['crf' => 'crf:subject_id']);

    Route::scopeBindings()->group(function () {

        Route::resource('crf.preoperative', PreOperativeController::class)->parameters(['crf' => 'crf:subject_id', 'preoperative' => 'preoperative:visit_no']);
        Route::resource('crf.postoperative', PostOperativeController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::resource('crf.intraoperative', IntraOperativeController::class)->parameters(['crf' => 'crf:subject_id', 'intraoperative' => 'intraoperative:visit_no']);
        Route::resource('crf.scheduledvisit', ScheduledVisitController::class)->parameters(['crf' => 'crf:subject_id', 'scheduledvisit' => 'scheduledvisit:visit_no']);
        Route::resource('crf.unscheduledvisit', UnscheduledvisitController::class)->parameters(['crf' => 'crf:subject_id', 'unscheduledvisit' => 'unscheduledvisit:visit_no']);

        Route::resource('crf.preoperative.diagnosis', DiagnosisController::class)->parameters(['crf' => 'crf:subject_id', 'preoperative' => 'preoperative:visit_no']);
        Route::resource('crf.preoperative.physicalexamination', PreOperativePhysicalExaminationController::class)->parameters(['crf' => 'crf:subject_id', 'preoperative' => 'preoperative:visit_no']);
        Route::resource('crf.preoperative.symptoms', PreOperativeSymptomsController::class)->parameters(['crf' => 'crf:subject_id', 'preoperative' => 'preoperative:visit_no']);
        Route::resource('crf.preoperative.labinvestigation', PreOperativeLabInvestigationController::class)->parameters(['crf' => 'crf:subject_id', 'preoperative' => 'preoperative:visit_no']);
        Route::resource('crf.preoperative.electrocardiogram', PreOperativeElectrocardiogramController::class)->parameters(['crf' => 'crf:subject_id', 'preoperative' => 'preoperative:visit_no']);
        Route::resource('crf.preoperative.echocardiography', PreOperativeEchocardiographyController::class)->parameters(['crf' => 'crf:subject_id', 'preoperative' => 'preoperative:visit_no']);
        Route::resource('crf.preoperative.medicalhistory', MedicalHistoryController::class)->parameters(['crf' => 'crf:subject_id', 'preoperative' => 'preoperative:visit_no']);
        Route::resource('crf.preoperative.surgicalhistory', SurgicalHistoryController::class)->parameters(['crf' => 'crf:subject_id', 'preoperative' => 'preoperative:visit_no']);
        Route::resource('crf.preoperative.familyhistory', FamilyHistoryController::class)->parameters(['crf' => 'crf:subject_id', 'preoperative' => 'preoperative:visit_no']);
        Route::resource('crf.preoperative.personalhistory', PreOperativePersonalHistoryController::class)->parameters(['crf' => 'crf:subject_id', 'preoperative' => 'preoperative:visit_no']);
        Route::resource('crf.preoperative.physicalactivity', PreOperativePhysicalActivityController::class)->parameters(['crf' => 'crf:subject_id', 'preoperative' => 'preoperative:visit_no']);
        Route::resource('crf.preoperative.medication', PreOperativeMedicationController::class)->parameters(['crf' => 'crf:subject_id', 'preoperative' => 'preoperative:visit_no']);
        // Route::prefix('api')->group(function(){
        Route::patch('/crf/{crf}/preoperative/{preoperative}/fileupload', [PreoperativeFileUploadController::class, 'patch']);
        // Route::put('/crf/{crf}/preoperative/{preoperative}', PreoperativeFormEditableController::class)->name('crf.preoperative.unlock');

        // });
        Route::resource('crf.preoperative.fileupload', PreoperativeFileUploadController::class)->parameters(['crf' => 'crf:subject_id', 'preoperative' => 'preoperative:visit_no']);

        Route::get('/download/{crf}/preoperative/{preoperative}/{fileupload}', PreoperativeFileDownloadController::class)->name('preopertivefiledownload');




        Route::resource('crf.intraoperative', IntraOperativeController::class)->parameters(['crf' => 'crf:subject_id', 'intraoperative' => 'intraoperative:visit_no']);
        Route::resource('crf.intraoperative.fileupload', IntrafileUploadController::class)->parameters(['crf' => 'crf:subject_id', 'intraoperative' => 'intraoperative:visit_no']);
        Route::get('/download/{crf}/intraoperative/{intraoperative}/{fileupload}', IntraoperativeFileDownloadController::class)->name('intraoperativefiledownload');

        Route::patch('/crf/{crf}/intraoperative/{intraoperative}/fileupload', [IntrafileUploadController::class, 'patch']);


        Route::resource('crf.postoperative.physicalexamination', PostOperativePhysicalExaminationController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::resource('crf.postoperative.symptoms', OperativeSymptomController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::resource('crf.postoperative.labinvestigation', LabInvestigationController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::resource('crf.postoperative.electrocardiogram', ElectrocardiogramController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::resource('crf.postoperative.echocardiography', EchocardiographyController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::resource('crf.postoperative.safetyparameter', PostOperativeSafetyController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::resource('crf.postoperative.medication', MedicationsController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::resource('crf.postoperative.fileupload', PostoperativeFileUploadController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::get('/download/{crf}/postoperative/{postoperative}/{fileupload}', PostoperativeFileDownloadController::class)->name('postoperativefiledownload');
        Route::patch('/crf/{crf}/postoperative/{postoperative}/fileupload', [PostoperativeFileUploadController::class, 'patch']);

        Route::resource('crf.unscheduledvisit.physicalexamination', UVPhysicalExaminationController::class)->parameters(['crf' => 'crf:subject_id', 'unscheduledvisit' => 'unscheduledvisit:visit_no']);
        Route::resource('crf.unscheduledvisit.symptoms', UVSymptomController::class)->parameters(['crf' => 'crf:subject_id', 'unscheduledvisit' => 'unscheduledvisit:visit_no']);
        Route::resource('crf.unscheduledvisit.personalhistory', UVPersonalHistoryController::class)->parameters(['crf' => 'crf:subject_id', 'unscheduledvisit' => 'unscheduledvisit:visit_no']);
        Route::resource('crf.unscheduledvisit.physicalactivity', UVPhysicalActivityController::class)->parameters(['crf' => 'crf:subject_id', 'unscheduledvisit' => 'unscheduledvisit:visit_no']);
        Route::resource('crf.unscheduledvisit.labinvestigation', UVLabInvestigationController::class)->parameters(['crf' => 'crf:subject_id', 'unscheduledvisit' => 'unscheduledvisit:visit_no']);
        Route::resource('crf.unscheduledvisit.electrocardiogram', UVElectrocardiogramController::class)->parameters(['crf' => 'crf:subject_id', 'unscheduledvisit' => 'unscheduledvisit:visit_no']);
        Route::resource('crf.unscheduledvisit.echocardiography', UVEchocardiographyController::class)->parameters(['crf' => 'crf:subject_id', 'unscheduledvisit' => 'unscheduledvisit:visit_no']);
        Route::resource('crf.unscheduledvisit.safetyparameter', UVSafetyParameterController::class)->parameters(['crf' => 'crf:subject_id', 'unscheduledvisit' => 'unscheduledvisit:visit_no']);
        Route::resource('crf.unscheduledvisit.medication', UVMedicationController::class)->parameters(['crf' => 'crf:subject_id', 'unscheduledvisit' => 'unscheduledvisit:visit_no']);
        Route::resource('crf.unscheduledvisit.fileupload', UnscheduledVisitFileUploadController::class)->parameters(['crf' => 'crf:subject_id', 'unscheduledvisit' => 'unscheduledvisit:visit_no']);
        Route::get('/download/{crf}/unscheduledvisit/{unscheduledvisit}/{fileupload}', UsvFileDownloadController::class)->name('usvfiledownload');

        Route::patch('/crf/{crf}/unscheduledvisit/{unscheduledvisit}/fileupload', [UnscheduledVisitFileUploadController::class, 'patch']);



        Route::resource('crf.scheduledvisit.physicalexamination', ScheduledVisitPhysicalExaminationController::class)->parameters(['crf' => 'crf:subject_id', 'scheduledvisit' => 'scheduledvisit:visit_no']);
        Route::resource('crf.scheduledvisit.symptoms', ScheduledVisitSymptomController::class)->parameters(['crf' => 'crf:subject_id', 'scheduledvisit' => 'scheduledvisit:visit_no']);
        Route::resource('crf.scheduledvisit.personalhistory', ScheduledVisitPersonalHistoryController::class)->parameters(['crf' => 'crf:subject_id', 'scheduledvisit' => 'scheduledvisit:visit_no']);
        Route::resource('crf.scheduledvisit.physicalactivity', SVPhysicalActivity::class)->parameters(['crf' => 'crf:subject_id', 'scheduledvisit' => 'scheduledvisit:visit_no']);
        Route::resource('crf.scheduledvisit.labinvestigation', SVLabInvestigation::class)->parameters(['crf' => 'crf:subject_id', 'scheduledvisit' => 'scheduledvisit:visit_no']);
        Route::resource('crf.scheduledvisit.electrocardiogram', SVElectricardiogramController::class)->parameters(['crf' => 'crf:subject_id', 'scheduledvisit' => 'scheduledvisit:visit_no']);
        Route::resource('crf.scheduledvisit.echocardiography', SVEchocardiographyController::class)->parameters(['crf' => 'crf:subject_id', 'scheduledvisit' => 'scheduledvisit:visit_no']);
        Route::resource('crf.scheduledvisit.safetyparameter', SVSafetyParameterController::class)->parameters(['crf' => 'crf:subject_id', 'scheduledvisit' => 'scheduledvisit:visit_no']);
        Route::resource('crf.scheduledvisit.medication', SVMedicationsController::class)->parameters(['crf' => 'crf:subject_id', 'scheduledvisit' => 'scheduledvisit:visit_no']);
        Route::resource('crf.scheduledvisit.fileupload', ScheduledVisitFileUploadController::class)->parameters(['crf' => 'crf:subject_id', 'scheduledvisit' => 'scheduledvisit:visit_no']);
        Route::get('/download/{crf}/scheduledvisit/{scheduledvisit}/{fileupload}', SvFileDownloadController::class)->name('svfiledownload');

        Route::patch('/crf/{crf}/scheduledvisit/{scheduledvisit}/fileupload', [ScheduledVisitFileUploadController::class, 'patch']);

        Route::post('interactions', TicketCommentController::class)->name('interactions');

        Route::patch('submitReview/{echocardiography}', EchocardiographyReview::class)->name('submitreview');
        Route::patch('MarkAsReviewed/{echocardiography}', EchocardiographyReviewed::class)->name('markasreviewed');
        
        // Intraoperative Review Routes
        Route::patch('submitIntraReview/{intraoperative}',IntraoperativeReviewSubmitController::class)->name('submitintrareview');
        Route::patch('markAsReviewedIntra/{intraoperative}',IntraoperativeReviewerController::class)->name('markasreviewedintra');

    });



    Route::get('/dicomviewer/{echodicomfile}', [EchoDicomFilesController::class, 'viewer'])->name('dicomviewer');
    Route::post('/dicomupload', [EchoDicomFilesController::class, 'uploaded'])->name('dicomuploader');
    Route::get('/download/{echodicomfile}', [EchoDicomFilesController::class, 'download'])->name('dicomdownload');

    Route::post('/preopupload', [PreoperativeNewFileUploadController::class, 'upload'])->name('dicupload');



    Route::get('/underconstruction', function () {
        return 'Feature under developement';
    })->middleware(['auth'])->name('underconstruction');
});
