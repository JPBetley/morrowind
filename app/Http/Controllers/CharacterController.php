<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCharacterRequest;
use App\Http\Requests\UpdateCharacterRequest;
use App\Models\Character;
use Inertia\Inertia;

class CharacterController extends Controller
{
    public function index()
    {
        return Inertia::render('Characters/Index', [
            'characters' => Character::paginate()
                ->withQueryString(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Characters/Create');
    }

    public function store(StoreCharacterRequest $request)
    {
        //
    }

    public function show(Character $character)
    {
        //
    }

    public function edit(Character $character)
    {
        //
    }

    public function update(UpdateCharacterRequest $request, Character $character)
    {
        //
    }

    public function destroy(Character $character)
    {
        //
    }
}
