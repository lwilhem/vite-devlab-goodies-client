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
            path: '/big-shop',
            name: 'big-shop',
            component: () => import('../views/centralShopView.vue'),
        },
    ]
})

export default router