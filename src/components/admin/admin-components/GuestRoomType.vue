<template>
<table>
    <thead>
      <tr>
        <th>Room Type</th>
        <th>Rate</th>
        <th>Vacancy</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr v-for="room in Rooms" :key="room.id">
        <td data-label="Room Type"> {{room.roomType}} </td>
        <td data-label="Rate"> {{room.rate}} </td>
        <td data-label="Vacancy"> {{room.vacancy}} </td>
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
  name: "GuestRoomType.vue",

  components: {
    JbButtons,
    JbButton
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