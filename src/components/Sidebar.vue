<template>
  <div class="">
    <ul id="slide-out" class="sidenav sidebar sidenav-fixed">
      <img src="../assets/logo1.png" width="150px" alt="logo" class="logo" />
        <router-link :to="{ name: 'Home' }">
          <li>
            <a><i class="material-icons">dashboard</i> Home</a>
          </li>
        </router-link>
        <router-link :to="{ name: 'Providers' }">
          <li >
            <a 
              ><i class="material-icons">business</i> Providers</a
            >
          </li>
        </router-link>
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
