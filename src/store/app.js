import { defineStore } from 'pinia'
import axios from 'axios'
import {
      createUserWithEmailAndPassword,
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

  async register(auth, email, password, payload){
      const existingEmail = await fetchSignInMethodsForEmail(auth, email)
      var cifs = (await axios.get(`${import.meta.env.VITE_APP_DB_URL}/cifs/.json`)).data
      var existingCifs = []
      var usernames  = (await axios.get(`${import.meta.env.VITE_APP_DB_URL}/usernames/.json`)).data
      var existingUsernames = []

      if(cifs) {
      Object.keys(cifs).forEach((el) => existingCifs.push(cifs[el].cif))
      }
      if (usernames) {
      Object.keys(usernames).forEach((el) => existingUsernames.push(usernames[el].username))
      }
      if(existingEmail.length>0){
      alert('Email already exists') 
      } else if(existingCifs.includes(payload.cif))
      {
        alert('cif already exists') 
      } else if(existingUsernames.includes(payload.username))
      {
        alert('username already exists') 
      } else {
      const response = await createUserWithEmailAndPassword(auth,email, password)
      if (response) {
        await axios.post(`${import.meta.env.VITE_APP_DB_URL}/cifs/.json`, { cif: payload.cif })
        await axios.post(`${import.meta.env.VITE_APP_DB_URL}/usernames/.json`, { username: payload.username })
        await axios.put(`${import.meta.env.VITE_APP_DB_URL}/Users/${response.user.uid}.json`, payload)
          this.currentUser =  response.user
      } else {
          throw new Error('Unable to register user')
      }
    }
  },
  async login(auth, email, password, type){
    
    try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    if (response) {
      const idtoken = (await auth.currentUser.getIdToken())
      const emailExisting = (await axios.get(`${import.meta.env.VITE_APP_DB_URL}/Users/${response.user.uid}.json?auth=${idtoken}`)).data
      if(emailExisting.enterpriseType===type) {
        this.isLoggedIn = true
        this.currentUser =  response.user
      } else {
        throw new Error(`This account is not registered as a ${type} enterprise`)
      } 
    }
    } catch  (e) {
      alert(e.message)
    }

  },
  async logOut(auth){
    await signOut(auth)
      this.isLoggedIn = false
      this.user = null
      
      
  },
  }})


