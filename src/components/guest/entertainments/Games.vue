<template>
    <div class="shows">
    <div class="container">
    <div class="p-6">
      <h4>Hextris</h4>
    </div>
    <iframe class = "game" src="https://hextris.io/" frameborder="0" scrolling="yes"></iframe>
    </div>
  <div class="container">
    <div class="p-6">
      <h4>Clumsy Bird</h4>
    </div>
    <iframe class="game" src="https://ellisonleao.github.io/clumsy-bird/" frameborder="0" scrolling="yes"></iframe>
  </div>
</div>
</template>

<style scoped>

.container{
    --tw-bg-opacity: 1;
    --tw-border-opacity: 1;
}

.game {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    box-shadow: 8px 8px 8px -6px grey;
}

.shows{
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 1.7rem;
    height: 60vh;
    width: 100%;
}
</style>