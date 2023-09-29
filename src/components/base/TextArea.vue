<script setup>
import { defineProps, defineEmits } from 'vue';

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
    modelValue: {
        type: String,
        required: true
    }
});

defineEmits(['update:modelValue']);
</script>

<template>
    <div class="textarea d-flex direction-column">
        <label :for="name" class="textarea__label d-block weight-regular">{{ label }}</label>
        <textarea
            :id="name"
            :value="modelValue"
            :name="name"
            cols="30"
            rows="3"
            :placeholder="placeholder"
            class="textarea__box bg-paleLavenderWhite col-slateNavy weight-regular"
            @input="$emit('update:modelValue', $event.target.value)"
        ></textarea>
    </div>
</template>

<style lang="scss" scoped>
.textarea {
    gap: 0.6rem;

    &__label {
        @include font-size(1.3rem, normal);
        color: #465367;
    }

    &__box {
        @include font-size(1.4rem, normal);
        padding: 1.3rem 1.5rem;
        border: 1px solid $col-paleBlueGrey;
        border-radius: 0.4rem;
        outline: none;
        transition: border-color 0.3s ease-in-out;
        resize: none;

        &:focus {
            border-color: $col-blueGrey;
        }
    }
}
</style>
