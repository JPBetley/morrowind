<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('characters', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('sex');
            $table->string('race');
            $table->string('birthsign');
            $table->string('specialization');
            $table->text('favored_attribute_1');
            $table->text('favored_attribute_2');
            $table->text('major_skill_1');
            $table->text('major_skill_2');
            $table->text('major_skill_3');
            $table->text('major_skill_4');
            $table->text('major_skill_5');
            $table->text('major_skill_6');
            $table->text('minor_skill_1');
            $table->text('minor_skill_2');
            $table->text('minor_skill_3');
            $table->text('minor_skill_4');
            $table->text('minor_skill_5');
            $table->text('minor_skill_6');
            $table->timestamps();
        });
    }
};
