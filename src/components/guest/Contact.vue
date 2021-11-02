<template>
  <div id="contact-page">
    <div class="header text-center">
      <br><br>
      <h1 class="text-3xl text-blue-500 mb-6">How Can We Help You?</h1>
      <NavBarContact/>
    </div>
  </div>
</template>

<script>
import NavBarContact from './ContactFAQ/NavBarContact'

export default {
  name: "Contact",
  components:{
    NavBarContact
  }
}
</script>

<style scoped>

</style>
