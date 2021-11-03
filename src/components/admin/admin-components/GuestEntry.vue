<template>
  <tr>
    <td data-label="Room Number"> {{ RoomNumber }} </td>
    <td data-label="Requests"> {{ GuestName }} </td>
    <td data-label="Status"> {{ RoomStatus }} </td>
    <td data-label="Type"> {{ RoomType }} </td>
    <td data-label="Check Out"> {{ Checkout }} </td>
    <td class="actions-cell">
      <JbButtons type="justify-start lg:justify-end" no-wrap>
        <JbButton class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true" />
      </JbButtons>
    </td>
  </tr>
</template>

<script>
import JbButton from '../../plugins/JbButton'
import JbButtons from '../../plugins/JbButtons'
import mdiPencilOutline from '@mdi/js'

export default {
  name: "GuestEntry",
  components: {JbButtons, JbButton},
  props: {
    RoomNumber: String,
    RoomStatus: String,
    GuestName: String,
    RoomType: String,
    Checkout: String
  },

  setup() {
    return {
      JbButton,
      JbButtons,
      mdiPencilOutline
    }
  }
}

</script>

<style scoped>

</style>
