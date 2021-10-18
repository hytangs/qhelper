import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/compat";

import './css/main.css'

const firebaseConfig = {
    apiKey: "AIzaSyD1iBnxKAPkGU_qGopbmUMECeS2oYG7nVA",
    authDomain: "qhelper21.firebaseapp.com",
    projectId: "qhelper21",
    storageBucket: "qhelper21.appspot.com",
    messagingSenderId: "867568402454",
    appId: "1:867568402454:web:bae95927b353242c397537",
    measurementId: "G-B7TZ4M3CKE"
};

firebase.initializeApp(firebaseConfig);

const app = createApp(App)

store.dispatch('fetch', 'clients')
store.dispatch('fetch', 'history')
// eslint-disable-next-line no-unused-vars
router.beforeEach(to => {
    store.dispatch('asideMobileToggle', false)
    store.dispatch('asideLgToggle', false)
})

/* Default title tag */
const defaultDocumentTitle = 'Admin One Vue 3 Tailwind'

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

app.use(store)
app.use(router)

app.mount('#app')
