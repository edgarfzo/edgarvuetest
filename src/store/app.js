import { defineStore } from 'pinia'
import axios from 'axios'

export const useAppStore = defineStore('app', {
  state: () => ({
    isLoggedIn: false,
    currentUser: {
      displayName: '',
      email:'',
      metadata: {
        lastSignInTime: ''
      }
    },
    isLoadingBalance: true,
    isLoadingStockData: true,
    isLoadingStocksAvailable: true,
    currentBalance: '',
    stockData: [],
    stocksAvailable: []
  }),
  actions: {

}
})


