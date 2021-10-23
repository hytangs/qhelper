<template>
<modal-box v-model="isModalActive" title="Modify room type">
  <p>Modify the <b>Room Type</b></p>
</modal-box>
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
      <tr>
        <td data-label="Room Type"> Room Type </td>
        <td data-label="Rate"> Room Rate </td>
        <td data-label="Vacancy"> Number of vacant room </td>
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
  name: "GuestRoomType.vue",

  components: {
    JbButtons,
    JbButton,
    ModalBox
  },

  setup() {
    const isModalActive = ref(false)

    return {
        mdiPencilOutline,
        isModalActive
      }
  },
}
</script>

<style scoped>

</style>