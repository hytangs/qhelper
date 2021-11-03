<template>
  <nav-bar/>
  <aside-menu :menu="menu"/>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Quarantine Settings</hero-bar>
  <main-section>
    <br>
    <card-component class="mb-6" title="Quarantine Status" has-table>
        <quarantine-status/>
    </card-component>

    <br> <br>

    <card-component class="mb-6" title="Active Health Alerts" has-table>
        <QuarantineHealthAlert/>
    </card-component>

    <br> <br>

    <card-component class="mb-6" title="Quarantine Plan Settings" has-table>
        <QuarantinePlan/>
    </card-component>

    <br> <br>

    <card-component class="mb-6" title="Medical Checkouts" has-table>
        <QuarantineMedicalCheckouts/>
    </card-component>

    <br> <br>

    <card-component class="mb-6" title="Public Broadcast" has-table>
        <GuestRoomBroadcast/>
    </card-component>

  </main-section>
  <footer-bar/>
  <overlay v-show="isAsideLgActive" z-index="z-30" @overlay-click="overlayClick" />
</template>

<script>
import menu from './menu.js'
import NavBar from '../../../src/components/plugins/NavBar'
import AsideMenu from '../../../src/components/plugins/AsideMenu'
import FooterBar from '../../../src/components/plugins/FooterBar'
import Overlay from '../../../src/components/plugins/Overlay'
import TitleBar from '../../../src/components/plugins/TitleBar'
import HeroBar from '../../../src/components/plugins/HeroBar'
import CardComponent from "../../components/plugins/CardComponent"
import QuarantineStatus from '../../../src/components/admin/admin-components/QuarantineStatus'
import QuarantinePlan from '../../../src/components/admin/admin-components/QuarantinePlan'
import QuarantineHealthAlert from '../../../src/components/admin/admin-components/QuarantineHealthAlert'
import GuestRoomBroadcast from '../../../src/components/admin/admin-components/GuestRoomBroadcast'
import QuarantineMedicalCheckouts from '../../../src/components/admin/admin-components/QuarantineMedicalCheckouts'
import {ref} from "vue";
import connector from "../../connector"

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
    QuarantinePlan,
    QuarantineHealthAlert,
    GuestRoomBroadcast,
    QuarantineMedicalCheckouts,
    CardComponent,
  },
  setup() {
    const titleStack = ref(['Admin', 'Health'])

    connector.methods.getHealthAlert()

    return {
      titleStack,
      menu,
    }
  }
}
</script>

<style scoped>

</style>
