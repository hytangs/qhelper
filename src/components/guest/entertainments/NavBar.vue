<template>
    <div id ="logged">
      <div id="nav">
        <a @click="changeEntertainSection(1)">Shows</a> |
        <a @click="changeEntertainSection(2)">Albums</a> |
        <a @click="changeEntertainSection(3)">Podcasts</a> |
        <a @click="changeEntertainSection(4)">Games</a>
        <br> <br>
      </div>
        <Shows v-show="currentSection === 1"/>
        <Album v-show="currentSection === 2"/>
        <Podcast v-show="currentSection === 3"/>
        <Games v-show="currentSection === 4" />
    </div>

</template>

<script>
import Shows from "./Shows";
import Album from "./Album";
import Podcast from "./Podcast";
import Games from "./Games";
export default {
  components: {Games, Podcast, Album, Shows},
  data() {
    return {
      currentSection : 1
    }
  },
  methods: {
    changeEntertainSection(id) {
      this.currentSection = id
    }

  }

}
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

#nav a:hover {
  color:goldenrod;
}

#logged{
  text-align: center;
}
</style>
