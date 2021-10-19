import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    meta: {
      title: 'QHelper Running'
    },
    path: '/',
    name: 'home',
    component: () => import('../views/general/IndexHandling')
  },

  // Guests Arrivals
  {
    meta: {
      title: 'QHelper Running'
    },
    path: '/',
    name: 'home',
    component: () => import('../views/general/IndexHandling')
  },

  // Guests Daily Dashboard
  {
    meta: {
      title: 'QHelper Running'
    },
    path: '/',
    name: 'home',
    component: () => import('../views/general/IndexHandling')
  },
  {
    meta: {
      title: 'QHelper Running'
    },
    path: '/',
    name: 'home',
    component: () => import('../views/general/IndexHandling')
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tables" */ '../views/admin/FoodSelection')
  },
  {
    meta: {
      title: 'Tables'
    },
    path: '/admin/tables',
    name: 'tables',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tables" */ '../views/admin/Tables')
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
      title: 'Error',
      fullScreen: true
    },
    path: '/admin/error',
    name: 'Error',
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
