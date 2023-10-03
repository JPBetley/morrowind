<?php

namespace App\Models;

enum Birthsign: string
{
    use EnumToCollection;

    case Warrior = 'warrior';
    case Mage = 'mage';
    case Thief = 'thief';
    case Serpent = 'serpent';
    case Lady = 'lady';
    case Steed = 'steed';
    case Lord = 'lord';
    case Apprentice = 'apprentice';
    case Atronach = 'atronach';
    case Ritual = 'ritual';
    case Lover = 'lover';
    case Shadow = 'shadow';
    case Tower = 'tower';
}
