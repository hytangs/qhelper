import {createRouter, createWebHashHistory} from 'vue-router'
import IndexHandling from "../views/general/IndexHandling";

const routes = [
    // index page set as about page and redirect page.
    {
        meta: {
            title: 'QHelper 0.3.0'
        },
        path: '/',
        name: 'QHelper',
        component: IndexHandling
    },
    // Guest Arrival Portal
    {
        meta: {
            title: 'Guest Arrivals'
        },
        path: '/arrivals',
        name: 'Arrivals',
        component: () => import('../views/arrivals/ArrivalsPage.vue')
    },
    // Guest Dashboard Portal
    {
        meta: {
            title: 'Dashboard'
        },
        path: '/guest/home',
        name: 'Dashboard',
        component: () => import('../views/guest/GuestDashboard.vue')
    },
    {
        meta: {
            title: 'Guest Login'
        },
        path: '/guest/login',
        name: 'home',
        component: () => import('../views/guest/GuestLoginPage.vue')
    },
    // admin portal
    {
        meta: {
            title: 'Admin Console'
        },
        path: '/admin/home',
        name: 'Dashboard',
        component: () => import('../views/admin/Home')
    },
    {
        meta: {
            title: 'Tables'
        },
        path: '/admin/tables',
        name: 'tables',
        component: () => import('../views/admin/Tables')
    },
    {
        meta: {
            title: 'Forms'
        },
        path: '/admin/forms',
        name: 'forms',
        component: () => import('../views/admin/Forms')
    },
    {
        meta: {
            title: 'Profile'
        },
        path: '/admin/profile',
        name: 'profile',
        component: () => import('../views/admin/Profile')
    },
    {
        meta: {
            title: 'Ui'
        },
        path: '/admin/ui',
        name: 'ui',
        component: () => import('../views/admin/Ui')
    },
    {
        meta: {
            title: 'Responsive layout'
        },
        path: '/admin/responsive',
        name: 'responsive',
        component: () => import('../views/admin/Responsive')
    },
    {
        meta: {
            title: 'Login',
            fullScreen: true
        },
        path: '/admin/login',
        name: 'login',
        component: () => import('../views/admin/Login')
    },
    {
        meta: {
            title: 'Error',
            fullScreen: true
        },
        path: '/admin/error',
        name: 'error',
        component: () => import('../views/admin/Error')
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || { top: 0 }
    }
})

export default router
