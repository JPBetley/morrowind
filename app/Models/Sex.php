<?php
namespace App\Models;

use Illuminate\Support\Collection;

enum Sex: string
{
    use EnumToCollection;

    case Male = 'male';
    case Female = 'female';
}
