<template>
  <div id='nav'>
    <router-link to="/"> Home </router-link>
    <router-link to="/register"> Register </router-link>
    <router-link to="/signin"> Login </router-link>
    <button @click="handleSignOut" v-if="isLoggedIn"> Sign Out</button>
  </div>
  <router-view />
</template>

<script>
import{ getAuth, onAuthStateChanged, signOut} from 'firebase/auth'
  export default {
  name: 'app',
  data(){ 
    return {
        isLoggedIn: false,
    }
    },
  components: {  },
  metaInfo: {
      title: import.meta.env.VUE_APP_ENV
    },
  beforeMount() {
    let auth = getAuth()
    onAuthStateChanged(auth, (user)=>{
      if (user){
        this.isLoggedIn = true
      }
      else {
        this.isLoggedIn = false
      }
    })
  },
  methods: {
    handleSignOut() {
      let auth = getAuth()
      signOut(auth).then(()=>{
        this.$router.push('/')
      })}
  }

}
</script>
