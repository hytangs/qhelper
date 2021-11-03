<template>
<modal-box v-model="isModalDangerActive" large-title="Please Confirm" button="danger" has-cancel>
  <p>Remove <b>Notification</b></p>
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
            <jb-button color="danger" :icon="mdiTrashCan" small @click="isModalDangerActive = true, remove()" />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
</table>
</template>

<script>
import { ref } from 'vue'
import { mdiTrashCan } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'
import ModalBox from '../../plugins/ModalBox'
import { useStore } from 'vuex'
import connector from "../../../connector";

export default {
  name: "GuestRoomBroadcast.vue",

  components: {
    JbButtons,
    JbButton,
    ModalBox
  },

  setup() {
    const isModalDangerActive = ref(false)

    const store = useStore()

    return {
        mdiTrashCan,
        isModalDangerActive,
        store
      }
  },

  async created() {
    const store = useStore()
    let meta = await connector.methods.getBroadcast().then(x => x)
    console.log(meta)
    store.commit('alterbroadcast' , meta)
  },

  methods: {
    async remove() {
      //remove notification
    }
  }
}
</script>

<style scoped>

</style>
