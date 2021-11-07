<template>
  <nav-bar />
  <aside-menu :menu="menu" />
  <title-bar :title-stack="titleStack" />
  <hero-bar v-if="zone === '1' || zone === '4'">Food Selection</hero-bar>
  <hero-bar v-else>Unauthorized - Please contact web administrator.</hero-bar>
  <main-section v-if="zone === '1' || zone === '4'">
    <!-- <notification color="info" :icon="mdiMonitorCellphone">
      <b>Responsive table.</b> Collapses on mobile
    </notification> -->

    <!-- <modal-box v-model="isModalActive1" title="Modify">
      <p>You are going to update the <b>order status</b> for <b>Breakfast</b>!</p>
    </modal-box>

    <modal-box v-model="isModalActive2" title="Modify">
      <p>You are going to update the <b>order status</b> for <b>Lunch</b>!</p>
    </modal-box>

    <modal-box v-model="isModalActive3" title="Modify">
      <p>You are going to update the <b>order status</b> for <b>Dinner</b>!</p>
    </modal-box> -->

    <card-component
      class="mb-6"
      title="Breakfast"
      :icon="mdiAccountMultiple"
      has-table
    >
      <!-- <food-selection-table checkable /> -->
      <table id="breakfast">
        <thead>
          <tr>
            <th>Guest Name</th>
            <th>Room</th>
            <th>Food Selection</th>
            <th>Special Request</th>
            <th>Order Status</th>
            <th>Order Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="guest in itemsPaginatedBreakfast" :key="guest.room">
            <td data-label="Guest Name">{{guest.name}}</td>
            <td data-label="Room">{{guest.room}}</td>
            <td data-label="Food Selection">{{guest.selection}}</td>
            <td data-label="Special Request">{{guest.request}}</td>
            <td data-label="Order Status">{{guest.status}}</td>
            <td data-label="Order Date">{{guest.date}}</td>
            <td class="actions-cell">
              <jb-buttons type="justify-start lg:justify-end" no-wrap>
                <jb-button class="mr-3" color="success" :icon="mdiCheckCircleOutline" small @click="isModalActive1 = true, doneBreakfast(guest.room)" />
              </jb-buttons>
            </td>
          </tr>
        </tbody>
      </table>
    </card-component>

    <!-- <title-sub-bar :icon="mdiTableBorder" title="Wrapped variation"/> -->

    <!-- <notification color="success" :icon="mdiTableBorder">
      <b>Tightly wrapped</b> &mdash; table header becomes card header
    </notification> -->

    <card-component
      class="mb-6"
      title="Lunch"
      :icon="mdiAccountMultiple"
      has-table
    >
      <!-- <food-selection-table checkable /> -->
      <table id="lunch">
        <thead>
          <tr>
            <th>Guest Name</th>
            <th>Room</th>
            <th>Food Selection</th>
            <th>Special Request</th>
            <th>Order Status</th>
            <th>Order Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="guest in itemsPaginatedLunch" :key="guest.room">
            <td data-label="Guest Name">{{guest.name}}</td>
            <td data-label="Room">{{guest.room}}</td>
            <td data-label="Food Selection">{{guest.selection}}</td>
            <td data-label="Special Request">{{guest.request}}</td>
            <td data-label="Order Status">{{guest.status}}</td>
            <td data-label="Order Date">{{guest.date}}</td>
            <td class="actions-cell">
              <jb-buttons type="justify-start lg:justify-end" no-wrap>
                <jb-button class="mr-3" color="success" :icon="mdiCheckCircleOutline" small @click="isModalActive2 = true, doneLunch(guest.room)" />
              </jb-buttons>
            </td>
          </tr>
        </tbody>
      </table>
    </card-component>

    <!-- <title-sub-bar :icon="mdiTableOff" title="Empty variation"/> -->

    <!-- <notification color="danger" :icon="mdiTableOff">
      <b>Empty table.</b> When there's nothing to show
    </notification> -->

    <!-- <card-component empty/> -->
    <card-component
      class="mb-6"
      title="Dinner"
      :icon="mdiAccountMultiple"
      has-table
    >
      <!-- <food-selection-table checkable /> -->
      <table id="dinner">
        <thead>
          <tr>
            <th>Guest Name</th>
            <th>Room</th>
            <th>Food Selection</th>
            <th>Special Request</th>
            <th>Order Status</th>
            <th>Order Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="guest in itemsPaginatedDinner" :key="guest.room">
            <td data-label="Guest Name">{{guest.name}}</td>
            <td data-label="Room">{{guest.room}}</td>
            <td data-label="Food Selection">{{guest.selection}}</td>
            <td data-label="Special Request">{{guest.request}}</td>
            <td data-label="Order Status">{{guest.status}}</td>
            <td data-label="Order Date">{{guest.date}}</td>
            <td class="actions-cell">
              <jb-buttons type="justify-start lg:justify-end" no-wrap>
                <jb-button class="mr-3" color="success" :icon="mdiCheckCircleOutline" small @click="isModalActive3 = true, doneDinner(guest.room)" />
              </jb-buttons>
            </td>
          </tr>
        </tbody>
      </table>
    </card-component>

    <card-component
      title="Upload Meal Information"
      :icon="mdiAccountCircle"
      @submit.prevent="submitFoodInfo"
      form
    >
      <field label="Dropdown">
        <control :options="selectOptions" v-model="form.meals" />
      </field>

      <field label="Food Picture" help="Max 500kb">
        <file-picker />
      </field>

      <field label="Food Title" help="Required. Food Name">
        <control :icon="mdiAccount" name="foodn" />
      </field>

      <field label="Description" help="Dishes and Ingredients">
        <control :icon="mdiMail" type="description" name="description" />
      </field>

      <divider />

      <jb-buttons>
        <jb-button color="info" type="submit" label="Submit" />
        <jb-button color="info" label="Options" outline />
      </jb-buttons>
    </card-component>
  </main-section>
  <footer-bar v-if="zone === '1' || zone === '4'" />
  <overlay
    v-show="isAsideLgActive"
    z-index="z-30"
    @overlay-click="overlayClick"
  />
