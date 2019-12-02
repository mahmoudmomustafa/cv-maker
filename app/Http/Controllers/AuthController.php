<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public $successStatus = 200;
    public function init()
    {
        $user = Auth::user();
        return response()->json($user);
    }
    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password], true)) {
            $user = Auth::user();
            $token =  $user->createToken('UserApi')->accessToken;
            return response()->json([
                'access_token' => $token,
                'token_type' => 'bearer',
            ], $this->successStatus);
            // return response()->json(Auth::user(), 200);
        } else {
            return response()->json(['error' => 'These Candritles are not correct'], 401);
        }
    }
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
        ]);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        // Auth::login($user);
        $token =  $user->createToken('UserApi')->accessToken;
        // $success['name'] =  $user->name;
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
        ], $this->successStatus);
        // return response()->json($user, 200);
    }
    public function logout()
    {
        Auth::logout();
    }
}
