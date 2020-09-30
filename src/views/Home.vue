<template>
  <div>
    <div class="row">
      <card title="Calendar"
        ><vc-calendar
          is-expanded
          mode="range"
          :value="null"
          color="red"
          is-dark
        ></vc-calendar
      ></card>
      <card></card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Home",
  components: { Card },
  data() {
    return {
      user: firebase.auth().currentUser.uid,
    };
  },
};
</script>
