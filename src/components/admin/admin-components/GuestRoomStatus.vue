<template>
<table>
    <thead>
      <tr>
        <th>Room Number</th>
        <th>Status</th>
        <th>Type</th>
        <th>Check Out</th>
        <th>Requests</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Room Number"> {{roomNo}} </td>
        <td data-label="Status"> {{status}} </td>
        <td data-label="Type"> {{roomType}} </td>
        <td data-label="Cehck Out"> {{endDate}} </td>
        <td data-label="Requests"> {{requests}} </td>
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
  name: "GuestRoomStatus.vue",

  components: {
    JbButtons,
    JbButton,
  },

  setup() {
    return {
        mdiPencilOutline
      }
  },
}
</script>

<style scoped>

</style>