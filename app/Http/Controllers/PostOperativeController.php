<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\PostOperativeData;
use Illuminate\Http\Request;

class PostOperativeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CaseReportForm $crf)
    {
        if ($crf->postoperatives)
            $postoperative = $crf->postoperatives;
        return view('casereportforms.PostOperativeData.index', compact('crf', 'postoperative'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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
    public function show(CaseReportForm $crf, PostOperativeData $postoperative)
    {
        if ($crf->postoperatives)
            $postoperative = $crf->postoperatives;
        return view('casereportforms.PostOperativeData.index', compact('crf', 'postoperative'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CaseReportForm $crf, PostOperativeData $postoperative)
    {
        if (isset($request->hasMedications)) {
            $postoperative->hasMedications = $request->hasMedications;
            $postoperative->save();
            if ($postoperative->hasMedications)
                return redirect()->route('crf.postoperative.medication.index', ['crf' => $crf, 'postoperative' => $postoperative]);
            return redirect()->route('crf.postoperative.index', compact('crf', 'postoperative'));
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
