<template>

<table id='health alert'>
    <thead>
      <tr>
        <th>Room</th>
        <th>Guest Name</th>
        <th>Symptoms</th>
        <th>Temperature</th>
        <th>Request</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="guest in itemsPaginated" :key="guest.room">
        <td data-label="Guest Name">{{guest.room}} </td>
        <td data-label="Guest Name">{{guest.guestName}} </td>
        <td data-label="Symptoms"> {{guest.symptoms}} </td>
        <td data-label="Temperature"> {{guest.temp}}</td>
        <td data-label="Date"> {{guest.date}} </td>
        <td data-label="Request"> {{guest.request}} </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button color="danger" :icon="mdiTrashCan" small @click="remove(guest.room)" />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
</table>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { mdiTrashCan } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'
import connector from "../../../connector";

export default {
  name: "QuarantineHealthAlert.vue",

  components: {
    JbButtons,
    JbButton,
  },

  setup() {
    const store = useStore()

    const darkMode = computed(() => store.state.darkMode)

    const items = computed(() => store.state.healthAlertDefault)

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
      mdiTrashCan,
      darkMode,
      itemsPaginated
    }
  },

  async created() {
    const store = useStore()
    let healthOrder = await connector.methods.getHealthAlert().then(x => x)
    console.log(healthOrder)
    store.commit('alterHealthAlert' , healthOrder)
  },

  methods: {
    async remove(roomNumber) {
      await connector.methods.removeHealthAlert(roomNumber)
      let meta = await connector.methods.getHealthAlert().then(x => x)
      this.$store.commit('alterHealthAlert', meta);
    }
  }
}
</script>

<style scoped>

</style>
