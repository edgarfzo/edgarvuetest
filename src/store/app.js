import { defineStore } from 'pinia'
import axios from 'axios'
import {getAuth,
  createUserWithEmailAndPassword,
      fetchSignInMethodsForEmail,
      signInWithEmailAndPassword,
      signOut
      } from 'firebase/auth'
import { getDatabase,
        ref, 
        orderByChild,
        query,
        onValue
      } from "firebase/database"

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

      var cifs = (await axios.get(`${import.meta.env.VITE_APP_DB_URL}/cifs/.json`)).data
      var usernames  = (await axios.get(`${import.meta.env.VITE_APP_DB_URL}/usernames/.json`)).data
      
      cifs = cifs? cifs: []
      usernames = usernames? usernames: []

      if(existingEmail.length>0){
      alert('Email already exists') 
      } else if(cifs.includes(payload.cif))
      {
        alert('cif already exists') 
      } else if(usernames.includes(payload.username))
      {
        alert('username already exists') 
      } else {
      await axios.post(`${import.meta.env.VITE_APP_DB_URL}/cifs/.json`, { cif: payload.cif })
      await axios.post(`${import.meta.env.VITE_APP_DB_URL}/usernames/.json`, { username: payload.username })
      await axios.post(`${import.meta.env.VITE_APP_DB_URL}/Users/.json`, payload)
      const response = await createUserWithEmailAndPassword(auth,email, password)
      if (response) {
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
      const idtoken = (await getAuth().currentUser.getIdToken())
      console.log(idtoken)
      //await axios.get(`https://test-e4100-default-rtdb.europe-west1.firebasedatabase.app/Users/zrz7bT5N7lR21deDNQDzxeoAH862.json?auth=${idtoken}"`)
      const emailExisting = (await axios.get(`${import.meta.env.VITE_APP_DB_URL}/Users.json?orderBy="email"&equalTo="${email}"`)).data
      if(emailExisting[Object.keys(emailExisting)].enterpriseType===type) {
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


