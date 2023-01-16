// Composables
import { createRouter, createWebHistory } from 'vue-router'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const routes = [
  {path:'/' ,
  redirect:'/home'},
  { path: '/home',
   component: () => import('../views/Home.vue'),
  meta:{
    requiresAuth: true
  }},
  { path: '/register', component: () => import('../views/Register.vue') },
  { path: '/signin', component: () => import('../views/SignIn.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async(to, from, next) => {
if(to.matched.some((record)=> record.meta.requiresAuth)) {
  if(await getCurrentUser()){
    next()
  }
}else 
{
  //alert("you don't have access!")
  next('/signin')
}
})
export default router
