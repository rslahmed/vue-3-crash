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