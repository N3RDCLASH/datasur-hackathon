<template>
  <div class="row main">
    <div class="col m4 s10 offset-s1 offset-m4 form-container">
      <div class="row">
        <form class="col s12">
          <div class="row graphic"></div>
          <div class="row">
            <div>
              <img
                src="../assets/512px-Google__G__Logo.svg.cc4a562f.webp"
                alt=""
                width="50px"
                class="google-login"
                @click="googleLogin()"
              />
            </div>
            <div class="input-field col s12">
              <input id="first_name" type="text" class="validate lg-input" />
              <label for="username" class="lg-input-label">Username</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate lg-input" />
              <label for="last_name" class="lg-input-label"> Password</label>
            </div>
          </div>
          <div class="row login-btn-conainter">
            <button
              class="btn waves-effect waves-light col s12"
              type="submit"
              name="action"
            >
              Login
              <!-- <i class="material-icons right">send</i> -->
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
const provider = new firebase.auth.GoogleAuthProvider();
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
export default {
  // const aut
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    login(evt) {
      evt.preventDefault();
      try {
        const user = firebase
          .auth()
          .signInWithEmailAndPassword(this.form.email, this.form.password);
        this.$router.replace({ name: "Home" });
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    },
    async googleLogin() {
      try {
        let login = await firebase
          .auth()
          .signInWithPopup(provider)
          .then(async (result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;

            // The signed-in user info.
            let user = result.user;

            let exists = await firebase
              .firestore()
              .collection("users")
              .doc(`${firebase.auth().currentUser.uid}`)
              .get().exists;
            console.log(exists);
            if (!exists) {
              // this.createUserDocument();
            }
            //TODO remove this line
            console.log(user, token);
          })
          .then(() =>
            this.$router.push({
              name: "Register",
              params: { googleLogin: true },
            })
          )
          .catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
            console.log({ errorCode, errorMessage, email, credential });
          });
        console.log(login);
      } catch (error) {
        console.log(error);
      }
    },
    createUserDocument() {
      let db = firebase.firestore();
      const { uid, email, displayName, photoURL } = firebase.auth().currentUser;
      const user = { uid, email, displayName, photoURL };
      console.log(db, user);
      db.collection("users")
        .doc(user.uid)
        .set(user)
        .catch((error) => alert(error.message));
    },
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

<style scoped>
form {
  min-width: 300px;
}
body {
}
.graphic {
  background: url(../assets/graphic.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
}
.main {
  height: 100vh;
  background-position: center;
  background-repeat: repeat;
  background-size: auto;
  /* background: url(../assets/x.jpg); */

  margin: 0;
}
.form-container {
  display: block;
  position: absolute;
  /* top: 20%; */
  padding: 2em;
  border-radius: 1em;
}
.login-btn-conainter {
  padding: 0 0 0 0.6em;
}
button {
  border-radius: 0.3em;
  height: 46px;
  background: #efba98;
}
.google-login {
  cursor: pointer;
  margin: 4% 0;
}
</style>
