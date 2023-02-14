import { defineStore } from 'pinia'
import axios from 'axios'
import {
      deleteUser,
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

      const existingCif = await axios.put(`${import.meta.env.VITE_APP_DB_URL}/cifs/${payload.cif}.json`,{ "uid": payload.username})
      .catch(error => error.response.data)
      const existingUsername = await axios.put(`${import.meta.env.VITE_APP_DB_URL}/usernames/${payload.username}.json`,{ "uid": payload.username})
      .catch(error => error.response.data)

      if(existingEmail.length>0 && !existingCif.error && !existingUsername.error)
      {
      axios.delete(`${import.meta.env.VITE_APP_DB_URL}/cifs/${payload.cif}.json`,{ "uid": payload.username})
      axios.delete(`${import.meta.env.VITE_APP_DB_URL}/usernames/${payload.username}.json`,{ "uid": payload.username})
      alert('Email already exists') 
      } 
      else if(existingEmail.length>0 && existingCif.error && !existingUsername.error) 
      {
        axios.delete(`${import.meta.env.VITE_APP_DB_URL}/usernames/${payload.username}.json`,{ "uid": payload.username})
        alert('Email and Cif already exists') 
      }
      else if(existingEmail.length>0 && !existingCif.error && existingUsername.error) 
      {
        axios.delete(`${import.meta.env.VITE_APP_DB_URL}/cifs/${payload.cif}.json`,{ "uid": payload.username})
        alert('Email and Username already exists') 
      }
      else if(existingCif.error && !existingUsername.error) 
      {
        axios.delete(`${import.meta.env.VITE_APP_DB_URL}/usernames/${payload.username}.json`,{ "uid": payload.username})
        alert('Cif already exists') 
      }
      else if(!existingCif.error && existingUsername.error) 
      {
        axios.delete(`${import.meta.env.VITE_APP_DB_URL}/cifs/${payload.cif}.json`,{ "uid": payload.username})
        alert('Username already exists') 
      }
      else if(existingCif.error && existingUsername.error) 
      {
        alert('Cif and Username already exists') 
      }
      else {
      const response = await createUserWithEmailAndPassword(auth,email, password).catch(error =>
        { 
          axios.delete(`${import.meta.env.VITE_APP_DB_URL}/cifs/${payload.cif}.json`,{ "uid": payload.username})
          axios.delete(`${import.meta.env.VITE_APP_DB_URL}/usernames/${payload.username}.json`,{ "uid": payload.username})
          alert(error) 
        })
      payload.uid = response.user.uid
      await axios.put(`${import.meta.env.VITE_APP_DB_URL}/Users/${response.user.uid}.json`, payload)
      this.currentUser =  response.user
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


