<template>
  <v-container class="flex-grow-1 d-flex flex-column flex-nowrap align-stretch">
    <v-row>
      <v-col
      class="pa-0"
      cols="12">
        <Header
        type="services"
        >
        </Header>
      </v-col>
    </v-row>
    <v-row>
      <v-btn
      @click="addPosts"
      >Test</v-btn>
      <v-col
     
      class="pa-0"
      cols="12">
        <Search></Search>
      </v-col>
    </v-row>
    UnassignedPosts
    <v-row v-for="item in unassignedPosts">
      <v-col
      class="pa-2"
      cols="12">
        <CompanyCard
        :CompanyName="item.company"
        :Description="item.description"
        :Title="item.title"
        :Logo="item.logo">
      </CompanyCard>
      </v-col>
    </v-row>
    Assigned Posts
    <v-row v-for="item in assignedPosts">
      <v-col
      class="pa-2"
      cols="12">
        <CompanyCard
        :CompanyName="item.company"
        :Description="item.description"
        :Title="item.title"
        :Logo="item.logo">
      </CompanyCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getAuth } from "firebase/auth"
import { useAppStore } from '@/store/app'
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'
import CompanyCard from '@/components/CompanyCard.vue'

  export default {
    name: 'Home',
    components: {
    Header,
    Search,
    CompanyCard
    }, 
    computed: {
      userInfo() {
        return useAppStore().currentUser
      },
      unassignedPosts() {
        return useAppStore().unassignedPosts
      },
      assignedPosts() {
        return useAppStore().assignedPosts
      }
    },
    methods: {
      async addPosts() {
       await useAppStore().$patch({posts : null})
       console.log(useAppStore().posts)
      }
    },
  async beforeMount() {
    await useAppStore().getPosts(getAuth(),{})
  }
  }
</script>
