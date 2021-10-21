<template>
<table>
    <thead>
      <tr>
        <th>Alert ID</th>
        <th>Room Info</th>
        <th>Reasons</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Alert ID"> ID </td>
        <td data-label="Room Info"> Room Number </td>
        <td data-label="Reasons"> Reasons </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true" />
            <jb-button color="danger" :icon="mdiTrashCan" small @click="isModalDangerActive = true" />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
</table>
</template>

<script>
import { mdiPencilOutline, mdiTrashCan } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'

export default {
  name: "QuarantineHealthAlert.vue",

  components: {
    JbButtons,
    JbButton
  },

  setup() {
    return {
      mdiPencilOutline,
      mdiTrashCan 
    }
  },
}
</script>

<style scoped>

</style>