import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    meta: {
      title: 'QHelper Running'
    },
    path: '/',
    name: 'IndexHandling',
    component: () => import('../views/general/IndexHandling')
  },

  // Guests Arrivals
  {
    meta: {
      title: 'Arrival Registration',
      fullScreen: true
    },
    path: '/arrivals',
    name: 'ArrivalsPage',
    component: () => import('../views/arrivals/ArrivalsPage')
  },

  {
    meta: {
      title: 'Room Selection',
      fullScreen: true
    },
    path: '/arrivals/roomselection',
    name: 'RoomSelectionPage',
    component: () => import('../views/arrivals/RoomSelectionPage')
  },

  {
    meta: {
      title: 'Pass Generation',
      fullScreen: true
    },
    path: '/arrivals/passgeneration',
    name: 'PassGenerationPage',
    component: () => import('../views/arrivals/PassGenerationPage')
  },

  // Guests Daily Dashboard
  {
    meta: {
      title: 'Login',
      fullScreen: true
    },
    path: '/guest/login',
    name: 'GuestLoginPage',
    component: () => import('../views/guest/GuestLoginPage')
  },
  {
    meta: {
      title: 'QuickAssist'
    },
    path: '/guest/dashboard',
    name: 'GuestDashboard',
    component: () => import('../views/guest/GuestDashboard')
  },

  // Admin Dashboard
  {
    meta: {
      title: 'Admin'
    },
    path: '/admin/dashboard',
    name: 'dashboard',
    component: () => import('../views/admin/AdminDashboard')
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/admin',
    name: 'home',
    component: () => import('../views/admin/Home')
  },
  {
    meta: {
      title: 'FoodSelection'
    },
    path: '/admin/foodselection',
    name: 'foodselection',
    component: () => import('../views/admin/FoodSelection')
  },
  {
    meta: {
      title: 'Rooms'
    },
    path: '/admin/rooms',
    name: 'rooms',
    component: () => import('../views/admin/GuestService')
  },
  {
    meta: {
      title: 'Health'
    },
    path: '/admin/health',
    name: 'health',
    component: () => import('../views/admin/HealthDeclaration')
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
    name: 'Login',
    component: () => import('../views/admin/Login')
  },
  {
    meta: {
      title: 'Blank Page'
    },
    path: '/admin/blank',
    name: 'blank',
    component: () => import('../views/admin/AdminTemplate')
  },
  {
    meta: {
      title: 'Error',
      fullScreen: true
    },
    path: '/admin/error',
    name: 'Error',
    component: () => import('../views/admin/Error')
  },
  {
    meta: {
      title: 'Not Found',
      fullScreen: true
    },
    path: '/:pathMatch(.*)*',
    name: 'NotFoundHandling',
    component:  () => import('../views/general/NotFoundHandling')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
