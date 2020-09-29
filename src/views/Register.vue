<template>
  <div>
    <div class="row main">
      <div
        class="col m4 s10 offset-s1 offset-m4 form-container z-depth-2 white"
      >
        <div class="row">
          <div class="row">
            <h5 class="col s10">Register Progress</h5>
            <h5 class="col s2 right-align">{{ progress }}/{{ 2 }}</h5>
          </div>
          <div class="progress">
            <div class="determinate" :style="progressbar"></div>
          </div>
        </div>
        <div class="row">
          <form class="col s12">
            <div v-if="part1Complete" id="part2">
              <div class="row">
                <div class="input-field col s12">
                  <input
                    type="text"
                    name="firstname"
                    class="lg-input"
                    id="firstname"
                    required
                  /><label for="firstname" class="lg-input-label"
                    >Firstname</label
                  >
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input
                    type="text"
                    name="lastname"
                    class="lg-input"
                    id="lastname"
                    required
                  /><label for="lastname" class="lg-input-label"
                    >Lastname</label
                  >
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input
                    type="date"
                    name="date_of_birth"
                    class="lg-input"
                    id="date_of_birth"
                  /><label for="date_of_birth" class="lg-input-label"
                    >Date of Birth</label
                  >
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <select class="icons" id="country">
                    <option value="" disabled selected class="lg-input"
                      >Choose your country</option
                    >
                  </select>
                  <label>Country</label>
                </div>
              </div>
              <div class="row">
                <div class="row">
                  <div class="input-field col s12">
                    <input
                      type="text"
                      name="number"
                      class="lg-input"
                      id="number"
                      v-model="form2.number"
                    /><label for="number" class="lg-input-label"
                      >Mobile Number</label
                    >
                  </div>
                </div>
                <div class="row login-btn-conainter ">
                  <button
                    class="btn waves-effect waves-light col s12"
                    name="action"
                    @click.prevent="finishRegister()"
                  >
                    Complete Registration
                    <!-- <i class="material-icons right">send</i> -->
                  </button>
                </div>
              </div>
            </div>

            <div v-if="!part1Complete" id="part1">
              <div class="row">
                <div class="input-field col s12">
                  <input
                    type="text"
                    name="email"
                    class="lg-input"
                    v-model="form1.email"
                    id="email"
                  /><label for="email" class="lg-input-label">Email</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input
                    type="password"
                    name="password1"
                    class="lg-input"
                    v-model="form1.password1"
                    id="password1"
                  /><label for="email" class="lg-input-label">Password</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input
                    type="password"
                    name="password2"
                    class="lg-input"
                    v-model="form1.password2"
                    id="password2"
                  /><label for="email" class="lg-input-label">Password</label>
                </div>
              </div>
              <div class="row login-btn-conainter ">
                <button
                  class="btn waves-effect waves-light col s12"
                  name="action"
                  @click.prevent="register()"
                >
                  Register
                  <!-- <i class="material-icons right">send</i> -->
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default {
  props: { googleLogin: Boolean },
  data() {
    return {
      part1Complete: this.googleLogin ? true : false,
      part2Complete: false,
      form1: {
        email: "",
        password1: "",
        password2: "",
      },
      form2: {
        firstname: "",
        lastname: "",
        date_of_birth: "",
        country: "",
      },
    };
  },
  methods: {
    checkForm() {},
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    refreshSelect(el) {
      let instance = M.FormSelect.getInstance(el);
      instance.destroy();
      M.FormSelect.init(el);
      document.getElementsByClassName("select-dropdown dropdown-trigger")[0];
      el.classList.add("lg-input");
    },
    register() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.form1.email,
            this.form1.password1
          )
          .then(() => this.createUserDocument())
          .then(() => {
            this.part1Complete = true;
            //   store.commit("SET_SIGN_UP_STATUS", true);
          });
        console.log(user);
      } catch (error) {
        alert(error.message);
      }
    },
    finishRegister() {
      const db = firebase.firestore();
      const auth = firebase.auth();
      let user = auth.currentUser;
      db.collection("users")
        .doc(user.uid)
        .update({ ...this.form2, registerComplete: true })
        .then(() => {
          //   store.commit("SET_REGISTER_STATUS", true);
          this.$router.push({ name: "Home" });
        })
        .catch((error) => console.log(error));
    },
  },
  computed: {
    progress: function() {
      return [this.part1Complete, this.part2Complete].reduce(
        (acc, cur) => acc + cur,
        0
      );
    },
    progressbar() {
      let bar;
      switch (this.progress) {
        case 0:
          bar = "width:0%";
          break;
        case 1:
          bar = "width:50%";
          break;
        case 2:
          bar = "width:100%";
      }
      return bar;
    },
  },
  async mounted() {
    M.AutoInit();
    let countries = await fetch(
      "https://restcountries.eu/rest/v2/all"
    ).then((res) => res.json());

    countries.forEach((element) => {
      document.getElementById(
        "country"
      ).innerHTML += `<option value="" data-icon="${element.flag}">${element.name}</option>`;
    });
    this.refreshSelect(document.getElementById("country"));
  },
};
</script>

<style scoped>
.main {
  background: url(/img/5556.0299266d.jpg);
  height: 100vh;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 0;
}

.form-container {
  display: block;
  position: absolute;
  /* top: 20%; */
  padding: 2em;
  margin-top: 2em;
  opacity: 0.95;
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
.progress {
  background: #f5e9e2;
}
.determinate {
  background: #efba98;
}
</style>
