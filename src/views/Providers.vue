<template>
  <div class="col s12">
    <div class="row">
      <carousel>
        <slide>
          <carousel-card background="datasur1.png">
            <router-link
              class="card-link"
              :to="{ name: 'Provider', params: { name: 'datasur' } }"
            ></router-link> </carousel-card
        ></slide>
        <slide>
          <carousel-card>
            <video autoplay muted loop id="surgoed">
              <source src="../assets/surgoed.mp4" type="video/mp4" />
            </video> </carousel-card
        ></slide>
        <slide>
          <carousel-card background="telesur1.png"></carousel-card
        ></slide>
        <slide>
          <carousel-card background="migranma3.png"></carousel-card
        ></slide>
        <slide> <carousel-card background="ebs1.png"></carousel-card></slide>
      </carousel>
    </div>
    <div class="row">
      <h4 style="color:#af301d" class="col s8 offset-s2 slide-left">
        <i>Get in touch with some of our service providers!</i>
      </h4>
    </div>
  </div>
</template>

<script>
import CarouselCard from "@/components/CarouselCard";

export default {
  name: "Providers",
  components: { CarouselCard },
};
</script>

<style scoped>
#surgoed {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-link {
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: block;
}
</style>
