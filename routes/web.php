<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



use App\Http\Controllers\CaseReportFormController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EchoDicomFilesController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\PreOperativeController;
use App\Http\Controllers\PostOperativeController;


use App\Http\Controllers\IntraOperativeController;
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
use App\Http\Controllers\ScheduledVisit\ScheduledVisitPhysicalExaminationController;
use App\Http\Controllers\TicketsController;

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

require __DIR__.'/auth.php';

Route::group(['middleware' => 'auth'], function () {

    Route::get('/', DashboardController::class)->name('home');
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    
    //Admin Specific ROutes
    
    Route::resource('facility', FacilityController::class)->middleware(['admin']);
    Route::resource('tickets', TicketsController::class);
    Route::resource('crf', CaseReportFormController::class)->parameters(['crf' => 'crf:subject_id']);

    Route::scopeBindings()->group(function () {

        Route::resource('crf.preoperative', PreOperativeController::class)->parameters(['crf' => 'crf:subject_id', 'preoperative' => 'preoperative:visit_no']);
        Route::resource('crf.postoperative', PostOperativeController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::resource('crf.intraoperative', IntraOperativeController::class)->parameters(['crf' => 'crf:subject_id', 'intraoperative' => 'intraoperative:visit_no']);
        Route::resource('crf.scheduledvisit', ScheduledVisitController::class)->parameters(['crf' => 'crf:subject_id', 'scheduledvisit' => 'scheduledvisit:visit_no']);
        Route::resource('crf.unscheduledvisit', UnscheduledvisitController::class)->parameters(['crf' => 'crf:subject_id', 'unscheduledvisit' => 'unscheduledvisit:visit_no']);

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
        
        Route::resource('crf.intraoperative', IntraOperativeController::class)->parameters(['crf' => 'crf:subject_id', 'intraoperative' => 'intraoperative:visit_no']);
    
        Route::resource('crf.postoperative.physicalexamination', PostOperativePhysicalExaminationController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::resource('crf.postoperative.symptoms', OperativeSymptomController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::resource('crf.postoperative.labinvestigation', LabInvestigationController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::resource('crf.postoperative.electrocardiogram', ElectrocardiogramController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::resource('crf.postoperative.echocardiography', EchocardiographyController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::resource('crf.postoperative.safetyparameter', PostOperativeSafetyController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);
        Route::resource('crf.postoperative.medication', MedicationsController::class)->parameters(['crf' => 'crf:subject_id', 'postoperative' => 'postoperative:visit_no']);

        Route::resource('crf.scheduledvisit.physicalexamination', ScheduledVisitPhysicalExaminationController::class)->parameters(['crf' => 'crf:subject_id', 'scheduledvisit' => 'scheduledvisit:visit_no']);
        Route::resource('crf.scheduledvisit.symptoms', ScheduledVisitPhysicalExaminationController::class)->parameters(['crf' => 'crf:subject_id', 'scheduledvisit' => 'scheduledvisit:visit_no']);


    });

    Route::get('/dicomviewer/{echodicomfile}', [EchoDicomFilesController::class, 'viewer'] )->name('dicomviewer');
    Route::post('/dicomupload', [EchoDicomFilesController::class, 'uploaded'] )->name('dicomuploader');




    Route::get('/underconstruction', function () {
        return view('underconstruction');
    })->middleware(['auth'])->name('underconstruction');
});
