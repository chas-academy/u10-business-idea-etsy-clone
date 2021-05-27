<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;

class ProductController extends Controller
{
    //get all, getOneProduct
    //create product, update product, delete product

    public function index($category = null) //get all products or from specific category
    {
        if ($category) {
            $catId = Category::where('slug', $category)->get()[0]->id;
            return $product = Product::where('categories_id', $catId)->get();
        }

        return Product::all();
    }

    public function show($id) //get all products
    {
        return Product::findOrFail($id);
    }

    public function store(Request $request) //get all products
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required', 
            'stock' => 'required', 
            'status' => 'required',         
        ]);
        return Product::create($request->all());
    }

    public function destroy($id) //get all products
    {
        return Product::destroy($id);
    }

}
