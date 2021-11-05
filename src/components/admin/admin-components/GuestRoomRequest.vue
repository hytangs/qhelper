<template>
  <modal-box v-model="isModalActive" title="Reply">
    <!-- <p>Reply the <b>Request / Feedback</b></p> -->
    <field label="Message">
      <control
        placeholder="e.g. Thank you for your reply!"
        id="message"
      />
    </field>
  </modal-box>

  <modal-box
    v-model="isModalDangerActive"
    large-title="Please Confirm"
    button="danger"
    has-cancel
  >
    <p>Delete <b>Request / Feedback</b></p>
  </modal-box>

  <table id="feedback">
    <thead>
      <tr>
        <th>Room Number</th>
        <th>Guest</th>
        <th>Requests / Feedback</th>
        <th></th>
      </tr>
    </thead>

    <!-- <tbody>
      <tr>
        <td data-label="Room Number"> Room Number </td>
        <td data-label="Guest"> Name </td>
        <td data-label="Requests / Feedback"> What are the list of requests from the guests. </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiChatProcessing" small @click="isModalActive = true" />
            <jb-button color="danger" :icon="mdiTrashCan" small @click="isModalDangerActive = true, remove()" />
          </jb-buttons>
        </td>
      </tr>
    </tbody> -->

    <tbody v-if="update">
      <tr v-for="feedback in itemsPaginated" :key="feedback.room">
        <td data-label="Room Number">{{ feedback.room }}</td>
        <td data-label="Guest">{{ feedback.name }}</td>
        <td data-label="Requests / Feedback">{{ feedback.feedback }}</td>

        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button
              class="mr-3"
              color="light"
              :icon="mdiChatProcessing"
              small
              @click="(isModalActive = true), replyData(feedback.room)"
            />
            <jb-button
              color="danger"
              :icon="mdiTrashCan"
              small
              @click="(isModalDangerActive = true), removeData(feedback.room)"
            />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { mdiChatProcessing, mdiTrashCan } from "@mdi/js";
import JbButtons from "../../plugins/JbButtons";
import JbButton from "../../plugins/JbButton";
import ModalBox from "../../plugins/ModalBox";
import Field from '../../plugins/Field'
import Control from '../../plugins/Control'

// import firebaseApp from "../../../firebase.js";
// import { getFirestore } from "firebase/firestore";
// import { collection, getDocs} from "firebase/firestore";
// const db = getFirestore(firebaseApp);

import connector from "../../../connector";

export default {
  name: "GuestRoomRequest.vue",

  components: {
    JbButtons,
    JbButton,
    ModalBox,
    Field,
    Control,
  },

  // mounted() {
  //   async function display() {
  //     let z = await getDocs(collection(db, "Feedback"));
  //     let ind = 1;

  //     z.forEach((docs) => {
  //       console.log(docs)
  //       let yy = docs.data();
  //       var table = document.getElementById("feedback");
  //       var row = table.insertRow(ind);

  //       var name = yy.Name;
  //       var room = yy.Room;
  //       var feedback = yy.Feedback;

  //       var cell1 = row.insertCell(0);
  //       var cell2 = row.insertCell(1);
  //       var cell3 = row.insertCell(2);

  //       cell1.innerHTML = room;
  //       cell2.innerHTML = name;
  //       cell3.innerHTML = feedback;

  //     });
  //   }
  //   display()
  // },

  setup() {
    const store = useStore();

    const darkMode = computed(() => store.state.darkMode);

    const items = computed(() => store.state.feedbackData);

    // const isModalActive1 = ref(false)

    const isModalActive = ref(false);

    const isModalDangerActive = ref(false);

    const perPage = ref(10);

    const currentPage = ref(0);

    // const checkedRows = ref([])

    const itemsPaginated = computed(() =>
      items.value.slice(
        perPage.value * currentPage.value,
        perPage.value * (currentPage.value + 1)
      )
    );

    return {
      mdiTrashCan,
      mdiChatProcessing,
      isModalActive,
      isModalDangerActive,
      // currentPage,
      // currentPageHuman,
      // numPages,
      // checkedRows,
      itemsPaginated,
      // pagesList,
      darkMode,
    };
  },

  async created() {
    const store = useStore();
    let meta = await connector.methods.getFeedback().then((x) => x);
    console.log(meta);
    store.commit("alterFeedbackData", meta);
  },

  methods: {
    async removeData(room) {
      await connector.methods.removeFeedback(room);
      let meta = await connector.methods.getFeedback().then((x) => x);
      this.$store.commit("alterFeedbackData", meta);
      alert("Guest Feedback Removed.");
    },
  },

  data() {
    return {
      update: true,
    };
  },
};
</script>

<style scoped></style>
