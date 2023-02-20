<template>
    <v-container>
      <v-row>
      <v-col
      class="pa-0"
      cols="12">
        <Header
        type="healthcare"
        >
        </Header>
      </v-col>
    </v-row>
  <v-row>
    <v-col>
        <ProjectCard
        :type="type"
        ></ProjectCard>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
import { getAuth, sendSignInLinkToEmail, createUserWithEmailAndPassword } from "firebase/auth"
import ProjectCard from '@/components/ProjectCard.vue'
import Header from '@/components/Header.vue'
  export default {
    name: 'CreateProject',
    components:{
        ProjectCard,
        Header
    },
    props: {
      type: String
      },
      beforeMount(){
        console.log(getAuth())
      }
    }

</script>