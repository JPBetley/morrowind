<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Morrowind Character Generator">
    <meta name="author" content="John Phillip Betley">

    <title>Morrowind Tools</title>

    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">

</head>

<body>

    <!-- Navigation -->
    <nav class="navbar fixed-top navbar-dark bg-dark">
      <a class="navbar-brand" href="/">Morrowind Tools</a>
    </nav>

    <!-- Page Content -->
    <div id="app" class="container">

        <h1>Character Planner</h1>
        <div class="character-planner row">
            <fieldset class="character col-md-4 col-sm-6">
                <legend>Character</legend>
                <section class="row">
                    <div class="form-group col-6">
                        <label for="sex">
                            Sex
                        </label>
                        <select id="sex" v-model="sex" class="form-control">
                            <option value=""></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div class="form-group col-6">
                        <label for="race">
                            Race
                        </label>
                        <select id="race" v-model="race" class="form-control">
                            <option v-for="(option, index) in races" :value="option">
                                @{{ option.name }}
                            </option>
                        </select>
                    </div>
                </section>
                <section class="row">
                    <div class="form-group col-6">
                        <label for="birthsign">
                            Birthsign
                        </label>
                        <select id="birthsign" v-model="birthsign" class="form-control">
                            <option v-for="(option, index) in birthsigns" :value="option">
                                @{{ option.name }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group col-6">
                        <label for="specialization">
                            Specialization
                        </label>
                        <select id="specialization" v-model="specialization" class="form-control">
                            <option value=""></option>
                            <option value="combat">Combat</option>
                            <option value="magic">Magic</option>
                            <option value="stealth">Stealth</option>
                        </select>
                    </div>
                </section>
                <div>
                    <label for="favored-attributes">Favored Attributes:</label>
                    <br />

                    <div class="attributes row">
                        <div v-for="(attribute, index) in favoredAttributes" :key="index" class="form-group col-6">
                            <select v-model="attribute.value" class="form-control" id="favored-attributes">
                                <option v-for="(option, index) in attributes" :value="option">
                                    @{{ option | capitalize }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div class="col-md-4 col-sm-6 row">
                <fieldset class="skills">
                    <legend>Major Skills</legend>
                    <div class="form-group">
                        <template v-for="(skill, index) in majorSkills" :key="index">
                            <label :for="'major-skill-' + index" class="sr-only">Major Skill @{{ index + 1 }}</label>
                            <select v-model="skill.value" class="skills__skill form-control" :id="'major-skill-' + index">
                                <option value=""></option>
                                <optgroup label="Combat">
                                    <option v-for="(skill, key) in skills.combat" :value="skill.value">
                                        @{{ skill.name }}
                                    </option>
                                </optgroup>
                                <optgroup label="Magic">
                                    <option v-for="(skill, key) in skills.magic" :value="skill.value">
                                        @{{ skill.name }}
                                    </option>
                                </optgroup>
                                <optgroup label="Stealth">
                                    <option v-for="(skill, key) in skills.stealth" :value="skill.value">
                                        @{{ skill.name }}
                                    </option>
                                </optgroup>
                            </select>
                        </template>
                    </div>
                </fieldset>
                <fieldset class="skills">
                    <legend>Minor Skills</legend>
                    <div class="form-group">
                        <template v-for="(skill, index) in minorSkills" :key="index">
                            <label :for="'minor-skill-' + index" class="sr-only">Minor Skill @{{ index + 1 }}</label>
                            <select v-model="skill.value" class="skills__skill form-control" :id="'minor-skill-' + index">
                                <option value=""></option>
                                <optgroup label="Combat">
                                    <option v-for="(skill, key) in skills.combat" :value="skill.value">
                                        @{{ skill.name }}
                                    </option>
                                </optgroup>
                                <optgroup label="Magic">
                                    <option v-for="(skill, key) in skills.magic" :value="skill.value">
                                        @{{ skill.name }}
                                    </option>
                                </optgroup>
                                <optgroup label="Stealth">
                                    <option v-for="(skill, key) in skills.stealth" :value="skill.value">
                                        @{{ skill.name }}
                                    </option>
                                </optgroup>
                            </select>
                        </template>
                    </div>
                </fieldset>
            </div>
        </div>

        <div class="row command-row">
            <div class="col-6">
                <button class="btn btn-light" @click="reset">Reset</button>
                <button class="btn btn-primary" @click="save">Save</button>
                <p class="bg-success save-message" v-show="saved">
                    Saved! Copy URL to share
                </p>
            </div>
        </div>

        <div class="row">
            <div class="attributes-tables col-sm-6">
                <table class="table">
                    <thead>
                        <tr><th class="border-top-0" colspan="3">Primary Attributes</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Strength</td> 
                            <td>@{{ build.attributes.strength }}</td>
                            <td class="text-danger">@{{ build.attributeCount.strength }} M/m skills</td>
                        </tr>
                        <tr>
                            <td>Intelligence</td> 
                            <td>@{{ build.attributes.intelligence }}</td>
                            <td class="text-danger">@{{ build.attributeCount.intelligence }} M/m skills</td>
                        </tr>
                        <tr>
                            <td>Willpower</td> 
                            <td>@{{ build.attributes.willpower }}</td>
                            <td class="text-danger">@{{ build.attributeCount.willpower }} M/m skills</td>
                        </tr>
                        <tr>
                            <td>Agility</td> 
                            <td>@{{ build.attributes.agility }}</td>
                            <td class="text-danger">@{{ build.attributeCount.agility }} M/m skills</td>
                        </tr>
                        <tr>
                            <td>Speed</td> 
                            <td>@{{ build.attributes.speed }}</td>
                            <td class="text-danger">@{{ build.attributeCount.speed }} M/m skills</td>
                        </tr>
                        <tr>
                            <td>Endurance</td> 
                            <td>@{{ build.attributes.endurance }}</td>
                            <td class="text-danger">@{{ build.attributeCount.endurance }} M/m skills</td>
                        </tr>
                        <tr>
                            <td>Personality</td> 
                            <td>@{{ build.attributes.personality }}</td>
                            <td class="text-danger">@{{ build.attributeCount.personality }} M/m skills</td>
                        </tr>
                        <tr>
                            <td>Luck</td> 
                            <td>@{{ build.attributes.luck }}</td>
                            <td class="text-danger"></td>
                        </tr>
                    </tbody>
                </table>

                <table class="table">
                    <thead>
                        <tr><th class="border-top-0" colspan="2">Derived Skills</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Health</td> 
                            <td>@{{ build.stats.health }}</td>
                        </tr>
                        <tr>
                            <td>Magicka</td> 
                            <td>@{{ build.stats.magicka }}</td>
                        </tr>
                        <tr>
                            <td>Fatigue</td> 
                            <td>@{{ build.stats.fatigue }}</td>
                        </tr>
                        <tr>
                            <td>Encumbrance</td> 
                            <td>@{{ build.stats.encumbrance }}</td>
                        </tr>
                    </tbody>
                </table>

                <table class="table">
                    <thead>
                        <tr><th class="border-top-0" colspan="2">Resistances</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Fire</td> 
                            <td :class="{ 'text-danger': build.resistances.fire < 0 }">
                                @{{ build.resistances.fire }}%
                            </td>
                        </tr>
                        <tr>
                            <td>Frost</td> 
                            <td :class="{ 'text-danger': build.resistances.frost < 0 }">
                                @{{ build.resistances.frost }}%
                            </td>
                        </tr>
                        <tr>
                            <td>Shock</td> 
                            <td :class="{ 'text-danger': build.resistances.shock < 0 }">
                                @{{ build.resistances.shock }}%
                            </td>
                        </tr>
                        <tr>
                            <td>Magicka</td> 
                            <td :class="{ 'text-danger': build.resistances.magicka < 0 }">
                                @{{ build.resistances.magicka }}%
                            </td>
                        </tr>
                        <tr>
                            <td>Poison</td> 
                            <td :class="{ 'text-danger': build.resistances.poison < 0 }">
                                @{{ build.resistances.poison }}%
                            </td>
                        </tr>
                        <tr>
                            <td>Common Disease</td> 
                            <td :class="{ 'text-danger': build.resistances.commonDisease < 0 }">
                                @{{ build.resistances.commonDisease }}%
                            </td>
                        </tr>
                        <tr>
                            <td>Blight Disease</td> 
                            <td :class="{ 'text-danger': build.resistances.blightDisease < 0 }">
                                @{{ build.resistances.blightDisease }}%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="skills-table col-sm-6">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="border-top-0" colspan="3">Skills</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="skill in build.skills">
                            <td>@{{ skill.name }}</td>
                            <td>@{{ skill.value }}</td>
                            <td class="skill" :class="skill.specialization">
                                @{{ skill.attribute | capitalize }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <div class="abilities" v-if="build.abilities.length > 0">
            This character has the following abilities, powers, and spells:
            <ul>
                <li v-for="ability in build.abilities">
                    @{{ ability }}
                </li>
            </ul>
        </div>
        <div class="abilities" v-else>
            This character has no abilities, powers, or spells.
        </div>

    </div>

    <footer>
        <p>This work is licensed under an <a href="https://raw.githubusercontent.com/JPBetley/morrowind/master/LICENSE">MIT License</a>.</p>
        <p>All data, taken from the game, belongs to Bethesda Softworks, that has nothing to do with this site.</p>
        <p>ZeniMax, Bethesda Softworks, The Elder Scrolls, Morrowind, Tribunal, Bloodmoon and their respective logos
are registered trademarks of ZeniMax Media Inc. Copyright © 1993-2015. All Rights Reserved.</p>
        <p>Created by <a href="https://jpbetley.com">JPBetley</a></p>
    </footer>

    <script src="{{ mix('/js/manifest.js') }}"></script>
    <script src="{{ mix('/js/vendor.js') }}"></script>
    <script src="{{ mix('/js/app.js') }}"></script>
    
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PGEMRVZXC4"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-PGEMRVZXC4');
    </script>


</body>

</html>

