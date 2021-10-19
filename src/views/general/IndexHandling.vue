<template>
<h1 class="text-3xl"> Welcome to QHelper! </h1>
<p> Please enter via respective portals.</p> <br>
<jb-button to="/arrivals" color="info" outline label="Guest Arrivals" />
<jb-button to="/guest/login" color="info" outline label="Guest Portal" />
<jb-button to="/admin/login" color="info" outline label="Admin Portal" />
</template>

<script>
import JbButton from "../../components/plugins/JbButton";

export default {
  name: 'IndexHandling',
  components: {
    JbButton
  }
}
</script>

<style scoped>

</style>
