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
            component: () => import('../components/ProductList.vue'),
        },
        {
            path: '/bigshop/panier',
            name: 'big-shop-panier',
            component: () => import('../components/PanierShopItem.vue'),
        },
        {
            path: '/aboutus',
            name: 'about-dev',
            component: () => import('../views/aboutView.vue'),
        },
        {
            path: '/assos',
            name: 'assos-list',
            component: () => import('../views/centralShopView.vue'),
        },
        {
            path: '/assos/name',
            name: 'assos-shop',
            component: () => import('../views/assosShopView.vue')
        },
        {
            path: '/bigshop/itemname',
            name: 'shop-item',
            component: () => import('../views/ShopItem.vue'),
        },
        {
            path:'/ShopCart',
            name:'ShopCart',
            component: () => import('../components/ShopCart.vue')
        },

    ]
})

export default router