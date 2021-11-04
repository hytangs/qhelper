<template>
  <modal-box v-model="isModalActive" title="Cart">
    <div v-if="orderedAlready == false">
      <p v-if="this.ramyun > 0">
        Shin Ramyun ($3.00 each) --- Count: {{ this.ramyun }}
      </p>
      <p v-if="this.bento > 0">
        Chinese Style Bento ($7.00 each) --- Count: {{ this.bento }}
      </p>
      <p v-if="this.nuggets > 0">
        Nugget and Fries ($5.50 each) --- Count: {{ this.nuggets }}
      </p>
      <p v-if="this.lagsana > 0">
        Beef Lagsana ($8.00 each) --- Count: {{ this.lagsana }}
      </p>
      <p v-if="this.lemak > 0">
        Nasi Lemak ($6.00 each) --- Count: {{ this.lemak }}
      </p>
      <p v-if="this.prata > 0">
        Prata with Curry ($4.00 each) --- Count: {{ this.prata }}
      </p>
      <p v-if="this.butter > 0">
        Butter Chicken ($15.00 each) --- Count: {{ this.butter }}
      </p>
      <p v-if="this.penang > 0">
        Penang Asam Laksa ($7.00 each) --- Count: {{ this.penang }}
      </p>
      <p v-if="this.dimsum > 0">
        Dim Sum Set ($15.00 each) --- Count: {{ this.dimsum }}
      </p>
      <p v-if="this.sushi > 0">
        Japanese Sushi Platter ($18.00 each) --- Count: {{ this.sushi }}
      </p>
      <p v-if="this.fried > 0">
        Korean Fried Chicken ($18.00 each) --- Count: {{ this.fried }}
      </p>
      <p v-if="this.mamuang > 0">
        Som Tum Mamuang ($5.00 each) --- Count: {{ this.mamuang }}
      </p>

      <p v-if="this.puff > 0">
        Curry Puff ($2.00 each) --- Count: {{ this.puff }}
      </p>
      <p v-if="this.sandwich > 0">
        Chicken Ham Sandwich ($4.00 each) --- Count: {{ this.sandwich }}
      </p>
      <p v-if="this.onigiri > 0">
        Tuna Onigiri ($3.50 each) --- Count: {{ this.onigiri }}
      </p>
      <p v-if="this.corndog > 0">
        Corn Dog ($3.00 each) --- Count: {{ this.corndog }}
      </p>
      <p v-if="this.chips > 0">
        Mini Lay's Classic Chips ($2.00 each) --- Count: {{ this.chips }}
      </p>
      <p v-if="this.haagen > 0">
        Haagen Daz Kinako Cup ($4.00 each) --- Count: {{ this.haagen }}
      </p>
      <p v-if="this.truffle > 0">
        Truffle Fries ($5.00 each) --- Count: {{ this.truffle }}
      </p>
      <p v-if="this.brownie > 0">
        Fudgy Brownie ($4.00 each) --- Count: {{ this.brownie }}
      </p>
      <p v-if="this.macarons > 0">
        Red Velvet Macarons ($3.00 each) --- Count: {{ this.macarons }}
      </p>
      <p v-if="this.cake > 0">
        Carrot Cake ($6.00 each) --- Count: {{ this.cake }}
      </p>
      <p v-if="this.tutu > 0">
        Peanut Tutu Kueh ($5.00 each) --- Count: {{ this.tutu }}
      </p>
      <p v-if="this.rice > 0">
        Mango Sticky Rice ($6.00 each) --- Count: {{ this.rice }}
      </p>

      <p v-if="this.tarik > 0">
        Teh Tarik ($3.00 each) --- Count: {{ this.tarik }}
      </p>
      <p v-if="this.cola > 0">
        Coca Cola ($5.00 each) --- Count: {{ this.cola }}
      </p>
      <p v-if="this.soya > 0">
        Soya Milk ($3.50 each) --- Count: {{ this.soya }}
      </p>
      <p v-if="this.beer > 0">
        Corona Beer ($8.00 each) --- Count: {{ this.beer }}
      </p>
      <p v-if="this.sling > 0">
        Singapore Sling ($10.00 each) --- Count: {{ this.sling }}
      </p>
      <p v-if="this.milktea > 0">
        Milk Tea with Pearls ($5.00 each) --- Count: {{ this.milktea }}
      </p>
      <p v-if="this.lasi > 0">
        Mango Lasi ($5.00 each) --- Count: {{ this.lasi }}
      </p>
      <p v-if="this.coconut > 0">
        Coconut Shake ($8.00 each) --- Count: {{ this.coconut }}
      </p>
      <p v-if="this.oreo > 0">
        Oreo Milkshake ($8.00 each) --- Count: {{ this.oreo }}
      </p>
      <p v-if="this.latte > 0">
        Matcha Latte ($7.00 each) --- Count: {{ this.latte }}
      </p>
      <p v-if="this.coffee > 0">
        Vietnamese Coffee ($6.00 each) --- Count: {{ this.coffee }}
      </p>
      <p v-if="this.milo > 0">
        Milo Dinosaur ($5.00 each) --- Count: {{ this.milo }}
      </p>

      <p v-if="this.total > 0">
        Total: ${{ parseFloat(this.total).toFixed(2) }}
      </p>
    </div>
    <div v-else>
      <p>Have submitted shop orders today already!</p>
    </div>
  </modal-box>
  <modal-box
    v-model="isModalDangerActive"
    large-title="Place Order"
    button="danger"
  >
    <div v-if="(this.total > 0) & (orderedAlready == false)">
      <p>
        <b>Total: ${{ parseFloat(this.total).toFixed(2) }}</b>
      </p>
      <field label="Name">
        <control placeholder="Your Name" id="name" />
      </field>
      <field label="Room">
        <control placeholder="Your Room Number" id="room" />
      </field>
      <field label="PaymentMethod">
        <control
          placeholder="--Choose Below--"
          :options="paymentMethods"
          id="paymentMethod"
        />
      </field>
      <jb-buttons>
        <jb-button color="info" label="Submit Order" @click="savetofs()" />
      </jb-buttons>
    </div>
    <div v-if="(this.total == 0) & (orderedAlready == false)">
      <p>
        <b>No items ordered yet!</b>
      </p>
    </div>
    <div v-if="orderedAlready == true">
      <p>
        <b>Have submitted shop orders today already!</b>
      </p>
    </div>
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
      <br />
    </div>
    <Mains
      @update_ramyun="Newramyun($event)"
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
      @remove_ramyun="Newramyun($event)"
      @remove_bento="Newbento($event)"
      @remove_nuggets="Newnuggets($event)"
      @remove_lagsana="Newlagsana($event)"
      @remove_lemak="Newlemak($event)"
      @remove_prata="Newprata($event)"
      @remove_butter="Newbutter($event)"
      @remove_penang="Newpenang($event)"
      @remove_dimsum="Newdimsum($event)"
      @remove_sushi="Newsushi($event)"
      @remove_fried="Newfried($event)"
      @remove_mamuang="Newmamuang($event)"
      v-show="currentSection === 1"
    />
    <Snacks
      @update_puff="Newpuff($event)"
      @update_sandwich="Newsandwich($event)"
      @update_onigiri="Newonigiri($event)"
      @update_corndog="Newcorndog($event)"
      @update_chips="Newchips($event)"
      @update_haagen="Newhaagen($event)"
      @update_truffle="Newtruffle($event)"
      @update_brownie="Newbrownie($event)"
      @update_macarons="Newmacarons($event)"
      @update_cake="Newcake($event)"
      @update_tutu="Newtutu($event)"
      @update_rice="Newrice($event)"
      @remove_puff="Newpuff($event)"
      @remove_sandwich="Newsandwich($event)"
      @remove_onigiri="Newonigiri($event)"
      @remove_corndog="Newcorndog($event)"
      @remove_chips="Newchips($event)"
      @remove_haagen="Newhaagen($event)"
      @remove_truffle="Newtruffle($event)"
      @remove_brownie="Newbrownie($event)"
      @remove_macarons="Newmacarons($event)"
      @remove_cake="Newcake($event)"
      @remove_tutu="Newtutu($event)"
      @remove_rice="Newrice($event)"
      v-show="currentSection === 2"
    />
    <Drinks
      @update_tarik="Newtarik($event)"
      @update_cola="Newcola($event)"
      @update_soya="Newsoya($event)"
      @update_beer="Newbeer($event)"
      @update_sling="Newsling($event)"
      @update_milktea="Newmilktea($event)"
      @update_lasi="Newlasi($event)"
      @update_coconut="Newcoconut($event)"
      @update_oreo="Neworeo($event)"
      @update_latte="Newlatte($event)"
      @update_coffee="Newcoffee($event)"
      @update_milo="Newmilo($event)"
      v-show="currentSection === 3"
    />
    <Supplies v-show="currentSection === 4" />
  </div>

  <div class="shopcart" align="right">
    <button
      class="view"
      type="button"
      data-toggle="modal"
      data-target="#cart"
      @click="(isModalActive = true), totalCost()"
    >
      View my Cart
    </button>
    &nbsp;
    <button
      class="clear-cart btn btn-danger"
      @click="(isModalDangerActive = true), totalCost()"
    >
      Order Now
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import moment from "moment";
import Mains from "./Mains";
import Snacks from "./Snacks";
import Drinks from "./Drinks";
import Supplies from "./Supplies";
import ModalBox from "../../plugins/ModalBox";
import Field from "../../plugins/Field";
import Control from "../../plugins/Control";
import JbButton from "../../plugins/JbButton";
import JbButtons from "../../plugins/JbButtons";

