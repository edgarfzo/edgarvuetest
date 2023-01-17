// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    currentUser: {
      displayName: '',
      email:'',
      metadata: {
        lastSignInTime: ''
      }
    }
  }),
  actions: {
    setCurrentUser(user){
      this.currentUser = user
    }
  },
  getters: {
    getCurrentUser: (state) => state.currentUser,

  }
})
