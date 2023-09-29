<script setup>
import { ref, computed, watch, defineEmits, defineProps } from 'vue';
import UtilityIcons from '@/components/icons/Utility.vue';

const props = defineProps({
    totalPages: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(['fetch-transactions']);

const currentPage = ref(1);
const maxPagesToShow = ref(5);

const displayedPages = computed(() => {
    const pages = [];

    // If the number of pages is less than the max pages to show, return all pages
    if (props.totalPages <= maxPagesToShow.value) {
        for (let i = 1; i <= props.totalPages; i++) {
            pages.push(i);
        }
        return pages;
    }

    const half = Math.floor(maxPagesToShow.value / 2);
    let start = currentPage.value - half + 1 - (maxPagesToShow.value % 2);
    let end = currentPage.value + half;

    if (start <= 0) {
        start = 1;
        end = maxPagesToShow.value;
    }

    if (end > props.totalPages) {
        start = props.totalPages - maxPagesToShow.value + 1;
        end = props.totalPages;
    }

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return pages;
});

watch(currentPage, () => emit('fetch-transactions', currentPage.value));
</script>

<template>
    <div class="pagination d-flex items-center content-center">
        <button class="d-flex items-center bg-transparent col-darkGrey weight-semiBold" :class="{ 'cursor-not-allowed': currentPage === 1 }" :disabled="currentPage === 1" @click="currentPage--">
            <UtilityIcons icon="caret-left" />Prev
        </button>
        <button
            v-for="page in displayedPages"
            :key="page"
            class="page-no bg-transparent weight-semiBold"
            :class="[currentPage === page ? 'active col-charcoalBrown' : 'col-darkGrey', { 'cursor-not-allowed': page <= 1 || page > totalPages }]"
            :disabled="page < 1 || page > totalPages"
            @click="currentPage = page"
        >
            {{ page }}
        </button>
        <button
            class="d-flex items-center bg-transparent col-darkGrey weight-semiBold"
            :class="{ 'cursor-not-allowed': currentPage === totalPages }"
            :disabled="currentPage === totalPages"
            @click="currentPage++"
        >
            Next<UtilityIcons icon="caret-right" />
        </button>
    </div>
</template>

<style lang="scss" scoped>
.pagination {
    gap: 2.4rem;
    padding: 2.5rem 0;
    border-top: 0.1rem solid #f5f4f9;

    button {
        gap: 0.2rem;
    }

    .page-no {
        @include font-size(1.2rem, normal);

        &.active {
            background-color: $col-paleBlue;
            border-radius: 0.5rem;
            padding: 0.8rem 1.2rem;
        }
    }
}
</style>
