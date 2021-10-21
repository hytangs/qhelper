<template>
<table>
    <thead>
      <tr>
        <th>Room Number</th>
        <th>Guest</th>
        <th>Requests / Feedback</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Room Number"> Room Number </td>
        <td data-label="Guest"> Name </td>
        <td data-label="Requests / Feedback"> What are the list of requests from the guests. </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiChatProcessing" small @click="isModalActive = true" />
            <jb-button color="danger" :icon="mdiTrashCan" small @click="isModalDangerActive = true" />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
</table>
</template>

<script>
import { mdiChatProcessing, mdiTrashCan } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'

export default {
  name: "GuestRoomRequest.vue",

  components: {
    JbButtons,
    JbButton
  },

  setup() {
    return {
        mdiChatProcessing,
        mdiTrashCan
      }
  },
}
</script>

<style scoped>

</style>