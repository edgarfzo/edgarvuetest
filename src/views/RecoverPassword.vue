<template>
<v-container>
    <v-row>
        <v-col>

    <v-card class="mx-auto px-6 py-8" max-width="344" :color="color">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
      <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Email"
        ></v-text-field>

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Send instructions to email
        </v-btn>
      </v-form>
      
    </v-card>
    </v-col>
    </v-row>
</v-container>
</template>

<script>
import { useAppStore } from '@/store/app'
import { getAuth } from 'firebase/auth'
import router from '@/router'
export default {
    name: 'SignUpForm',
    data: () => ({
    checkbox: false,
      form: false,
      email: null,
      loading: false,
    }),
    props: {
    type: String
    },
    computed:{
        color() {
            if(this.type==='healthcare') {
                return 'black'
            } else {
                return 'white'
            }
        },
    },
    methods: {
      returnhome () {
        router.push({ path: '/signin' })
      },
      async onSubmit () {
        if (!this.form) return
        this.loading = true
        const email = this.email
        await useAppStore().passwordReset(getAuth(),email)
        this.loading = false
      },
      required (v) {
        return !!v || 'Field is required'
      },
    },
}
</script>