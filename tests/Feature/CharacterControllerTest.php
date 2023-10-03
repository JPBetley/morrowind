<?php

use App\Http\Controllers\CharacterController;
use App\Models\Character;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

test('it gets a list of characters', function () {
    Character::factory(25)->create();
    $this->get(action([CharacterController::class, 'index']))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Characters/Index')
            ->has('characters', fn (Assert $page) => $page
                ->has('data', 15)
                ->where('total', 25)
                ->where('current_page', 1)
                ->where('last_page', 2)
                ->etc()
            )
        );
});

test('index is paginated', function () {
    Character::factory(25)->create();
    $this->get(action([CharacterController::class, 'index'], ['page' => 2]))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Characters/Index')
            ->has('characters', fn (Assert $page) => $page
                ->has('data', 10)
                ->where('total', 25)
                ->where('current_page', 2)
                ->where('last_page', 2)
                ->etc()
            )
        );
});
