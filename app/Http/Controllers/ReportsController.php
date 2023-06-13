<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportsController extends Controller
{
    
    public function index()
    {   $crf = CaseReportForm::all();
        return Inertia::render('Reports/Index',[
            'crf' => $crf
        ]);
    }

    public function create()
    {

    }

    public function store(Request $request)
    {

    }

    public function show($id)
    {

    }
    public function edit($id)
    {

    }
    public function update(Request $request, $id)
    {

    }

    public function destroy($id)
    {

    }
}
