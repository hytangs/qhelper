<template>
  <modal-box v-model="isModalActive" title="Modify">
    <p>You are going to update the <b>order status</b>!</p>
  </modal-box>

  <table id='shop orders'>
    <thead>
      <tr>
        <th>Guest Name</th>
        <th>Room</th>
        <th>Items Ordered</th>
        <th>Payment Amount</th>
        <th>Delivery Method</th>
        <th>Order Status</th>
        <th>Time of Order</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="guest in itemsPaginated" :key="guest.room">
        <td data-label="Guest Name">{{guest.name}}</td>
        <td data-label="Room">{{guest.room}}</td>
        <td data-label="Items Ordered">{{guest.order}}</td>
        <td data-label="Payment Amount">{{guest.amount}}</td>
        <td data-label="Delivery Methods">{{guest.delivery}}</td>
        <td data-label="Order Status">{{guest.status}}</td>
        <td data-label="Time of Payment">{{guest.time}}</td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="success" :icon="mdiCheckCircleOutline" small @click="isModalActive = true, done(guest.room)" />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
      <!-- <tr>
        <td data-label="Guest Name">Hope Howe</td>
        <td data-label="Room">0223</td>
        <td data-label="Items Ordered">Chocolate Bar: 2, Milk: 1</td>
        <td data-label="Payment Amount">10.50</td>
        <td data-label="Payment Method">Mastercard</td>
        <td data-label="Order Status">Order Received</td>
        <td data-label="Time of Payment">Mar 3, 2021</td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button
              class="mr-3"
              color="light"
              :icon="mdiPencilOutline"
              small
              @click="isModalActive = true"
            />
          </jb-buttons>
        </td>
      </tr>
      <tr>
        <td data-label="Guest Name">Nelson Jerde</td>
        <td data-label="Room">0225</td>
        <td data-label="Items Ordered">Bread: 2, Apple: 2</td>
        <td data-label="Payment Amount">4.80</td>
        <td data-label="Payment Method">Mastercard</td>
        <td data-label="Order Status">Order Received</td>
        <td data-label="Time of Payment">Mar 3, 2021</td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button
              class="mr-3"
              color="light"
              :icon="mdiPencilOutline"
              small
              @click="isModalActive = true"
            />
          </jb-buttons>
        </td>
      </tr>
    </tbody> -->
  </table>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { mdiCheckCircleOutline } from "@mdi/js";
import JbButtons from "../../plugins/JbButtons";
import JbButton from "../../plugins/JbButton";
import ModalBox from "../../plugins/ModalBox";
import connector from "../../../connector"

// import firebaseApp from "../../../firebase.js";
// import { getFirestore } from "firebase/firestore";
// import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
// const db = getFirestore(firebaseApp);

export default {
  name: "PaymentHistory",

  components: {
    JbButtons,
    JbButton,
    ModalBox,
  },

  // mounted() {
  //   async function display() {
  //     let z = await getDocs(collection(db, "ShopOrder"));
  //     let ind = 1;

  //     z.forEach((docs) => {
  //       console.log(docs)
  //       let yy = docs.data();
  //       var table = document.getElementById("shop orders");
  //       var row = table.insertRow(ind);

  //       var name = yy.Name;
  //       var room = yy.Room;
  //       var itemsOrdered = yy.ItemsOrdered;
  //       var paymentAmount = yy.PaymentAmount;
  //       var deliveryMethod = yy.DeliveryMethod;
  //       var orderStatus = yy.OrderStatus;
  //       var timeOfOrder = yy.TimeOfOrder;

  //       var cell1 = row.insertCell(0);
  //       var cell2 = row.insertCell(1);
  //       var cell3 = row.insertCell(2);
  //       var cell4 = row.insertCell(3);
  //       var cell5 = row.insertCell(4);
  //       var cell6 = row.insertCell(5);
  //       var cell7 = row.insertCell(6);
  //       var cell8 = row.insertCell(7);
  //       var cell9 = row.insertCell(8);

  //       cell1.innerHTML = name;
  //       cell2.innerHTML = room;
  //       cell3.innerHTML = itemsOrdered;
  //       cell4.innerHTML = paymentAmount;
  //       cell5.innerHTML = deliveryMethod;
  //       cell6.innerHTML = orderStatus;
  //       cell7.innerHTML = timeOfOrder;

  //       var bu = document.createElement("button");
  //       bu.className = "bwt";
  //       bu.id = String(room);
  //       bu.innerHTML = "Delete";
  //       bu.onclick = function() {
  //         deleteinstrument(room);
  //       };
  //       cell8.appendChild(bu);

  //       var bu2 = document.createElement("button");
  //       bu2.className = "bwt";
  //       bu2.id = String(room);
  //       bu2.innerHTML = "Done";
  //       bu2.onclick = function() {
  //         updateinstrument(room);
  //       };
  //       cell9.appendChild(bu2);

  //     });
  //   }
  //   display();
  //   async function deleteinstrument(room) {
  //     var x = room;
  //     alert("You are going to delete " + x);
  //     await deleteDoc(doc(db, "ShopOrder", x));
  //     console.log("Document successfully deleted!", x);
  //     let tb = document.getElementById("shop orders");
  //     while (tb.rows.length > 1) {
  //       tb.deleteRow(1);
  //     }
  //     display();
  //   }
  //   async function updateinstrument(room) {
  //     var x = room;
  //     alert("You are going to update the order status of Room " + x);
  //     await updateDoc(doc(db, "ShopOrder", x), {OrderStatus: "Order Delivered"})
  //     console.log("Document successfully updated!", x);
  //     let tb = document.getElementById("shop orders");
  //     while (tb.rows.length > 1) {
  //       tb.deleteRow(1);
  //     }
  //     display();
  //   }
  // },

  setup() {
    const isModalActive = ref(false);

    const store = useStore()

    const darkMode = computed(() => store.state.darkMode)

    const items = computed(() => store.state.shopOrderRoster)

    const perPage = ref(10)

    const currentPage = ref(0)

    // const checkedRows = ref([])

    const itemsPaginated = computed(
      () => items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
    )

    // const numPages = computed(() => Math.ceil(items.value.length / perPage.value))

    // const currentPageHuman = computed(() => currentPage.value + 1)

    // const pagesList = computed(() => {
    //   const pagesList = []

    //   for (let i = 0; i < numPages.value; i++) {
    //     pagesList.push(i)
    //   }

    //   return pagesList
    // })


    return {
      mdiCheckCircleOutline,
      isModalActive,
      darkMode,
      itemsPaginated
    };
  },

  async created() {
    const store = useStore()
    let meta = await connector.methods.getShopOrders().then(x => x)
    console.log(meta)
    store.commit('alterShopOrders' , meta)
  },

  methods: {
    async done(roomNo) {
      await connector.methods.completeShopOrder(roomNo)
      let meta = await connector.methods.getShopOrders().then(x => x)
      this.$store.commit('alterShopOrders', meta);
    }
  },

};
</script>

<style scoped></style>
