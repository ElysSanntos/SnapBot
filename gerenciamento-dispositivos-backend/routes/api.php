<?php

use App\Http\Controllers\DeviceController;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\TestDeviceController;

Route::get('/devices', [DeviceController::class, 'index']);
Route::post('/devices', [DeviceController::class, 'store']);
Route::get('/devices/{id}', [DeviceController::class, 'show']);
Route::put('/devices/{id}', [DeviceController::class, 'update']);
Route::delete('/devices/{id}', [DeviceController::class, 'destroy']);
Route::patch('/devices/{id}', [DeviceController::class, 'update']);


// Se quiser testar sem usar o controller, comente a linha acima e ative esta:
// Route::get('/devices', function () {
//     return response()->json(['status' => 'controller funcionando']);
// });

// Route::get('/test-device', [DeviceController::class, 'index']);
