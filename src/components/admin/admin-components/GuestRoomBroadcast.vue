<template>
<modal-box v-model="isModalDangerActive" large-title="Please Confirm" button="danger" has-cancel>
  <p>Remove <b>Notification</b></p>
</modal-box>
<table>
    <thead>
      <tr>
        <th>Notification</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Notification"> Long notification from broadcast. </td>
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

export default {
  name: "GuestRoomBroadcast.vue",

  components: {
    JbButtons,
    JbButton,
    ModalBox
  },

  setup() {
    const isModalDangerActive = ref(false)

    return {
        mdiTrashCan,
        isModalDangerActive
      }
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