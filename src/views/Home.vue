<template>
  <div>{{user}}</div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      user: firebase.auth().currentUser.uid,
    };
  },
};
</script>
