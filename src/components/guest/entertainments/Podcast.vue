<template>
    <div class="podcasts">
    <Splide :options="{ rewind: true }">
    <SplideSlide>
        <div class="p-6" hoverable="">
             <h3> You Must Remember This </h3>
        <iframe class = "pc" src="https://open.spotify.com/embed/episode/0V325sPEOQ6iTQbJmk26Vc" scrolling="no" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>           
        </div>
        <div class="p-6" hoverable="">
            <h3> The Daily </h3>
            <iframe class = "pc" src="https://open.spotify.com/embed/episode/3qMnfMUhAMEwPEOCyQPyQL" scrolling="no" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        <div class="p-6" hoverable="">
            <h3> Rotten Mango </h3>
        <iframe class = "pc" src="https://open.spotify.com/embed/show/2DZwvzn6Z3xCFZrwZGDrbj" scrolling="no" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    </SplideSlide>
    <SplideSlide>
        <div class="p-6" hoverable="">
             <h3> Teenager Therapy </h3>
             <iframe class="pc" src="https://open.spotify.com/embed/episode/7MqxCYBTPMF1SetYvMbV1u?utm_source=generator" scrolling="no" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        <div class="p-6" hoverable="">
            <h3> Think Fast, Talk Smart </h3>
            <iframe class="pc" src="https://open.spotify.com/embed/episode/38MMbHeBO9KfsmiK5lTOZY?utm_source=generator" scrolling="no" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        <div class="p-6" hoverable="">
            <h3> The Joe Rogan Experience </h3>
            <iframe class="pc" src="https://open.spotify.com/embed/episode/72Q3cyEAHXmGGLefFJ40Hl?utm_source=generator" scrolling="no" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
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
    height: 100%;
    /*border-color: rgba(243,244,246,var(--tw-border-opacity));*/
    /*box-shadow: 0px 8px 8px -8px grey;*/
}

.pc {
    border-radius: 12px;
    width: 100%;
    height: auto;
    box-shadow: 8px 8px 8px -8px grey;
    margin-top: 1rem;
}

.podcasts{
    display: grid;
    grid-template-rows: repeat(3,minmax(0,1fr), "horizontal");
    height: 60vh;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: -1%;
}
</style>
