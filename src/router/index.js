import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Login from "../views/Login.vue"
import Account from "../views/Account.vue"

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Welcome',
  component: Welcome
},
{
  path: '/login',
  name: 'Login',
  component: Login
},
{
  path: '/account',
  name: 'Account',
  component: Account
},
 ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router