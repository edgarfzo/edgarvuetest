// Composables
import { createRouter, createWebHistory } from 'vue-router'
import{ getCurrentUser } from "@/firebase-utils"
import { useAppStore } from '@/store/app'

const routes = [
  {path:'/' ,
   redirect:'/signin'},

  { path: '/home/:type', 
  component: () => import('../views/Home.vue'),
  props: true,
  meta:{requiresAuth: true},
  },

  { path: '/signin', 
  component: () => import('../views/SignIn.vue') 
  },

  { path: '/signup/:type',
   component: () => import('../views/SignUp.vue'), 
   props: true },

   { path: '/personal', 
   component: () => import('../views/Personal.vue'),
   meta:{requiresAuth: true},
   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async(to, from, next) => {
  console.log('userLoggedIn ?' ,useAppStore().isLoggedIn)
if(to.matched.some((record)=> record.meta.requiresAuth)) {
  if(!useAppStore().isLoggedIn) {
      next('/signin') 
    } else {
      next()
    }
}
else{
  next()
}})
export default router
