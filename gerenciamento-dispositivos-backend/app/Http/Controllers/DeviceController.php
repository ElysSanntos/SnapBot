public function index()
{
    return Device::all();
}

public function store(Request $request)
{
    $request->validate([
        'name' => 'required',
        'model' => 'required',
        'status' => 'required',
    ]);

    return Device::create($request->all());
}

public function update(Request $request, $id)
{
    $device = Device::findOrFail($id);
    $device->update($request->all());
    return $device;
}

public function destroy($id)
{
    Device::findOrFail($id)->delete();
    return response()->json(['message' => 'Device deleted']);
}
