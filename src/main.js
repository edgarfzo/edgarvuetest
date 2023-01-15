import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueMeta from 'vue-meta';
import axios from './plugins/axios'
import  firebaseConfig  from './firebaseConfig'
import { initializeApp } from "firebase/app"


Vue.use(VueMeta);


// Initialize Firebase
const app = initializeApp(firebaseConfig)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')