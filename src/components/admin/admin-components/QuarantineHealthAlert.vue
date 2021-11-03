<template>
<modal-box v-model="isModalDangerActive" large-title="Please Confirm" button="danger" has-cancel>
  <p>Delete <b>Health Alert</b></p>
</modal-box>

<table>
    <thead>
      <tr>
        <th>Room Number</th>
        <th>Symptoms</th>
        <th>Temperature Declared</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Room Number"> Room Number </td>
        <td data-label="Symptoms"> Symptoms </td>
        <td data-label="Temperature Declared"> Temperature Declared </td>
        <td data-label="Date"> Date </td>
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
  name: "QuarantineHealthAlert.vue",

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
}
</script>

<style scoped>

</style>