<?php

namespace App\Models;

enum Sex: string
{
    use EnumToCollection;

    case Male = 'male';
    case Female = 'female';
}
