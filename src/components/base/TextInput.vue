<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    type: {
        type: String,
        default: 'text'
    },
    name: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    disabled: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: String,
        required: true
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
    <label :for="name" class="d-flex direction-column">
        <span class="form-label weight-regular">{{ label }}</span>
        <input
            :id="name"
            :value="modelValue"
            :type="type"
            :name="name"
            :placeholder="placeholder"
            :required="required"
            class="bg-paleLavenderWhite col-slateNavy weight-regular"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </label>
</template>

<style lang="scss" scoped>
label {
    gap: 0.6rem;

    .form-label {
        @include font-size(1.3rem, normal);
        color: #465367;
    }

    input {
        @include font-size(1.4rem, normal);
        padding: 1.3rem 1.5rem;
        border: 1px solid $col-paleBlueGrey;
        border-radius: 0.4rem;
        outline: none;
        transition: border-color 0.3s ease-in-out;

        &:focus {
            border-color: $col-blueGrey;
        }
    }
}
</style>
