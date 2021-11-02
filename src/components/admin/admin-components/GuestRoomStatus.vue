<template>
<modal-box v-model="isModalActive" title="Modify room status">
  <p>Modify the <b>Room Status</b></p>
</modal-box>
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
      <template v-for="(col) in table" :key="col.RoomNumber">
        <GuestEntry
          :RoomNumber="col.RoomNumber"
          :Status="col.Status"
          :RoomType="col.RoomType"
          :Checkout="col.Checkout"
          :Requests="col.Requests">
        </GuestEntry>
      </template>
    </tbody>
</table>
</template>

<script>
import { ref } from 'vue'
import { mdiPencilOutline } from '@mdi/js'
//import JbButtons from '../../plugins/JbButtons'
//import JbButton from '../../plugins/JbButton'
import ModalBox from '../../plugins/ModalBox'
import GuestEntry from "./GuestEntry";

export default {
  name: "GuestRoomStatus.vue",

  components: {
    GuestEntry,
    ModalBox
  },

  setup() {
    const isModalActive = ref(false)

    return {
        mdiPencilOutline,
        isModalActive
      }
  },

  data() {
    return {
      table: [
        {
          RoomNumber: 'String',
          Status: 'String',
          RoomType: 'String',
          Checkout: 'String',
          Requests: 'String'
        },
        {
          RoomNumber: 'String',
          Status: 'String',
          RoomType: 'String',
          Checkout: 'String',
          Requests: 'String'
        },
        {
          RoomNumber: 'String',
          Status: 'String',
          RoomType: 'String',
          Checkout: 'String',
          Requests: 'String'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
