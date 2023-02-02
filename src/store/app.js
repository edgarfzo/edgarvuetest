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
    signUpHealthcare (){
        axios.get(`${import.meta.env.VITE_APP_DB_URL}/GOOGL/2023-01-23_18:30:00.json`)
        .then((response) => console.log(response))
    },
    signUpServices (){

    },

}
})


