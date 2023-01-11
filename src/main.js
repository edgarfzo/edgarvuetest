import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs8ed1ZNkeNyYp1NUk8hExkzIWLq9N3Q4",
  authDomain: "test-e4100.firebaseapp.com",
  projectId: "test-e4100",
  storageBucket: "test-e4100.appspot.com",
  messagingSenderId: "1015148410653",
  appId: "1:1015148410653:web:d550b3728485549964d3f4",
  measurementId: "G-03WLPVGCKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
