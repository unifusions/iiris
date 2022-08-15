<?php

namespace App\Http\Controllers;

use App\Mail\UserRegisteredMail;
use App\Models\Facility;
use App\Models\Roles;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Illuminate\Validation\Rules;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::where('role_id', '3')->orWhere('role_id', '4')->get();
        return Inertia::render('Users/Index', [
            'users' => $users->map(function ($user) {
                return [
                    'id' => $user->id,
                    'email' => $user->email,
                    'role' => Roles::where('id', $user->role_id)->pluck('name'),
                    'facility' => Facility::where('id', $user->facility_id)->pluck('name'),

                ];
            }),

        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = Roles::where('id', '3')->orWhere('id', '4')->get();
        return Inertia::render(
            'Users/Create',
            [
                'userRoles' => $roles->map(function ($role) {
                    return [
                        'label' => $role->name,
                        'value' => $role->id,
                    ];
                }),
                'facilities' => Facility::all()->map(function ($facility) {
                    return [
                        'label' => $facility->name,
                        'value' => $facility->id,

                    ];
                })

            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'email' => 'required|string|email|max:255|unique:users',
        //     'password' => ['required', 'confirmed', Rules\Password::defaults()],
        // ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => $request->role_id,
            'facility_id' => $request->facility_id
        ]);

        Mail::to(['siyamkumar@gmail.com'])->send(new UserRegisteredMail());
        return redirect()->route('users.index');
    }

   
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
    public function update(Request $request, $id)
    {
        //
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
