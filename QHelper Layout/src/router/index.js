import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import OnlyProfit from '@/views/OnlyProfit.vue'
import Profile from '@/views/Profile.vue'
import NotFound from '@/views/NotFound.vue'
import Login from '@/components/Login.vue'
import OnlyProfit2 from '@/views/OnlyProfit2.vue'

// import App from '@/App.vue'
// import firebase from '@/firebase.js'


const routes = [
  {
      path: "/",
      name: "Login",
      component: Login,
    },
  {

    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/profit',
    name: 'OnlyProfit',
    component: OnlyProfit
  },

  {
    path: '/profit2',
    name: 'OnlyProfit2',
    component: OnlyProfit2
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },

  {
    path: '/:catchAll(.*)',
    name:'NotFound',
    component: NotFound,
  },
  // {
  //   path: '/',
  //   name: 'FbUi',
  //   component: FbUi
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from) => {
//   to == 'profile'
//   from =='about'
//   // ...
//   // explicitly return false to cancel the navigation
//   return false
// })

export default router



