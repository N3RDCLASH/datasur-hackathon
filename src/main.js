import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import '@/assets/style/main.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

const firebaseConfig = {
  apiKey: "AIzaSyBeb6L2B5z6W71MQ_dfZJnRMqv6ix1zasA",
  authDomain: "logistico-b51f0.firebaseapp.com",
  databaseURL: "https://logistico-b51f0.firebaseio.com",
  projectId: "logistico-b51f0",
  storageBucket: "logistico-b51f0.appspot.com",
  messagingSenderId: "304398848247",
  appId: "1:304398848247:web:f386f6d9e2f5289b0583f2",
  measurementId: "G-J1G081KSLW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
