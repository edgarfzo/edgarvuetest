<template>
    <v-container>
  <div class="py-4">
    <v-img
      class="mx-auto mb-10"
      max-width="228"
      src="../assets/projecta.png"
    ></v-img>
  </div>
  <v-row>
    <v-col>
        <LoginCard
        type="healthcare"></LoginCard>
    </v-col>
    <v-col>
        <LoginCard
        type="services"></LoginCard>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
import { getAuth, sendSignInLinkToEmail, createUserWithEmailAndPassword } from "firebase/auth"
import LoginCard from '@/components/LoginCard.vue'
import { useAppStore } from '../store/app'
  export default {
    name: 'SignInPage',
    components:{
        LoginCard
    },
    beforeMount() {
      useAppStore().logOut(getAuth())
    }
  }
</script>