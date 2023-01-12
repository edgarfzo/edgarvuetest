import Vue from 'vue'
import Router from 'vue-router'
import Main from './../views/MainView.vue'
import Portfolio from './../views/PortfolioView.vue'
import Item from './../views/ItemView.vue'
import Contact from './../views/ContactView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/item/:id',
      name: 'item',
      component: Item,
      props: true
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
