<template>

    <Skeletor v-if="isLoadingStocksAvailable" height="500"/>
    <v-card v-else
      class="mx-auto"
      max-width="1000"
      height="700"
    >
    <v-card-item title="Stock Card"/>
    <br/>
    <v-row justify="center" class="ma-2">
      <v-col sm="4">
        <v-select
          v-model ="currentItem"
          :items="items"
          label="Standard"
          @change="selectStock"
        >
        </v-select>

        <br/>
    <StockGraph
    :series="series"
    :chartOptions="chartOptions"
    :isLoadingStockData="isLoadingStockData"
    >
  </StockGraph>
</v-col>
    </v-row>
    </v-card>
  </template>

  <script>
import { getDatabase, ref, set, onValue, push  } from "firebase/database"
import { useAppStore } from '@/store/app'
import { getBalance, getStocksAvailable ,getStockData } from "@/firebase-utils"
import 'vue-skeletor/dist/vue-skeletor.css'
import { Skeletor } from 'vue-skeletor'
import  StockGraph from '@/components/MainView/StockGraph/StockGraph.vue'


  export default {
    name: 'StockCard',
    props: {
      isLoadingStocksAvailable: true,
      items: []
    },
    components: {
      Skeletor,
      StockGraph
    },
    data: () => ({
      loading: false,
      amount: 100000,
      currentItem: ''
    }),
    computed: {
      isLoadingStockData(){
        return useAppStore().isLoadingStockData
      },
      stocksAvailable (){
        return getStocksAvailable()
      },
      selectStock(){
        if(!this.currentItem==''){
        return getStockData(this.currentItem)}
      },
        environment(){
            return import.meta.env.VITE_APP_ENV
        },  
        balance(){
          return useAppStore().currentBalance
        },
        series () { 
          return [{
      name: 'Desktops',
      data: useAppStore().stockData[1]
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
        categories: useAppStore().stockData[0],
      }
    }}
  },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => (this.loading = false), 3000)
      },  
    },
  }
</script>