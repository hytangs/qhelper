<template>

<table>
    <thead>
      <tr>
        <th>Guest Name</th>
        <th>Symptoms</th>
        <th>Temperature Declared</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td data-label="Guest Name"> Guest Name </td>
        <td data-label="Symptoms"> Symptoms </td>
        <td data-label="Temperature Declared"> Temperature Declared </td>
        <td data-label="Date"> Date </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button color="danger" :icon="mdiTrashCan" small @click="remove()" />
          </jb-buttons>
        </td>
      </tr>
      <!-- <tr v-for="guest in store.state.healthAlertDefault" :key="guest.guestName">
        <td data-label="Guest Name">{{guest.guestName}} </td>
        <td data-label="Symptoms"> {{guest.symptoms}} </td>
        <td data-label="Temperature Declared"> {{guest.temp}}</td>
        <td data-label="Date"> {{guest.date}} </td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button color="danger" :icon="mdiTrashCan" small @click="remove()" />
          </jb-buttons>
        </td>
      </tr> -->
    </tbody>
</table>
</template>

<script>
// import { ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { mdiTrashCan } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'
// import connector from "../../../connector"

export default {
  name: "QuarantineHealthAlert.vue",

  components: {
    JbButtons,
    JbButton,
  },

  setup() {
    const store = useStore()

    const darkMode = computed(() => store.state.darkMode)

    return {
      mdiTrashCan,
      darkMode
    }
  },

  // async created() {
  //   const store = useStore()
  //   let healthOrder = await connector.methods.getHealthAlert().then(x => x)
  //   console.log(healthOrder)
  //   store.commit('alterHealthAlert' , healthOrder)
  // }
}
</script>

<style scoped>

</style>