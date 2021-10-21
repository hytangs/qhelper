<template>
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
        <td data-label="Patient ID"> {{patientID}} </td>
        <td data-label="Name"> {{name}} </td>
        <td data-label="Date"> {{date}} </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button color="danger" :icon="mdiTrashCan" small @click="isModalDangerActive = true" />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
</table>
</template>

<script>
import { mdiTrashCan } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'

export default {
  name: "QuarantineMedicalCheckouts.vue",

  components: {
    JbButtons,
    JbButton
  },

  setup() {
    return {
      mdiTrashCan, 
    }
  },
}
</script>

<style scoped>

</style>