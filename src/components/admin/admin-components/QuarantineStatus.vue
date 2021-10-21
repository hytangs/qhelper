<template>
<table>
    <thead>
      <tr>
        <th>Room Info</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Next PCR Test</th>
        <th>Quarantine Plan</th>
        <th>Departure Country</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Room Info"> Room Number </td>
        <td data-label="Start Date"> DD-MM-YYYY </td>
        <td data-label="End Date"> DD-MM-YYYY </td>
        <td data-label="Next PCR Test"> DD-MM-YYYY </td>
        <td data-label="Quarantine Plan"> Quarantine Plan </td>
        <td data-label="Departure Country"> Country of Departure </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true" />
            <jb-button color="danger" :icon="mdiAccountCancel" small @click="isModalDangerActive = true" />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
</table>
</template>

<script>
import { mdiPencilOutline, mdiAccountCancel } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'

export default {
  name: "QuarantineStatus.vue",

  components: {
    JbButtons,
    JbButton
  },

  setup() {
    return {
      mdiPencilOutline, 
      mdiAccountCancel
    }
  },
}
</script>

<style scoped>

</style>