import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            meta: {
                requiresAuth: true,
            },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./features/authentication/Login.vue')
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import('@/features/authentication/Logout.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/features/authentication/Register.vue')
        },
        {
            name: 'product-detail',
            path: '/product/:productId',
            component: () => import('@/views/ProductDetail.vue')
        },
        {
            name: 'cart-detail',
            path: '/cart-detail',
            component: () => import('@/views/Cart.vue')
        }
    ]
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters['authentication/isAuthenticated']) {
            next({
                name: 'login',
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router