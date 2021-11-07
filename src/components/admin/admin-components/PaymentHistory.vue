<template>
<modal-box v-model="isModalActive" title="Modify">
  <p>Modify the <b>Payment Details</b></p>
</modal-box>

<table id = "payment">
    <thead>
      <tr>
        <th>Guest Name</th>
        <th>Room</th>
        <th>Payment Amount</th>
        <th>Payment Method</th>
        <!-- <th>Duration of Stay</th> -->
        <th>Checkout Date</th>
        <th>Time of Payment</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <!-- <tr>
        <td data-label="Guest Name"> Howell Hand </td>
        <td data-label="Room"> 0221 </td>
        <td data-label="Payment Amount"> 920 </td>
        <td data-label="Payment Method"> Mastercard </td>
        <td data-label="Duration of Stay"> 14 </td>
        <td data-label="Checkout Date"> Mar 3, 2021 </td>
        <td data-label="Time of Payment"> Mar 3, 2021 </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true" />
          </jb-buttons>
        </td>
      </tr>

      <tr>
        <td data-label="Guest Name"> Hope Howe </td>
        <td data-label="Room"> 0223 </td>
        <td data-label="Payment Amount"> 480 </td>
        <td data-label="Payment Method"> Mastercard </td>
        <td data-label="Duration of Stay"> 14 </td>
        <td data-label="Checkout Date"> Mar 5, 2021 </td>
        <td data-label="Time of Payment"> Mar 5, 2021 </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true" />
          </jb-buttons>
        </td>
      </tr> -->
    </tbody>
</table>
</template>

<script>
import { ref } from 'vue'
import { mdiPencilOutline } from '@mdi/js'
//import JbButtons from '../../plugins/JbButtons'
//import JbButton from '../../plugins/JbButton'
import ModalBox from '../../plugins/ModalBox'
import firebaseApp from "../../../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, deleteDoc} from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: "PaymentHistory",

  components: {
    //JbButtons,
    //JbButton,
    ModalBox
  },

  setup() {
    const isModalActive = ref(false)

    return {
      mdiPencilOutline, 
      isModalActive,
    }
  },

  mounted() {
    async function display() {
      let z = await getDocs(collection(db, "Payment"));
      let ind = 1;

      z.forEach((docs) => {
        let yy = docs.data();
        var table = document.getElementById("payment");
        var row = table.insertRow(ind);

        var name = yy.Name;
        var room = yy.Room;
        var paymentAmount = yy.PaymentAmount;
        var paymentMethod = yy.PaymentMethod;
        //var duration = yy.DurationOfStay;
        var checkout = yy.CheckoutDate;
        var timeOfPayment = yy.TimeOfPayment;

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        //var cell8 = row.insertCell(7);

        cell1.innerHTML = name;
        cell2.innerHTML = room;
        cell3.innerHTML = paymentAmount;
        cell4.innerHTML = paymentMethod;
        //cell5.innerHTML = duration;
        cell5.innerHTML = checkout;
        cell6.innerHTML = timeOfPayment;
        
        var bu = document.createElement("button");
        bu.className = "bwt";
        bu.id = String(room);
        bu.innerHTML = "Delete";
        bu.onclick = function() {
          deleteinstrument(room);
        };
        cell7.appendChild(bu);

        // var bu2 = document.createElement("button");
        // bu2.className = "bwt";
        // bu2.id = String(room);
        // bu2.innerHTML = "Done";
        // bu2.onclick = function() {
        //   updateinstrument(room);
        // };
        // cell9.appendChild(bu2);

      });
    }
    display();
    async function deleteinstrument(room) {
      var x = room;
      alert("You are going to delete " + x);
      await deleteDoc(doc(db, "Payment", x));
      console.log("Document successfully deleted!", x);
      let tb = document.getElementById("payment");
      while (tb.rows.length > 1) {
        tb.deleteRow(1);
      }
      display();
    }
    // update the payment history if needed
    // async function updateinstrument(room) {
    //   var x = room;
    //   alert("You are going to update the order status of Room " + x);
    //   await updateDoc(doc(db, "ShopOrder", x), {OrderStatus: "Order Delivered"})
    //   console.log("Document successfully updated!", x);
    //   let tb = document.getElementById("shop orders");
    //   if (tb.rows.length > 1) {
    //     tb.deleteRow(1);
    //   }
    //   display();
    // }
  },
}
</script>

<style scoped>

</style>