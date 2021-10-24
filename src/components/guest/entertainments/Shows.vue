<template>
    <div class="shows">
    <div class="container">
    <div class="p-6">
      <h4>Assassination Classroom</h4>
    </div>
        <iframe class = "video" src="https://www.youtube.com/embed/adsNeHmLllg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  <div class="container">
    <div class="p-6">
      <h4>Our Planet</h4>
    </div>
        <iframe class = "video" src="https://www.youtube.com/embed/GfO-3Oir-qM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div class="container">
    <div class="p-6">
      <h4>Soul Land</h4>
    </div>
        <iframe class="video" src="https://www.youtube.com/embed/sry61pny9J0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
</template>

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
    height: 55%;
    box-shadow: 8px 8px 8px -6px grey;
}

.shows{
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    gap: 1.7rem;
    height: 60vh;
    width: 100%;
}
</style>
