<script setup>
import { defineAsyncComponent } from 'vue';

const TransactionsList = defineAsyncComponent(() => import('@/components/TransactionsList.vue'));
</script>

<template>
    <Suspense>
        <TransactionsList />
        <template #fallback>
            <h1>Loading transactions...</h1>
        </template>
    </Suspense>
</template>
