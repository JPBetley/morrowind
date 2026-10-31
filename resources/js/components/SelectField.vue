<script setup>
defineProps({
    id: { type: String, required: true },
    label: { type: String, required: true },
    srOnlyLabel: { type: Boolean, default: false },
});

const model = defineModel({ type: String, default: '' });
</script>

<template>
    <div>
        <label
            :for="id"
            :class="srOnlyLabel ? 'sr-only' : 'block text-sm/6 font-medium text-gray-900'"
        >
            {{ label }}
        </label>
        <div :class="srOnlyLabel ? '' : 'mt-2'" class="grid grid-cols-1">
            <select
                :id="id"
                v-model="model"
                class="col-start-1 row-start-1 w-full appearance-none rounded-md border-0 bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 ring-1 ring-gray-300 ring-inset focus:ring-2 focus:ring-brand-600 sm:text-sm/6"
            >
                <slot />
            </select>
            <svg
                class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fill-rule="evenodd"
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>
    </div>
</template>
