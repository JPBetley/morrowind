<?php
namespace App\Models;

enum Attribute: string
{
    use EnumToCollection;

    case Strength = 'strength';
    case Intelligence = 'intelligence';
    case Willpower = 'willpower';
    case Agility = 'agility';
    case Speed = 'speed';
    case Endurance = 'endurance';
    case Personality = 'personality';
    case Luck = 'luck';
}
