<template>
  <p>User : {{getUser.name}}</p>
  <p>Email : {{getUser.email}}</p>
  <p>Last Login : {{getUser.lastLogin}}</p>
  <BalanceCard 
  :isLoadingBalance="isLoadingBalance" >
  </BalanceCard>
</template>

<script>
import BalanceCard from '@/components/MainView/BalanceCard.vue'
import { useAppStore } from '@/store/app'
import { getBalance } from "@/firebase-utils"

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
      isLoadingBalance(){
        return useAppStore().isLoadingBalance
      }
    },
    created(){
      getBalance()
    }
  }
</script>
