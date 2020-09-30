<template>
  <div>
    <nav>
      <div class="nav-wrapper white">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a @click="logout()">Logout</a></li>
        </ul>
      </div>
      <a href="#" data-target="slide-out" class="sidenav-trigger"
        ><i class="material-icons">menu</i></a
      >
    </nav>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  methods: {
    logout() {
      firebase.auth().signOut();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
nav {
  box-shadow: none;
}
</style>