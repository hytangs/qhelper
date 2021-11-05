<template>

<table id='health alert'>
    <thead>
      <tr>
        <th>Guest Name</th>
        <th>Symptoms</th>
        <th>Temperature Declared</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    
    <!-- <tbody>
      <tr>
        <td data-label="Guest Name"> Guest Name </td>
        <td data-label="Symptoms"> Symptoms </td>
        <td data-label="Temperature Declared"> Temperature Declared </td>
        <td data-label="Date"> Date </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button color="danger" :icon="mdiTrashCan" small @click="remove()" />
          </jb-buttons>
        </td>
      </tr>
      <tr v-for="guest in store.state.healthAlertDefault" :key="guest.guestName">
        <td data-label="Guest Name">{{guest.guestName}} </td>
        <td data-label="Symptoms"> {{guest.symptoms}} </td>
        <td data-label="Temperature Declared"> {{guest.temp}}</td>
        <td data-label="Date"> {{guest.date}} </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button color="danger" :icon="mdiTrashCan" small @click="remove()" />
          </jb-buttons>
        </td>
      </tr>
    </tbody> -->
</table>
</template>

<script>
// import { ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { mdiTrashCan } from '@mdi/js'
// import JbButtons from '../../plugins/JbButtons'
// import JbButton from '../../plugins/JbButton'
// import connector from "../../../connector"

import firebaseApp from "../../../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, doc, deleteDoc, getDocs } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: "QuarantineHealthAlert.vue",

  components: {
    // JbButtons,
    // JbButton,
  },

  mounted() {
    async function display() {
      let z = await getDocs(collection(db, "HealthOrder"));
      let ind = 1

      z.forEach((docs) => {
        let yy = docs.data()
        let roomNumber = docs.id

        if (roomNumber !== "Blocker") {
          var table = document.getElementById("health alert")
          var row = table.insertRow(ind)

          var guestName = yy.Guest
          var date = yy.Date
          // var doctor = yy.SeeDoctor
          var symptoms = yy.Symptoms
          var temp = yy.Temperature

          // if (doctor == "1") {
          //   doctor = "True"
          // } else {
          //   doctor = "False"
          // }

          if (symptoms == "1") {
            symptoms = "True"
          } else {
            symptoms = "False"
          }

          var cell1 = row.insertCell(0); 
          var cell2 = row.insertCell(1); 
          var cell3 = row.insertCell(2); 
          var cell4 = row.insertCell(3); 
          var cell5 = row.insertCell(4);

          cell1.innerHTML = guestName; 
          cell2.innerHTML = symptoms
          cell3.innerHTML = temp
          cell4.innerHTML = date

          var bu = document.createElement("button")
          bu.className = "bwt px-1 p-1inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded"
          // bu.className = "rounded-0 flex-shrink-0 border-top border-bottom-0 border-left-0 border-right-0 d-flex align-items-center text-left py-2 mb-0 btn px-3"
          bu.id = String(roomNumber)
          bu.icon = document.createElement("icon")
          // bu.icon.className = "mdi mdi-24px rounded-max text-white d-flex p-2 lh-24 my-1 mr-2 mdi-mdiTrashCan" ;
          // bu.icon.className = "mdi mdi-24px rounded-max text-white d-flex p-2 lh-24 my-1 mr-2 bg-secondary mdi-mdiTrashCan"
          bu.innerHTML = "Delete"
          bu.onclick = function() {
            deleteinstrument(roomNumber)
          }
          cell5.appendChild(bu)
        }
      });
    }

    display();

    async function deleteinstrument(roomNumber) {
      var x = roomNumber
      alert("You are going to delete Health Alert!")
      await deleteDoc(doc(db, "HealthOrder", x))
      console.log("Document successfully deleted!")
      let tb = document.getElementById("health alert")
      while (tb.rows.length > 1) {
        tb.deleteRow(1)
      }
      display();
    }
  },


  setup() {
    const store = useStore()

    const darkMode = computed(() => store.state.darkMode)

    return {
      mdiTrashCan,
      darkMode
    }
  },

  // async created() {
  //   const store = useStore()
  //   let healthOrder = await connector.methods.getHealthAlert().then(x => x)
  //   console.log(healthOrder)
  //   store.commit('alterHealthAlert' , healthOrder)
  // }
}
</script>

<style scoped>

</style>