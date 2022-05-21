<?php

use Illuminate\Support\Facades\Route;

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


Route::get('/crf', function(){
    return view('casereportforms.index');
})->name('crf');

Route::get('/crf/create', function(){
    return view('casereportforms.create');
})->name('crf.create');

Route::get('/crf/create/visit', function(){
    return view('casereportforms.show');
})->name('crf.visit');



Route::get('/', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('/underconstruction', function () {
    return view('underconstruction');
})->middleware(['auth'])->name('underconstruction');



// Route::resource('crf', CrfController::class)->middleware(['auth']);

// Route::get('/roles', RolesComponent::class)->middleware(['auth'])->name('roles');

// Route::get('/facility', FacilityLocation::class)->middleware(['auth'])->name('facility');
// Route::get('/users', UserMaster::class)->middleware(['auth'])->name('users');



require __DIR__.'/auth.php';
