<template>
<modal-box v-model="isModalDangerActive1" large-title="Please Confirm" button="danger" has-cancel>
  <p>Check In Guest</p>
</modal-box>

<modal-box v-model="isModalDangerActive2" large-title="Please Confirm" button="danger" has-cancel>
  <p>Check Out Guest</p>
</modal-box>

<table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Patient ID"> ID </td>
        <td data-label="Name"> Name of patient </td>
        <td data-label="Date"> DD-MM-YYYY </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button color="success" :icon="mdiAccountMultiplePlus" small @click="isModalDangerActive1 = true, checkIn()" />
            <jb-button color="danger" :icon="mdiAccountMultipleMinus" small @click="isModalDangerActive2 = true, checkOut()" />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
</table>
</template>

<script>
import { ref } from 'vue'
import { mdiAccountMultiplePlus, mdiAccountMultipleMinus } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'
import ModalBox from '../../plugins/ModalBox'

export default {
  name: "QuarantineMedicalCheckouts.vue",

  components: {
    JbButtons,
    JbButton,
    ModalBox
  },

  setup() {
    const isModalDangerActive1 = ref(false)

    const isModalDangerActive2 = ref(false)


    return {
      mdiAccountMultiplePlus, 
      isModalDangerActive1,
      isModalDangerActive2,
      mdiAccountMultipleMinus,
    }
  },

  methods: {
    checkIn() {
      // remove data
    },

    checkOut() {
      // remove data
    }
  }
}
</script>

<style scoped>

</style>