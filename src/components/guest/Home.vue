<template>
  <div v-if="this.guestroom !== 'Undefined' && this.guestroom !== 'null'">
  <div id="home">

    <div
      class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded h-auto shadow bottomgap a"
    >
      <div class="p-6">
        <table id="announce">
          <thead>
            <tr>
              <th>Announcements</th>
              <!--Announcements to be located here-->
            </tr>
          </thead>
        </table>
        <br>
        <button @click="() => TogglePopup('buttonTrigger')">
          <b> &nbsp;&nbsp; Show / Hide Health Declaration Form</b>
        </button>
      </div>
      <br />
    </div>

    <Popup
      v-if="popupTriggers.buttonTrigger"
      :TogglePopup="() => TogglePopup('buttonTrigger')"
    >
    </Popup
    ><br />

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3  bottomgap h-1/2">
      <div
          class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow bottomgap a"
      >
        <div class="p-6">
          <h4 class="text-xl">Health Status</h4>
        </div>
        <div class="subcards2">
          <!--Quarantine Time to be located here-->
          <h1 class="text-4xl"><b>&nbsp;&nbsp; &nbsp;&nbsp; $ {{ this.finance }}</b></h1>
          <br/>
          <p>&nbsp;&nbsp; Payment will be done at checkout.</p>
        </div>
      </div>

        <div
            class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow bottomgap a"
        >
          <div class="p-6">
            <h4 class="text-xl">Current Bills</h4>
          </div>
          <div class="subcards2">
            <!--Quarantine Time to be located here-->
            <h1 class="text-4xl"><b>&nbsp;&nbsp; &nbsp;&nbsp; $ {{ this.finance }}</b></h1>
            <br/>
            <p>&nbsp;&nbsp; Payment will be done at checkout.</p>
          </div>
        </div>

        <div
            class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow bottomgap a"
        >
          <div class="p-6">
            <h4 class="text-xl">Next Test</h4>
          </div>
          <div class="subcards2">
            <!--Quarantine Time to be located here-->
            <h1 class="text-4xl"><b>&nbsp;&nbsp; &nbsp;&nbsp; $ {{ this.finance }}</b></h1>
            <br/>
            <p>&nbsp;&nbsp; Payment will be done at checkout.</p>
          </div>
        </div>
      </div>
    </div>

    <div
        class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow bottomgap a"
    >

      <div class="p-6">
        <p class="text-lg text-gray-900">&nbsp;&nbsp; © <b>QHelper COVID-19 Quarantine Assistance System</b>
          by NUS BT3103 Group 10. Please visit our <a href="https://github.com/hytangs/qhelper" target="_blank" class="text-blue-500">Github Repository</a>.
        </p>

      </div>

    </div>
  </div>
  <div v-else>
    <br />
    <p class="text-3xl hover:text-gray-700 left-1"><b>Unauthorized Guest</b></p>
    <br />
    <h2 class="text-xl text-gray-700 hover:text-gray-900 left-1">Please contact the web administrator for assistance.</h2>
  </div>
</template>

<script>
import { ref } from "vue";
import Popup from "./popup/Popup";

import firebaseApp from "../../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import localsession from "../../store/localsession";
const db = getFirestore(firebaseApp);

export default {
  name: "Home",
  components: {
    Popup,
  },

  mounted() {
    async function display() {
      let z = await getDocs(collection(db, "Notification"));
      let ind = 1;

      z.forEach((docs) => {

        let yy = docs.data();

        if (yy['identification'] !== 'block') {
          var table = document.getElementById("announce");
          var row = table.insertRow(ind);

          var msg = yy.contains;

          var cell1 = row.insertCell(0);

          cell1.innerHTML = msg;
        }
      });
    }
    display();
  },

  setup() {
    const popupTriggers = ref({
      buttonTrigger: true,
    });

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    return {
      Popup,
      popupTriggers,
      TogglePopup,
    };
  },

  data() {
    return {
      finance : localsession.methods.getGuestFinance(),
      guestroom: localsession.methods.getGuestRoom(),
    }
  }
};
</script>
>

<style scoped>
#announcement {
  width: 100%;
  height: 25vh;
  margin-bottom: 1rem;
  text-indent: 20px;
}

.shadow {
  box-shadow: 0px 8px 8px -8px grey;
}

.bottomgap {
  margin-bottom: 2rem;
}

.subcards {
  width: 100%;
  height: 20vh;
  margin-bottom: 1rem;
}

#home {
  grid-template-rows: repeat(2, minmax(0, 1fr));
  width: 99%;
  text-align: left;
}

</style>
