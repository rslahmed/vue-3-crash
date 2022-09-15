import {createWebHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/Product.vue'),
        props: true
    },
    {
        path: '/order-complete',
        name: 'OrderComplete',
        component: () => import('../views/OrderComplete.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/404.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;