</template>

<script>
import { computed, reactive,  ref } from 'vue'
import { useStore } from 'vuex'
import {
  mdiAccount,
  mdiMonitorCellphone,
  mdiAccountCircle,
  mdiAccountMultiple,
  mdiMail,
  mdiTableBorder,
  mdiTableOff,
  mdiCheckCircleOutline,
} from "@mdi/js";
import MainSection from "../../components/plugins/MainSection";
//import Notification from '../../components/plugins/Notification'
//import FoodSelectionTable from "../../components/plugins/FoodSelectionTable";
import CardComponent from "../../components/plugins/CardComponent";
// import ModalBox from "../../components/plugins/ModalBox"
import TitleBar from "../../components/plugins/TitleBar";
import HeroBar from "../../components/plugins/HeroBar";
//import TitleSubBar from '../../components/plugins/TitleSubBar'
import menu from "../../../src/views/admin/menu.js";
import NavBar from "../../../src/components/plugins/NavBar";
import AsideMenu from "../../../src/components/plugins/AsideMenu";
import FooterBar from "../../../src/components/plugins/FooterBar";
import Overlay from "../../../src/components/plugins/Overlay";

import Divider from "../../components/plugins/Divider";
import Field from "../../components/plugins/Field";
import Control from "../../components/plugins/Control";
import FilePicker from "../../components/plugins/FilePicker";
import JbButton from "../../components/plugins/JbButton";
import JbButtons from "../../components/plugins/JbButtons";
import localsession from "../../store/localsession";
import connector from "../../connector"

// import firebaseApp from "../../firebase.js";
// import { getFirestore } from "firebase/firestore";
// import {
//   collection,
//   getDocs,
//   doc,
//   deleteDoc,
//   updateDoc,
// } from "firebase/firestore";
// const db = getFirestore(firebaseApp);

