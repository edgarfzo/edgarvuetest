/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import {h} from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_DB_URL,
  projectId: import.meta.env.VITE_APP_ID,
  storageBucket: import.meta.env.VITE_APP_MEASURE_ID,
  messagingSenderId: import.meta.env.VITE_APP_MSG_SENDER_ID,
  appId: import.meta.env.VITE_APP_PROJECT_ID,
  measurementId: import.meta.env.VITE_APP_STORAGE_BUCKET
}

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)
registerPlugins(app)

app.mount('#app')
