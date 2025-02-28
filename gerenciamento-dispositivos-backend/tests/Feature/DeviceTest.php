<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Device;


class DeviceTest extends TestCase
{
    public function test_list_devices()
    {
        // Fazendo uma requisição GET para a rota de dispositivos
        $response = $this->get('/api/devices');

        // Verificando se a resposta foi bem-sucedida (código 200)
        $response->assertStatus(200);

        // Verificando se a resposta contém um campo 'data'
        $response->assertJsonStructure([
            'status',
            'data' => []
        ]);
    }

    public function test_create_device()
{
    $response = $this->post('/api/devices', [
        'name' => 'Dispositivo Teste',
        'location' => 'Local Teste',
        'purchase_date' => '2025-02-28',
        'in_use' => true,
    ]);

    $response->assertStatus(201);
    $response->assertJson([
        'message' => 'Dispositivo criado com sucesso',
    ]);
}
public function test_update_device()
{
    $device = Device::factory()->create();

    $response = $this->put('/api/devices/' . $device->id, [
        'name' => 'Nome Atualizado',
    ]);

    $response->assertStatus(200);
    $response->assertJson([
        'message' => 'Dispositivo atualizado com sucesso!',
    ]);
}
public function test_delete_device()
{
    $device = Device::factory()->create();

    $response = $this->delete('/api/devices/' . $device->id);

    $response->assertStatus(200);
    $response->assertJson([
        'message' => 'Dispositivo deletado com sucesso!',
    ]);
}


}
