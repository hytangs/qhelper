<template>
  <nav-bar/>
  <aside-menu :menu="menu"/>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Guest Service</hero-bar>
  <main-section>
    <br> 
    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3 ">
      <div class="col-span-2">
        <card-component class="mb-6" title="Room Status" has-table>
          <field>
            <control placeholder="Room Number" v-model="roomNumber" />
          </field>
          <field>
            <control placeholder="Room Status" :options="roomStatusOptions" v-model="roomNumber" />
          </field>
          <field>
            <control placeholder="Room Type" :options="roomTypeOptions" v-model="roomType" />
          </field>
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button color="info" label="Search" v-on:click="search()"/>
          </jb-buttons>
          <GuestRoomStatus/>
        </card-component>
      </div>

      <card-component class="mb-6" title="Room Types & Rates" has-table>
        <GuestRoomType/>
        <jb-buttons type="justify-start lg:justify-end" no-wrap>
          <jb-button color="info" label="Add New Room Types" v-on:click="saveTofs()"/>
        </jb-buttons>
      </card-component>
  </div>

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
import TitleBar from '../../../src/components/plugins/TitleBar'
import HeroBar from '../../../src/components/plugins/HeroBar'
import CardComponent from "../../components/plugins/CardComponent"
import GuestRoomBroadcast from '../../../src/components/admin/admin-components/GuestRoomBroadcast'
import GuestRoomRequest from '../../../src/components/admin/admin-components/GuestRoomRequest'
import GuestRoomStatus from '../../../src/components/admin/admin-components/GuestRoomStatus'
import GuestRoomType from '../../../src/components/admin/admin-components/GuestRoomType'
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
    CardComponent,
    GuestRoomBroadcast,
    GuestRoomRequest,
    GuestRoomStatus,
    GuestRoomType
  },
  setup() {
    const titleStack = ref(['Admin', 'Rooms'])

    return {
      titleStack,
      menu,
    }
  }
}
</script>

<style scoped>

</style>
