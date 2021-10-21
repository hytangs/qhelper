<template>
  <RegistrationForm />
  <!-- <RoomSelection v-if="step == 1"/> -->
</template>

<script>
import RegistrationForm from "../../components/arrivals/RegistrationForm";
// import RoomSelection from "../../components/arrivals/RoomSelection";


export default {
  name: "ArrivalsPage",
  components: {
    // RoomSelection,
    RegistrationForm
  },
  // data() {
  //   return {
  //     step: 0,
  //   }
  // },
  // methods:{
  //   change(){
  //     this.step += 1
  //   }
  // }
}
</script>

<style scoped>

</style>
