// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    currentUser: undefined
  }),
  actions: {
    setCurrentUser(user){
      this.currentUser = user
    }
  },
  getters: {
    getCurrentUser: (state) => state.currentUser
  }
})
