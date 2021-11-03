<template>
<nav-bar/>
<aside-menu :menu="menu"/>
<title-bar :title-stack="titleStack" />
<hero-bar>HR Management</hero-bar>
<main-section>
  <br>
  <card-component class="mb-6" has-table>
      <HRTable/>
  </card-component> 
  <br> <br>
  <jb-buttons type="justify-left lg:justify-left" no-wrap>
    <jb-button color="info" label="Add New Staff" v-on:click="isModalActive = true"/>
  </jb-buttons>
</main-section>

<modal-box v-model="isModalActive" title="Add New Staff">
  <p>Staff Information</p>
  <field>
    <control placeholder="Staff Name" v-model="new_name" />
    <control placeholder="Account Name" v-model="new_id" />
  </field>
  <field label="Position">
    <control :options="positionOptions" v-model="new_position"/>
  </field>
  <jb-buttons type="justify-left lg:justify-left" no-wrap>
    <jb-button color="info" label="Confirm" v-on:click="addNewStaff()"/>
  </jb-buttons>
</modal-box>

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
import ModalBox from '../../components/plugins/ModalBox'
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
    HRTable,
    ModalBox
  },
  setup() {
    const titleStack = ref(['Admin', 'Staff'])

    const isModalActive = ref(false)

    const positionOptions = [
      "Hotel Admin", "Quarantine Manager", "Guest Service Manager", 
      "Food & Logistic Manager", "Financial Manager", "Security Manager"
    ]

    return {
      titleStack,
      menu,
      positionOptions,
      isModalActive
    }
  },

  methods: {
    async addNewStaff() {
      alert("Adding new staff to firebase")
      //add new staff to fs
    },

    async search() {
      //search for staff
    }
  }
}
</script>
