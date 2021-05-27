<?php

namespace App\Http\Controllers;

use App\Models\User;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class UserController extends Controller
{


    protected function create()    
    {
        // OBS: Använda översta kommandot om du har PHP 8
        // $exists = User::where('email', request('email'))->first()?->exists;
        $exists = User::where('email', request('email'))->first();

        if ($exists === null) {
            $user = User::create([
                'name' => request('name'),
                'email' => request('email'),
                'password' => Hash::make(request('password')),
                'api_token' => Str::random(60)  
            ]);
            return 1;
        } else {
            return 0;
        }
    }

    protected function login()
    {

        $email = request('email');
        $password =  request('password');

        $user = User::where('email', $email)->first();
        
        if ($user !== null) {
            $hashedPassword = $user->password;
            if (Hash::check($password, $hashedPassword)) {
                return $user->api_token;
            } else {
                return 0;
            }
        } else {
            return 0;
        }

    }
}