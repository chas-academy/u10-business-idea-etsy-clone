<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Category::All();
    }

    public function getCategory($slug) {
        return [Category::where('slug', $slug)->get()[0]->title];
    }
   
}
