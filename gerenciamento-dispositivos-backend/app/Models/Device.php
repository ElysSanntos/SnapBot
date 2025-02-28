<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'location', 'purchase_date', 'in_use']; // 🔹 Define os campos permitidos para preenchimento
}
