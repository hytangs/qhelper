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
      <tr v-for="guest in itemsPaginated" :key="guest.room">
        <td data-label="Name"> {{guest.name}} </td>
        <td data-label="Date"> {{guest.date}} </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button color="success" :icon="mdiAccountMultiplePlus" small @click="isModalDangerActive1 = true, checkIn()" />
            <jb-button color="danger" :icon="mdiAccountMultipleMinus" small @click="isModalDangerActive2 = true, checkOut(guest.room)" />
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
import { mdiAccountMultiplePlus, mdiAccountMultipleMinus } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'
import ModalBox from '../../plugins/ModalBox'
import connector from "../../../connector";

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

    const store = useStore()

    const darkMode = computed(() => store.state.darkMode)

    const items = computed(() => store.state.healthCheckOutRoster)

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
      mdiAccountMultiplePlus, 
      isModalDangerActive1,
      isModalDangerActive2,
      mdiAccountMultipleMinus,
      itemsPaginated,
      darkMode
    }
  },

  async created() {
    const store = useStore()
    let meta = await connector.methods.getHealthCheckOut().then(x => x)
    console.log(meta)
    store.commit('alterHealthCheckOut' , meta)
  },

  methods: {
    checkIn() {
      // remove data
    },

    async checkOut(room) {
      await connector.methods.quarantineCheckout(room)
      let meta = await connector.methods.getHealthCheckOut().then(x => x)
      this.$store.commit('alterHealthCheckOut', meta);
    }
  }
}
</script>

<style scoped>

</style>