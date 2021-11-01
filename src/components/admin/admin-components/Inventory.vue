<template>
<modal-box v-model="isModalActive" title="Modify">
  <p> Check the <b>Inventory Details</b> /
      Update the <b>Inventory Information</b></p>
</modal-box>

<table id = "inventory table">
    <thead>
      <tr>
        <th>Item</th>
        <th>Type</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity Remained</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Item"> Chocolate Bar </td>
        <td data-label="Type"> Food </td>
        <td data-label="Description"> A bar of Chocolate. </td>
        <td data-label="Price"> 4.00 </td>
        <td data-label="Quantity Remained"> 40 </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true" />
          </jb-buttons>
        </td>
      </tr>
      <tr>
        <td data-label="Item"> Biscuits </td>
        <td data-label="Type"> Food </td>
        <td data-label="Description"> A tin of biscuits. </td>
        <td data-label="Price"> 3.00 </td>
        <td data-label="Quantity Remained"> 60 </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true" />
          </jb-buttons>
        </td>
      </tr>
      <tr>
        <td data-label="Item"> Milk </td>
        <td data-label="Type"> Drinks </td>
        <td data-label="Description"> 500ml Milk. </td>
        <td data-label="Price"> 3.60 </td>
        <td data-label="Quantity Remained"> 20 </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true" />
          </jb-buttons>
        </td>
      </tr>

    </tbody>
</table>
</template>

<script>
import { ref } from 'vue'
import { mdiPencilOutline } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'
import ModalBox from '../../plugins/ModalBox'

import firebaseApp from "../../../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: "PaymentHistory",

  components: {
    JbButtons,
    JbButton,
    ModalBox
  },

  mounted() {
    async function display() {
      let z = await getDocs(collection(db, "Inventory"));
      let ind = 1;

      z.forEach((docs) => {
        let yy = docs.data();
        var table = document.getElementById("inventory table");
        var row = table.insertRow(ind);

        var item = yy.Item;
        var type = yy.Type;
        var description = yy.Description;
        var price = yy.Price;
        var quantity = yy.QuantityRemained;

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML = item;
        cell2.innerHTML = type;
        cell3.innerHTML = description;
        cell4.innerHTML = price;
        cell5.innerHTML = quantity;

        var bu = document.createElement("button");
        bu.className = "bwt";
        bu.id = String(item);
        bu.icon = "mdiPencilOutline";
        bu.innerHTML = "Delete";
        bu.onclick = function() {
          deleteinstrument(item);
        };
        cell6.appendChild(bu);

      });
    }
    display();
    async function deleteinstrument(item) {
      var x = item;
      alert("You are going to delete " + x);
      await deleteDoc(doc(db, "Inventory", x));
      console.log("Document successfully deleted!", x);
      let tb = document.getElementById("inventory table");
      while (tb.rows.length > 1) {
        tb.deleteRow(1);
      }
      display();
    }
  },

  setup() {
    const isModalActive = ref(false)

    return {
      mdiPencilOutline, 
      isModalActive,
    }
  },
}
</script>

<style scoped>

</style>