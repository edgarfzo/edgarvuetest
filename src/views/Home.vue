<template>
  <v-container class="flex-grow-1 d-flex flex-column flex-nowrap align-stretch">
    <v-row>
      <v-col
      class="pa-0"
      cols="12">
        <Header></Header>
      </v-col>
    </v-row>
    <v-row>
      {{  this.type  }} homepage
      <v-col
      class="pa-0"
      cols="12">
        <Search></Search>
      </v-col>
    </v-row>
    <v-row v-for="item in companies">
      <v-col
      class="pa-2"
      cols="12">
        <CompanyCard
        :CompanyName="item">
      </CompanyCard>
      </v-col>
    </v-row>
  </v-container>
  



</template>

<script>
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
      companies: ['GRIFOLS', 'ALMIRALL']
    })
  }
</script>
