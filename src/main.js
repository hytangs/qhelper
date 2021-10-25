import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import './css/main.css'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1iBnxKAPkGU_qGopbmUMECeS2oYG7nVA",
  authDomain: "qhelper21.firebaseapp.com",
  projectId: "qhelper21",
  storageBucket: "qhelper21.appspot.com",
  messagingSenderId: "867568402454",
  appId: "1:867568402454:web:bae95927b353242c397537",
  measurementId: "G-B7TZ4M3CKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

/* Fetch sample data */
store.dispatch('fetch', 'clients')
store.dispatch('fetch', 'foodselection')
store.dispatch('fetch', 'history')
store.dispatch('fetch', 'staff')

/* Dark mode */
// store.dispatch('darkMode')

/* Collapse mobile aside menu on route change */
// eslint-disable-next-line no-unused-vars
router.beforeEach(to => {
  store.dispatch('asideMobileToggle', false)
  store.dispatch('asideLgToggle', false)
})

/* Default title tag */
const defaultDocumentTitle = 'QHelper'

router.afterEach(to => {
  /* Set document title from route meta */
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }

  /* Full screen mode */
  store.dispatch('fullScreenToggle', !!to.meta.fullScreen)
})

createApp(App).use(store).use(router).mount('#app')
