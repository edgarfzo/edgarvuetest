
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
    isLoadingBalance: true

  }),
  actions: {
    setCurrentUser(state, user){
      state.currentUser = user
    },
    setCurrentBalance(state, balance){
      state.currentBalance = balance
    }
  },
  getters: {
    getisLoggedIn: (state) => state.isLoggedIn,
    getCurrentUser: (state) => state.currentUser,
    getCurrentBalance: (state) => state.currentBalance
  }
})

