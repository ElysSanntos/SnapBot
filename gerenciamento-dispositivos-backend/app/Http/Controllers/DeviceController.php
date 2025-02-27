<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Device;

class DeviceController extends Controller
{
    /*
    public function index()
    {
        return response()->json(Device::all());
    }
    */
    public function index()
{
    return response()->json(['status' => 'ok']);
}

    public function store(Request $request)
    {
        $device = Device::create($request->all());
        return response()->json($device, 201);
    }

    public function show($id)
    {
        return response()->json(Device::findOrFail($id));
    }

    public function update(Request $request, $id)
    {
        $device = Device::findOrFail($id);
        $device->update($request->all());
        return response()->json($device);
    }

    public function destroy($id)
    {
        Device::destroy($id);
        return response()->json(['message' => 'Dispositivo excluído']);
    }
}
