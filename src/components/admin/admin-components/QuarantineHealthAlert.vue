<template>
<modal-box v-model="isModalActive" title="Modify">
  <p>Modify <b>Health Alert</b></p>
</modal-box>

<modal-box v-model="isModalDangerActive" large-title="Please Confirm" button="danger" has-cancel>
  <p>Delete <b>Health Alert</b></p>
</modal-box>

<table>
    <thead>
      <tr>
        <th>Alert ID</th>
        <th>Room Info</th>
        <th>Reasons</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Alert ID"> ID </td>
        <td data-label="Room Info"> Room Number </td>
        <td data-label="Reasons"> Reasons </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true" />
            <jb-button color="danger" :icon="mdiTrashCan" small @click="isModalDangerActive = true, remove()" />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
</table>
</template>

<script>
import { ref } from 'vue'
import { mdiPencilOutline, mdiTrashCan } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'
import ModalBox from '../../plugins/ModalBox'

export default {
  name: "QuarantineHealthAlert.vue",

  components: {
    JbButtons,
    JbButton,
    ModalBox
  },

  setup() {
    const isModalActive = ref(false)

    const isModalDangerActive = ref(false)

    return {
      mdiPencilOutline,
      mdiTrashCan,
      isModalActive,
      isModalDangerActive
    }
  },
}
</script>

<style scoped>

</style>