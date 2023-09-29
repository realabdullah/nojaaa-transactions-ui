<script setup>
import { defineProps, ref, defineEmits } from 'vue';
import UtilityIcons from '@/components/icons/Utility.vue';
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

defineProps({
    label: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['update-value']);

const date = ref('');
const showDatePicker = ref(false);
const masks = ref({
    modelValue: 'YYYY-MM-DD'
});

const onDateSelected = () => {
    emit('update-value', date.value);
    showDatePicker.value = false;
};
</script>

<template>
    <div class="date__picker d-flex direction-column position-relative">
        <span class="date__picker-label weight-regular">{{ label }}</span>

        <button type="button" class="date__picker-field d-flex items-center content-between bg-paleLavenderWhite col-slateNavy" @click="showDatePicker = !showDatePicker">
            <span class="date__picker-field-placeholder weight-regular col-slateNavy">{{ date || 'DD/MM/YYYY' }}</span>
            <UtilityIcons icon="date" />
        </button>

        <div v-if="showDatePicker" class="date__picker-calendar position-absolute z-index-9">
            <DatePicker v-model.string="date" :masks="masks" @dayclick="onDateSelected" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.date__picker {
    gap: 0.6rem;

    &-label {
        @include font-size(1.3rem, normal);
        color: #465367;
    }

    &-field {
        padding: 1.2rem 1.5rem;
        border: 1px solid $col-paleBlueGrey;
        border-radius: 0.4rem;

        &-placeholder {
            color: #465367;
            @include font-size(1.4rem, normal);
        }
    }

    &-calendar {
        top: 8rem;
        right: 0;
    }
}
</style>
