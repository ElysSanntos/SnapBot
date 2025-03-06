<?php

use App\Http\Controllers\DeviceController;
use Illuminate\Support\Facades\Route;


Route::get('/devices', [DeviceController::class, 'index']);
Route::post('/devices', [DeviceController::class, 'store']);
Route::get('/devices/{id}', [DeviceController::class, 'show']);
Route::put('/devices/{id}', [DeviceController::class, 'update']);
Route::delete('/devices/{id}', [DeviceController::class, 'destroy']);
Route::patch('/devices/{id}', [DeviceController::class, 'update']);
Route::patch('devices/{id}/use', [DispositivoController::class, 'marcarComoEmUso']);




