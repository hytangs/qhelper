<template>
    <div class="shows">
          <Splide :options="{ rewind: true }">
    <SplideSlide>
        <div class="">
    <div class="p-6">
      <h4><b>A Journey to the End of Time</b></h4>
    </div>
    <p>We start in 2019 and travel exponentially through time, witnessing the future of Earth, the death of the sun, the end of all stars, alternate universes, the final fate of the cosmos - to name a few.</p>
    <br><iframe class = "video" src="https://www.youtube.com/embed/uD4izuDMUQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
    </SplideSlide>
    <SplideSlide>
  <div class="">
    <div class="p-6">
      <h4><b>Our Planet</b></h4>
    </div>
    <p>Witness the planet's breathtaking diversity -- from seabirds carpet-bombing the ocean to wildebeests eluding the wild dogs of the Serengeti.</p>
      <br><iframe class = "video" src="https://www.youtube.com/embed/GfO-3Oir-qM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div></SplideSlide>
  <SplideSlide>
        <div class="">
    <div class="p-6">
      <h4><b>Lost Treasures of Egypt</b></h4>
    </div>
    <p>New technology reveals why Tutankhamun’s tomb remained hidden in the Valley of the Kings, Tut’s treasures take a once-in-a-lifetime journey and archaeologists open a 4,000-year-old tomb.</p>
    <br><iframe class="video" src="https://www.youtube.com/embed/-obKX-mqjXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

  </SplideSlide></Splide>
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

.container{
    --tw-bg-opacity: 1;
    /*background-color: rgba(255,255,255,var(--tw-bg-opacity));*/
    /*border-width: 1px;*/
    --tw-border-opacity: 1;
    /*border-color: rgba(243,244,246,var(--tw-border-opacity));*/
    /*box-shadow: 0px 8px 8px -8px grey;*/
}

.video {
    border-radius: 5px;
    width: 100%;
    height: 60vh;
}

.shows{
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: -1.5%;
}
</style>
