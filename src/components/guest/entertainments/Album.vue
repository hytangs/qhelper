<template>
    <div class = "show">
        <div class = "container">
        <div class="p-6">
        <h3> Top Songs Global </h3>
        </div><br>
        <div class="vertical">
        <iframe class ="song" src="https://open.spotify.com/embed/playlist/37i9dQZEVXbNG2KDcFcKOF" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div></div>
        <div class="container">
            <div class="p-6">
            <h3> Mega Hit Mix </h3>
            </div><br>
            <div class="vertical">
            <iframe class="song" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXbYM3nMM0oPk" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </div>
        <div class="container">
            <div class="p-6">
            <h3> All Out 90s </h3>
            </div><br>
            <div class="vertical">
            <iframe class = "song" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXbTxeAdrVG2l" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
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

.song {
    border-radius: 5px;
    width: 65%;
    height: 100%;
    box-shadow: 8px 8px 8px -8px grey;
}

.show{
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    gap: 4rem;
    height: 65vh;
    margin-top: -1.5%;
}

.vertical{
    display: flex;
    justify-content: center;
    height: 100%;
}
</style>
