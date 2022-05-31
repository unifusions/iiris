<?php

use App\Http\Controllers\CaseReportFormController;



use App\Http\Controllers\PreOperativeController;
use App\Http\Controllers\PostOperativeController;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IntraOperativeController;
use App\Http\Controllers\PreOperative\PreOperativeElectrocardiogramController;
use App\Http\Controllers\PreOperative\PreOperativeLabInvestigation;
use App\Http\Controllers\ScheduledVisitController;
use App\Http\Controllers\UnscheduledvisitController;

use App\Http\Controllers\PreOperative\PreOperativePhysicalExaminationController;
use App\Http\Controllers\PreOperative\PreOperativeSymptomsController;
use App\Http\Controllers\PreOperative\PreOperativeLabInvestigationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');



Route::group(['middleware' => 'auth'], function () {

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


    });




    Route::get('/underconstruction', function () {
        return view('underconstruction');
    })->middleware(['auth'])->name('underconstruction');
});


require __DIR__ . '/auth.php';
