import { defineStore } from 'pinia'
import axios from 'axios'
import {createUserWithEmailAndPassword,
      fetchSignInMethodsForEmail,
      signInWithEmailAndPassword,
      signOut
      } from 'firebase/auth'

export const useAppStore = defineStore('app', {
  state: () => ({
    isLoggedIn: false,
    currentUser: null
  }),
  actions: {
    // async signUpHealthcare (){
    //   await axios.put(`${import.meta.env.VITE_APP_DB_URL}/.json`, { hello: 'orld' })
    //    const response = await axios.get(`${import.meta.env.VITE_APP_DB_URL}/.json`)
    //    this.stockData = response.data
    // },
  async register(auth, email, password, payload){
      const existingEmail = await fetchSignInMethodsForEmail(auth, email)

      
      const registeredUsers = (await axios.get(`${import.meta.env.VITE_APP_DB_URL}/Users/.json`)).data
      var cifs = []
      var usernames = []
      const keys = registeredUsers? Object.keys(registeredUsers): []
      keys.forEach((el) => {
        cifs.push(registeredUsers[el].cif)
        usernames.push(registeredUsers[el].username)
      })


      if(existingEmail.length>0){
      alert('Email already exists') 
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
  async login(auth, email, password){
    try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    if (response) {
      this.currentUser =  response.user
    }
    } catch  (e) {
      alert(e.message)
    }

    
  },

  async logOut(auth){
      this.user = null
      await signOut(auth)
      
  },
  }})


