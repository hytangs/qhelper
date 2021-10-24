<template>
<modal-box v-model="isModalActive" title="Modify room status">
  <p>Modify the <b>Room Status</b></p>
</modal-box>
<table>
    <thead>
      <tr>
        <th>Room Number</th>
        <th>Status</th>
        <th>Type</th>
        <th>Check Out</th>
        <th>Requests</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Room Number"> Room Number </td>
        <td data-label="Status"> Status </td>
        <td data-label="Type"> Room Type </td>
        <td data-label="Cehck Out"> DD-MM-YYYY </td>
        <td data-label="Requests"> What are the requests </td>
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

export default {
  name: "GuestRoomStatus.vue",

  components: {
    JbButtons,
    JbButton,
    ModalBox
  },

  setup() {
    const isModalActive = ref(false)

    return {
        mdiPencilOutline,
        isModalActive
      }
  },
}
</script>

<style scoped>

</style>