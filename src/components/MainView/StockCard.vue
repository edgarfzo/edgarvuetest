<template>

    <Skeletor v-if="isLoadingBalance" height="500"/>
    <v-card v-else
      class="mx-auto"
      max-width="1000"
      height="500"
    >
    <v-card-item title="Stock Card"/>
    <StockGraph/>
    </v-card>
  </template>

  <script>
import { getDatabase, ref, set, onValue, push  } from "firebase/database"
import { useAppStore } from '@/store/app'
import { getBalance } from "@/firebase-utils"
import 'vue-skeletor/dist/vue-skeletor.css'
import { Skeletor } from 'vue-skeletor'
import  StockGraph from '@/components/MainView/StockGraph/StockGraph.vue'


  export default {
    name: 'BalanceCard',
    props: {
      isLoadingBalance: true
    },
    components: {
      Skeletor,
      StockGraph
    },
    data: () => ({
      loading: false,
      amount: 100000,
    }),
    computed: {
        environment(){
            return import.meta.env.VITE_APP_ENV
        },  
        balance(){
          return useAppStore().currentBalance
        }     
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => (this.loading = false), 3000)
      },
      addCredit () {
        console.log(useAppStore().currentBalance)
        if(!useAppStore().getCurrentUser.displayName) {
         return  alert("Please LogIn")
        }
        const db = getDatabase()
        const transactionsRef = ref(db, 'transactions/')
          push(transactionsRef, {
          name: useAppStore().getCurrentUser.displayName,
          transactionDate: new Date().toISOString(),
          amount: this.amount
          })
          getBalance()
      }     
    },
    watch(){
      useAppStore().currentBalance()
    }
  }
</script>