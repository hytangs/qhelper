<!--<template>
    <div class = "flex flex-col justify-between size">
        <div class="container">
        <div class="p-6">
        <h3> You Must Remember This </h3>
        </div>
        <div class = "horizontal">
        <iframe class = "pc" src="https://open.spotify.com/embed/episode/0V325sPEOQ6iTQbJmk26Vc" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        </div>
        <div class="container">
            <div class="p-6">
            <h3> The Daily </h3>
            </div>
            <div class="horizontal">
            <iframe class = "pc" src="https://open.spotify.com/embed/episode/3qMnfMUhAMEwPEOCyQPyQL" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </div>
         <div class = "container">
        <div class="p-6">
        <h3> Rotten Mango </h3>
        </div>
        <div class="horizontal">
        <iframe class = "pc" src="https://open.spotify.com/embed/show/2DZwvzn6Z3xCFZrwZGDrbj" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        </div>
    </div>
</template>-->
<template>
    <div class="show">
        <div class="container" hoverable="">
             <h3> You Must Remember This </h3>
        <iframe class = "pc" src="https://open.spotify.com/embed/episode/0V325sPEOQ6iTQbJmk26Vc" scrolling="no" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>           
        </div>
        <div class="container" hoverable="">
            <h3> The Daily </h3>
            <iframe class = "pc" src="https://open.spotify.com/embed/episode/3qMnfMUhAMEwPEOCyQPyQL" scrolling="no" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        <div class="container" hoverable="">
            <h3> Rotten Mango </h3>
        <iframe class = "pc" src="https://open.spotify.com/embed/show/2DZwvzn6Z3xCFZrwZGDrbj" scrolling="no" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    </div>
</template>

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
    width: 52%;
    margin-left: 24%;
    height: auto;
    box-shadow: 8px 8px 8px -8px grey;
    margin-top: 1rem;    
}

.show{
    display: grid;
    grid-template-rows: repeat(3,minmax(0,1fr), "horizontal");
    height: 60vh;
    gap:1rem;
    width: 100%;
}
</style>
