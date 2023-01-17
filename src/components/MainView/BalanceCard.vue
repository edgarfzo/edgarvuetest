<template>
    <v-card
      class="mx-auto"
      max-width="500"
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
            {{ getCurrentBalance }} $
          </v-col>
        </v-row>
      </v-card-text>

    </v-card>
  </template>

  <script>
import { getDatabase, ref, set, onValue  } from "firebase/database"
import { useAppStore } from '@/store/app'

  export default {
    name: 'BalanceCard',
    data: () => ({
      loading: false,
      amount: 10000,
    }),
    computed: {
        environment(){
            return import.meta.env.VITE_APP_ENV
        },
        getCurrentBalance(){
          const db = getDatabase()
          var data = ''
          onValue(ref(db, '/transactions'), (snapshot) => {
            console.log(snapshot.val())
          data = (snapshot.val().amount)
          })
          return data
          }
          
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => (this.loading = false), 3000)
      },
      addCredit () {
        const db = getDatabase()
        if(!useAppStore().getCurrentUser.displayName) {
         return  alert("Please LogIn")
        }
        set(ref(db, 'transactions/'), {
          name: useAppStore().getCurrentUser.displayName,
          transactionDate: new Date().toISOString(),
          amount: this.amount
            });

      }
    }
  }
</script>