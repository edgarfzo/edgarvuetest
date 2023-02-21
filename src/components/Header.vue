<template>

      <v-app-bar
      :color="color"
      prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>PROJECTA</v-toolbar-title>

        <v-spacer></v-spacer>

<br/>
      </v-app-bar>

      <v-navigation-drawer
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        permanent
        theme="dark"
        v-model="drawer"
      >
        <v-list nav>
          <v-list-item prepend-icon="mdi-home" title="Home" to="/home/healthcare"></v-list-item>
          <v-list-item prepend-icon="mdi-plus" title="Create a new Project" to="/createproject"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Profile settings" to="/personal"></v-list-item>
          <v-list-item prepend-icon="mdi-logout" title="Sign Out" to="/signin"></v-list-item>
          <v-list-item prepend-icon="mdi-information-outline" title="About" to="/signin"></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>
  <script>
  import { useAppStore } from '@/store/app'
  export default {
    name: 'Header',
    props: {
      type: String
    },
    data: () => ({
      drawer: false,
      group: null,
    }),
    computed:{
        color() {
            if(this.type==='healthcare') {
                return 'black'
            } else {
                return 'white'
            }
        },
        userInfo() {
        return useAppStore().currentUser.username
      }
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
