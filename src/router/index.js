import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/customers',
            name: 'customers',
            component: HomeView
        },
        {
            path: '/products',
            name: 'products',
            component: HomeView
        },
        {
            path: '/transactions',
            name: 'transactions',
            component: () => import('../views/Transactions.vue')
        },
        {
            path: '/discounts',
            name: 'discounts',
            component: HomeView
        },
        {
            path: '/customer-groups',
            name: 'customer groups',
            component: HomeView
        },
        {
            path: '/invoices',
            name: 'invoices',
            component: HomeView
        },
        {
            path: '/sales-targets',
            name: 'sales targets',
            component: HomeView
        }
    ]
});

export default router;
