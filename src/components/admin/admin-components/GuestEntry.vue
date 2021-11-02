<template>
  <tr>
    <td data-label="Room Number"> {{ RoomNumber }} </td>
    <td data-label="Status"> {{ Status }} </td>
    <td data-label="Type"> {{ RoomType }} </td>
    <td data-label="Check Out"> {{ Checkout }} </td>
    <td data-label="Requests"> {{ Requests }} </td>
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

export default {
  name: "GuestEntry",
  components: {JbButtons, JbButton},
  props: {
    RoomNumber: String,
    Status: String,
    RoomType: String,
    Checkout: String,
    Requests: String
  },

  setup() {
    return {
      JbButton,
      JbButtons
    }
  }
}

</script>

<style scoped>

</style>
