<template>
    <div id ="logged3">
      <div id="nav3">
        <a @click="changeShopSection(1)">Breakfast</a> |
        <a @click="changeShopSection(2)">Lunch</a> |
        <a @click="changeShopSection(3)">Dinner</a>
      </div>
        <Breakfast v-show="currentSection === 1"/>
        <Lunch v-show="currentSection === 2"/>
        <Dinner v-show="currentSection === 3"/>
    </div>
</template>

<script>
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
export default {
  components: {Breakfast, Lunch, Dinner},
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

#nav3 {
  padding: 30px;
  text-align: center;
}

#nav3 a {
  font-weight: bold;
  color: #2c3e50;
}

#nav3 a:hover {
  color:goldenrod;
}

#logged3{
  text-align: center;
}
</style>
