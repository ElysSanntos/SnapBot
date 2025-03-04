<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Device;

class DeviceController extends Controller
{

// Lista todos os dispositivos com paginação
public function index(Request $request)
    {
        // Paginação dos dispositivos
        $devices = Device::paginate($request->get('limit', 10));

        return response()->json([
            'status' => 'ok',
            'data' => $devices->items(),
            'total' => $devices->total(),
        ]);
    }


    // Cria um novo dispositivo
    public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'location' => 'required|string|max:255',
        'purchase_date' => 'required|date',
        'in_use' => 'required|boolean',
    ]);

    $device = Device::create($validated);

    return response()->json(['message' => 'Dispositivo criado com sucesso', 'data' => $device], 201);
}

    // Mostra um dispositivo pelo ID
    public function show($id)
    {
        $device = Device::findOrFail($id);
        return response()->json($device);
    }

    public function update(Request $request, $id)
    {
        try {
            // Busca o dispositivo pelo ID
            $device = Device::findOrFail($id);

            // Validação dinâmica (os campos são opcionais)
            $validated = $request->validate([
                'name' => 'sometimes|string|max:255',
                'location' => 'sometimes|string|max:255',
                'purchase_date' => 'sometimes|date',
                'in_use' => 'sometimes|boolean',
            ]);

            // Atualiza apenas os campos enviados
            $device->update($validated);

            return response()->json([
                'message' => 'Dispositivo atualizado com sucesso!',
                'data' => $device
            ], 200);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'error' => 'Erro de validação',
                'mensagem' => $e->errors()
            ], 422);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'error' => 'Dispositivo não encontrado',
                'mensagem' => 'Nenhum dispositivo encontrado com este ID.'
            ], 404);

        } catch (\Exception $e) {
            \Log::error('Erro na atualização do dispositivo: ' . $e->getMessage());

            return response()->json([
                'error' => 'Erro interno',
                'mensagem' => 'Algo deu errado. Verifique os logs para mais detalhes.'
            ], 500);
        }
    }



   // Deleta um dispositivo
public function destroy($id)
{
    try {
        // Busca o dispositivo pelo ID
        $device = Device::findOrFail($id);

        // Deleta o dispositivo
        $device->delete();

        // Retorna uma resposta de sucesso
        return response()->json([
            'message' => 'Dispositivo deletado com sucesso!'
        ], 200);

    } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
        return response()->json([
            'error' => 'Dispositivo não encontrado',
            'mensagem' => 'Nenhum dispositivo encontrado com este ID.'
        ], 404);

    } catch (\Exception $e) {
        \Log::error('Erro ao deletar dispositivo: ' . $e->getMessage());

        return response()->json([
            'error' => 'Erro interno',
            'mensagem' => 'Algo deu errado. Verifique os logs para mais detalhes.'
        ], 500);
    }
}

}
