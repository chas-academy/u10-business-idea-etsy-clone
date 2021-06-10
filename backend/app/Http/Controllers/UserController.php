<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request) {
        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users,email', 
            'password' => 'required', 
            // 'password_confirm' => 'required',
        ]);
    
        $user = User::create([
            'name' => request('name'),
            'password' => Hash::make(request('password')),
            'email' => request('email'),
        ]);

        //Add order list for user
        $order = new Order;
        $order->user_id = $user->id;
        $order->save();
    
        return ['user' => $user];
    }

    public function login(Request $request) {
        $request->validate([
            'email' => 'required', 
            'password' => 'required', 
        ]);

        $user = User::where('email', request('email'))->first();

        if ($user && Hash::check(request('password'), $user->password)) {
            $token = $user->createToken($user->name)->plainTextToken;
            return ['user' => $user, 'token' => $token];
        }
        else {
            return response('Invalid username or password', 403);
        }
    }

    public function logout(Request $request) {
        auth()->user()->tokens()->delete();

        $response = [
            'message' => 'User logged out'
        ];
        return response($response, 200);
    }
}