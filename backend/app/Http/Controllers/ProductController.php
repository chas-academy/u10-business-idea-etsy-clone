<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use Money\Currency;
use Money\Converter;
use Money\Currencies\ISOCurrencies;
use Money\Money;
use Money\Exchange\FixedExchange;

class ProductController extends Controller
{
    //get all, getOneProduct
    //create product, update product, delete product

    public function index($category = null) //get all products or from specific category
    { 
        $userCurrency = 'SEK';      //Temp, later a get param
        $products = null;

        if ($category) {
            $catId = Category::where('slug', $category)->get()[0]->id;
            $products = Product::where('categories_id', $catId)->get();
        }
        else {
            $products = Product::all();
        }

        foreach ($products as $product) {
            if ($product->currency !== $userCurrency) {
                $convertCurrency = $this->convertCurrency($product->price, $product->currency, $userCurrency);

                $product->price = $convertCurrency['price'];
                $product->currency = $convertCurrency['currency'];
            }
        }

        return $products; 
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

    private function convertCurrency($price, $from, $to) {
        $exchange = new FixedExchange([
            'EUR' => [
                'SEK' => '10.13',
                'USD' => '1.22',
                'GBP' => '0.86',
            ],
            'GBP' => [
                'SEK' => '11.77',
                'USD' => '1.42',
                'EUR' => '1.16',
            ],
            'USD' => [
                'SEK' => '8.29',
                'EUR' => '0.82',
                'GBP' => '0.71',
            ],
            'CAD' => [
                'SEK' => '6.88',
                'EUR' => '0.68',
                'USD' => '0.83',
                'GBP' => '0.58',
            ],
            'AUD' => [
                'SEK' => '6.43',
                'EUR' => '0.64',
                'USD' => '0.78',
                'GBP' => '0.55',
            ],
            'SEK' => [
                'EUR' => '0.099',
                'USD' => '0.12',
                'GBP' => '0.085',
            ],
        ]);

        $converter = new Converter(new ISOCurrencies(), $exchange);
        $result = $converter->convert(new Money($price, new Currency($from)), new Currency($to));
        return ['price' => (int)$result->getAmount(), 'currency' => $result->getCurrency()];
    }
}
