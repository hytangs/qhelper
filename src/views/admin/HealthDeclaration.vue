<template>
  <nav-bar/>
  <aside-menu :menu="menu"/>
  <title-bar :title-stack="titleStack" />
  <hero-bar v-if="zone === '1' || zone === '2'">Quarantine Settings</hero-bar>
  <hero-bar v-else>Unauthorized - Please contact web administrator.</hero-bar>
  <main-section  v-if="zone === '1' || zone === '2'">
    <br>
    <card-component class="mb-6" title="Quarantine Status" has-table>
        <quarantine-status/>
    </card-component>

    <br> <br>

    <card-component class="mb-6" title="Active Health Alerts" has-table>
        <QuarantineHealthAlert/>
    </card-component>

    <br> <br>

    <!-- <card-component class="mb-6" title="Quarantine Plan Settings" has-table>
        <QuarantinePlan/>
    </card-component>

    <br> <br> -->

    <card-component class="mb-6" title="Medical Checkouts" has-table>
        <QuarantineMedicalCheckouts/>
    </card-component>

    <br> <br>

    <card-component class="mb-6" title="Public Broadcast" has-table>
        <GuestRoomBroadcast/>
    </card-component>

  </main-section>
  <footer-bar v-if="zone === '1' || zone === '2'"/>
  <overlay v-show="isAsideLgActive" z-index="z-30" @overlay-click="overlayClick" />
</template>

<script>
import { useStore } from "vuex";
import menu from './menu.js'
import NavBar from '../../../src/components/plugins/NavBar'
import AsideMenu from '../../../src/components/plugins/AsideMenu'
import FooterBar from '../../../src/components/plugins/FooterBar'
import Overlay from '../../../src/components/plugins/Overlay'
import TitleBar from '../../../src/components/plugins/TitleBar'
import HeroBar from '../../../src/components/plugins/HeroBar'
import CardComponent from "../../components/plugins/CardComponent"
import QuarantineStatus from '../../../src/components/admin/admin-components/QuarantineStatus'
// import QuarantinePlan from '../../../src/components/admin/admin-components/QuarantinePlan'
import QuarantineHealthAlert from '../../../src/components/admin/admin-components/QuarantineHealthAlert'
import GuestRoomBroadcast from '../../components/admin/admin-components/PublicBroadcast'
import QuarantineMedicalCheckouts from '../../../src/components/admin/admin-components/QuarantineMedicalCheckouts'
import {computed, ref} from "vue";
import connector from "../../connector"
import localsession from "../../store/localsession";

export default {
  name: "AdminTemplate",
  components: {
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar,
    TitleBar,
    HeroBar,
    QuarantineStatus,
    // QuarantinePlan,
    QuarantineHealthAlert,
    GuestRoomBroadcast,
    QuarantineMedicalCheckouts,
    CardComponent,
  },
  setup() {
    const titleStack = ref(['Admin', 'Health'])

    const store = useStore()

    const darkMode = computed(() => store.state.darkMode);

    const zone = localsession.methods.getAdminZone();

    connector.methods.getHealthAlert()

    return {
      titleStack,
      menu,
      zone,
      darkMode
    }
  }
}
</script>

<style>
body {
  @apply pt-14 xl:pl-60;
}
</style>
