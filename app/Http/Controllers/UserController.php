<?php

namespace App\Http\Controllers;

use App\Mail\UserRegisteredMail;
use App\Models\Facility;
use App\Models\Roles;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Auth\Passwords\PasswordBroker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Inertia\Inertia;
use Illuminate\Validation\Rules;
use Illuminate\Support\Str;
class UserController extends Controller
{
    public function index()
    {
        $users = User::whereIn('role_id', ['3', '4', '5'])->get();
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

    public function create()
    {
        $roles = Roles::whereIn('id',['3', '4'])->get();
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
        $token = Str::random(60);
        DB::table('password_resets')->insert([
          'email' => $user->email,
          'token' => bcrypt($token),
          'created_at' => Carbon::now()
        ]);
        $user['password_reset'] = route('password.reset', ['token'=>$token, 'email'=>$user->email]);
      
        Mail::to($user->email)->send(new UserRegisteredMail($user));
        return redirect()->route('users.index');
    }

   
    public function show($id)
    {
       
    }

  
    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        
    }

    
    public function destroy($id)
    {
       
    }
}
