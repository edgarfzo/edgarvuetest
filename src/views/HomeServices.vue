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
    <v-row v-if="!emptyPosts" v-for="item in servicePosts">
      <v-col
      class="pa-2"
      cols="12">
        <CompanyCard
        :CompanyName="item.company"
        :Description="item.description"
        :Country="item.country"
        :Title="item.title"
        :Logo="item.logo"
        :PostId="item.postid">
      </CompanyCard>
      </v-col>
    </v-row>
    <v-row v-if="emptyPosts">
      There are no posts that match your filtering settings
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
    data: () => ({
     emptyPosts: false
            }),
    computed: {
      userInfo() {
        return useAppStore().currentUser
      },
      servicePosts() {
        const filters = useAppStore().filters
        var companies =  Object.values(useAppStore().uniqueCompanies)
        var countries =  Object.values(useAppStore().uniqueCountries)
        if (filters) {
        companies = filters.companies ? Object.values(filters.companies) : []
        countries = filters.countries ? Object.values(filters.countries) : []
        }
        const posts = useAppStore().servicePosts
        const filteredPosts = filters.companies && filters.companies ? Object.values(posts).filter((el) => {
          return companies.some((company) => el.company.includes(company)) &&
                 countries.some((country) => el.country.includes(country))
                }) : posts
        console.log(filteredPosts)
          if(filteredPosts.length<1)
          {
            this.emptyPosts = true
          } else {
            this.emptyPosts = false
          }
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
        this.servicePosts
        //console.log('Filters changed:', newVal, oldVal)
    })
  }}
</script>
