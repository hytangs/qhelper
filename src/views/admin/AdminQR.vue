<template>
  <nav-bar/>
  <aside-menu :menu="menu"/>
  <title-bar :title-stack="titleStack" />
  <hero-bar v-if="zone > '0'">QR Pass for Admin</hero-bar>
  <hero-bar v-else>Unauthorized - Please contact web administrator.</hero-bar>
  <main-section v-if="zone > '0'">
    <br> <br>
    <card-component id="qrcode" class="left-50">

      <h2 class="text-black-900 text-2xl hover:text-blue-800"> Admin Pass for <b>{{this.adminname }}</b> </h2>
      <br />

      <p class="text-xl text-gray-900 hover:text-gray-700"> Remember to take full PPE upon entry to Risk Zones!</p>
      <br />

      <QrcodeVue :value=this.exportQRValue :size="275" />
      <br />

      <p class="text-xl text-gray-900 hover:text-gray-700"> Zones authorized: <b>  {{this.zone}} </b> </p>
      <p class="text-xl text-gray-900 hover:text-gray-700"> Strictly for staff: <b>{{this.adminname}}</b>'s use only! </p>
      <p class="text-lg text-gray-900 hover:text-gray-700"> Entries will be recorded. Invalid entries will be tracked and may be prosecuted. </p>
    </card-component>
    <br> <br>
  </main-section>
  <footer-bar v-if="zone > '0'"/>
  <overlay v-show="isAsideLgActive" z-index="z-30" @overlay-click="overlayClick" />
</template>

<script>
import menu from '../../../src/views/admin/menu.js'
import NavBar from '../../../src/components/plugins/NavBar'
import AsideMenu from '../../../src/components/plugins/AsideMenu'
import FooterBar from '../../../src/components/plugins/FooterBar'
import Overlay from '../../../src/components/plugins/Overlay'
import TitleBar from '../../../src/components/plugins/TitleBar'
import HeroBar from '../../../src/components/plugins/HeroBar'
import {computed, ref} from "vue";
import QrcodeVue from "qrcode.vue";
import datequery from "../../components/plugins/helpers/datequery";
import localsession from "../../store/localsession";
import {useStore} from "vuex";
import CardComponent from "../../components/plugins/CardComponent";

export default {
  name: "AdminQR",
  components: {
    CardComponent,
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar,
    TitleBar,
    HeroBar,
    QrcodeVue
  },
  setup() {
    const titleStack = ref(['Admin', 'QR Pass'])

    const store = useStore();

    const darkMode = computed(() => store.state.darkMode);

    const zone = localsession.methods.getAdminZone();

    return {
      titleStack,
      menu,
      darkMode,
      zone,
    }
  },

  data() {
    return {
      exportQRValue: "{ QRREAD/" + String(localsession.methods.getAdminZone()) + "/"
          + String(localsession.methods.getAdminName()) + "/"
          + "ADMINPASS" + "/"
          + datequery.methods.fetchTodayString() + "/"
          + "QHELPER/QR01 }",
      adminname: localsession.methods.getAdminName()
    }
  }
}
</script>


<style>
body {
  @apply pt-14 xl:pl-60;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
