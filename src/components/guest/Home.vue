<template>
  <div v-if="this.guestroom !== 'Undefined' && this.guestroom !== 'null'">
    <div id="home">
      <div
        class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded h-auto shadow bottomgap a"
      >
        <div class="p-6">
          <h1 class="text-xl text-black hover:text-gray-600">
            <b
              >&nbsp;&nbsp; &nbsp;&nbsp; Welcome {{ this.guestname }} at room
              {{ this.guestroom }} to QHelper!</b
            >
          </h1>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3  bottomgap h-1/2">
        <div
          class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow bottomgap a"
        >
          <div class="p-6">
            <h4 class="text-xl">Health Status</h4>
          </div>
          <div class="subcards2">
            <!--Quarantine Time to be located here-->
            <h1
              class="text-3xl text-red-700 hover:text-red-500"
              v-if="this.$store.state.healthpass === 'Please Declare'"
            >
              <b
                >&nbsp;&nbsp; &nbsp;&nbsp; {{ this.$store.state.healthpass }}</b
              >
            </h1>
            <h1
              class="text-3xl text-green-700 hover:text-green-500"
              v-else-if="this.$store.state.healthpass === 'Declared Today'"
            >
              <b
                >&nbsp;&nbsp; &nbsp;&nbsp; {{ this.$store.state.healthpass }}</b
              >
            </h1>
            <h1 class="text-3xl text-gray-700 hover:text-gray-500" v-else>
              <b
                >&nbsp;&nbsp; &nbsp;&nbsp; {{ this.$store.state.healthpass }}</b
              >
            </h1>
            <br />
            <p>&nbsp;&nbsp; &nbsp;&nbsp; Always monitor your health daily.</p>
          </div>
        </div>

        <div
          class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow bottomgap a"
        >
          <div class="p-6">
            <h4 class="text-xl ">Days Remain</h4>
          </div>
          <div class="subcards2">
            <!--Quarantine Time to be located here-->
            <h1 class="text-3xl text-green-700 hover:text-green-500">
              <b>&nbsp;&nbsp; &nbsp;&nbsp; {{ this.remaining }} Days</b>
            </h1>
            <br />
            <p>&nbsp;&nbsp; &nbsp;&nbsp; Enjoy your remaining 'staycation'.</p>
          </div>
        </div>

        <div
          class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow bottomgap a"
        >
          <div class="p-6">
            <h4 class="text-xl">Next Test Date</h4>
          </div>
          <div class="subcards2">
            <!--Quarantine Time to be located here-->
            <h1 class="text-3xl text-green-700 hover:text-green-500">
              &nbsp; &nbsp; &nbsp; &nbsp;<b> {{ this.pcrtest }}</b>
            </h1>
            <br />
            <p>&nbsp;&nbsp; &nbsp;&nbsp; PCR test will be done in your room.</p>
          </div>
        </div>
      </div>
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
            <tbody>
              <tr v-for="notification in itemsPaginated" :key="notification.id">
                <td data-label="Staff Name">{{ notification.announcement }}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <button
            class="hover:text-blue-800"
            @click="() => TogglePopup('buttonTrigger')"
          >
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
    </div>

    <div
      class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow bottomgap a"
    >
      <div class="p-6">
        <p class="text-gray-900">
          &nbsp;&nbsp; © <b>QHelper COVID-19 Quarantine Assistance System</b> by
          NUS BT3103 Group 10. Please visit our
          <a
            href="https://github.com/hytangs/qhelper"
            target="_blank"
            class="text-blue-500"
            >Github Repository</a
          >.
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    <br />
    <p class="text-3xl hover:text-gray-700 left-1"><b>Unauthorized Guest</b></p>
    <br />
    <h2 class="text-xl text-gray-700 hover:text-gray-900 left-1">
      Please contact the web administrator for assistance.
    </h2>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from 'vuex'
import Popup from "./popup/Popup";

// import firebaseApp from "../../firebase.js";
// import { getFirestore } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore";
import localsession from "../../store/localsession";
import datequery from "../plugins/helpers/datequery";
import connector from "../../connector";


// const db = getFirestore(firebaseApp);

export default {
  name: "Home",
  components: {
    Popup,
  },

  // mounted() {
  //   async function display() {
  //     let z = await getDocs(collection(db, "Notification"));
  //     let ind = 1;

  //     z.forEach((docs) => {
  //       let yy = docs.data();

  //       if (yy["identification"] !== "block") {
  //         var table = document.getElementById("announce");
  //         var row = table.insertRow(ind);

  //         var msg = yy.contains;

  //         var cell1 = row.insertCell(0);

  //         cell1.innerHTML = msg;
  //       }
  //     });
  //   }
  //   display();
  // },

  setup() {
    const store = useStore();

    const items = computed(() => store.state.announcementRoster);

    const perPage = ref(10)

    const currentPage = ref(0)

    const popupTriggers = ref({
      buttonTrigger: true,
    });

    const itemsPaginated = computed(
      () => items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
    )

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    return {
      Popup,
      popupTriggers,
      TogglePopup,
      store,
      itemsPaginated,
    };
  },

  data() {
    var healthpass = "Declared Today";
    const input_lhd = localsession.methods.getGuestLastHealthDeclare();

    const today = datequery.methods.fetchTodayString();
    if (input_lhd < today) {
      healthpass = "Please Declare";
    }
    this.$store.commit("alterHealthPass", healthpass);

    return {
      finance: localsession.methods.getGuestFinance(),
      guestroom: localsession.methods.getGuestRoom(),
      guestname: localsession.methods.getGuestName(),
      remaining: localsession.methods.getGuestRemaining(),
      healthpass: this.$store.state.healthpass,
      pcrtest: localsession.methods.getGuestPCR(),
    };
  },

  async created() {
    const store = useStore()
    let meta = await connector.methods.getAnnouncement().then(x => x)
    console.log(meta)
    store.commit('alterAnnouncementRoster' , meta)
  },

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

.subcards2 {
  width: 100%;
  height: 12vh;
  margin-bottom: 0.5rem;
}

#home {
  grid-template-rows: repeat(2, minmax(0, 1fr));
  width: 99%;
  text-align: left;
}
</style>
