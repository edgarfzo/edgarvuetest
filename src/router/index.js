// Composables
import { createRouter, createWebHistory } from 'vue-router'
import{ getCurrentUser } from "@/firebase-utils"
import { useAppStore } from '@/store/app'

const routes = [
  {path:'/' , redirect:'/home'},
  { path: '/home', 
  component: () => import('../views/Home.vue'),
  meta:{requiresAuth: true},
  },
  { path: '/signin', component: () => import('../views/SignIn.vue') },
  { path: '/signup/:type', component: () => import('../views/SignUp.vue'), props: true },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async(to, from, next) => {
if(to.matched.some((record)=> record.meta.requiresAuth) && import.meta.env.VITE_APP_ENV!='DEV') {
    next('/signin')
}
else{
  next()
}})
export default router
