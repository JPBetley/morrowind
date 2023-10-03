<?php

namespace Database\Factories;

use App\Models\Attribute;
use App\Models\Birthsign;
use App\Models\Race;
use App\Models\Sex;
use App\Models\Skill;
use App\Models\Specialization;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Character>
 */
class CharacterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name,
            'sex' => fake()->randomElement(Sex::values()),
            'race' => fake()->randomElement(Race::values()),
            'specialization' => fake()->randomElement(Specialization::values()),
            'birthsign' => fake()->randomElement(Birthsign::values()),
            'favored_attribute_1' => fake()->unique(true)->randomElement(Attribute::values()),
            'favored_attribute_2' => fake()->unique()->randomElement(Attribute::values()),
            'major_skill_1' => fake()->unique()->randomElement(Skill::values()),
            'major_skill_2' => fake()->unique()->randomElement(Skill::values()),
            'major_skill_3' => fake()->unique()->randomElement(Skill::values()),
            'major_skill_4' => fake()->unique()->randomElement(Skill::values()),
            'major_skill_5' => fake()->unique()->randomElement(Skill::values()),
            'major_skill_6' => fake()->unique()->randomElement(Skill::values()),
            'minor_skill_1' => fake()->unique()->randomElement(Skill::values()),
            'minor_skill_2' => fake()->unique()->randomElement(Skill::values()),
            'minor_skill_3' => fake()->unique()->randomElement(Skill::values()),
            'minor_skill_4' => fake()->unique()->randomElement(Skill::values()),
            'minor_skill_5' => fake()->unique()->randomElement(Skill::values()),
            'minor_skill_6' => fake()->unique()->randomElement(Skill::values()),
        ];
    }
}
