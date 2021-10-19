<template>
  <RegistrationForm v-if="step === 0"></RegistrationForm>
  <RoomSelection v-else-if="step === 1"></RoomSelection>
</template>

<script>
import RegistrationForm from "../../components/arrivals/RegistrationForm";
import RoomSelection from "../../components/arrivals/RoomSelection";


export default {
  name: "ArrivalsPage",
  components: {
    RoomSelection,
    RegistrationForm
  },
  data() {
    return {
      step: 0
    }
  }
}
</script>

<style scoped>

</style>
