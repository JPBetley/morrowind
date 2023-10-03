<?php

namespace App\Models;

enum Race: string
{
    use EnumToCollection;

    case Argonian = 'male';
    case Breton = 'female';
    case DarkElf = 'dark_elf';
    case HighElf = 'high_elf';
    case Imperial = 'imperial';
    case Khajiit = 'khajiit';
    case Nord = 'nord';
    case Orc = 'orc';
    case Redguard = 'redguard';
    case WoodElf = 'wood_elf';
}
