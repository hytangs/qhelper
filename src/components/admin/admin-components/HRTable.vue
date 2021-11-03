<template>
<modal-box v-model="isModalActive1" title="Modify Staff Position">
  <p>Modify Staff Position</p>
</modal-box>

<modal-box v-model="isModalActive2" large-title="Please Confirm" button="danger" has-cancel>
  <p>Deployment modified</p>
</modal-box>

<modal-box v-model="isModalDangerActive" large-title="Please Confirm" button="danger" has-cancel>
  <p>Delete <b>Employee information</b></p>
</modal-box>

<table>
    <thead>
      <tr>
        <th></th>
        <th>Staff Name</th>
        <th>Account Name</th>
        <th>Position</th>
        <th>Grant Access</th>
        <th>Deployed</th>
        <!-- <th>Tags</th> -->
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr v-for="staff in itemsPaginated" :key="staff.id">
        <td class="image-cell">
          <user-avatar :username="staff.name" class="image" />
        </td>
        <td data-label="Name"> {{staff.name}} </td>
        <td data-label="Staff ID">{{staff.id}} </td>
        <td data-label="Position"> {{staff.position}} </td>
        <td data-label="Grant Access"> {{staff.access}} </td>
        <td data-label="Deployed">{{staff.deployed}}</td>
        <!-- <td data-label="Tags"> {{staff.tags}} </td> -->
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiBadgeAccountHorizontal" small @click="isModalActive1 = true" />
            <jb-button class="mr-3" color="light" :icon="mdiAccountCheck" small @click="isModalActive2 = true, modifyDeployment()" />
            <jb-button color="danger" :icon="mdiTrashCan" small @click="isModalDangerActive = true, removeData()" />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
</table>
<!-- <div class="table-pagination">
  <level>
    <jb-buttons>
      <jb-button
        v-for="page in pagesList"
        @click="currentPage = page"
        :active="page === currentPage"
        :label="page + 1"
        :key="page"
        :outline="darkMode"
        small
      />
    </jb-buttons>
    <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
  </level>
</div> -->
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { mdiBadgeAccountHorizontal, mdiAccountCheck, mdiTrashCan } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'
import ModalBox from '../../plugins/ModalBox'
// import Level from '../../plugins/Level'
import UserAvatar from '../../plugins/UserAvatar'

export default {
  name: "HRTable.vue",

  components: {
    JbButtons,
    JbButton,
    ModalBox,
    // Level,
    UserAvatar
  },

  setup() {
    const store = useStore()

    const darkMode = computed(() => store.state.darkMode)

    const items = computed(() => store.state.staff)

    const isModalActive1 = ref(false)

    const isModalActive2 = ref(false)

    const isModalDangerActive = ref(false)

    const perPage = ref(10)

    const currentPage = ref(0)

    // const checkedRows = ref([])

    const itemsPaginated = computed(
      () => items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
    )

    // const numPages = computed(() => Math.ceil(items.value.length / perPage.value))

    // const currentPageHuman = computed(() => currentPage.value + 1)

    // const pagesList = computed(() => {
    //   const pagesList = []

    //   for (let i = 0; i < numPages.value; i++) {
    //     pagesList.push(i)
    //   }

    //   return pagesList
    // })

    return {
        mdiBadgeAccountHorizontal,
        mdiAccountCheck,
        mdiTrashCan,
        isModalActive1,
        isModalActive2,
        isModalDangerActive,
        // currentPage,
        // currentPageHuman,
        // numPages,
        // checkedRows,
        itemsPaginated,
        // pagesList,
        darkMode
      }
  },

  methods: {
    async removeData() {
      // remove feedback
    },

    async updateStaff() {
      //update staff info
    }
  }
}
</script>

<style scoped>

</style>