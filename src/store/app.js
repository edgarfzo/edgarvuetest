import { defineStore } from 'pinia'
import { saveAs } from 'file-saver'
import FormData from 'form-data'
import { filterPosts } from './utils'
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
    assignedPosts: {},
    unassignedPosts: {},
    servicePosts: {},
    uniqueCompanies: [],
    uniqueCountries: [],
    filters: {}

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
      this.assignedPosts= {}
      this.unassignedPosts= {}
      this.servicePosts = {}
      this.uniqueCompanies= []
      this.uniqueCountries= []
  },
  async getPosts(auth){
    const idtoken = (await auth.currentUser.getIdToken())
    const response = (await axios.get(`${import.meta.env.VITE_APP_DB_URL}/Posts/${auth.currentUser.uid}.json?auth=${idtoken}`)).data
    if(response)
    {
    this.assignedPosts = filterPosts(response,'assigned')
    this.unassignedPosts = filterPosts(response,'unassigned')
    }
},
  async addPost(auth,payload,file){
    const idtoken = (await auth.currentUser.getIdToken())
    const user = (await axios.get(`${import.meta.env.VITE_APP_DB_URL}/Users/${auth.currentUser.uid}.json?auth=${idtoken}`)).data
    const company = (await axios.get(`${import.meta.env.VITE_APP_DB_URL}/Companies/${user.company}.json?`)).data
    if(company) {
    payload.logo = company.logo
    }
    payload.company = user.company
    payload.assigned = false
    const post = (await axios.post(`${import.meta.env.VITE_APP_DB_URL}/Posts/${auth.currentUser.uid}.json`, payload)).data
    payload.postid = post.name
    await axios.put(`${import.meta.env.VITE_APP_DB_URL}/Posts/${auth.currentUser.uid}/${post.name}.json`, payload)
    await this.postPDF(file,post.name)
},
 async postPDF(file,path) {
  let data = new FormData()
  data.append('file', file)
  await axios.post(`https://firebasestorage.googleapis.com/v0/b/${import.meta.env.VITE_APP_PROJECT_ID}.appspot.com/o/${path}.pdf`,data)
  
 }, 
 async getPDF(path) {

  axios.get(`https://firebasestorage.googleapis.com/v0/b/${import.meta.env.VITE_APP_PROJECT_ID}.appspot.com/o/${path}.pdf?alt=media`,
  {
    responseType: 'blob' })
  .then((response) => {
    saveAs(response.data, `${path}.pdf`)
  })
  },
  async getPostsServices(auth){
    const response = (await axios.get(`${import.meta.env.VITE_APP_DB_URL}/Posts.json`)).data
    if(response)
    {
    Object.keys(response).forEach(el => { 
      Object.keys(response[el]).forEach(childEl=> {
      this.servicePosts[childEl] = response[el][childEl]
      })
    })
    var company = Object.values(this.servicePosts).map(el => el.company)
    var countries = Object.values(this.servicePosts).map(el => el.country)
    this.filters = {companies: company, countries: countries}
    this.uniqueCompanies = [...new Set(company)]
    this.uniqueCountries = [...new Set(countries)]
    }
},

}})


