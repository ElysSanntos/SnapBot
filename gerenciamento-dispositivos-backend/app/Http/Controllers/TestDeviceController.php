

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestDeviceController extends Controller
{
    public function index()
    {
        return response()->json(['message' => 'Test controller funcionando!']);
    }
}
