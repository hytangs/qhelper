<template>
<modal-box v-model="isModalActive" title="Modify">
  <p> Check the <b>Inventory Details</b> /
      Update the <b>Inventory Information</b></p>
</modal-box>

<table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Type</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity Remained</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Item"> Chocolate Bar </td>
        <td data-label="Type"> Food </td>
        <td data-label="Description"> A bar of Chocolate. </td>
        <td data-label="Price"> 4.00 </td>
        <td data-label="Quantity Remained"> 40 </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true" />
          </jb-buttons>
        </td>
      </tr>
      <tr>
        <td data-label="Item"> Biscuits </td>
        <td data-label="Type"> Food </td>
        <td data-label="Description"> A tin of biscuits. </td>
        <td data-label="Price"> 3.00 </td>
        <td data-label="Quantity Remained"> 60 </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true" />
          </jb-buttons>
        </td>
      </tr>
      <tr>
        <td data-label="Item"> Milk </td>
        <td data-label="Type"> Drinks </td>
        <td data-label="Description"> 500ml Milk. </td>
        <td data-label="Price"> 3.60 </td>
        <td data-label="Quantity Remained"> 20 </td>
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