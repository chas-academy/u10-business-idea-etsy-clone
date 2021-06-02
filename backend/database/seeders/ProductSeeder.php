<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Category;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $listings = $this->fetch('/listings/active/');
        $currencies = ['EUR', 'SEK', 'AUD', 'CAD', 'USD', 'GBP'];       //Filter currencies

        foreach ($listings as $product)
            sleep(3);
            
            DB::table('products')->insert([
                'created_at' => now(),
                'updated_at' => now(),
                'user_id' => 1,
                'name' => $product['title'],
                'price' => $product['price'],
                'stock' => $product['quantity'],
                'currency' => in_array($product['currency_code'], $currencies) ? $product['currency_code'] : 'USD',
                'description' => $product['description'],
                'picture' => $this->fetch('/listings/' . $product['listing_id'] . '/images/')[0]['url_570xN'],
                'categories_id' => rand(1, Category::all()->count()),
            ]);
    }

    private function fetch($query, $limit = 100) {
        return json_decode(file_get_contents(ENV('ETZY_API_URL') . $query . '?api_key=' . ENV('ETZY_API_KEY') . '&limit=' . $limit), true)['results'];
    }
}