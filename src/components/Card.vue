<template>
  <div class="col s12 m6">
    <div class="card white darken-1">
      <div class="card-content -text">
        <span class="card-title">{{ title }}</span>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { title: String, subtitle: String },
};
</script>

<style scoped>
.card {
  border-radius: 1.5em;
}
</style>
