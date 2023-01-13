import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueMeta from 'vue-meta';
import axios from './plugins/axios'
import { firebaseConfig, initializeApp, getAnalytics, getFirestore } from './firebaseConfig'


Vue.use(VueMeta);


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
