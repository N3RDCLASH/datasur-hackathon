import Vue from 'vue'
import VueRouter from 'vue-router'

import firebase from 'firebase/app'
import 'firebase/auth'

import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',

    meta: { requiresAuth: true },
    component: () => import('../layout/DashboardLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  const isAuthenticated = firebase.auth().currentUser

  let registerComplete = store.state.user
  console.log(registerComplete)

  if (requiresAuth && !isAuthenticated) {
    next("/login")
  } else {
    next()
  }

  if (to.name == "Home" && isAuthenticated || to.name == "Login" && isAuthenticated || to.name == "Register" && isAuthenticated) {
    if (!registerComplete) {
      // next({ name: "Register", params: { googleLogin: true } })
    }
    // else { next("/home") }

  } else {
    next()
  }


})
export default router
