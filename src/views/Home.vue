<template>
  <p>User : {{getUser.name}}</p>
  <p>Email : {{getUser.email}}</p>
  <p>Last Login : {{getUser.lastLogin}}</p>
  <BalanceCard :balance="getBalance">
  </BalanceCard>
  <HelloWorld/>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import BalanceCard from '@/components/MainView/BalanceCard.vue'
import { getDatabase, ref, set, onValue, push  } from "firebase/database"
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
      },
      async getBalance(){
          const db = await getDatabase()
          var data = []
          const balanceChange = ref(db, 'transactions')
          onValue( balanceChange, (snapshot) => {
          const transactions = snapshot.val()
          let keys = Object.keys(transactions)
          keys.forEach(el => data.push(transactions[el].amount))
          data = data.reduce((accumulator, currentValue) => accumulator + currentValue)
          console.log('data', data)
          })
          useAppStore().$patch({balance: data})
          return data
      }
    }


  }
</script>
