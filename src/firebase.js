import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD1iBnxKAPkGU_qGopbmUMECeS2oYG7nVA",
    authDomain: "qhelper21.firebaseapp.com",
    projectId: "qhelper21",
    storageBucket: "qhelper21.appspot.com",
    messagingSenderId: "867568402454",
    appId: "1:867568402454:web:bae95927b353242c397537",
    measurementId: "G-B7TZ4M3CKE"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
