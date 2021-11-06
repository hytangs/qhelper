<template>

<modal-box v-model="isModalActive" title="Modift">
  <p>Modify the <b>Quarantine Status</b> for room</p>
</modal-box>

<modal-box v-model="isModalDangerActive" large-title="Please Confirm" button="danger" has-cancel>
  <p>Guest has undergone Health Check Out!</p>
</modal-box>

<table>
    <thead>
      <tr>
        <th>Room Info</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Next PCR Test</th>
        <th>Quarantine Plan</th>
        <th>Departure Country</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr v-for="guest in itemsPaginated" :key="guest.room">
        <td data-label="Room Info"> {{guest.room}} </td>
        <td data-label="Start Date"> {{guest.start}} </td>
        <td data-label="End Date"> {{guest.end}} </td>
        <td data-label="Next PCR Test"> {{guest.pcr}} </td>
        <td data-label="Quarantine Plan"> {{guest.quarantinePlan}} </td>
        <td data-label="Departure Country"> {{guest.country}} </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true" />
            <jb-button color="danger" :icon="mdiAccountCancel" small @click="isModalDangerActive = true, healthCheckOut(guest.room)" />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
</table>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { mdiPencilOutline, mdiAccountCancel } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'
import ModalBox from '../../plugins/ModalBox'
import connector from "../../../connector"

export default {
  name: "QuarantineStatus.vue",

  components: {
    JbButtons,
    JbButton,
    ModalBox
  },

  setup() {
    const isModalActive = ref(false)

    const isModalDangerActive = ref(false)

    const store = useStore()

    const darkMode = computed(() => store.state.darkMode)

    const items = computed(() => store.state.quarantineRoster)

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
      mdiPencilOutline, 
      mdiAccountCancel,
      isModalActive,
      isModalDangerActive,
      darkMode,
      itemsPaginated
    }
  },

  async created() {
    const store = useStore()
    let meta = await connector.methods.getQuarantineStatus().then(x => x)
    console.log(meta)
    store.commit('alterQuarantineRoster' , meta)
  },

  methods: {
    async healthCheckOut(roomNo) {
      await connector.methods.healthCheckOut(roomNo)
      let meta = await connector.methods.getQuarantineStatus().then(x => x)
      this.$store.commit('alterQuarantineRoster', meta);
    }
  }

}
</script>

<style scoped>

</style>