<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Device;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Device>
 */
class DeviceFactory extends Factory
{
    protected $model = Device::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'location' => $this->faker->city(),
            'purchase_date' => $this->faker->date(),
            'in_use' => $this->faker->boolean(),
        ];
    }
}
