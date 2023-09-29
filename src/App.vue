<script setup>
import { RouterView } from 'vue-router';
import { ref } from 'vue';
import TheSidebar from '@/components/TheSidebar.vue';
import HamburgerIcon from '@/components/icons/Utility.vue';

const showSidebar = ref(true);
</script>

<template>
    <main>
        <div v-show="showSidebar" class="the-sidebar z-index-9">
            <TheSidebar @toggle-sidebar="showSidebar = !showSidebar" />
        </div>
        <div class="container" :style="`margin-left: ${showSidebar ? '25.6ren' : '0'}`">
            <button v-show="!showSidebar" class="bg-transparent d-flex items-center content-center col-blueGrey" @click="showSidebar = !showSidebar">
                <HamburgerIcon icon="hamburger" />
            </button>

            <RouterView />
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    .container {
        max-width: 150rem;
        margin-left: 25.6rem;
        padding: 4.8rem;

        @media screen and (max-width: 768px) {
            margin-left: 0 !important;
            padding: 2rem;
        }

        button {
            @include sizing(3rem, 3rem);
            border-radius: 0.5rem;
            border: 0.1rem solid $col-blueGrey;
            margin-bottom: 2.4rem;
        }
    }

    h1 {
        text-align: center;
        padding: 2rem;
    }
}
</style>
