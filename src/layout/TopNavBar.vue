<template>
  <div>
    <nav>
      <div class="nav-wrapper white">
        <a href="#" class="brand-logo">Logo</a>
        <a href="#" data-target="slide-out" class="sidenav-trigger"
          ><i class="material-icons grey-text">menu</i></a
        >
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a class="dropdown-trigger" href="#" data-target="dropdown1">
              <i class="material-icons grey-text">notifications</i>
            </a>
            <ul id="dropdown1" class="dropdown-content" tabindex="0">
              <li tabindex="0"><a href="#!">one</a></li>
              <li tabindex="0"><a href="#!">two</a></li>
            </ul>
          </li>
          <li class="avatar">
            <a class="dropdown-trigger" data-target="dropdown2">
              <img src="../assets/graphic.jpeg" alt="" class="circle user" />
            </a>
            <ul id="dropdown2" class="dropdown-content" tabindex="0">
              <li tabindex="0"><a href="#!">two</a></li>
              <li tabindex="0"><a @click="logout()">Log Out</a></li>
            </ul>
          </li>
        </ul>
      </div>
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
.user {
  height: 42px;
  vertical-align: middle;
}
nav {
  box-shadow: none;
}
</style>