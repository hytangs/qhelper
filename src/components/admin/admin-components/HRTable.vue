<template>
<modal-box v-model="isModalActive1" title="View">
  <p>View the details of employee</p>
</modal-box>

<modal-box v-model="isModalActive2" title="Modify">
  <p>Modify the details of employee</p>
</modal-box>


<modal-box v-model="isModalDangerActive" large-title="Please Confirm" button="danger" has-cancel>
  <p>Delete <b>Employee information</b></p>
</modal-box>

<table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Staff ID</th>
        <th>Position</th>
        <th>Grant Access</th>
        <th>Deployed</th>
        <th>Tags</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Name"> Name of employee </td>
        <td data-label="Staff ID"> 123456 </td>
        <td data-label="Position"> Guest Service Management </td>
        <td data-label="Grant Access"> Areas employees can access </td>
        <td data-label="Deployed">Yes/No</td>
        <td data-label="Tags"> Work from home? </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiEye" small @click="isModalActive1 = true" />
            <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive2 = true" />
            <jb-button color="danger" :icon="mdiTrashCan" small @click="isModalDangerActive = true, removeData()" />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
</table>
</template>

<script>
import { ref } from 'vue'
import { mdiEye, mdiPencilOutline, mdiTrashCan } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'
import ModalBox from '../../plugins/ModalBox'

export default {
  name: "HRTable.vue",

  components: {
    JbButtons,
    JbButton,
    ModalBox
  },

  setup() {
    const isModalActive1 = ref(false)

    const isModalActive2 = ref(false)

    const isModalDangerActive = ref(false)

    return {
        mdiEye,
        mdiPencilOutline,
        mdiTrashCan,
        isModalActive1,
        isModalActive2,
        isModalDangerActive
      }
  },

  methods: {
    async removeData() {
      // remove feedback
    }
  }
}
</script>

<style scoped>

</style>