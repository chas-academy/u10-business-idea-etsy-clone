<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\User;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => User::factory(),
            'name' => $this->faker->word(),
            'price' => $this->faker->randomFloat(1, 20, 30),
            'stock' => $this->faker->randomNumber(1),
            'description' => $this->faker->paragraph(),
            'picture' => $this->faker->imageUrl(640, 480, 'animals', true),
            'categories_id' => Category::factory(),
        ];
    }
}