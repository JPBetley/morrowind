<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    use HasFactory;

    protected $casts = [
        'sex' => Sex::class,
        'race' => Race::class,
        'specialization' => Specialization::class,
        'birthsign' => Birthsign::class,
        'favored_attribute_1' => Attribute::class,
        'favored_attribute_2' => Attribute::class,
        'major_skill_1' => Skill::class,
        'major_skill_2' => Skill::class,
        'major_skill_3' => Skill::class,
        'major_skill_4' => Skill::class,
        'major_skill_5' => Skill::class,
        'major_skill_6' => Skill::class,
        'minor_skill_1' => Skill::class,
        'minor_skill_2' => Skill::class,
        'minor_skill_3' => Skill::class,
        'minor_skill_4' => Skill::class,
        'minor_skill_5' => Skill::class,
        'minor_skill_6' => Skill::class,
    ];
}
