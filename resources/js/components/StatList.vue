<script setup>
import Panel from './Panel.vue';

// rows: [{ label, value, note?, negative? }]
defineProps({
    title: { type: String, required: true },
    rows: { type: Array, required: true },
});
</script>

<template>
    <Panel :title="title">
        <dl class="divide-y divide-gray-100">
            <div
                v-for="row in rows"
                :key="row.label"
                class="flex items-baseline justify-between gap-4 px-4 py-2 text-sm sm:px-6"
            >
                <dt class="text-gray-600">{{ row.label }}</dt>
                <dd class="flex items-baseline gap-3">
                    <span v-if="row.note" class="text-xs text-red-600">{{ row.note }}</span>
                    <span
                        class="min-w-10 text-right font-medium tabular-nums"
                        :class="row.negative ? 'text-red-600' : 'text-gray-900'"
                    >
                        {{ row.value }}
                    </span>
                </dd>
            </div>
        </dl>
    </Panel>
</template>
