<template>
    <v-card
    class="flex-grow-0 flex-shrink-1 d-flex">
      <v-img
        class="align-end text-white"
        :src="Logo"
        cover
      >
      </v-img>
      <v-card-title>{{CompanyName}}</v-card-title>
      <v-card-subtitle class="pt-4">
        {{Title}}
      </v-card-subtitle>
  
      <v-card-text>
        <div></div>
  
        <div> {{Description}}</div>
      </v-card-text>
      <v-card-text>
        <div></div>
  
        <div> {{Country}}</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn color="orange" @click="downloadPDF">
          Download PDF
        </v-btn>

      </v-card-actions>
    </v-card>
  </template>
  <script>
import { useAppStore } from '@/store/app'
import { getAuth } from "firebase/auth"
  export default {
    name:'CompanyCard',
    props:{
        CompanyName: String,
        Title: String,
        Description: String,
        Country: String,
        Logo: String,
        PostId: String
    },
    methods: {
      async downloadPDF () {
        await useAppStore().getPDF(this.PostId)
      }
    }
  }
</script>