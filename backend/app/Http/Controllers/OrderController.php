<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    //CRUD for orders
    public function index() //get all products
    {
        $response = auth()->users()->orders()->get();
        return response($response, 200);
    }

    public function show($id) //get all products
    {

        return Order::findOrFail($id);
    }

    public function store(Request $request) // create orders
    {
        $request->validate([
            'user_id' => 'required'
        ]);

        return Order::create($request->all());
    }

    public function destroy($id) //get all products
    {
        return Order::destroy($id);
    }

    public function buy($orderId, $productId)
    {
        return Order::find($orderId)->products()->attach($productId);
    }
}
