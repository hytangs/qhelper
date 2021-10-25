<template>
<modal-box v-model="isModalActive" title="Modify">
  <p> Check the <b>Order Details</b> /
      Handle the <b>Order</b></p>
</modal-box>

<table>
    <thead>
      <tr>
        <th>Guest Name</th>
        <th>Room</th>
        <th>Items Ordered</th>
        <th>Payment Amount</th>
        <th>Payment Method</th>
        <th>Order Status</th>
        <th>Time of Payment</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Guest Name"> Howell Hand </td>
        <td data-label="Room"> 0221 </td>
        <td data-label="Items Ordered"> Instant Noodles: 1,  Biscuits: 2</td>
        <td data-label="Payment Amount"> 8.00 </td>
        <td data-label="Payment Method"> Mastercard </td>
        <td data-label="Order Status"> Order Received </td>
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
        <td data-label="Items Ordered"> Chocolate Bar: 2,  Milk: 1</td>
        <td data-label="Payment Amount"> 10.50 </td>
        <td data-label="Payment Method"> Mastercard </td>
        <td data-label="Order Status"> Order Received </td>
        <td data-label="Time of Payment"> Mar 3, 2021 </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true" />
          </jb-buttons>
        </td>
      </tr>
      <tr>
        <td data-label="Guest Name"> Nelson Jerde </td>
        <td data-label="Room"> 0225 </td>
        <td data-label="Items Ordered"> Bread: 2,  Apple: 2</td>
        <td data-label="Payment Amount"> 4.80 </td>
        <td data-label="Payment Method"> Mastercard </td>
        <td data-label="Order Status"> Order Received </td>
        <td data-label="Time of Payment"> Mar 3, 2021 </td>
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