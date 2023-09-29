<script setup>
import { defineProps, defineEmits } from 'vue';
import UtilityIcons from '@/components/icons/Utility.vue';

defineProps({
    title: {
        type: String,
        required: true
    }
});

defineEmits(['close-modal']);
</script>

<template>
    <div class="modal w-100 h-auto bg-white position-fixed z-index-9 overflow-auto">
        <div class="modal__header d-flex items-center content-between">
            <h2 class="modal__header-title weight-semiBold col-slatePurple">{{ title }}</h2>
            <button class="modal__header-close bg-transparent" @click="$emit('close-modal')">
                <UtilityIcons icon="close" />
            </button>
        </div>

        <div class="modal__body">
            <slot name="body" />
        </div>

        <div class="modal__footer">
            <slot name="footer" />
        </div>
    </div>

    <!-- OVERLAY -->
    <div class="overlay position-fixed z-index-8 opacity-50"></div>
</template>

<style lang="scss" scoped>
.modal {
    max-width: 52.8rem;
    max-height: 48.6rem;
    padding-top: 2.4rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: #959da533 0 0.8rem 2.4rem;

    &__header {
        padding: 0 2.4rem;
        margin-bottom: 2.4rem;

        &-title {
            @include font-size(1.6rem, 2.8rem);
        }

        &-close {
            @include sizing(2.4rem, 2.4rem);
        }
    }

    &__body {
        padding: 0 2.4rem;
    }
}

.overlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(0.5rem);
}
</style>
