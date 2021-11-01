<template>
  <modal-box v-model="isModalActive" title="Modify">
    <p>Check the <b>Order Details</b> / Handle the <b>Order</b></p>
  </modal-box>

  <table id='table'>
    <thead>
      <tr>
        <th>Guest Name</th>
        <th>Room</th>
        <th>Items Ordered</th>
        <th>Payment Amount</th>
        <th>Payment Method</th>
        <th>Order Status</th>
        <th>Time of Payment</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td data-label="Guest Name">Howell Hand</td>
        <td data-label="Room">0221</td>
        <td data-label="Items Ordered">Instant Noodles: 1, Biscuits: 2</td>
        <td data-label="Payment Amount">8.00</td>
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
    </tbody>
  </table>
</template>

<script>
import { ref } from "vue";
import { mdiPencilOutline } from "@mdi/js";
import JbButtons from "../../plugins/JbButtons";
import JbButton from "../../plugins/JbButton";
import ModalBox from "../../plugins/ModalBox";

import firebaseApp from "../../../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: "PaymentHistory",

  components: {
    JbButtons,
    JbButton,
    ModalBox,
  },

  mounted() {
    async function display() {
      let z = await getDocs(collection(db, "RoomOrder"));
      let ind = 1;

      z.forEach((docs) => {
        let yy = docs.data();
        var table = document.getElementById("table");
        var row = table.insertRow(ind);

        var name = yy.Name;
        var room = yy.Room;
        var itemsOrdered = yy.ItemsOrdered;
        var paymentAmount = yy.PaymentAmount;
        var paymentMethod = yy.PaymentMethod;
        var orderStatus = yy.OrderStatus;
        var timeOfPayment = yy.TimeOfPayment;

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);

        cell1.innerHTML = name;
        cell2.innerHTML = room;
        cell3.innerHTML = itemsOrdered;
        cell4.innerHTML = paymentAmount;
        cell5.innerHTML = paymentMethod;
        cell6.innerHTML = orderStatus;
        cell7.innerHTML = timeOfPayment;
        
        cell8.appendChild(JbButton);

      });
    }
    display();
  },

  setup() {
    const isModalActive = ref(false);

    return {
      mdiPencilOutline,
      isModalActive,
    };
  },
};
</script>

<style scoped></style>
