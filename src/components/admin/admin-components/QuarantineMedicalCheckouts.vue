<template>
<modal-box v-model="isModalDangerActive" large-title="Please Confirm" button="danger" has-cancel>
  <p>Delete <b>Medical Checkouts</b></p>
</modal-box>

<table>
    <thead>
      <tr>
        <th>Patient ID</th>
        <th>Name</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Patient ID"> ID </td>
        <td data-label="Name"> Name of patient </td>
        <td data-label="Date"> DD-MM-YYYY </td>
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
  name: "QuarantineMedicalCheckouts.vue",

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
    remove() {
      // remove data
    }
  }
}
</script>

<style scoped>

</style>