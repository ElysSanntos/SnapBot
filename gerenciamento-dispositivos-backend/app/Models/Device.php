<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Device extends Model
{
    use HasFactory;


    protected $fillable = ['name', 'location', 'purchase_date', 'in_use']; // 🔹 Define os campos permitidos para preenchimento

    public function setPurchaseDateAttribute($value)
{
    $now = Carbon::now();
    // Converter para o formato esperado pelo MySQL
    $this->attributes['purchase_date'] = Carbon::parse($value)->format('Y-m-d H:i:s');
}


}

