<template>

    <Skeletor v-if="isLoadingBalance" height="500"/>
    <v-card v-else
      class="mx-auto"
      max-width="1000"
      height="500"
    >
    <v-card-item title="Stock Card"/>
    <br/>
    <v-row justify="center" class="ma-2">
      <v-col sm="4">
        <v-select
          
          :items="items"
          label="Standard"
          @input="selectStock()"
        >
        </v-select>
      </v-col>
    </v-row>
        <br/>
    <StockGraph
    :series="series"
    :chartOptions="chartOptions">
  </StockGraph>
    </v-card>
  </template>

  <script>
import { getDatabase, ref, set, onValue, push  } from "firebase/database"
import { useAppStore } from '@/store/app'
import { getBalance, getStockData } from "@/firebase-utils"
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
      items: ['None','IBM','1','2','3']
    }),
    computed: {
        environment(){
            return import.meta.env.VITE_APP_ENV
        },  
        balance(){
          return useAppStore().currentBalance
        },
        series () { 
          return [{
      name: 'Desktops',
      data: useAppStore().stockData
      }]
      },
    chartOptions (){
      return {
        chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
        },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    }}
  },
    methods: {
      selectStock(){
        console.log('hello')
        return getStockData()
      },
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