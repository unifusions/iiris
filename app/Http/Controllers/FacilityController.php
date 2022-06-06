<?php

namespace App\Http\Controllers;

use App\Models\Facility;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class FacilityController extends Controller
{
  
    public function __construct()
    {

        
    }
    
    public function index()
    {
        $facilities = Facility::orderBy('name','asc')->paginate(15);
        return view('facility.index', compact('facilities'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('facility.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Facility::Create([
            'name' => $request->facilityName,
            'address_line_1' => $request->address_line_1,
            'address_line_2' => $request->address_line_2,
            'city' => $request->city,
            'pin_code' => $request->pin_code,
            'state' => $request->state,
        ]);
        return redirect()->route('facility.index');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Facility $facility)
    {
        return view('facility.edit', compact('facility'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Facility $facility)
    {
       
        $facility->name = $request->facilityName;
        $facility->address_line_1 = $request->address_line_1;
        $facility->address_line_2 = $request->address_line_2;
        $facility->city = $request->city;
        $facility->pin_code = $request->pin_code;
        $facility->state = $request->state;
        $facility->save();
        $type = 'success';
        $message = 'Facility ' . $facility->name . ' modified successfully';
        return redirect()->route('facility.index')->with(['message' => $message, 'type' => $type]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Facility $facility)
    {
        $facility->delete();
        $message = 'Facility ' . $facility->name . ' deleted successfully';
        $type = 'danger';
        return redirect()->route('facility.index')->with(['message' => $message, 'type' => $type]);
    }
}
