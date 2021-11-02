<template>
  <tr>
    <td data-label="Room Number"> {{ RoomNumber }} </td>
    <td data-label="Status"> {{ Status }} </td>
    <td data-label="Type"> {{ RoomType }} </td>
    <td data-label="Check Out"> {{ Checkout }} </td>
    <td data-label="Requests"> {{ Requests }} </td>
    <td class="actions-cell">
      <jb-buttons type="justify-start lg:justify-end" no-wrap>
        <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true" />
      </jb-buttons>
    </td>
  </tr>
</template>

<script>
export default {
  name: "GuestEntry",

  props: {
    RoomNumber: String,
    Status: String,
    RoomType: String,
    Checkout: String,
    Requests: String
  },
}

</script>

<style scoped>

</style>
