<template>
  <v-container class="flex-grow-1 d-flex flex-column flex-nowrap align-stretch">
    <v-row>
      <v-col
      class="pa-0"
      cols="12">
        <Header
        :type="type"
        >
        </Header>
      </v-col>
    </v-row>
    <v-row>
      {{  this.type  }} homepage
      <v-btn
      @click="addPosts"
      >Test</v-btn>
      <v-col
      class="pa-0"
      cols="12">
        <Search></Search>
      </v-col>
    </v-row>
    <v-row v-for="item in posts">
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
    props: {
          type: String
    },
    data: () => ({
      posts: useAppStore().posts
    }),
    computed: {
      userInfo() {
        return useAppStore().currentUser
      }
    },
    methods: {
      async addPosts() {
       await useAppStore().$patch({posts : null})
       console.log(useAppStore().posts)
      }
    },
  async beforeMount() {
    await useAppStore().getPosts(getAuth())
  }

  }
</script>
