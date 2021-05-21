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
            ['title' => 'Clothing & Shoes'],
            ['title' => 'Home & Living'],
            ['title' => 'Wedding & Party'],
            ['title' => 'Toys & Entertainment'],
            ['title' => 'Art & Collectibles'],
            ['title' => 'Craft Supplies & Tools'],
        ]);
    }
}