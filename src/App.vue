<template>
  <div id="app">
    <h1>{{ env.VUE_APP_ENV || 'Welcome' }}</h1>
    <nav-bar></nav-bar>
    <router-view :key="$route.path"></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import navBar from './components/navBar'
import footerBar from './components/footerBar'

export default {
  name: 'app',
  computed: {
    env() {
      console.log('process.env', process.env)
      return process.env;
    }
  },
  components: { navBar, footerBar },

}
</script>
<style lang="scss">
body {
  margin: 0px;
}
h1, h2, h3, h4 {
  margin: 0px;
}
a {
  text-decoration: none;
}
</style>
