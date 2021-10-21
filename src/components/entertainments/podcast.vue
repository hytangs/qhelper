<template>
    <div class = "show">
        <div class="container">
        <h3> You Must Remember This </h3>
        <iframe class = "pc" src="https://open.spotify.com/embed/episode/0V325sPEOQ6iTQbJmk26Vc" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        <div class="container">
            <h3> The Daily </h3>
            <iframe class = "pc" src="https://open.spotify.com/embed/episode/3qMnfMUhAMEwPEOCyQPyQL" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
         <div class = "container">
        <h3> Rotten Mango </h3>
        <iframe class = "pc" src="https://open.spotify.com/embed/show/2DZwvzn6Z3xCFZrwZGDrbj" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    </div>
</template>

<style scoped>

.container{
    --tw-bg-opacity: 1;
    /*background-color: rgba(255,255,255,var(--tw-bg-opacity));*/
    border-width: 1px;
    --tw-border-opacity: 1;
    height: 100%;
    /*border-color: rgba(243,244,246,var(--tw-border-opacity));*/
    /*box-shadow: 0px 8px 8px -8px grey;*/
}

.pc {
    border-radius: 10px;
    width: 50%;
    height: 100%;
    box-shadow: 0px 8px 8px -8px grey;
}

.show{
    display: grid;
    grid-template-rows: repeat(3,minmax(0,1fr));
    gap: 5rem;
    height: 60vh;
    width: 100%;
}
</style>
