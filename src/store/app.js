
import { defineStore } from 'pinia'

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
    googleStock: ''
  }),
  actions: {
    setCurrentUser(state, user){
      state.currentUser = user
    },
    setCurrentBalance(state, balance){
      state.currentBalance = balance
    },
  //   setGoogleStock(keys){
  //     console.log('axios')
  //     axios.get(`${import.meta.env.VITE_APP_DB_URL}/transactions/${keys}.json`).then((response) => {
  //       console.log(response)
  //   })
  // },
}
})

