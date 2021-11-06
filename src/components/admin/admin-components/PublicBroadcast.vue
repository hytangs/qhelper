<template>
  <modal-box v-model="isModalDangerActive" large-title="Please Confirm" button="danger">
    <p>Successfully removed this <b>notification</b>.</p>
  </modal-box>

  <modal-box v-model="isModalActive" title="Add New Notification">
    <p>New Notifications</p>

    <field label="Message" help="message as public broadcast">
      <control placeholder="Message Details" v-model="new_message" id = "message"/>
    </field>

    <jb-buttons type="justify-left lg:justify-left" no-wrap>
      <jb-button color="info" label="Confirm" v-on:click="addnewmessage()"/>
    </jb-buttons>
  </modal-box>

  <table>
      <thead>
        <tr>
          <th>Notification</th>
          <th>Sender</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="message in store.state.publicBroadcast" :key="message.date">
          <td data-label="Notification"> {{ message.contains }}</td>
          <td data-label="Sender"> {{ message.sender }} </td>
          <td data-label="Date"> {{ message.date }} </td>
          <td class="actions-cell">
            <jb-buttons type="justify-start lg:justify-end" no-wrap>
              <jb-button color="danger" :icon="mdiTrashCan" small @click="isModalDangerActive = true, remove(message.id)" />
            </jb-buttons>
          </td>
        </tr>
      </tbody>
  </table>

  <br/>

  <jb-buttons type="justify-left lg:justify-left" no-wrap>
    <jb-button color="info" label="Add New Message" v-on:click="isModalActive = true"/>
  </jb-buttons>

</template>

<script>
import { ref } from 'vue'
import { mdiTrashCan } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'
import ModalBox from '../../plugins/ModalBox'
import Control from '../../plugins/Control'
import Field from '../../plugins/Field'
import { useStore } from 'vuex'
import connector from "../../../connector";
import datequery from "../../plugins/helpers/datequery";


import firebaseApp from "../../../firebase.js";
import { getFirestore } from "firebase/firestore";
import { setDoc, doc, deleteDoc, updateDoc, getDoc, increment } from "firebase/firestore";
import localsession from "../../../store/localsession";
const db = getFirestore(firebaseApp);


export default {
  name: "GuestRoomBroadcast.vue",

  components: {
    JbButtons,
    JbButton,
    ModalBox,
    Field,
    Control
  },

  setup() {
    const isModalDangerActive = ref(false)

    const isModalActive = ref(false)

    const store = useStore()

    return {
        mdiTrashCan,
        isModalDangerActive,
        isModalActive,
        store,
      }
  },

  data() {
    return {
      new_message: "",
    }

  },

  async created() {
    const store = useStore()
    let meta = await connector.methods.getBroadcast().then(x => x)
    store.commit('alterbroadcast' , meta)
  },

  methods: {
    async remove(id) {
      await deleteDoc(doc(db, "Notification", id));

      let meta = await connector.methods.getBroadcast().then(x => x)
      this.$store.commit('alterbroadcast' , meta)
    },

    async addnewmessage() {
      var passed = false;

      var message = this.new_message;
      if (0 < message.length < 100) {
        passed = true;
      }

      var accountRef = localsession.methods.getAdminName()

      if (passed) {
        const docRef = await getDoc(doc(db, "Notification", "block"))
        const docSnap = docRef.data();
        var count = docSnap['id'] + 1

        const docRef2 = await setDoc(doc(db, "Notification", String(count)), {
          contains: message,
          id: String(count),
          sender: accountRef,
          date: datequery.methods.fetchTodayString(),
        });

        console.log(docRef2);
        this.$emit("added");

        const docRef3 = await updateDoc(doc(db, "Notification", "block"), {
          id: increment(1)
        });
        console.log(docRef3);
        this.$emit("added");

        let meta = await connector.methods.getBroadcast().then(x => x)
        this.$store.commit('alterbroadcast' , meta)
      }
    }
  }
}
</script>

<style scoped>

</style>
