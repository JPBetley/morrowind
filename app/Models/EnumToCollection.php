<?php
namespace App\Models;

use Illuminate\Support\Collection;

trait EnumToCollection
{

    public static function names(): Collection
    {
        return collect(self::cases())->pluck('name');
    }

    public static function values(): Collection
    {
        return collect(self::cases())->pluck('value');
    }

    public static function array(): Collection
    {
        return self::values()->combine(self::names());
    }

}
