<template>
<modal-box v-model="isModalActive" title="Modify">
  <p>Modify the <b>Quarantine Plan</b></p>
</modal-box>

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
        <td data-label="Plan Name"> Plan Name </td>
        <td data-label="Days"> Number of Days </td>
        <td data-label="PCR Tests"> Days for PCR Test </td>
        <td data-label="Highlight"> Highlight </td>
        <td data-label="Country"> Country </td>
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
  name: "QuarantinePlan.vue",

  components: {
    JbButtons,
    JbButton,
    ModalBox
  },

  setup() {
    const isModalActive = ref(false)

    return {
      mdiPencilOutline, 
      isModalActive,
    }
  },
}
</script>

<style scoped>

</style>

