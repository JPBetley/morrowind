<script setup>
import { computed, ref } from 'vue';
import Panel from './components/Panel.vue';
import SelectField from './components/SelectField.vue';
import SkillSelect from './components/SkillSelect.vue';
import StatList from './components/StatList.vue';
import specialization from './specialization';
import favored from './attributes/favored';
import major from './skills/major';
import minor from './skills/minor';
import stats from './stats';
import allAttributes from './attributes/all';
import defaultBirthsign from './birthsigns/default';
import birthsigns from './birthsigns/all';
import defaultRace from './races/default';
import races from './races/all';
import defaultBuild from './default-build';
import { readState, writeState } from './query-state';

const MAJOR_SKILL_COUNT = 5;
const MINOR_SKILL_COUNT = 5;
const FAVORED_ATTRIBUTE_COUNT = 2;

const attributeOptions = allAttributes.filter((attribute) => attribute !== '');

const capitalize = (value) => (value ? value.charAt(0).toUpperCase() + value.slice(1) : '');

function fill(values, size) {
    return Array.from({ length: size }, (_, i) => values[i] ?? '');
}

// ---- State, hydrated from the URL so shared links restore a character ----

const initial = readState(window.location.href);

const sex = ref(initial.sex);
const raceKey = ref(races.some((r) => r.key === initial.race) ? initial.race : defaultRace.key);
const birthsignName = ref(
    birthsigns.some((b) => b.name === initial.birthsign) ? initial.birthsign : defaultBirthsign.name,
);
const chosenSpecialization = ref(initial.specialization);
const favoredAttributes = ref(fill(initial.favored, FAVORED_ATTRIBUTE_COUNT));
const majorSkills = ref(fill(initial.major, MAJOR_SKILL_COUNT));
const minorSkills = ref(fill(initial.minor, MINOR_SKILL_COUNT));
const saveStatus = ref(null); // null | 'copied' | 'saved'

const race = computed(() => races.find((r) => r.key === raceKey.value) ?? defaultRace);
const birthsign = computed(
    () => birthsigns.find((b) => b.name === birthsignName.value) ?? defaultBirthsign,
);

// ---- Derived character ----

const build = computed(() => {
    const result = defaultBuild();
    result.sex = sex.value;

    race.value.apply(result);
    majorSkills.value.forEach((skill) => major(result, skill));
    minorSkills.value.forEach((skill) => minor(result, skill));
    birthsign.value.apply(result);
    specialization(result, chosenSpecialization.value);
    favoredAttributes.value.forEach((attribute) => favored(result, attribute));
    stats(result);

    return result;
});

const attributeRows = computed(() =>
    Object.entries(build.value.attributes).map(([key, value]) => ({
        label: capitalize(key),
        value,
        note: key === 'luck' ? null : `${build.value.attributeCount[key]} M/m skills`,
    })),
);

const statRows = computed(() => [
    { label: 'Health', value: build.value.stats.health },
    { label: 'Magicka', value: build.value.stats.magicka },
    { label: 'Fatigue', value: build.value.stats.fatigue },
    { label: 'Encumbrance', value: build.value.stats.encumbrance },
]);

const resistanceRows = computed(() => {
    const r = build.value.resistances;
    return [
        ['Fire', r.fire],
        ['Frost', r.frost],
        ['Shock', r.shock],
        ['Magicka', r.magicka],
        ['Poison', r.poison],
        ['Common Disease', r.commonDisease],
        ['Blight Disease', r.blightDisease],
    ].map(([label, value]) => ({ label, value: `${value}%`, negative: value < 0 }));
});

const specializationStyles = {
    combat: 'bg-sky-50 text-sky-700 ring-sky-600/20',
    magic: 'bg-rose-50 text-rose-700 ring-rose-600/20',
    stealth: 'bg-amber-50 text-amber-800 ring-amber-600/20',
};

// ---- Actions ----

function reset() {
    sex.value = '';
    raceKey.value = defaultRace.key;
    birthsignName.value = defaultBirthsign.name;
    chosenSpecialization.value = '';
    favoredAttributes.value = fill([], FAVORED_ATTRIBUTE_COUNT);
    majorSkills.value = fill([], MAJOR_SKILL_COUNT);
    minorSkills.value = fill([], MINOR_SKILL_COUNT);
    saveStatus.value = null;
}

async function save() {
    const url = writeState(window.location.href, {
        sex: sex.value,
        race: raceKey.value,
        birthsign: birthsignName.value,
        specialization: chosenSpecialization.value,
        favored: favoredAttributes.value,
        major: majorSkills.value,
        minor: minorSkills.value,
    });

    window.history.pushState('character', document.title, url);

    try {
        await navigator.clipboard.writeText(url);
        saveStatus.value = 'copied';
    } catch {
        saveStatus.value = 'saved';
    }
}
</script>

