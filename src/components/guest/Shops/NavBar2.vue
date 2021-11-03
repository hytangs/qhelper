<template>
<modal-box v-model="isModalActive" title="Cart">
  <p v-if="this.ramyun > 0">Shin Ramyun ($3.80 each) --- Count: {{this.ramyun}}</p>
  <p v-if="this.bento > 0">Chinese Style Bento ($7.00 each) --- Count: {{this.bento}}</p>
  <p v-if="this.nuggets > 0">Nugget and Fries ($5.50 each) --- Count: {{this.nuggets}}</p>
  <p v-if="this.lagnasa > 0">Beef Lagsana ($8.00 each) --- Count: {{this.lagnasa}}</p>
  <p v-if="this.lemak > 0">Nasi Lemak ($6.00 each) --- Count: {{this.lemak}}</p>
  <p v-if="this.prata > 0">Prata with Curry ($4.00 each) --- Count: {{this.prata}}</p>
  <p v-if="this.butter > 0">Butter Chicken ($15.00 each) --- Count: {{this.butter}}</p>
  <p v-if="this.penang > 0">Penang Asam Laksa ($7.00 each) --- Count: {{this.penang}}</p>
  <p v-if="this.dimsum > 0">Dim Sum Set ($15.00 each) --- Count: {{this.dimsum}}</p>
  <p v-if="this.sushi > 0">Japanese Sushi Platter ($18.00 each) --- Count: {{this.sushi}}</p>
  <p v-if="this.fried > 0">Korean Fried Chicken ($18.00 each) --- Count: {{this.fried}}</p>
  <p v-if="this.mamuang > 0">Som Tum Mamuang ($5.00 each) --- Count: {{this.mamuang}}</p>
</modal-box>
  <div id="logged2">
    <div id="nav2">
      <a @click="changeShopSection(1)">Mains</a> |
      <a @click="changeShopSection(2)">Snacks</a> |
      <a @click="changeShopSection(3)">Drinks</a> |
      <a @click="changeShopSection(4)">Supplies</a>
      <!--Shopping Cart Icon-->
      <div class="cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <br>
      <div class="shopcart">
        <button
          class="view"
          type="button"
          data-toggle="modal"
          data-target="#cart"
          @click="isModalActive = true"
        >
          View my Cart
        </button>
        &nbsp;
        <button class="clear-cart btn btn-danger">Order Now</button>
      </div>
    </div>
    <Mains @update_ramyun="Newramyun($event)" 
    @update_bento="Newbento($event)" 
    @update_nuggets="Newnuggets($event)" 
    @update_lagsana="Newlagsana($event)" 
    @update_lemak="Newlemak($event)" 
    @update_prata="Newprata($event)" 
    @update_butter="Newbutter($event)" 
    @update_penang="Newpenang($event)" 
    @update_dimsum="Newdimsum($event)" 
    @update_sushi="Newsushi($event)" 
    @update_fried="Newfried($event)" 
    @update_mamuang="Newmamuang($event)" 
    v-show="currentSection === 1" />
    <Snacks v-show="currentSection === 2" />
    <Drinks v-show="currentSection === 3" />
    <Supplies v-show="currentSection === 4" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Mains from "./Mains";
import Snacks from "./Snacks";
import Drinks from "./Drinks";
import Supplies from "./Supplies";
import ModalBox from '../../plugins/ModalBox'

export default {
  components: { Mains, Snacks, Drinks, Supplies, ModalBox },
  data() {
    return {
      currentSection: 1,
    };
  },
  methods: {
    changeShopSection(id) {
      this.currentSection = id;
      // console.log(this.ramyun)
      // console.log(this.bento)
      // console.log(this.nuggets)
    },
    Newramyun(e) {
      this.ramyun = e;
    },
    Newbento(e) {
      this.bento = e;
    },
    Newnuggets(e) {
      this.nuggets = e;
    },
    Newlagsana(e) {
      this.lagsana = e;
    },
    Newlemak(e) {
      this.lemak = e;
    },
    Newprata(e) {
      this.prata = e;
    },
    Newbutter(e) {
      this.butter = e;
    },
    Newpenang(e) {
      this.penang = e;
    },
    Newdimsum(e) {
      this.dimsum = e;
    },
    Newsushi(e) {
      this.sushi = e;
    },
    Newfried(e) {
      this.fried = e;
    },
    Newmamuang(e) {
      this.mamuang = e;
    },
  },
  setup() {
    const isModalActive = ref(false)
    var ramyun = 0
      var bento = 0
      var nuggets = 0
      var lagsana = 0
      var lemak = 0
      var prata = 0
      var butter = 0
      var penang = 0
      var dimsum = 0
      var sushi = 0
      var fried = 0
      var mamuang = 0
      return {
          ramyun,
          bento,
          nuggets,
          lagsana,
          lemak,
          prata,
          butter,
          penang,
          dimsum,
          sushi,
          fried,
          mamuang,
          isModalActive
      }
  }
};
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
  color: goldenrod;
}

#logged2 {
  text-align: center;
}

.cart {
  float: right;
}

.view:hover,
.clear-cart:hover {
  background-color: rgb(136, 100, 9);
}

.view,
.clear-cart {
  background-color: black;
  text-align: center;
  color: white;
  border-radius: 8px;
  padding: 10px 24px;
}

</style>
