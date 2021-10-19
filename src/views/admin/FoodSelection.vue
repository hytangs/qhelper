<template>
  <nav-bar/>
  <aside-menu :menu="menu"/>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Food Selection - Order Details</hero-bar>
  <main-section>
    <notification color="info" :icon="mdiMonitorCellphone">
      <b>Responsive table.</b> Collapses on mobile
    </notification>

    <card-component class="mb-6" title="Breakfast" :icon="mdiAccountMultiple" has-table>
      <food-selection-table checkable/>
    </card-component>

    <!-- <title-sub-bar :icon="mdiTableBorder" title="Wrapped variation"/> -->

    <!-- <notification color="success" :icon="mdiTableBorder">
      <b>Tightly wrapped</b> &mdash; table header becomes card header
    </notification> -->

    <card-component class="mb-6" title="Lunch" :icon="mdiAccountMultiple" has-table>
      <food-selection-table checkable/>
    </card-component>

    <!-- <title-sub-bar :icon="mdiTableOff" title="Empty variation"/> -->

    <!-- <notification color="danger" :icon="mdiTableOff">
      <b>Empty table.</b> When there's nothing to show
    </notification> -->

    <!-- <card-component empty/> -->
    <card-component class="mb-6" title="Dinner" :icon="mdiAccountMultiple" has-table>
      <food-selection-table checkable/>
    </card-component>

  </main-section>

  <bottom-other-pages-section />
  <footer-bar/>
  <overlay v-show="isAsideLgActive" z-index="z-30" @overlay-click="overlayClick" />
</template>

<script>
import { ref } from 'vue'
import { mdiMonitorCellphone, mdiAccountMultiple, mdiTableBorder, mdiTableOff } from '@mdi/js'
import MainSection from '../../components/plugins/MainSection'
import Notification from '../../components/plugins/Notification'
import FoodSelectionTable from '../../components/plugins/FoodSelectionTable'
import CardComponent from '../../components/plugins/CardComponent'
import TitleBar from '../../components/plugins/TitleBar'
import HeroBar from '../../components/plugins/HeroBar'
import BottomOtherPagesSection from '../../components/plugins/BottomOtherPagesSection'
//import TitleSubBar from '../../components/plugins/TitleSubBar'
import menu from '../../../src/views/admin/menu.js'
import NavBar from '../../../src/components/plugins/NavBar'
import AsideMenu from '../../../src/components/plugins/AsideMenu'
import FooterBar from '../../../src/components/plugins/FooterBar'
import Overlay from '../../../src/components/plugins/Overlay'

export default {
  name: 'Tables',
  components: {
    //TitleSubBar,
    MainSection,
    HeroBar,
    TitleBar,
    CardComponent,
    FoodSelectionTable,
    Notification,
    BottomOtherPagesSection,
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar
  },
  setup () {
    const titleStack = ref(['Admin', 'Tables'])

    return {
      titleStack,
      mdiMonitorCellphone,
      mdiAccountMultiple,
      mdiTableBorder,
      mdiTableOff,
      menu
    }
  }
}
</script>
