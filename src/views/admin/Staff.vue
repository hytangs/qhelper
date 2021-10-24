<template>
  <nav-bar/>
  <aside-menu :menu="menu"/>
  <title-bar :title-stack="titleStack" />
  <hero-bar>HR Management</hero-bar>
  <main-section>
    <br>
    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-5 ">
      <div class="col-span-2">
        <field>
            <control placeholder="Name / Staff ID" v-model="name" />
          </field>
      </div>
      <div class="col-span-2">
        <field>
            <control :options="positionOptions" v-model="position" />
          </field>
      </div>
      <div>
        <jb-buttons type="justify-center lg:justify-center" no-wrap>
          <jb-button color="info" label="Search" v-on:click="search()"/>
        </jb-buttons>
      </div>
    </div>
    <card-component class="mb-6" has-table>
        <HRTable/>
    </card-component> 
    <br> <br>

  </main-section>
  <footer-bar/>
  <overlay v-show="isAsideLgActive" z-index="z-30" @overlay-click="overlayClick" />
</template>

<script>
import {ref} from "vue"
import menu from '../../../src/views/admin/menu.js'
import NavBar from '../../../src/components/plugins/NavBar'
import AsideMenu from '../../../src/components/plugins/AsideMenu'
import FooterBar from '../../../src/components/plugins/FooterBar'
import Overlay from '../../../src/components/plugins/Overlay'
import TitleBar from '../../../src/components/plugins/TitleBar'
import HeroBar from '../../../src/components/plugins/HeroBar'
import Field from '../../components/plugins/Field'
import Control from '../../components/plugins/Control'
import JbButton from '../../components/plugins/JbButton'
import JbButtons from '../../components/plugins/JbButtons'
import HRTable from '../../../src/components/admin/admin-components/HRTable'

export default {
  name: "AdminTemplate",
  components: {
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar,
    TitleBar,
    HeroBar,
    Field,
    Control,
    JbButton,
    JbButtons,
    HRTable
  },
  setup() {
    const titleStack = ref(['Admin', 'Staff'])

    const positionOptions = [
      "Hotel Admin", "Quarantine Manager", "Guest Service Manager", 
      "Food & Logistic Manager", "Financial Manager", "Security Manager"
    ]

    return {
      titleStack,
      menu,
      positionOptions
    }
  }
}
</script>
