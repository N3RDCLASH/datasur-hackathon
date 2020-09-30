<template>
  <div>
    <div class="col s12">
      <div class="card">
        <div
          class="card-content carousel-card"
          :style="{ 'background-image': 'url(' + backgroundString + ')' }"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: String,
  },
  computed: {
    backgroundString: function() {
      if (this.background != undefined) {
        let url = require(`../assets/${this.background}`) ?? null;
        console.log(url);
        return url;
      } else {
        return null;
      }
    },
  },
};
</script>

<style scoped>
.carousel-card {
  /* background-image: url(../assets/telesur.jpg); */
  height: 230px;
  background-size: initial;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
