import { createRouter, createWebHashHistory } from 'vue-router'
import AdminHome from '../views/admin/Home'

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/admin',
    name: 'home',
    component: AdminHome
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
    component: () => import('../../../../Desktop/qhelper/src/views/admin/Forms')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/admin/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../../../../Desktop/qhelper/src/views/admin/Profile')
  },
  {
    meta: {
      title: 'Ui'
    },
    path: '/admin/ui',
    name: 'ui',
    component: () => import(/* webpackChunkName: "ui" */ '../../../../Desktop/qhelper/src/views/admin/Ui')
  },
  {
    meta: {
      title: 'Responsive layout'
    },
    path: '/admin/responsive',
    name: 'responsive',
    component: () => import(/* webpackChunkName: "responsive" */ '../../../../Desktop/qhelper/src/views/admin/Responsive')
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
