<script setup>
import SelectField from './SelectField.vue';
import skills from '../skills/all';

defineProps({
    id: { type: String, required: true },
    label: { type: String, required: true },
});

const model = defineModel({ type: String, default: '' });

const groups = [
    { label: 'Combat', options: skills.combat },
    { label: 'Magic', options: skills.magic },
    { label: 'Stealth', options: skills.stealth },
];
</script>

<template>
    <SelectField :id="id" v-model="model" :label="label" sr-only-label>
        <option value=""></option>
        <optgroup v-for="group in groups" :key="group.label" :label="group.label">
            <option v-for="skill in group.options" :key="skill.value" :value="skill.value">
                {{ skill.name }}
            </option>
        </optgroup>
    </SelectField>
</template>
