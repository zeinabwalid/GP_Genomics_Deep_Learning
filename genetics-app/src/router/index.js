import { createRouter, createWebHistory } from '@ionic/vue-router';
//import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';


//: Array<RouteRecordRaw> 
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/home/form',
    component: () => import ('../views/PatientForm.vue')
  },
  {
    path: '/home/signup',
    component: () => import ('../views/SignUp.vue')
  },
  {
    path: '/home/signin',
    component:  () => import ('../views/SignIn.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
