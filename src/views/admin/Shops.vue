<template>
  <nav-bar />
  <aside-menu :menu="menu" />
  <title-bar :title-stack="titleStack" />
  <hero-bar>Retail Shop Management</hero-bar>
  <main-section>
    <notification color="info" :icon="mdiAlertCircle">
      There are <b>2</b> new orders received! <b>3</b> pending orders remaining!
      <template #right>
        <jb-button
          :icon="mdiAlertCircle"
          :outline="darkMode"
          label="View"
          target="_blank"
          small
        />
      </template>
    </notification>
    <card-component :icon="mdiAccountMultiple" class="mb-6" title="Orders List" has-table>
      <ShopOrders/>
    </card-component>
    <notification color="warning" :icon="mdiAlertCircle">
      Several goods are <b> Out of Stock! </b> Check Inventory!
      <template #right>
        <jb-button
          :icon="mdiAlertCircle"
          :outline="darkMode"
          label="View"
          target="_blank"
          small
        />
      </template>
    </notification>
    <card-component :icon="mdiTable" class="mb-6" title="Inventory List" has-table>
      <Inventory/>
    </card-component>
  </main-section>

  <bottom-other-pages-section />
  <footer-bar />
  <overlay
    v-show="isAsideLgActive"
    z-index="z-30"
    @overlay-click="overlayClick"
  />
</template>

<script>
import { ref } from "vue";
import {
  mdiAccount,
  mdiMonitorCellphone,
  mdiAccountCircle,
  mdiAccountMultiple,
  mdiMail,
  mdiTableBorder,
  mdiTableOff,
  mdiTable,
  mdiAlertCircle
} from "@mdi/js";
import MainSection from "../../components/plugins/MainSection";
//import Notification from '../../components/plugins/Notification'
import TitleBar from "../../components/plugins/TitleBar";
import HeroBar from "../../components/plugins/HeroBar";
//import TitleSubBar from '../../components/plugins/TitleSubBar'
import menu from "../../../src/views/admin/menu.js";
import NavBar from "../../../src/components/plugins/NavBar";
import AsideMenu from "../../../src/components/plugins/AsideMenu";
import FooterBar from "../../../src/components/plugins/FooterBar";
import Overlay from "../../../src/components/plugins/Overlay";
import CardComponent from "../../../src/components/plugins/CardComponent";
import ShopOrders from '../../../src/components/admin/admin-components/ShopOrders';
import Inventory from '../../../src/components/admin/admin-components/Inventory';
import Notification from "../../../src/components/plugins/Notification";
import JbButton from "../../../src/components/plugins/JbButton";

export default {
  name: "Tables",
  components: {
    //TitleSubBar,
    MainSection,
    HeroBar,
    TitleBar,
    //Notification,
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar,
    CardComponent,
    ShopOrders,
    Inventory,
    Notification,
    JbButton
  },
  setup() {

    const titleStack = ref(["Admin", "Shops"]);

    return {
      titleStack,
      mdiAccount,
      mdiMonitorCellphone,
      mdiAccountCircle,
      mdiAccountMultiple,
      mdiMail,
      mdiTableBorder,
      mdiTableOff,
      mdiAlertCircle,
      mdiTable,
      menu,
    };
  },
};
</script>