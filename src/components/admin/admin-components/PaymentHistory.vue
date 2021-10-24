<template>
<modal-box v-model="isModalActive" title="Modify">
  <p>Modify the <b>Payment Details</b></p>
</modal-box>

<table>
    <thead>
      <tr>
        <th>Guest Name</th>
        <th>Room</th>
        <th>Payment Amount</th>
        <th>Payment Method</th>
        <th>Duration of Stay</th>
        <th>Checkout Date</th>
        <th>Time of Payment</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Guest Name"> Howell Hand </td>
        <td data-label="Room"> 0221 </td>
        <td data-label="Payment Amount"> 920 </td>
        <td data-label="Payment Method"> Mastercard </td>
        <td data-label="Duration of Stay"> 14 </td>
        <td data-label="Checkout Date"> Mar 3, 2021 </td>
        <td data-label="Time of Payment"> Mar 3, 2021 </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true" />
          </jb-buttons>
        </td>
      </tr>

      <tr>
        <td data-label="Guest Name"> Hope Howe </td>
        <td data-label="Room"> 0223 </td>
        <td data-label="Payment Amount"> 480 </td>
        <td data-label="Payment Method"> Mastercard </td>
        <td data-label="Duration of Stay"> 14 </td>
        <td data-label="Checkout Date"> Mar 5, 2021 </td>
        <td data-label="Time of Payment"> Mar 5, 2021 </td>
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
import { ref } from 'vue'
import { mdiPencilOutline } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'
import ModalBox from '../../plugins/ModalBox'

export default {
  name: "PaymentHistory",

  components: {
    JbButtons,
    JbButton,
    ModalBox
  },

  setup() {
    const isModalActive = ref(false)

    return {
      mdiPencilOutline, 
      isModalActive,
    }
  },
}
</script>

<style scoped>

</style>