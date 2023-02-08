import { defineStore } from 'pinia'
import axios from 'axios'
import {createUserWithEmailAndPassword, fetchSignInMethodsForEmail} from 'firebase/auth'

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
    async signUpHealthcare (){
       const response = await axios.get(`${import.meta.env.VITE_APP_DB_URL}/.json`)
       this.stockData = response.data
    },
    async register(auth, email, password){
      await fetchSignInMethodsForEmail(auth, email).then((result) => {
        if(result.length>0){
         alert('user already exists')
        }
      })
      const response = await createUserWithEmailAndPassword(auth,email, password)
      if (response) {
          this.currentUser =  response.user
      } else {
          throw new Error('Unable to register user')
      }
  },

  async logIn(context, { email, password }){

    const response = await signInWithEmailAndPassword(auth, email, password)
    if (response) {
      this.currentUser =  response.user
    } else {
        throw new Error('login failed')
    }
},

async logOut(context){
    await signOut(auth)
    context.commit('SET_USER', null)
},

async fetchUser(context ,user) {
  context.commit("SET_LOGGED_IN", user !== null);
  if (user) {
    context.commit("SET_USER", {
      displayName: user.displayName,
      email: user.email
    });
  } else {
    context.commit("SET_USER", null);
  }
}
}})


