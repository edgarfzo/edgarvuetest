<template>
<v-app>

<!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <Footer></Footer>
  </v-footer>
</v-app>
</template>

<script>
import{ getAuth, onAuthStateChanged, signOut} from 'firebase/auth'
import { useAppStore } from './store/app'
import  Header  from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
  export default {
  name: 'app',
  data(){ 
    return {
    }
    },
  components: {Footer},
  created () {
      const title = 'PROJECTA'
      document.title = title
      
    },
  beforeMount() {
    useAppStore().logOut(getAuth())
  },

}
</script>
