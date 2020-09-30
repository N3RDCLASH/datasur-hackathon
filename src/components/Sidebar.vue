<template>
  <div class="">
    <ul id="slide-out" class="sidenav sidebar sidenav-fixed">
      <img src="../assets/logo1.png" width="150px" alt="logo" class="logo" />
      <nav-block>
        <li><a href="#!">Home</a></li>
        <li><a href="#!">Providers</a></li>
      </nav-block>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  margin-top: 2em;
}
.sidebar {
  width: 200px !important;
  border-radius: 0 60px 0 0;
}
nav-block {
  margin-top: 10px;
}
</style>
