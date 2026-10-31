<script setup>
defineProps({
    title: { type: String, required: true },
});
</script>

<template>
    <section class="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5">
        <h2 class="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-900 sm:px-6">
            {{ title }}
        </h2>
        <slot />
    </section>
</template>
