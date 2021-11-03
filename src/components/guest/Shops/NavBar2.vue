<template>
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
        >
          View my Cart
        </button>
        &nbsp;
        <button class="clear-cart btn btn-danger">Clear Cart</button>
      </div>
    </div>
    <Mains @update_ramyun="Newramyun($event)" 
    @update_bento="Newbento($event)" 
    @update_nuggets="Newnuggets($event)" 
    v-show="currentSection === 1" />
    <Snacks v-show="currentSection === 2" />
    <Drinks v-show="currentSection === 3" />
    <Supplies v-show="currentSection === 4" />
  </div>
</template>

<script>
import Mains from "./Mains";
import Snacks from "./Snacks";
import Drinks from "./Drinks";
import Supplies from "./Supplies";

export default {
  components: { Mains, Snacks, Drinks, Supplies },
  data() {
    return {
      currentSection: 1,
    };
  },
  methods: {
    changeShopSection(id) {
      this.currentSection = id;
      console.log(this.ramyun)
      console.log(this.bento)
      console.log(this.nuggets)
    },
    Newramyun(e) {
      this.ramyun = e;
    },
    Newbento(e) {
      this.bento = e;
    },
    Newnuggets(e) {
      this.nuggets = e;
    }
  },
  setup() {
    var ramyun = 0
    var bento = 0
    var nuggets = 0
    return {
      ramyun,
      bento,
      nuggets
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
