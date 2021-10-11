import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/guest/GuestDashboard.vue')
        },
        {
            path: '/arrivals',
            component: () => import('../views/arrivals/ArrivalsPage.vue')
        },
        {
            path: '/guest/login',
            component: () => import('../views/guest/GuestLoginPage.vue')
        },
        {
            path: '/admin',
            component: () => import('../views/admin/AdminConsole.vue')
        },
        {
            path: '/admin/login',
            component: () => import('../views/admin/AdminLoginPage.vue')
        }
    ]
})

export default router