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
          v-model="title"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Title"
        ></v-text-field>
        <v-textarea
      v-model="description"
      counter
      label="Description"
      maxlength="500"
      single-line
    ></v-textarea>

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
          Create Project
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
    title: null,
    description: null,
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
        }
    },
    methods: {
      async onSubmit () {
        const payload = {
          title: this.title,
          description: this.description
          }
          await useAppStore().addPost(getAuth(), payload)
          this.loading = false
          await router.push('/home/healthcare') 
      },
      required (v) {
        return !!v || 'Field is required'
      },
    },
}
</script>