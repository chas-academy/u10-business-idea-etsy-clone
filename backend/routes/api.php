<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Models\User;
use App\Http\Middleware\EnsureTokenIsValid;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CategoryController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/categories/{slug}', [CategoryController::class, 'getCategory']);
Route::apiResource('categories', CategoryController::class);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', function (Request $request) {
    $users = User::all();
    return $users;
});

Route::post('/register', [UserController::class, 'create']);

Route::post('/buy', [OrderController::class, 'buy']);



Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::post('/products', [ProductController::class, 'store']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);


Route::get('/orders', [OrderController::class, 'index']);
Route::get('/orders/{id}', [OrderController::class, 'show']);
Route::post('/orders', [OrderController::class, 'store']);
Route::delete('/orders/{id}', [OrderController::class, 'destroy']);
Route::post('/order/{orderId}/product/{productId}', [OrderController::class, 'buy']);


Route::get('/frontpageData', function (Request $request) {

    return 'Hej ';
})->middleware(EnsureTokenIsValid::class);


Route::post('/register', [UserController::class, 'create']);
Route::post('/login', [UserController::class, 'login']);
