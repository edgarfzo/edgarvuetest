<template>

      <v-app-bar
      :color="color"
      prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>PROJECTA</v-toolbar-title>

        <v-spacer></v-spacer>


      <v-menu>
        <template v-slot:activator="{ props }">
          
              <v-btn  v-bind="props">{{ userInfo }}</v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="item.link"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
      </v-menu>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
        <v-list
          :items="items"
        ></v-list>
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
      items: [
      {
          title: 'Profile Data',
          link:'/personal'
        },
        {
          title: 'SignOut',
          link:'/signin'
        },
      ],
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
