<?php

namespace App\Models;

enum Specialization: string
{
    use EnumToCollection;

    case Combat = 'combat';
    case Magic = 'magic';
    case Stealth = 'stealth';
}
