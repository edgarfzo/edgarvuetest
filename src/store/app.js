import { defineStore } from 'pinia'
import axios from 'axios'
import {createUserWithEmailAndPassword, fetchSignInMethodsForEmail} from 'firebase/auth'

export const useAppStore = defineStore('app', {
  state: () => ({
    isLoggedIn: false,
    currentUser: null,
    isLoadingBalance: true,
    isLoadingStockData: true,
    isLoadingStocksAvailable: true,
    currentBalance: '',
    stockData: [],
    stocksAvailable: []
  }),
  actions: {
    // async signUpHealthcare (){
    //   await axios.put(`${import.meta.env.VITE_APP_DB_URL}/.json`, { hello: 'orld' })
    //    const response = await axios.get(`${import.meta.env.VITE_APP_DB_URL}/.json`)
    //    this.stockData = response.data
    // },
    async register(auth, email, password, payload){
      const existingUser = await fetchSignInMethodsForEmail(auth, email)

      
      const registeredUsers = (await axios.get(`${import.meta.env.VITE_APP_DB_URL}/Users/.json`)).data
      var cifs = []
      var usernames = []
      const keys = Object.keys(registeredUsers)
      keys.forEach((el) => {
        cifs.push(registeredUsers[el].cif)
        usernames.push(registeredUsers[el].username)
      })


      if(existingUser.length>0){
      alert('user already exists') 
      } else if(cifs.includes(payload.cif))
      {
        alert('cif already exists') 
      } else if(usernames.includes(payload.username))
      {
        alert('username already exists') 
      } else {
      await axios.post(`${import.meta.env.VITE_APP_DB_URL}/Users/.json`, payload)
      const response = await createUserWithEmailAndPassword(auth,email, password)
      if (response) {
          this.currentUser =  response.user
      } else {
          throw new Error('Unable to register user')
      }
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

async logOut(){
    this.user = null
    await signOut(auth)
    
},
}})


