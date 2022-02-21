import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/bigshop',
            name: 'big-shop',
            component: () => import('../views/centralShopView.vue'),
        },
        {
            path: '/aboutus',
            name: 'about-dev',
            component: () => import('../views/aboutView.vue'),
        },
        {
            path: '/assos',
            name: 'assos-list',
            component: () => import('../views/assosListView.vue'),
        },
        {
            path: '/assos/name',
            name: 'assos-shop',
            component: () => import('../views/assosShopView.vue')
        }

    ]
})

export default router