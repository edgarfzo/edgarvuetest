<template>

    <Skeletor v-if="isLoadingBalance" height="200"/>
    <v-card v-else
      class="mx-auto"
      max-width="1000"
      height="200"
    >
      <v-card-item title="Balance Card">
        Environment: {{ environment }}
        <br>
        <v-btn
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="addCredit"
    >
      Add {{ amount }} $
    </v-btn>
      </v-card-item>
  
      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
          Current Balance:
          <v-col
            class="text-h2"
            cols="6"
          >
            {{ balance }} $
          </v-col>
        </v-row>
      </v-card-text>

    </v-card>
  </template>

  <script>
import { getDatabase, ref, set, onValue, push  } from "firebase/database"
import { useAppStore } from '@/store/app'
import { getBalance } from "@/firebase-utils"
import 'vue-skeletor/dist/vue-skeletor.css'
import { Skeletor } from 'vue-skeletor';

  export default {
    name: 'BalanceCard',
    props: {
      isLoadingBalance: true
    },
    components: {
      Skeletor
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
        console.log(useAppStore().currentUser.displayName)
        if(!useAppStore().currentUser.displayName) {
         return  alert("Please LogIn")
        }
        const db = getDatabase()
        const transactionsRef = ref(db, 'transactions/')
          push(transactionsRef, {
          name: useAppStore().currentUser.displayName,
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