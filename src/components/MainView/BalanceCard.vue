<template>
    <v-card
      class="mx-auto"
      max-width="1000"
      height="500"
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

  export default {
    name: 'BalanceCard',
    props: {
      balance: Number
    },
    data: () => ({
      loading: false,
      amount: 100000,
    }),
    computed: {
        environment(){
            return import.meta.env.VITE_APP_ENV
        },       
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => (this.loading = false), 3000)
      },
      addCredit () {
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
      }
    }
  }
</script>