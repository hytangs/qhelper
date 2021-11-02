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
          RoomNumber: '1101',
          Status: 'String',
          RoomType: 'String',
          Checkout: '00000000',
          Requests: 'String'
        },
        {
          RoomNumber: '1102',
          Status: 'String',
          RoomType: 'String',
          Checkout: 'String',
          Requests: 'wer'
        },
        {
          RoomNumber: '1103',
          Status: 'String',
          RoomType: 'String',
          Checkout: 'String',
          Requests: 'sd'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
