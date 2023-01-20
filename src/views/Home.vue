<template>
  <p>User : {{getUser.name}}</p>
  <p>Email : {{getUser.email}}</p>
  <p>Last Login : {{getUser.lastLogin}}</p>
  <BalanceCard/>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import BalanceCard from '@/components/MainView/BalanceCard.vue'
import { useAppStore } from '@/store/app'

  export default{
    name: 'Home',
    components: {
    BalanceCard
}, data: () => ({
}),
    computed:{
      getUser(){
        const user = {
          name: useAppStore().currentUser.displayName,
          email: useAppStore().currentUser.email,
          lastLogin: useAppStore().currentUser.metadata.lastSignInTime,
        }
        return user
      },
    },
  }
</script>
