<template>

<modal-box v-model="isModalActive" title="Add New Room Types">
  <p>Add <b>new room types</b></p>
</modal-box>

  <nav-bar/>
  <aside-menu :menu="menu"/>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Guest Service</hero-bar>
  <main-section>
    <title-sub-bar :icon="mdiChartPie" title="Sales Data overview" />

      <card-component class="mb-6" title="Room Types & Rates" has-table>
        <GuestRoomType/>
        <jb-buttons type="justify-start lg:justify-end" no-wrap>
          <jb-button color="info" label="Add New Room Types" v-on:click="isModalActive = true, addNewRoom()"/>
        </jb-buttons>
      </card-component>


  <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 ">
      <card-component class="mb-6" title="Request / Feedback" has-table>
        <GuestRoomRequest/>
      </card-component>

      <card-component class="mb-6" title="Public Broadcast" has-table>
        <GuestRoomBroadcast/>
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
import JbButton from '../../components/plugins/JbButton'
import JbButtons from '../../components/plugins/JbButtons'
import ModalBox from '../../components/plugins/ModalBox'
import TitleBar from '../../../src/components/plugins/TitleBar'
import HeroBar from '../../../src/components/plugins/HeroBar'
import CardComponent from "../../components/plugins/CardComponent"
import GuestRoomBroadcast from '../../components/admin/admin-components/PublicBroadcast'
import GuestRoomRequest from '../../../src/components/admin/admin-components/GuestRoomRequest'
import GuestRoomStatus from '../../../src/components/admin/admin-components/GuestRoomStatus'
import GuestRoomType from '../../../src/components/admin/admin-components/GuestRoomType'
import TitleSubBar from "../../../src/components/plugins/TitleSubBar";
import {ref} from "vue";

export default {
  name: "AdminTemplate",
  components: {
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar,
    ModalBox,
    JbButton,
    JbButtons,
    TitleBar,
    HeroBar,
    CardComponent,
    GuestRoomBroadcast,
    GuestRoomRequest,
    GuestRoomStatus,
    GuestRoomType,
    TitleSubBar
  },
  setup() {
    const titleStack = ref(['Admin', 'Rooms'])

    const isModalActive = ref(false)

    const roomStatusOptions = [
      "Occupied",
      "Vacant",
      "Cleaning in progress"
    ]

    const roomTypeOptions = [
      "Single",
      "Queen",
      "King",
      "Apartment"
    ]

    return {
      titleStack,
      isModalActive,
      menu,
      roomStatusOptions,
      roomTypeOptions
    }
  },

  methods: {
    async search() {
      // search the room and display
    },

    async addNewRoom() {
      // add new room
    }
  }
}
</script>

<style scoped>

</style>
