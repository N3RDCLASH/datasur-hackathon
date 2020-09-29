<template>
  <div>
    <div class="row main">
      <div class="col m4 s10 offset-s1 offset-m4 form-container">
        <div class="row">
          <div class="progress">
            <div class="determinate" style="width: 0%"></div>
          </div>
        </div>
        <div class="row">
          <form class="col s12">
            <div id="part1">
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
                <div class="input-field col s12">
                  <input
                    type="text"
                    name="email"
                    class="lg-input"
                    id="email"
                  /><label for="email" class="lg-input-label">Email</label>
                  <div class="row">
                    <div class="input-field col s12">
                      <input
                        type="text"
                        name="number"
                        class="lg-input"
                        id="number"
                      /><label for="number" class="lg-input-label"
                        >Mobile Number</label
                      >
                    </div>
                  </div>
                  <div class="row login-btn-conainter ">
                    <button
                      class="btn waves-effect waves-light col s12"
                      type="submit"
                      name="action"
                    >
                      Next
                      <!-- <i class="material-icons right">send</i> -->
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="part1Complete" id="part2">
              <div class="row">
                <div class="input-field col s12">
                  <input
                    type="text"
                    name="number"
                    class="lg-input"
                    id="number"
                  /><label for="number" class="lg-input-label"
                    >Mobile Number</label
                  >
                </div>
              </div>
              <div class="row login-btn-conainter ">
                <button
                  class="btn waves-effect waves-light col s12"
                  type="submit"
                  name="action"
                >
                  Next
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

export default {
  data() {
    return {
      part1Complete: false,
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
.progress {
  background: #f5e9e2;
}
.determinate {
  background: #efba98;
}
</style>
