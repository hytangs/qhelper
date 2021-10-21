<template>
<table>
    <thead>
      <tr>
        <th>Notification</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Notification"> Long notification from broadcast. </td>
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
  name: "GuestRoomBroadcast.vue",

  components: {
    JbButtons,
    JbButton
  },

  setup() {
    return {
        mdiTrashCan
      }
  },
}
</script>

<style scoped>

</style>