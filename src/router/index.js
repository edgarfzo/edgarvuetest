// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/store/app'
import { checkAuth } from '../firebase-utils'

const routes = [
  {path:'/' , redirect:'/home'},
  { path: '/home', component: () => import('../views/Home.vue'),
  meta:{
    requiresAuth: true
  }},
  { path: '/signin', component: () => import('../views/SignIn.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async(to, from, next) => {
if(to.matched.some((record)=> record.meta.requiresAuth) && import.meta.env.VITE_APP_ENV!='DEV') {
  checkAuth()
  if(!useAppStore().isLoggedIn){
    next('/signin')
  }
else 
{
  next()
}
}
else{
  next()
}})
export default router
