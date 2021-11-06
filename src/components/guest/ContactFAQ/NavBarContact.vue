<template>
    <div id ="logged2">
      <div id="nav2">
        <a @click="changeShopSection(1)">Health Related</a> |
        <a @click="changeShopSection(2)">Accomodation</a> |
        <a @click="changeShopSection(3)">Payment Issues</a>
      </div>
        <Health v-show="currentSection === 1"/>
        <Accomodation v-show="currentSection === 2"/>
        <Payment v-show="currentSection === 3"/>
    </div>
</template>

<script>
import Health from "./Health";
import Accomodation from "./Accomodation";
import Payment from "./Payment";
export default {
  components: {Health, Accomodation, Payment},
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

.cart{
  float: right;
}
</style>
