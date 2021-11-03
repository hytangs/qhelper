<template>
  <nav-bar/>
  <aside-menu :menu="menu"/>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Rooms</hero-bar>
  <main-section>
    <title-sub-bar :icon="mdiTableBorder" title="Room Status"/>

    <card-component class="mb-6" title="Clients" :icon="mdiAccountMultiple" has-table>
      <GuestRoomStatus/>
    </card-component>

    <title-sub-bar :icon="mdiTableBorder" title="Room Types & Rates"/>

    <card-component class="mb-6" title="Room Types & Rates" has-table>
      <GuestRoomType/>
    </card-component>

    <title-sub-bar :icon="mdiTableBorder" title="Guest Service"/>

    <card-component class="mb-6" title="Request / Feedback" has-table>
      <GuestRoomRequest/>
    </card-component>

    <title-sub-bar :icon="mdiTableBorder" title="Public Broadcast"/>

    <card-component class="mb-6" title="Public Broadcast" has-table>
      <GuestRoomBroadcast/>
    </card-component>

    <title-sub-bar :icon="mdiTableOff" title="Empty variation: template"/>

    <notification color="danger" :icon="mdiTableOff">
      <b>Empty table.</b> When there's nothing to show
    </notification>

    <card-component empty/>
  </main-section>

  <footer-bar/>
  <overlay v-show="isAsideLgActive" z-index="z-30" @overlay-click="overlayClick" />
</template>

<script>
import { ref } from 'vue'
import { mdiMonitorCellphone, mdiAccountMultiple, mdiTableBorder, mdiTableOff } from '@mdi/js'
import MainSection from '../../components/plugins/MainSection'
import Notification from '../../components/plugins/Notification'
import CardComponent from '../../components/plugins/CardComponent'
import TitleBar from '../../components/plugins/TitleBar'
import HeroBar from '../../components/plugins/HeroBar'
import TitleSubBar from '../../components/plugins/TitleSubBar'
import menu from '../../../src/views/admin/menu.js'
import NavBar from '../../../src/components/plugins/NavBar'
import AsideMenu from '../../../src/components/plugins/AsideMenu'
import FooterBar from '../../../src/components/plugins/FooterBar'
import Overlay from '../../../src/components/plugins/Overlay'
import GuestRoomStatus from "../../components/admin/admin-components/GuestRoomStatus";
import GuestRoomType from "../../components/admin/admin-components/GuestRoomType";
import GuestRoomRequest from "../../components/admin/admin-components/GuestRoomRequest";
import GuestRoomBroadcast from "../../components/admin/admin-components/GuestRoomBroadcast";
import connector from "../../connector";

export default {
  name: 'Rooms',
  components: {
    TitleSubBar,
    MainSection,
    HeroBar,
    TitleBar,
    CardComponent,
    Notification,
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar,
    GuestRoomStatus,
    GuestRoomType,
    GuestRoomRequest,
    GuestRoomBroadcast,
  },
  setup () {
    const titleStack = ref(['Admin', 'Rooms'])

    connector.methods.getRoomMeta()

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
