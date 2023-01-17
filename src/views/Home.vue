<template>
  <p>User : {{getUser.name}}</p>
  <p>Email : {{getUser.email}}</p>
  <p>Last Login : {{getUser.lastLogin}}</p>
  <BalanceCard/>
  <HelloWorld/>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import BalanceCard from '@/components/MainView/BalanceCard.vue'
import { useAppStore } from '@/store/app'

  export default{
    name: 'Home',
    components: {
    HelloWorld,
    BalanceCard
},
    computed:{
      getUser(){
        const user = {
          name: useAppStore().getCurrentUser.displayName,
          email: useAppStore().getCurrentUser.email,
          lastLogin: useAppStore().getCurrentUser.metadata.lastSignInTime,
        }
        return user
      }
    }


  }
</script>
