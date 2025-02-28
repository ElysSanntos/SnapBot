<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Device;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Criar usuários fictícios (caso necessário)
        // User::factory(10)->create();

        // Criar dispositivos fictícios
        Device::factory(10)->create();
    }
}
