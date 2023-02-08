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
          v-model="username"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Username"
        ></v-text-field>
        <v-text-field
          v-model="cif"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="CIF"
        ></v-text-field>
        <v-select
            v-model="enterprisetype"
            :items="listtypes"
            label="Select your sector"
            multiple
            persistent-hint
         ></v-select>
        <v-text-field
          v-model="contact"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Contact Name"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="password1"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Password"
          placeholder="Enter your password"
        ></v-text-field>

        <v-text-field
          v-model="password2"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Enter Password again"
          placeholder="Enter your password again"
        ></v-text-field>

        <v-checkbox v-model="checkbox">
      <template v-slot:label>
        <div>
          I agree the 
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <a
                target="_blank"
                href="https://google.com"
                v-bind="props"
                @click.stop
              >
                terms and conditions
              </a>
            </template>
            Opens in new window
          </v-tooltip>
        </div>
      </template>
    </v-checkbox>

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
          Sign In
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
      username: null,
      cif: null,
      enterprisetype: null,
      description: null,
      contact: null,
      email: null,
      department: null,
      password1: null,
      password2: null,
      loading: false,
      listtypes: ['Farmacéutica',' Medical (PS)','Cosmética','Biotecnológica']
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
        if (!this.form) return
        this.loading = true
        const payload = {
          username: this.username,
          cif: this.cif,
          enterprisetype: this.enterprisetype,
          description: this.description,
          contact: this.contact,
          email: this.email,
          department: this.department
          }
          await useAppStore().register(getAuth(), this.email, this.password1, payload)
          this.loading = true
          await router.push('/') 
      },
      required (v) {
        return !!v || 'Field is required'
      },
    },
}
</script>