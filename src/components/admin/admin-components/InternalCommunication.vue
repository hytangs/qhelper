<template>
<modal-box v-model="isModalActive" title="Check Details">
  <p>Check the <b>Message Details</b></p>
</modal-box>

<table>
    <thead>
      <tr>
        <th>From</th>
        <th>To</th>
        <th>Message Content</th>
        <th>Time</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="From"> QualityAdmin </td>
        <td data-label="To"> QualityStaff </td>
        <td data-label="Message Content"> There will be a team meeting at conference room, 1.30pm. </td>
        <td data-label="Time of Payment"> 03/01/2021 12:00pm </td>
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
  name: "InternalCommunication",

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