export default {
  name: "Tables",
  components: {
    //TitleSubBar,
    MainSection,
    HeroBar,
    TitleBar,
    CardComponent,
    //FoodSelectionTable,
    //Notification,
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar,
    Divider,
    Field,
    Control,
    JbButton,
    JbButtons,
    FilePicker,
    // ModalBox
  },
  // mounted() {
  //   async function display() {
  //     let z = await getDocs(collection(db, "Breakfast"));
  //     let ind = 1;

  //     z.forEach((docs) => {
  //       let yy = docs.data();
  //       var table = document.getElementById("breakfast");
  //       var row = table.insertRow(ind);

  //       var name = yy.Name;
  //       var room = yy.Room;
  //       var selection = yy.Selection;
  //       var request = yy.Request;
  //       var status = yy.OrderStatus;
  //       var date = yy.OrderDate;

  //       var cell1 = row.insertCell(0);
  //       var cell2 = row.insertCell(1);
  //       var cell3 = row.insertCell(2);
  //       var cell4 = row.insertCell(3);
  //       var cell5 = row.insertCell(4);
  //       var cell6 = row.insertCell(5);
  //       var cell7 = row.insertCell(6);
  //       var cell8 = row.insertCell(7);

  //       cell1.innerHTML = name;
  //       cell2.innerHTML = room;
  //       cell3.innerHTML = selection;
  //       cell4.innerHTML = request;
  //       cell5.innerHTML = status;
  //       cell6.innerHTML = date;

  //       var bu = document.createElement("button");
  //       bu.className = "bwt";
  //       bu.id = String(room);
  //       bu.innerHTML = "Delete";
  //       bu.onclick = function() {
  //         deleteinstrument_b(room);
  //       };
  //       cell7.appendChild(bu);
  //       // update order status

  //       var bu2 = document.createElement("button");
  //       bu2.className = "bwt";
  //       bu2.id = String(room);
  //       bu2.innerHTML = "Done";
  //       bu2.onclick = function() {
  //         updateinstrument_b(room);
  //       };
  //       cell8.appendChild(bu2);
  //     });
  //   }
  //   async function display2() {
  //     let y = await getDocs(collection(db, "Lunch"));
  //     let inc = 1;

  //     y.forEach((docs) => {
  //       let yy = docs.data();
  //       var table = document.getElementById("lunch");
  //       var row = table.insertRow(inc);

  //       var name = yy.Name;
  //       var room = yy.Room;
  //       var selection = yy.Selection;
  //       var request = yy.Request;
  //       var status = yy.OrderStatus;
  //       var date = yy.OrderDate;

  //       var cell1 = row.insertCell(0);
  //       var cell2 = row.insertCell(1);
  //       var cell3 = row.insertCell(2);
  //       var cell4 = row.insertCell(3);
  //       var cell5 = row.insertCell(4);
  //       var cell6 = row.insertCell(5);
  //       var cell7 = row.insertCell(6);
  //       var cell8 = row.insertCell(7);

  //       cell1.innerHTML = name;
  //       cell2.innerHTML = room;
  //       cell3.innerHTML = selection;
  //       cell4.innerHTML = request;
  //       cell5.innerHTML = status;
  //       cell6.innerHTML = date;

  //       var bu = document.createElement("button");
  //       bu.className = "bwt";
  //       bu.id = String(room);
  //       bu.innerHTML = "Delete";
  //       bu.onclick = function() {
  //         deleteinstrument_l(room);
  //       };
  //       cell7.appendChild(bu);
  //       // update order status

  //       var bu2 = document.createElement("button");
  //       bu2.className = "bwt";
  //       bu2.id = String(room);
  //       bu2.innerHTML = "Done";
  //       bu2.onclick = function() {
  //         updateinstrument_l(room);
  //       };
  //       cell8.appendChild(bu2);
  //     });
  //   }

  //   async function display3() {
  //     let x = await getDocs(collection(db, "Dinner"));
  //     let inb = 1;

  //     x.forEach((docs) => {
  //       let yy = docs.data();
  //       var table = document.getElementById("dinner");
  //       var row = table.insertRow(inb);

  //       var name = yy.Name;
  //       var room = yy.Room;
  //       var selection = yy.Selection;
  //       var request = yy.Request;
  //       var status = yy.OrderStatus;
  //       var date = yy.OrderDate;

  //       var cell1 = row.insertCell(0);
  //       var cell2 = row.insertCell(1);
  //       var cell3 = row.insertCell(2);
  //       var cell4 = row.insertCell(3);
  //       var cell5 = row.insertCell(4);
  //       var cell6 = row.insertCell(5);
  //       var cell7 = row.insertCell(6);
  //       var cell8 = row.insertCell(7);

  //       cell1.innerHTML = name;
  //       cell2.innerHTML = room;
  //       cell3.innerHTML = selection;
  //       cell4.innerHTML = request;
  //       cell5.innerHTML = status;
  //       cell6.innerHTML = date;

  //       var bu = document.createElement("button");
  //       bu.className = "bwt";
  //       bu.id = String(room);
  //       bu.innerHTML = "Delete";
  //       bu.onclick = function() {
  //         deleteinstrument_d(room);
  //       };
  //       cell7.appendChild(bu);
  //       // update order status

  //       var bu2 = document.createElement("button");
  //       bu2.className = "bwt";
  //       bu2.id = String(room);
  //       bu2.innerHTML = "Done";
  //       bu2.onclick = function() {
  //         updateinstrument_d(room);
  //       };
  //       cell8.appendChild(bu2);
  //     });
  //   }

  //   async function deleteinstrument_b(room) {
  //     var x = room;
  //     alert("You are going to delete " + x);
  //     await deleteDoc(doc(db, "Breakfast", x));
  //     console.log("Document successfully deleted!", x);
  //     let tb = document.getElementById("breakfast");
  //     while (tb.rows.length > 1) {
  //       tb.deleteRow(1);
  //     }
  //     display();
  //   }
  //   async function updateinstrument_b(room) {
  //     var x = room;
  //     alert("You are going to update the order status of Room " + x);
  //     await updateDoc(doc(db, "Breakfast", x), {
  //       OrderStatus: "Order Delivered",
  //     });
  //     console.log("Document successfully updated!", x);
  //     let tb = document.getElementById("breakfast");
  //     while (tb.rows.length > 1) {
  //       tb.deleteRow(1);
  //     }
  //     display();
  //   }

  //   async function deleteinstrument_l(room) {
  //     var x = room;
  //     alert("You are going to delete " + x);
  //     await deleteDoc(doc(db, "Lunch", x));
  //     console.log("Document successfully deleted!", x);
  //     let tb = document.getElementById("lunch");
  //     while (tb.rows.length > 1) {
  //       tb.deleteRow(1);
  //     }
  //     display2();
  //   }
  //   async function updateinstrument_l(room) {
  //     var x = room;
  //     alert("You are going to update the order status of Room " + x);
  //     await updateDoc(doc(db, "Lunch", x), { OrderStatus: "Order Delivered" });
  //     console.log("Document successfully updated!", x);
  //     let tb = document.getElementById("lunch");
  //     while (tb.rows.length > 1) {
  //       tb.deleteRow(1);
  //     }
  //     display2();
  //   }

  //   async function deleteinstrument_d(room) {
  //     var x = room;
  //     alert("You are going to delete " + x);
  //     await deleteDoc(doc(db, "Dinner", x));
  //     console.log("Document successfully deleted!", x);
  //     let tb = document.getElementById("dinner");
  //     while (tb.rows.length > 1) {
  //       tb.deleteRow(1);
  //     }
  //     display3();
  //   }
  //   async function updateinstrument_d(room) {
  //     var x = room;
  //     alert("You are going to update the order status of Room " + x);
  //     await updateDoc(doc(db, "Dinner", x), { OrderStatus: "Order Delivered" });
  //     console.log("Document successfully updated!", x);
  //     let tb = document.getElementById("dinner");
  //     while (tb.rows.length > 1) {
  //       tb.deleteRow(1);
  //     }
  //     display3();
  //   }

  //   display();
  //   display2();
  //   display3();
  // },

  setup() {
    const store = useStore();

    const titleStack = ref(["Admin", "Foods"]);

    const zone = localsession.methods.getAdminZone();

    const FoodInfo = reactive({
      food: store.state.food,
      description: store.state.description,
    });

    const submitFoodInfo = () => {
      store.commit("user", FoodInfo);
    };

    const selectOptions = [
      { id: 1, label: "Breakfast" },
      { id: 2, label: "Lunch" },
      { id: 3, label: "Dinner" },
    ];

    const form = reactive({
      meals: selectOptions[0],
    });

    const darkMode = computed(() => store.state.darkMode)

    const breakfast = computed(() => store.state.breakfastRoster)

    const lunch = computed(() => store.state.lunchRoster)

    const dinner = computed(() => store.state.dinnerRoster)

    const perPage = ref(10)

    const currentPage = ref(0)

    // const checkedRows = ref([])

    const itemsPaginatedBreakfast = computed(
      () => breakfast.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
    )

    const itemsPaginatedLunch = computed(
      () => lunch.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
    )

    const itemsPaginatedDinner = computed(
      () => dinner.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
    )

    return {
      titleStack,
      zone,
      mdiAccount,
      mdiMonitorCellphone,
      mdiAccountCircle,
      mdiAccountMultiple,
      mdiMail,
      mdiTableBorder,
      mdiTableOff,
      menu,
      FoodInfo,
      submitFoodInfo,
      form,
      selectOptions,
      mdiCheckCircleOutline,
      itemsPaginatedBreakfast,
      itemsPaginatedLunch,
      itemsPaginatedDinner,
      darkMode
    };
  },

  async created() {
    const store = useStore()
    let meta1 = await connector.methods.getBreakfast().then(x => x)
    let meta2 = await connector.methods.getLunch().then(x => x)
    let meta3 = await connector.methods.getDinner().then(x => x)
    store.commit('alterBreakfastRoster' , meta1)
    store.commit('alterLunchRoster' , meta2)
    store.commit('alterDinnerRoster' , meta3)
  },

  methods: {
    async doneBreakfast(roomNo) {
      await connector.methods.completeBreakfast(roomNo)
      let meta = await connector.methods.getBreakfast().then(x => x)
      this.$store.commit('alterBreakfastRoster', meta);
    },

    async doneLunch(roomNo) {
      await connector.methods.completeLunch(roomNo)
      let meta = await connector.methods.getLunch().then(x => x)
      this.$store.commit('alterLunchRoster' , meta);
    },

    async doneDinner(roomNo) {
      await connector.methods.completeDinner(roomNo)
      let meta = await connector.methods.getDinner().then(x => x)
      this.$store.commit('alterDinnerRoster', meta);
    }
  },

};
</script>

<style>
body {
  @apply pt-14 xl:pl-60;
}
</style>
