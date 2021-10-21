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

    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 ">
        <card-component class="mb-6" title="Active Health Alerts" has-table>
            <QuarantineHealthAlert/>
        </card-component>

        <card-component class="mb-6" title="Quarantine Plan Settings" has-table>
            <QuarantinePlan/>
        </card-component>
    </div>

    <br> <br>

    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 ">
        <card-component class="mb-6" title="Medical Checkouts" has-table>
            <QuarantineMedicalCheckouts/>
        </card-component>

        <card-component class="mb-6" title="Contact Guest" has-table>
            <QuarantineContactGuest/>
        </card-component>
    </div>
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
import QuarantineContactGuest from '../../../src/components/admin/admin-components/QuarantineContactGuest'
import QuarantineMedicalCheckouts from '../../../src/components/admin/admin-components/QuarantineMedicalCheckouts'
import {ref} from "vue";

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
    QuarantineContactGuest,
    QuarantineMedicalCheckouts,
    CardComponent,
  },
  setup() {
    const titleStack = ref(['Admin', 'Health'])

    return {
      titleStack,
      menu,
    }
  }
}
</script>

<style scoped>

</style>
