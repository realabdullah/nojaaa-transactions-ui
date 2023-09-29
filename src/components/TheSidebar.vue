<script setup>
import { RouterLink } from 'vue-router';
import { defineEmits } from 'vue';
import HamburgerIcon from '@/components/icons/Utility.vue';
import SidebarIcon from '@/components/icons/Sidebar.vue';

const sidebarNavs = [
    { route: '/', name: 'Dashboard' },
    { route: '/customers', name: 'Customers' },
    { route: '/products', name: 'Products' },
    { route: '/transactions', name: 'Transactions' },
    { route: '/discounts', name: 'Discounts' },
    { route: '/customer-groups', name: 'Customers Groups' },
    { route: '/invoices', name: 'Invoices' },
    { route: '/sales-targets', name: 'Sales Targets' }
];

defineEmits(['toggle-sidebar']);
</script>

<template>
    <aside class="sidebar bg-cloudyWhite position-fixed">
        <div class="sidebar__head d-flex items-center content-between">
            <img src="/noja.png" alt="Noja" />
            <button class="bg-transparent d-flex items-center content-center col-blueGrey" @click="$emit('toggle-sidebar')">
                <HamburgerIcon icon="hamburger" />
            </button>
        </div>

        <nav class="sidebar__navs">
            <ul class="sidebar__navs-list d-flex direction-column">
                <li v-for="(nav, index) in sidebarNavs" :key="index" class="sidebar__navs-list__item">
                    <RouterLink
                        :to="nav.route"
                        class="sidebar__navs-list__item__link d-flex items-center text-decoration-none"
                        :class="nav.route === $route.path ? 'col-bluePurple weight-bold' : 'col-slateNavy weight-medium'"
                    >
                        <span class="sidebar__navs-list__item__link__icon">
                            <SidebarIcon :icon="nav.name" />
                        </span>
                        <span class="sidebar__navs-list__item__link__text text-wrap-nowrap">{{ nav.name }}</span>
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<style lang="scss" scoped>
.sidebar {
    @include sizing(100dvh, 25.6rem);
    padding: 3.6rem 1.6rem;
    top: 0;
    left: 0;
    bottom: 0;
    box-shadow: 1px 0 0 0 #6868f71a;

    &__head {
        margin-bottom: 2.4rem;

        button {
            @include sizing(3rem, 3rem);
            border-radius: 0.5rem;
            border: 0.1rem solid $col-blueGrey;
        }
    }

    &__navs {
        &-list {
            gap: 0.8rem;

            &__item {
                &__link {
                    @include sizing(100%, 4.8rem);
                    padding: 0.9rem 0;
                    gap: 1.2rem;

                    &__text {
                        @include font-size(1.4rem, 2.4rem);
                    }
                }
            }
        }
    }
}
</style>
