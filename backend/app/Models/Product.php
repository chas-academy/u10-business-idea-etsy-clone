<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    
    protected $fillable = ['user_id', 'name', 'price', 'stock', 'description', 'picture', 'category', 'status'];

    public function orders(){
        return $this->belongsToMany(Order::class);
    }

    public function users(){
        return $this->belongsTo(User::class);
    }
}