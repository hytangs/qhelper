<template>
    <div id ="logged"> 
      <div id="nav">
        <entertainrouter-link to="/shows">Shows</entertainrouter-link> |
        <entertainrouter-link to="/albums">Albums</entertainrouter-link> |
        <entertainrouter-link to="/podcasts">Podcasts</entertainrouter-link> 
    </div>
    </div>
</template>

<script>
</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color:goldenrod;
}
</style>