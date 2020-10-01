import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import VCalendar from 'v-calendar';
import '@/assets/style/main.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import "firebase/auth";
import "firebase/firestore";
import VueCarousel from 'vue-carousel';

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

Vue.config.productionTip = false

Vue.use(VueCarousel);
Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
  // ...other defaults
});

firebase.initializeApp(firebaseConfig);
// firebase.auth().signOut()


firebase.auth().onAuthStateChanged(
  async (user) => {
    let app
    if (user) {
      let { uid } = firebase.auth().currentUser
      await firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .onSnapshot(
          (doc) => {
            if (doc.exists) {
              store.dispatch("updateUserData", doc.data())
              // store.dispatch("fetchUser", user);
            } else {
              console.log("not", uid);
            }
          },
          (err) => console.log(err)
        )
    }

    // user
    if (!app) {
      new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    }
    console.log()
  }
)
