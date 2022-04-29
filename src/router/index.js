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
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('../views/Profil.vue'),
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
            path: '/assos/:name',
            name: 'assos-shop',
            component: () => import('../views/assosShopView.vue')
        },
        {
            path: '/bigshop/:itemname',
            name: 'shop-item',
            component: () => import('../views/ShopItem.vue'),
        },
        {
            path:'/ShopCart/:id',
            name:'ShopCart',
            component: () => import('../components/ShopCart.vue')
        },
        {
            path:'/admin/user',
            name:'addUser',
            component: () => import('../components/AddUser.vue')
        },
        {
            path:'/admin/Asso',
            name:'addAsso',
            component: () => import('../components/AddAsso.vue')
        },
        {
            path:'/vendeur',
            name:'Dashboard',
            component: () => import('../components/Dashboard.vue')
        },
        {
            path:'/vendeur/produit',
            name:'produit',
            component: () => import('../components/AddProduit.vue')
        },
        {
            path:'/vendeur/Stock',
            name:'stock',
            component: () => import('../components/ModifStock.vue')
        }
    ]
})

export default router

