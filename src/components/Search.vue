<template>
<v-container
class="flex-grow-1 d-flex flex-column flex-nowrap"
outlined
>
<v-row
class="flex-grow-0 flex-shrink-1 d-flex">
    <v-col>
        <v-select
        :items="countries"
        multiple
        label="Country"
        density="compact"
        @change="filter"
        v-model="selectedCountry">
        </v-select>
    </v-col>
    <v-col>
        <v-select
        :items="companies"
        multiple
        label="Company"
        density="compact"
        v-model="selectedCompany">   
        </v-select>
    </v-col>
</v-row>
</v-container>
</template>

<script>
import { useAppStore } from '@/store/app'
import { getAuth } from "firebase/auth"
export default {
    name: 'SearchComponent',
    props: {
      companies: Array,
      countries: Array,
    },
    data: () => ({
      selectedCompany: [],
      selectedCountry: [],
}),
computed: {
  filter () {
    console.log('hey')
  }
},
methods: {
  filterCompanies (){
    var test = Object.values(useAppStore().servicePosts).filter((el) => el.company.includes(this.selectedCompany))
    useAppStore().$patch({servicePosts: test})
  },
  filterCountries (){
    var test = Object.values(useAppStore().servicePosts).filter((el) => el.country.includes(this.selectedCountry))
    useAppStore().$patch({servicePosts: test})
  },

},
watch: {
  selectedCompany(){
    this.filterCompanies()
  },
  selectedCountry(){
    this.filterCountries()
  }
},
}

</script>