<template>
  <div>Green pass generation functionality for staff & guests</div>
  <QrcodeVue :value="123456" :size="size" level="H" />
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  name: "GreenPass.vue",
  components: {
    QrcodeVue,
  },
}
</script>

<style scoped>

</style>
