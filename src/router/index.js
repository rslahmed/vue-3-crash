import {createWebHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/product',
        name: 'Product',
        component: () => import('../views/Product.vue'),
    },
    {
        path: '/order-complete',
        name: 'OrderComplete',
        component: () => import('../views/OrderComplete.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;