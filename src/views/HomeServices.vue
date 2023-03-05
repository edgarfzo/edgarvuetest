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
      <v-col
      class="pa-0"
      cols="12">
        <Search
        :companies="companies"
        :countries="countries">
        </Search>
      </v-col>
    </v-row>
    <v-row v-for="item in servicePosts">
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
import { watch } from 'vue'
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
      servicePosts() {
        const filters = useAppStore().filters
        var companies =  Object.values(useAppStore().uniqueCompanies)
        var countries =  Object.values(useAppStore().uniqueCountries)
        if (filters) {
        companies = Object.values(filters.companies)
        countries = Object.values(filters.countries)
        }
        const posts = useAppStore().servicePosts
        const filteredPosts = Object.values(posts).filter((el) => {
          return companies.some((company) => el.company.includes(company)) &&
                 countries.some((country) => el.country.includes(country))
                })
        return filteredPosts
      },
      companies() {
        return useAppStore().uniqueCompanies
      },
      countries () {
        return useAppStore().uniqueCountries
      }
    },
  async beforeMount() {
    await useAppStore().getPostsServices(getAuth(),{})
  },
  mounted() {
    const store = useAppStore()
    watch(() => store.filters, (newVal, oldVal) => {
        //console.log('Filters changed:', newVal, oldVal)
    })
  }}
</script>
