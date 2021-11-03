<template>
  <table>
    <thead>
      <tr>
        <th>Room Number</th>
        <th>Room Guest Name</th>
        <th>Guest Status</th>
        <th>Room Type</th>
        <th>Checkout Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(col) in itemsPaginated" :key="parseInt(col.roomNo)">
        <GuestEntry
          :RoomNumber="col.roomNo"
          :RoomStatus="col.roomStatus"
          :RoomType="col.roomType"
          :Checkout="col.roomCheckout"
          :GuestName="col.roomGuestName"
        >
        </GuestEntry>
      </template>
    </tbody>
  </table>
  <div class="table-pagination">
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
  </div>
</template>

<script>
import { mdiPencilOutline } from '@mdi/js'
import GuestEntry from "./GuestEntry";
import { useStore } from 'vuex';
import Level from '../../plugins/Level'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'
import connector from "../../../connector";
import {computed, ref} from "vue";

export default {
  name: "GuestRoomStatus.vue",

  components: {
    GuestEntry,
    Level,
    JbButtons,
    JbButton
  },

  setup() {
    const items = computed(() => store.state.roomGuestDefault)

    const perPage = ref(10)

    const currentPage = ref(0)

    const itemsPaginated = computed(
        () => items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
    )

    const numPages = computed(() => Math.ceil(items.value.length / perPage.value))

    const currentPageHuman = computed(() => currentPage.value + 1)

    const pagesList = computed(() => {
      const pagesList = []

      for (let i = 0; i < numPages.value; i++) {
        pagesList.push(i)
      }

      return pagesList
    })

    const store = useStore()

    return {
        mdiPencilOutline,
        store,
        itemsPaginated,
        items,
        currentPage,
        currentPageHuman,
        pagesList,
        numPages
      }
  },
  async created() {
    const store = useStore()
    let meta = await connector.methods.getRoomMeta().then(x => x)
    console.log(meta)
    store.commit('alterroomguest' , meta)
  }
}
</script>

<style scoped>

</style>