<template>
    <div class="space-y-8">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Panel title="Character">
                <div class="grid grid-cols-2 gap-x-4 gap-y-5 p-4 sm:p-6">
                    <SelectField id="sex" v-model="sex" label="Sex">
                        <option value=""></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </SelectField>

                    <SelectField id="race" v-model="raceKey" label="Race">
                        <option v-for="option in races" :key="option.key" :value="option.key">
                            {{ option.name }}
                        </option>
                    </SelectField>

                    <SelectField id="birthsign" v-model="birthsignName" label="Birthsign">
                        <option v-for="option in birthsigns" :key="option.name" :value="option.name">
                            {{ option.name }}
                        </option>
                    </SelectField>

                    <SelectField id="specialization" v-model="chosenSpecialization" label="Specialization">
                        <option value=""></option>
                        <option value="combat">Combat</option>
                        <option value="magic">Magic</option>
                        <option value="stealth">Stealth</option>
                    </SelectField>

                    <fieldset class="col-span-2">
                        <legend class="text-sm/6 font-medium text-gray-900">Favored Attributes</legend>
                        <div class="mt-2 grid grid-cols-2 gap-4">
                            <SelectField
                                v-for="(_, index) in favoredAttributes"
                                :id="`favored-attribute-${index}`"
                                :key="index"
                                v-model="favoredAttributes[index]"
                                :label="`Favored Attribute ${index + 1}`"
                                sr-only-label
                            >
                                <option value=""></option>
                                <option v-for="option in attributeOptions" :key="option" :value="option">
                                    {{ capitalize(option) }}
                                </option>
                            </SelectField>
                        </div>
                    </fieldset>
                </div>
            </Panel>

            <Panel title="Major Skills">
                <div class="space-y-3 p-4 sm:p-6">
                    <SkillSelect
                        v-for="(_, index) in majorSkills"
                        :id="`major-skill-${index}`"
                        :key="index"
                        v-model="majorSkills[index]"
                        :label="`Major Skill ${index + 1}`"
                    />
                </div>
            </Panel>

            <Panel title="Minor Skills">
                <div class="space-y-3 p-4 sm:p-6">
                    <SkillSelect
                        v-for="(_, index) in minorSkills"
                        :id="`minor-skill-${index}`"
                        :key="index"
                        v-model="minorSkills[index]"
                        :label="`Minor Skill ${index + 1}`"
                    />
                </div>
            </Panel>
        </div>

        <div class="flex flex-wrap items-center gap-3">
            <button
                type="button"
                class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                @click="reset"
            >
                Reset
            </button>
            <button
                type="button"
                class="rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-brand-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                @click="save"
            >
                Save
            </button>
            <p
                v-if="saveStatus"
                role="status"
                class="rounded-md bg-green-50 px-3 py-2 text-sm font-medium text-green-800 ring-1 ring-green-600/20 ring-inset"
            >
                {{ saveStatus === 'copied' ? 'Saved! Link copied to your clipboard.' : 'Saved! Copy the URL to share.' }}
            </p>
        </div>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div class="space-y-6">
                <StatList title="Primary Attributes" :rows="attributeRows" />
                <StatList title="Derived Stats" :rows="statRows" />
                <StatList title="Resistances" :rows="resistanceRows" />
            </div>

            <Panel title="Skills">
                <table class="min-w-full divide-y divide-gray-100 text-sm">
                    <thead class="sr-only">
                        <tr>
                            <th scope="col">Skill</th>
                            <th scope="col">Value</th>
                            <th scope="col">Governing attribute</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        <tr v-for="skill in build.skills" :key="skill.key">
                            <td class="w-full py-2 pl-4 text-gray-600 sm:pl-6">{{ skill.name }}</td>
                            <td class="px-3 py-2 text-right font-medium text-gray-900 tabular-nums">
                                {{ skill.value }}
                            </td>
                            <td class="py-2 pr-4 text-right sm:pr-6">
                                <span
                                    class="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset"
                                    :class="specializationStyles[skill.specialization]"
                                    :title="capitalize(skill.specialization)"
                                >
                                    {{ capitalize(skill.attribute) }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Panel>
        </div>

        <Panel title="Abilities, Powers & Spells">
            <ul v-if="build.abilities.length" class="divide-y divide-gray-100 text-sm">
                <li v-for="(ability, index) in build.abilities" :key="index" class="px-4 py-2 text-gray-700 sm:px-6">
                    {{ ability }}
                </li>
            </ul>
            <p v-else class="px-4 py-3 text-sm text-gray-500 sm:px-6">
                This character has no abilities, powers, or spells.
            </p>
        </Panel>
    </div>
</template>
