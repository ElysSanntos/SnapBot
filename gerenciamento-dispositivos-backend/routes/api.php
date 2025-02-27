<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DeviceController;


Route::apiResource('devices', DeviceController::class);
