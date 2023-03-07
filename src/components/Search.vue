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
    availableCompanies () {
      const countries = useAppStore().filters.countries
      const availableCompanies = (Object.values(useAppStore().servicePosts).filter(el => 
      countries.some((country) => el.country.includes(country)))).map(el => el.company)
      const uniqueAvailableCompanies =[...new Set(availableCompanies)]
      return uniqueAvailableCompanies
    },
    availableCountries () {
      const companies = useAppStore().filters.companies
      const availableCountries = (Object.values(useAppStore().servicePosts).filter(el => 
      companies.some((company) => el.company.includes(company)))).map(el => el.country)
      const uniqueAvailableCountries =[...new Set(availableCountries)]
      return uniqueAvailableCountries
    },
    filters() {
      return {companies: this.selectedCompany, countries: this.selectedCountry}
    },
 },
 methods: {

 },
watch: {

  filters: function(newVal, oldVal) {
      const store = useAppStore()
      store.filters = newVal
    },
    companies: {
      immediate: true, // Set the default values immediately when the component is mounted
      handler(newVal) {
        // Wait until the props are available before setting the default values
        if (newVal && newVal.length) {
          this.selectedCompany = [...newVal];
        }
      },
    },
    countries: {
      immediate: true, // Set the default values immediately when the component is mounted
      handler(newVal) {
        // Wait until the props are available before setting the default values
        if (newVal && newVal.length) {
          this.selectedCountry = [...newVal];
        }
      },
    },
  },
}

</script>