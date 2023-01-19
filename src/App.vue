<template>
  <div id='nav'>
    <router-link to="/"> Home </router-link>
    <router-link to="/signin"> Login </router-link>
    <button @click="handleSignOut" v-if="isLoggedIn"> Sign Out</button>
  </div>
  <router-view />
</template>

<script>
import{ getAuth, onAuthStateChanged, signOut} from 'firebase/auth'
import { useAppStore } from './store/app'
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
    },
  beforeMount() {
    let auth = getAuth()
    onAuthStateChanged(auth, (user)=>{
      if (user){
        useAppStore().$patch({isLoggedIn: true})
      }
      else {
        useAppStore().$patch({isLoggedIn: false})
      }
    })
  },
  computed: {
    isLoggedin(){
      return useAppStore().getisLoggedIn
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
