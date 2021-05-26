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
            ['title' => 'Clothing & Shoes', 'slug' => 'clothing-shoes'],
            ['title' => 'Home & Living', 'slug' => 'home-living'],
            ['title' => 'Wedding & Party', 'slug' => 'wedding-party'],
            ['title' => 'Toys & Entertainment', 'slug' => 'toys-entertainment'],
            ['title' => 'Art & Collectibles', 'slug' => 'art-collectibles'],
            ['title' => 'Craft Supplies & Tools', 'slug' => 'craft-supplies'],
        ]);
    }
}