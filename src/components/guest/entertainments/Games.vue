<template>
    <div class="games">
    <Splide :options="{ rewind: true }">
    <SplideSlide>
    <div class="">
    <div class="p-6">
      <h4>Hextris</h4>
    </div>
    <iframe class = "game" src="https://hextris.io/" frameborder="0" scrolling="yes"></iframe>
    </div>
    </SplideSlide>
    <SplideSlide>
  <div class="">
    <div class="p-6">
      <h4>Clumsy Bird</h4>
    </div>
    <iframe class="game" src="https://ellisonleao.github.io/clumsy-bird/" frameborder="0" scrolling="yes"></iframe>
  </div>
    </SplideSlide>
    <SplideSlide>
  <div class="">
    <div class="p-6">
      <h4>Astray</h4>
    </div>
    <iframe class="game" src="https://wwwtyro.github.io/Astray/" frameborder="0" scrolling="yes"></iframe>
  </div>
    </SplideSlide>
    </Splide>
</div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default defineComponent( {
  components: { Splide, SplideSlide },
} );
</script>

<style scoped>
.game {
    border-radius: 5px;
    width: 100%;
    height: 80vh;
    box-shadow: 0px 8px 8px -8px grey;
}

.games{
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: -1.5%;
}
</style>