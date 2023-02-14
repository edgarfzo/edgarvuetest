<template>
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation=""
      max-width="448"
      rounded="lg"
      :color="color"
    >
    <b>Portal for {{ type }} enterprises</b>
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>
      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        v-model="email"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a>
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        v-model="password"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        @click="loginUser()"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <v-btn
          class="text-blue text-decoration-none"
          @click="register()"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
      </v-btn>
      </v-card-text>
    </v-card>
</template>

<script>
import { getAuth, sendSignInLinkToEmail, createUserWithEmailAndPassword } from "firebase/auth"
import { useAppStore } from '@/store/app'
import { mapStores } from 'pinia'
import router from '@/router'
  export default {
    name: 'LoginCard',
    data: () => ({
      visible: false,
      email:'',
      password:''
    }),
    props:{
        type: String
    },
    computed:{
      ...mapStores(useAppStore),
        color() {
            if(this.type==='healthcare') {
                return 'black'
            } else {
                return 'white'
            }
        }
    },
    methods: {
        async loginUser (){
          await useAppStore().login(getAuth(), this.email, this.password, this.type)
          router.push({ path: `/home/${this.type}` })
        },
        
        register (){
            router.push({ path: `/signup/${this.type}` })
    }
  },
   }
</script>