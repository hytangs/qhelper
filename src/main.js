import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase/compat";

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

app.use(router)

app.mount('#app')
