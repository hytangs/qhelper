<template>
    <div id ="logged2">
      <div id="nav2">
        <a @click="changeShopSection(1)">Mains</a> |
        <a @click="changeShopSection(2)">Snacks</a> |
        <a @click="changeShopSection(3)">Drinks</a> |
        <a @click="changeShopSection(4)">Supplies</a>
        <br> <br>
      </div>
        <Mains v-show="currentSection === 1"/>
        <Snacks v-show="currentSection === 2"/>
        <Drinks v-show="currentSection === 3"/>
        <Supplies v-show="currentSection === 4" />
    </div>
    
</template>

<script>
import Mains from "./Mains";
import Snacks from "./Snacks";
import Drinks from "./Drinks";
import Supplies from "./Supplies";
export default {
  components: {Mains, Snacks, Drinks, Supplies},
  data() {
    return {
      currentSection : 1
    }
  },
  methods: {
    changeShopSection(id) {
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

#nav2 {
  padding: 30px;
  text-align: center;
}

#nav2 a {
  font-weight: bold;
  color: #2c3e50;
}

#nav2 a:hover {
  color:goldenrod;
}

#logged2{
  text-align: center;
}
</style>
