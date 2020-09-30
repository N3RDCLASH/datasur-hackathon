<template>
  <div class="row">
    <div class="col ">
      <sidebar></sidebar>
    </div>
    <div class="col s12 main-panel">
      <top-nav-bar></top-nav-bar>
      <Content />
      <Footer />
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
import sidebar from "../components/Sidebar";
import Content from "../layout/Content";
import TopNavBar from "../layout/TopNavBar";
import Footer from "../layout/Footer";
export default {
  components: { sidebar, Content, TopNavBar, Footer },
  mounted() {
    M.AutoInit();
  },
  updated() {
    M.AutoInit();
  },
};
</script>

<style scoped>
.main-panel {
  padding-left: 200px;
}

@media only screen and (max-width: 992px) {
  .main-panel {
    padding-left: 0;
  }
}
</style>
