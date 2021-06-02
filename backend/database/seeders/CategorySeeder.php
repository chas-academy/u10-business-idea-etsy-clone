<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            ['title' => 'Clothing & Shoes', 'slug' => 'clothing-shoes', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Home & Living', 'slug' => 'home-living', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Wedding & Party', 'slug' => 'wedding-party', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Toys & Entertainment', 'slug' => 'toys-entertainment', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Art & Collectibles', 'slug' => 'art-collectibles', 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Craft Supplies & Tools', 'slug' => 'craft-supplies', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}