import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    meta: {
      title: 'Welcome',
      fullScreen: true
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
    props: true,
    component: () => import('../views/arrivals/RoomSelectionPage')
  },

  {
    meta: {
      title: 'Pass Generation',
      fullScreen: true
    },
    path: '/arrivals/passgeneration',
    name: 'PassGenerationPage',
    props: true,
    component: () => import('../views/arrivals/PassGenerationPage')
  },

  // Guests Daily Dashboard
  {
    meta: {
      title: 'Guest Login',
      fullScreen: true
    },
    path: '/guest/login',
    name: 'GuestLoginPage',
    component: () => import('../views/guest/GuestLoginPage')
  },
  {
    meta: {
      title: 'Daily Assist'
    },
    path: '/guest/dashboard',
    name: 'GuestDashboard',
    component: () => import('../views/guest/GuestDashboard')
  },

  // Admin Dashboard
  {
    meta: {
      title: 'Smart Admin'
    },
    path: '/admin/dashboard',
    name: 'dashboard',
    component: () => import('../views/admin/AdminDashboard2')
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
      title: 'Shops'
    },
    path: '/admin/shops',
    name: 'shops',
    component: () => import('../views/admin/Shops')
  },
  {
    meta: {
      title: 'Finance'
    },
    path: '/admin/finance',
    name: 'finance',
    component: () => import('../views/admin/Finance')
  },
  {
    meta: {
      title: 'Staff'
    },
    path: '/admin/staff',
    name: 'staff',
    component: () => import('../views/admin/Staff')
  },
  {
    meta: {
      title: 'Rooms'
    },
    path: '/admin/rooms',
    name: 'rooms',
    component: () => import('../views/admin/Rooms')
  },
  {
    meta: {
      title: 'Security'
    },
    path: '/admin/security',
    name: 'security',
    component: () => import('../views/admin/Security')
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
      title: 'Login',
      fullScreen: true
    },
    path: '/admin/login',
    name: 'Admin Login',
    component: () => import('../views/admin/Login')
  },
  {
    meta: {
      title: 'QR Pass'
    },
    path: '/admin/qrpass',
    name: 'QR Pass',
    component: () => import('../views/admin/AdminQR')
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

    // Supplementary Routes
  {
    path: '/entertain/albums',
    name: 'Albums',
    component: () => import('../components/guest/entertainments/Album')
  },

  {
    path: '/entertain/podcasts',
    name: 'Podcasts',
    component: () => import('../components/guest/entertainments/Podcast')
  },

  {
    path: '/entertain/shows',
    name: 'Shows',
    component: () => import('../components/guest/entertainments/Shows')
  },

  {
    path: '/entertain/games',
    name: 'Games',
    component: () => import('../components/guest/entertainments/Games')
  },

  //Guest Side Routers

  {
    meta: {
        title: 'Meals'
    },
    path: '/meals',
    name: 'meals',
    component: () => import('../components/guest/Meals')
   },

   {
    meta: {
        title: 'Shop'
    },
    path: '/shop',
    name: 'shop',
    props: true,
    component: () => import('../components/guest/Shop')
   },

   {
    meta: {
        title: 'Contact'
    },
    path: '/contact',
    name: 'contact',
    component: () => import('../components/guest/Contact')
   },
   {
    meta: {
        title: 'Entertainment'
    },
    path: '/entertainment',
    name: 'entertainment',
    component: () => import('../components/guest/Entertainment')
   },
   {
    meta: {
        title: 'Home'
    },
    path: '/home',
    name: 'home',
    component: () => import('../components/guest/HomeAlt')
   },
   {
        meta: {
            title: 'Checkout'
        },
        path: '/checkout',
        name: 'checkout',
        component: () => import('../components/guest/Checkout')
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
