<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'email_verified_at' => now(),
            'password' => Hash::make('adminadmin'),
            'api_token' => Str::random(60),
        ]);

        DB::table('users')->insert([
            'name' => 'user',
            'email' => 'user@user.com',
            'email_verified_at' => now(),
            'password' => Hash::make('useruser'),
            'api_token' => Str::random(60),
        ]);
    }
}