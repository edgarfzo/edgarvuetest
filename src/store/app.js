import { defineStore } from 'pinia'
import axios from 'axios'
import {

      createUserWithEmailAndPassword,
      fetchSignInMethodsForEmail,
      signInWithEmailAndPassword,
      signOut,
      browserSessionPersistence,
      setPersistence,
      } from 'firebase/auth'
import router from '@/router'

export const useAppStore = defineStore('app', {
  state: () => ({
    isLoggedIn: false,
    currentUser: null,
    posts: {}
  }),
  persist: true,
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
      await setPersistence(auth, browserSessionPersistence)
      const idtoken = (await auth.currentUser.getIdToken())
      const emailExisting = (await axios.get(`${import.meta.env.VITE_APP_DB_URL}/Users/${response.user.uid}.json?auth=${idtoken}`)).data
      if(emailExisting.enterpriseType===type) {
        this.isLoggedIn = true
        this.currentUser =  emailExisting
        await this.getPosts(auth)
        router.push({ path: `/home/${type}` })
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
      this.currentUser = null 
      this.posts = null 
  },
  async getPosts(auth){
    const idtoken = (await auth.currentUser.getIdToken())
    const response = (await axios.get(`${import.meta.env.VITE_APP_DB_URL}/Posts/${auth.currentUser.uid}.json?auth=${idtoken}`)).data
    this.posts = response
},
  }})


