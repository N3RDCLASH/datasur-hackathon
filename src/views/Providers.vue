<template>
  <div class="col s12">
    <div class="row">
      <carousel>
        <slide>
          <carousel-card background="datasur1.png"></carousel-card
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
      <span class="col s8 offset-s2"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo
        nulla mollitia magnam voluptatum reiciendis voluptatibus ea debitis
        harum asperiores dolorem est velit sed quis at quasi, necessitatibus sit
        non?
      </span>
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
</style>
