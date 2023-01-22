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
    currentBalance: '',
    isLoadingBalance: true,
    stockData: ''
  }),
  actions: {
    setCurrentUser(state, user){
      state.currentUser = user
    },
    setCurrentBalance(state, balance){
      state.currentBalance = balance
    },
    setTransactionsData(keys){
      axios.get(`${import.meta.env.VITE_APP_DB_URL}/transactions/${keys}.json`).then((response) => {
        console.log(response)
    })
  },
  setStockData(state, simbol){
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=UNTV74N295P1JUJJ`).then((response) => {
      console.log(response)
  })
},
}
})


