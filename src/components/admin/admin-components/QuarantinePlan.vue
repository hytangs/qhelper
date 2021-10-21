<template>
<table>
    <thead>
      <tr>
        <th>Plan Name</th>
        <th>Days</th>
        <th>PCR Tests</th>
        <th>Highlight</th>
        <th>Country</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Plan Name"> {{planName}} </td>
        <td data-label="Days"> {{days}} </td>
        <td data-label="PCR Tests"> {{pcrTests}} </td>
        <td data-label="Highlight"> {{highlight}} </td>
        <td data-label="Country"> {{country}} </td>
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
import { mdiPencilOutline } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'

export default {
  name: "QuarantinePlan.vue",

  components: {
    JbButtons,
    JbButton
  },

  setup() {
    return {
      mdiPencilOutline, 
    }
  },
}
</script>

<style scoped>

</style>

