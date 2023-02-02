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
        <SignUpForm
        :type="type"
        ></SignUpForm>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
import { getAuth, sendSignInLinkToEmail, createUserWithEmailAndPassword } from "firebase/auth"
import SignUpForm from '@/components/SignUpForm.vue'
  export default {
    name: 'SignUpPage',
    components:{
        SignUpForm
    },
    props: {
      type: String
      }
    }
</script>