<?php

namespace App\Models;

enum Skill: string
{
    use EnumToCollection;

    case Block = 'block';
    case Armorer = 'armorer';
    case MediumArmor = 'medium_armor';
    case HeavyArmor = 'heavy_armor';
    case BluntWeapon = 'blunt_weapon';
    case LongBlade = 'long_blade';
    case Axe = 'axe';
    case Spear = 'spear';
    case Athletics = 'athletics';
    case Enchant = 'enchant';
    case Destruction = 'destruction';
    case Alteration = 'alteration';
    case Illusion = 'illusion';
    case Conjuration = 'conjuration';
    case Mysticism = 'mysticism';
    case Restoration = 'restoration';
    case Alchemy = 'alchemy';
    case Unarmored = 'unarmored';
    case Security = 'security';
    case Sneak = 'sneak';
    case Acrobatics = 'acrobatics';
    case LightArmor = 'light_armor';
    case ShortBlade = 'short_blade';
    case Marksman = 'marksman';
    case Mercantile = 'mercantile';
    case Speechcraft = 'speechcraft';
    case HandToHand = 'hand_to_hand';
}
