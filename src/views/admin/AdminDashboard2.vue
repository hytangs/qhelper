<template>
  <nav-bar />
  <aside-menu :menu="menu" />
  <title-bar :title-stack="titleStack" />
  <hero-bar v-if="zone > '0'">Dashboard</hero-bar>
  <hero-bar v-else>Unauthorized - Please contact web administrator.</hero-bar>
  <main-section v-if="zone > '0'">
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
          trend=" updated "
          trend-type="up"
          color="text-green-500"
          :icon="mdiBed"
          :number=store.state.totalrooms
          label="Total Rooms"
        />
        <card-widget
          trend=" updated "
          trend-type="up"
          color="text-green-500"
          :icon="mdiAccountMultiple"
          :number=store.state.occupiedrooms
          label="Occupied Rooms"
        />
        <card-widget
          trend=" updated "
          trend-type="up"
          color="text-green-500"
          :icon="mdiBedEmpty"
          :number=store.state.vacantrooms
          label="Vacant Rooms"
        />
        <card-widget
          trend=" updated "
          trend-type="up"
          color="text-green-500"
          :icon="mdiAccountMultiple"
          :number=store.state.countstaff
          label="Current Employees"
        />
        <card-widget
          trend=" updated "
          trend-type="up"
          color="text-green-500"
          :icon="mdiCartOutline"
          :number="17820"
          prefix="$"
          label="Finance"
        />
        <card-widget
          trend=" updated "
          trend-type="up"
          color="text-green-500"
          :icon="mdiCalendar"
          :number=datetoday
          label="Date"
        />
      </div>
    </card-component>

    <!-- <card-component :icon="mdiAccountMultiple" class="mb-12" title="Internal Communication" has-table>
      <internal-communication />
    </card-component> -->
    <card-component :icon="mdiAccountMultiple" class="mb-12" title="Assistance Request" has-table>
      <assistance-request />
    </card-component>

    <card-component
      title="Booking Summary"
      :icon="mdiFinance"
      :header-icon="mdiReload"
      class="mb-6"
      @header-icon-click="fillPieChartData, fillPieChartData2"
    >
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 ">
        <card-component class="mb-6" title="International Guests">
          <div v-if="piechartData">
            <pie-chart :data="piechartData" class="h-96" />
          </div>
        </card-component>

        <card-component class="mb-6" title="Domestic Guests">
          <div v-if="piechartData2">
            <pie-chart :data="piechartData2" class="h-96" />
          </div>
        </card-component>
      </div>
    </card-component>

    <card-component class="mb-6" title="Public Broadcast" has-table>
        <GuestRoomBroadcast/>
      </card-component>

  </main-section>
  <footer-bar v-if="zone > '0'"/>
  <overlay
    v-show="isAsideLgActive"
    z-index="z-30"
    @overlay-click="overlayClick"
  />
</template>

<script>
// @ is an alias to /src
import {computed, ref, onMounted} from "vue";
import { useStore } from "vuex";
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiCalendar,
  mdiFinance,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
  mdiAlertCircle,
  mdiBed,
  mdiBedEmpty,
  mdiTableAccount
} from "@mdi/js";
import * as charts from "../../../src/components/admin/admin-components/Charts/charts";
import PieChart from "../../../src/components/admin/admin-components/Charts/PieChart";
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
//import InternalCommunication from "../../../src/components/admin/admin-components/InternalCommunication";
import AssistanceRequest from "../../components/admin/admin-components/AssistanceRequest.vue";
import GuestRoomBroadcast from '../../components/admin/admin-components/PublicBroadcast';
import connector from "../../connector";
import datequery from "../../components/plugins/helpers/datequery";

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
    // InternalCommunication,
    AssistanceRequest,
    PieChart,
    GuestRoomBroadcast
  },
  setup() {
    const titleStack = ref(["Admin", "Dashboard"]);

    const store = useStore();

    const darkMode = computed(() => store.state.darkMode);

    const zone = localsession.methods.getAdminZone();

    const piechartData = ref(null);
    const piechartData2 = ref(null);

    const fillPieChartData = () => {
      piechartData.value = charts.samplePieChartData();
    };

    const fillPieChartData2 = () => {
      piechartData2.value = charts.samplePieChartData2();
    };

    const datetoday = datequery.methods.addDaysOutput(1);

    onMounted(() => {
      fillPieChartData(),
      fillPieChartData2();
    });


    return {
      titleStack,
      darkMode,
      mdiAccountMultiple,
      mdiCartOutline,
      mdiCalendar,
      mdiFinance,
      mdiMonitorCellphone,
      mdiReload,
      mdiGithub,
      mdiChartPie,
      mdiAlertCircle,
      mdiBed,
      mdiBedEmpty,
      mdiTableAccount,
      menu,
      zone,
      store,
      piechartData,
      fillPieChartData,
      piechartData2,
      fillPieChartData2,
      datetoday
    };
  },

  async created() {
    const store = useStore()
    let meta = await connector.methods.getMetaTuple().then(x => x)
    store.commit('meta' , {meta})

    let countstaff = await connector.methods.countStaff()
    store.commit('countstaffaction', countstaff)
  }
};
</script>

<style>
body {
  @apply pt-14 xl:pl-60;
}
</style>
