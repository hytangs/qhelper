<template>
<modal-box v-model="isModalActive" title="Check Details">
  <p>Check the <b>Request / Query Details</b></p>
</modal-box>

<table>
    <thead>
      <tr>
        <th>Staff</th>
        <th>Status</th>
        <th>Request / Query</th>
        <th>Time</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Staff"> QualityAdmin </td>
        <td data-label="Status"> Pending </td>
        <td data-label="Request"> Room 1112 have not order any food today, is it ok or need check? </td>
        <td data-label="Time"> 03/01/2021 12:00pm </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiEye" small @click="isModalActive = true" />
          </jb-buttons>
        </td>
      </tr>

    </tbody>
</table>
</template>

<script>
import { ref } from 'vue'
import { mdiEye } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'
import ModalBox from '../../plugins/ModalBox'

export default {
  name: "Assistance Request",

  components: {
    JbButtons,
    JbButton,
    ModalBox
  },

  setup() {
    const isModalActive = ref(false)

    return {
      mdiEye, 
      isModalActive,
    }
  },
}
</script>

<style scoped>

</style>