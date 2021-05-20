<?php

namespace App\Http\Middleware;


use Closure;
use App\Models\User;
use Illuminate\Http\Request;

class EnsureTokenIsValid
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->hasHeader('token')) {
            $value = $request->header('token');
            $exists = User::where('api_token', $value)->first()?->exists();
            if ($exists !== null) {
                return $next($request);
            }  
        }
        return response('Bad auth!', 401);
    }
}
