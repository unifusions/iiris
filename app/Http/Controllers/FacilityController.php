<?php

namespace App\Http\Controllers;

use App\Models\Facility;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class FacilityController extends Controller
{

    public function __construct()
    {
    }

    public function index()
    {
        $facilities = Facility::orderBy('id', 'asc')->paginate(25);
        // return view('facility.index', compact('facilities'));

        return Inertia::render('Facility/Index', [
            'facilities' => $facilities->map(function ($facility) {
                return [
                    'uid' => $facility->uid,
                    'name' => $facility->name,
                    'userCount' => $facility->users()->count(),
                    'city' => $facility->city,
                    'pin_code' => $facility->pin_code,
                ];
            }),

        ]);
    }

    public function create()
    {
        $facilityCount = Facility::withTrashed()->count();
        return Inertia::render('Facility/Create', [

            'nextUid' => str_pad($facilityCount + 1, 3, '0', STR_PAD_LEFT),
        ]);
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
            'name' => $request->name,
            'uid' => $request->uid,
            'address_line_1' => $request->address_line_1,
            'address_line_2' => $request->address_line_2,
            'city' => $request->city,
            'pin_code' => $request->pin_code,
            'state' => $request->state,
        ]);
        $message = 'Facility ' . $request->name . ' added successfully';
        return redirect()->route('facility.index')->with(['message' => $message]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Facility $facility)
    {
        // return $facility;
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
