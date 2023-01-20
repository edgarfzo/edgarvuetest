<template>
  <div id='nav'>
    <router-link to="/home"> Home </router-link>
    <router-link to="/signin"> Login </router-link>
    <button @click="handleSignOut" v-if="isLoggedIn"> Sign Out</button>
  </div>
  <router-view />
</template>

<script>
import{ getAuth, onAuthStateChanged, signOut} from 'firebase/auth'
import { useAppStore } from './store/app'
import { checkAuth } from './firebase-utils'
  export default {
  name: 'app',
  data(){ 
    return {
    }
    },
  components: {  },
  created () {
      const title = 'Edgar App in ' + import.meta.env.VITE_APP_ENV
      document.title = title
      // console.log('store reseted')
      // useAppStore().$reset
    },

  computed: {
    isLoggedIn(){
      checkAuth()
      return useAppStore().isLoggedIn
    }
  },
  methods: {
    handleSignOut() {
      let auth = getAuth()
      signOut(auth).then(()=>{
        useAppStore().$reset
        this.$router.push('/signin')
      })}
  }

}
</script>
