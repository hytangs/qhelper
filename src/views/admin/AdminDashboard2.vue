<template>
  <nav-bar />
  <aside-menu :menu="menu" />
  <title-bar :title-stack="titleStack" />
  <hero-bar v-if="zone !== '0'">Dashboard</hero-bar>
  <hero-bar v-else>Unauthorized</hero-bar>
  <main-section v-if="zone !== '0'">
    <notification color="info" :icon="mdiAlertCircle">
      Please follow Personal Data Protection Act when using this system.
      <template #right>
        <jb-button
          href="https://www.pdpc.gov.sg/Overview-of-PDPA/The-Legislation/Personal-Data-Protection-Act"
          :icon="mdiAlertCircle"
          :outline="darkMode"
          label="View"
          target="_blank"
          small
        />
      </template>
    </notification>

    <card-component
      :icon="mdiAccountMultiple"
      class="mb-6"
      title="Hotel Overview"
    >
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <card-widget
          trend="8%"
          trend-type="down"
          color="text-green-500"
          :icon="mdiAccountMultiple"
          :number="80"
          label="Current Guests"
        />
        <card-widget
          trend="6%"
          trend-type="up"
          color="text-green-500"
          :icon="mdiBed"
          :number="72"
          label="Occupied Rooms"
        />
        <card-widget
          trend="3%"
          trend-type="down"
          color="text-green-500"
          :icon="mdiBedEmpty"
          :number="48"
          label="Vacant Rooms"
        />
        <card-widget
          trend="2%"
          trend-type="up"
          color="text-green-500"
          :icon="mdiAccountMultiple"
          :number="120"
          label="Current Employees"
        />
        <card-widget
          trend="12%"
          trend-type="up"
          color="text-blue-500"
          :icon="mdiCartOutline"
          :number="17820"
          prefix="$"
          label="Sales"
        />
        <card-widget
          trend="High"
          trend-type="alert"
          color="text-red-500"
          :icon="mdiChartTimelineVariant"
          :number="25.6"
          suffix="%"
          label="Performance"
        />
      </div>
    </card-component>
  </main-section>
  <main-section v-else>
    <h1 class="text-2xl text-gray-700 hover:text-gray-900">
      You don't have access to visit this page.<br>
      Please contact web administrator for more info.
    </h1>
  </main-section>
  <footer-bar />
  <overlay
    v-show="isAsideLgActive"
    z-index="z-30"
    @overlay-click="overlayClick"
  />
</template>

<script>
// @ is an alias to /src
import { computed, ref} from "vue";
import { useStore } from "vuex";
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiFinance,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
  mdiAlertCircle,
  mdiBed,
  mdiBedEmpty
} from "@mdi/js";
import MainSection from "../../../src/components/plugins/MainSection";
import TitleBar from "../../../src/components/plugins/TitleBar";
import HeroBar from "../../../src/components/plugins/HeroBar";
import CardWidget from "../../../src/components/plugins/CardWidget";
import CardComponent from "../../../src/components/plugins/CardComponent";
import Notification from "../../../src/components/plugins/Notification";
import JbButton from "../../../src/components/plugins/JbButton";
import menu from "../../../src/views/admin/menu.js";
import NavBar from "../../../src/components/plugins/NavBar";
import AsideMenu from "../../../src/components/plugins/AsideMenu";
import FooterBar from "../../../src/components/plugins/FooterBar";
import Overlay from "../../../src/components/plugins/Overlay";
import localsession from "../../store/localsession";

export default {
  name: "AdminDashboard",
  components: {
    MainSection,
    CardWidget,
    HeroBar,
    TitleBar,
    Notification,
    JbButton,
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar,
    CardComponent,
  },
  setup() {
    const titleStack = ref(["Admin", "Dashboard"]);

    const store = useStore();

    const darkMode = computed(() => store.state.darkMode);

    const zone = localsession.methods.getAdminZone();

    return {
      titleStack,
      darkMode,
      mdiAccountMultiple,
      mdiCartOutline,
      mdiChartTimelineVariant,
      mdiFinance,
      mdiMonitorCellphone,
      mdiReload,
      mdiGithub,
      mdiChartPie,
      mdiAlertCircle,
      mdiBed,
      mdiBedEmpty,
      menu,
      zone,
    };
  },
};
</script>

<style>
body {
  @apply pt-14 xl:pl-60;
}
</style>
