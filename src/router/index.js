import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: { requiresAuth: true },
    component: Home
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
  // const userInfo = ; 
  const registerComplete = (await firebase.firestore().collection('users').doc(`${firebase.auth().currentUser.uid}`).get()).data().registerComplete;
  const isAuthenticated = firebase.auth().currentUser
  if (requiresAuth && !isAuthenticated) {
    next("/login")
  } else {
    next()
  }

  if (to.name == "Home" || to.name == "Login" && isAuthenticated || to.name == "Register" && isAuthenticated) {
    if (!registerComplete) {
      next({ name: "Register", params: { googleLogin: true } })
    }
    else next("/home")

  } else {
    next()
  }


})
export default router