import firebaseApp from "../../../firebase.js";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  components: {
    Mains,
    Snacks,
    Drinks,
    Supplies,
    ModalBox,
    Field,
    Control,
    JbButton,
    JbButtons,
  },

  data() {
    return {
      currentSection: 1,
    };
  },
  methods: {
    async savetofs() {
      if (this.orderedAlready == false) {
        try {
          var name = document.getElementById("name").value;
          var room = document.getElementById("room").value;
          var paymentMethod = document.getElementById("paymentMethod").value;
          const docRef = await setDoc(doc(db, "ShopOrder", room), {
            Name: name,
            Room: room,
            ItemsOrdered: this.generateOrder(),
            PaymentAmount: parseFloat(this.total).toFixed(2),
            PaymentMethod: paymentMethod,
            OrderStatus: "Order Received",
            TimeOfPayment: moment(String(new Date())).format("MM/DD/YYYY"),
          });
          console.log(docRef);
          this.orderedAlready = true;
          this.clearAll();
          this.$emit("added");
        } finally {
          alert("Orders submitted successfully.");
        }
      }
    },

    changeShopSection(id) {
      this.currentSection = id;
      console.log(this.total);
      // console.log(this.ramyun)
      // console.log(this.bento)
      // console.log(this.nuggets)
    },
    // Main
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
    // Snacks
    Newpuff(e) {
      this.puff = e;
    },
    Newsandwich(e) {
      this.sandwich = e;
    },
    Newonigiri(e) {
      this.onigiri = e;
    },
    Newcorndog(e) {
      this.corndog = e;
    },
    Newchips(e) {
      this.chips = e;
    },
    Newhaagen(e) {
      this.haagen = e;
    },
    Newtruffle(e) {
      this.truffle = e;
    },
    Newbrownie(e) {
      this.brownie = e;
    },
    Newmacarons(e) {
      this.macarons = e;
    },
    Newcake(e) {
      this.cake = e;
    },
    Newtutu(e) {
      this.tutu = e;
    },
    Newrice(e) {
      this.rice = e;
    },
    // Drinks
    Newtarik(e) {
      this.tarik = e;
    },
    Newcola(e) {
      this.cola = e;
    },
    Newsoya(e) {
      this.soya = e;
    },
    Newbeer(e) {
      this.beer = e;
    },
    Newsling(e) {
      this.sling = e;
    },
    Newmilktea(e) {
      this.milktea = e;
    },
    Newlasi(e) {
      this.lasi = e;
    },
    Newcoconut(e) {
      this.coconut = e;
    },
    Neworeo(e) {
      this.oreo = e;
    },
    Newlatte(e) {
      this.latte = e;
    },
    Newcoffee(e) {
      this.coffee = e;
    },
    Newmilo(e) {
      this.milo = e;
    },
    // total cost
    totalCost() {
      this.total =
        this.ramyun * 3.0 +
        this.bento * 7.0 +
        this.nuggets * 5.5 +
        this.lagsana * 8.0 +
        this.lemak * 6.0 +
        this.prata * 4.0 +
        this.butter * 15.0 +
        this.penang * 7.0 +
        this.dimsum * 15.0 +
        this.sushi * 18.0 +
        this.fried * 18.0 +
        this.mamuang * 5.0 +
        this.puff * 2.0 +
        this.sandwich * 4.0 +
        this.onigiri * 3.5 +
        this.corndog * 3.0 +
        this.chips * 2.0 +
        this.haagen * 4.0 +
        this.truffle * 5.0 +
        this.brownie * 4.0 +
        this.macarons * 3.0 +
        this.cake * 6.0 +
        this.tutu * 5.0 +
        this.rice * 6.0 +
        this.tarik * 3.0 +
        this.cola * 5.0 +
        this.soya * 3.5 +
        this.beer * 8.0 +
        this.sling * 10 +
        this.milktea * 5.0 +
        this.lasi * 5.0 +
        this.coconut * 8.0 +
        this.oreo * 8.0 +
        this.latte * 7.0 +
        this.coffee * 6.0 +
        this.milo * 5.0;
    },
    // clear all
    clearAll() {
      // Main
      this.ramyun = 0;
      this.bento = 0;
      this.nuggets = 0;
      this.lagsana = 0;
      this.lemak = 0;
      this.prata = 0;
      this.butter = 0;
      this.penang = 0;
      this.dimsum = 0;
      this.sushi = 0;
      this.fried = 0;
      this.mamuang = 0;
      // Snacks
      this.puff = 0;
      this.sandwich = 0;
      this.onigiri = 0;
      this.corndog = 0;
      this.chips = 0;
      this.haagen = 0;
      this.truffle = 0;
      this.brownie = 0;
      this.macarons = 0;
      this.cake = 0;
      this.tutu = 0;
      this.rice = 0;
      // Drinks
      this.tarik = 0;
      this.cola = 0;
      this.soya = 0;
      this.beer = 0;
      this.sling = 0;
      this.milktea = 0;
      this.lasi = 0;
      this.coconut = 0;
      this.oreo = 0;
      this.latte = 0;
      this.coffee = 0;
      this.milo = 0;
    },
    //generate order
    generateOrder() {
      // Main
      if (this.ramyun > 0) {
        this.orderItems += "Ramyun: " + String(this.ramyun) + ", ";
      }
      if (this.bento > 0) {
        this.orderItems += "Bento: " + String(this.bento) + ", ";
      }
      if (this.nuggets > 0) {
        this.orderItems += "Nuggets: " + String(this.nuggets) + ", ";
      }
      if (this.lagsana > 0) {
        this.orderItems += "Lagsana: " + String(this.lagsana) + ", ";
      }
      if (this.lemak > 0) {
        this.orderItems += "Lemak: " + String(this.lemak) + ", ";
      }
      if (this.prata > 0) {
        this.orderItems += "Prata: " + String(this.prata) + ", ";
      }
      if (this.butter > 0) {
        this.orderItems += "Butter Chicken: " + String(this.butter) + ", ";
      }
      if (this.penang > 0) {
        this.orderItems += "Penang: " + String(this.penang) + ", ";
      }
      if (this.dimsum > 0) {
        this.orderItems += "Dim Sum: " + String(this.dimsum) + ", ";
      }
      if (this.sushi > 0) {
        this.orderItems += "Sushi: " + String(this.sushi) + ", ";
      }
      if (this.fried > 0) {
        this.orderItems += "Fried Chicken: " + String(this.fried) + ", ";
      }
      if (this.mamuang > 0) {
        this.orderItems += "Mamuang: " + String(this.mamuang) + ", ";
      }
      // Snacks
      if (this.puff > 0) {
        this.orderItems += "Puff: " + String(this.puff) + ", ";
      }
      if (this.sandwich > 0) {
        this.orderItems += "Sandwich: " + String(this.sandwich) + ", ";
      }
      if (this.onigiri > 0) {
        this.orderItems += "Tuna Onigiri: " + String(this.onigiri) + ", ";
      }
      if (this.corndog > 0) {
        this.orderItems += "Corn Dog: " + String(this.corndog) + ", ";
      }
      if (this.chips > 0) {
        this.orderItems += "Chips: " + String(this.chips) + ", ";
      }
      if (this.haagen > 0) {
        this.orderItems += "Haggen Cup: " + String(this.haagen) + ", ";
      }
      if (this.truffle > 0) {
        this.orderItems += "Truffle Fries: " + String(this.truffle) + ", ";
      }
      if (this.brownie > 0) {
        this.orderItems += "Brownie: " + String(this.brownie) + ", ";
      }
      if (this.macarons > 0) {
        this.orderItems += "Macarons: " + String(this.macarons) + ", ";
      }
      if (this.cake > 0) {
        this.orderItems += "Cake: " + String(this.cake) + ", ";
      }
      if (this.tutu > 0) {
        this.orderItems += "Tutu Kueh: " + String(this.tutu) + ", ";
      }
      if (this.rice > 0) {
        this.orderItems += "Mango Rice: " + String(this.rice) + ", ";
      }
      // Drinks
      if (this.tarik > 0) {
        this.orderItems += "Tarik: " + String(this.tarik) + ", ";
      }
      if (this.cola > 0) {
        this.orderItems += "Cola: " + String(this.cola) + ", ";
      }
      if (this.soya > 0) {
        this.orderItems += "Soya Milk: " + String(this.soya) + ", ";
      }
      if (this.beer > 0) {
        this.orderItems += "Beer: " + String(this.beer) + ", ";
      }
      if (this.sling > 0) {
        this.orderItems += "Sling: " + String(this.sling) + ", ";
      }
      if (this.milktea > 0) {
        this.orderItems += "Milktea: " + String(this.milktea) + ", ";
      }
      if (this.lasi > 0) {
        this.orderItems += "Mango Lasi: " + String(this.lasi) + ", ";
      }
      if (this.coconut > 0) {
        this.orderItems += "Coconut Shake: " + String(this.coconut) + ", ";
      }
      if (this.oreo > 0) {
        this.orderItems += "Oreo Milkshake: " + String(this.oreo) + ", ";
      }
      if (this.latte > 0) {
        this.orderItems += "Matcha Latte: " + String(this.latte) + ", ";
      }
      if (this.coffee > 0) {
        this.orderItems += "Coffee: " + String(this.coffee) + ", ";
      }
      if (this.milo > 0) {
        this.orderItems += "Milo: " + String(this.milo) + ", ";
      }
      return this.orderItems;
    },
  },
  setup() {
    const isModalActive = ref(false);
    const isModalDangerActive = ref(false);
    const orderedAlready = ref(false);
    const paymentMethods = [
      "VISA",
      "Mastercard",
      "American Express",
      "Alipay/Wechat",
      "Cash",
    ];
    // Main
    var ramyun = 0;
    var bento = 0;
    var nuggets = 0;
    var lagsana = 0;
    var lemak = 0;
    var prata = 0;
    var butter = 0;
    var penang = 0;
    var dimsum = 0;
    var sushi = 0;
    var fried = 0;
    var mamuang = 0;
    // Snacks
    var puff = 0;
    var sandwich = 0;
    var onigiri = 0;
    var corndog = 0;
    var chips = 0;
    var haagen = 0;
    var truffle = 0;
    var brownie = 0;
    var macarons = 0;
    var cake = 0;
    var tutu = 0;
    var rice = 0;
    // Drinks
    var tarik = 0;
    var cola = 0;
    var soya = 0;
    var beer = 0;
    var sling = 0;
    var milktea = 0;
    var lasi = 0;
    var coconut = 0;
    var oreo = 0;
    var latte = 0;
    var coffee = 0;
    var milo = 0;

    var total = 0;
    var orderItems = "";
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
      puff,
      sandwich,
      onigiri,
      corndog,
      chips,
      haagen,
      truffle,
      brownie,
      macarons,
      cake,
      tutu,
      rice,
      tarik,
      cola,
      soya,
      beer,
      sling,
      milktea,
      lasi,
      coconut,
      oreo,
      latte,
      coffee,
      milo,
      isModalActive,
      total,
      orderedAlready,
      isModalDangerActive,
      paymentMethods,
      orderItems,
    };
  },
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
