<script setup>
import { defineProps, defineEmits } from 'vue';
import UtilityIcons from '@/components/icons/Utility.vue';

defineProps({
    name: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    disabled: {
        type: Boolean,
        default: false
    },
    required: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: String,
        required: true
    }
});

defineEmits(['update:modelValue']);
</script>

<template>
    <div class="select d-flex direction-column position-relative w-100">
        <label :for="name" class="select__label d-block weight-regular">{{ label }}</label>
        <select :id="name" :value="modelValue" :name="name" class="select__options bg-paleLavenderWhite col-slateNavy weight-regular" @change="$emit('update:modelValue', $event.target.value)">
            <option value="" selected>{{ placeholder }}</option>
            <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>
        <span class="select__caret d-block position-absolute"><UtilityIcons icon="caret-down" /></span>
    </div>
</template>

<style lang="scss" scoped>
.select {
    gap: 0.6rem;

    &__label {
        @include font-size(1.3rem, normal);
        color: #465367;
    }

    &__options {
        @include font-size(1.4rem, normal);
        padding: 1.3rem 1.5rem;
        border: 1px solid $col-paleBlueGrey;
        border-radius: 0.4rem;
        outline: none;
        transition: border-color 0.3s ease-in-out;
        appearance: none;

        &:focus {
            border-color: $col-blueGrey;
        }
    }

    &__caret {
        right: 1.5rem;
        top: 50%;
    }
}
</style>
