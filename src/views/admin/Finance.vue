<template>
  <nav-bar />
  <aside-menu :menu="menu" />
  <title-bar :title-stack="titleStack" />
  <hero-bar v-if="zone === '1' || zone === '5'">Financial Data Summary</hero-bar>
  <hero-bar v-else>Unauthorized - Please contact web administrator.</hero-bar>
  <main-section v-if="zone === '1' || zone === '5'">
    <title-sub-bar :icon="mdiChartPie" title="Sales Data overview" />

    <card-component
      title="Sales Data of Meals, Retail and Housing"
      :icon="mdiFinance"
      :header-icon="mdiReload"
      class="mb-6"
      @header-icon-click="fillLineChartData"
    >
      <div v-if="linechartData">
        <line-chart :data="linechartData" class="h-96" />
      </div>
    </card-component>

    <card-component
      title="Average Daily Occupancy Rate"
      :icon="mdiFinance"
      :header-icon="mdiReload"
      class="mb-6"
      @header-icon-click="fillBarChartData"
    >
      <div v-if="barchartData">
        <bar-chart :data="barchartData" class="h-96" />
      </div>
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

    <card-component
      title="Occupancy and Revenue per Room of Different Room Types"
      :icon="mdiFinance"
      :header-icon="mdiReload"
      class="mb-6"
      @header-icon-click="fillBarChartData2, fillBarChartData3"
    >

      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 ">
        <card-component class="mb-6" title="Occupancy Report">
          <div v-if="barchartData2">
            <bar-chart :data="barchartData2" class="h-96" />
          </div>
        </card-component>

        <card-component class="mb-6" title="Revenue per Room Report">
          <div v-if="barchartData3">
            <bar-chart :data="barchartData3" class="h-96" />
          </div>
        </card-component>
      </div>

    </card-component>

    <card-component :icon="mdiAccountMultiple" class="mb-6" title="Guest Payment History" has-table>
      <PaymentHistory/>
    </card-component>

  </main-section>
  <footer-bar v-if="zone === '1' || zone === '5'"/>
  <overlay
    v-show="isAsideLgActive"
    z-index="z-30"
    @overlay-click="overlayClick"
  />
</template>

<script>
// @ is an alias to /src
import { computed, ref, onMounted } from "vue";
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
} from "@mdi/js";
import * as charts from "../../../src/components/admin/admin-components/Charts/charts";
import LineChart from "../../../src/components/admin/admin-components/Charts/LineChart";
import BarChart from "../../../src/components/admin/admin-components/Charts/BarChart";
import PieChart from "../../../src/components/admin/admin-components/Charts/PieChart";
import MainSection from "../../../src/components/plugins/MainSection";
import TitleBar from "../../../src/components/plugins/TitleBar";
import HeroBar from "../../../src/components/plugins/HeroBar";
import CardComponent from "../../../src/components/plugins/CardComponent";
import TitleSubBar from "../../../src/components/plugins/TitleSubBar";
import menu from "../../../src/views/admin/menu.js";
import NavBar from "../../../src/components/plugins/NavBar";
import AsideMenu from "../../../src/components/plugins/AsideMenu";
import FooterBar from "../../../src/components/plugins/FooterBar";
import Overlay from "../../../src/components/plugins/Overlay";
import PaymentHistory from '../../../src/components/admin/admin-components/PaymentHistory'
import localsession from "../../store/localsession";

export default {
  name: "Home",
  components: {
    TitleSubBar,
    MainSection,
    LineChart,
    BarChart,
    PieChart,
    CardComponent,
    HeroBar,
    TitleBar,
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar,
    PaymentHistory
  },
  setup() {
    const titleStack = ref(["Admin", "Finance"]);

    const linechartData = ref(null);
    const barchartData = ref(null);
    const barchartData2 = ref(null);
    const barchartData3 = ref(null);
    const piechartData = ref(null);
    const piechartData2 = ref(null);

    const zone = localsession.methods.getAdminZone()

    const fillLineChartData = () => {
      linechartData.value = charts.sampleLineChartData();
    };

    const fillBarChartData = () => {
      barchartData.value = charts.sampleBarChartData();
    };

    const fillBarChartData2 = () => {
      barchartData2.value = charts.sampleBarChartData2();
    };

    const fillBarChartData3 = () => {
      barchartData3.value = charts.sampleBarChartData3();
    };

    const fillPieChartData = () => {
      piechartData.value = charts.samplePieChartData();
    };

    const fillPieChartData2 = () => {
      piechartData2.value = charts.samplePieChartData2();
    };

    onMounted(() => {
      fillLineChartData(),
      fillBarChartData(),
      fillBarChartData2(),
      fillBarChartData3(),
      fillPieChartData(),
      fillPieChartData2();
    });

    const store = useStore();

    const clientBarItems = computed(() => store.state.clients.slice(0, 3));

    const transactionBarItems = computed(() => store.state.history.slice(0, 3));

    const darkMode = computed(() => store.state.darkMode);

    return {
      titleStack,
      linechartData,
      fillLineChartData,
      barchartData,
      fillBarChartData,
      barchartData2,
      fillBarChartData2,
      barchartData3,
      fillBarChartData3,
      piechartData,
      fillPieChartData,
      piechartData2,
      fillPieChartData2,
      clientBarItems,
      transactionBarItems,
      darkMode,
      mdiAccountMultiple,
      mdiCartOutline,
      mdiChartTimelineVariant,
      mdiFinance,
      mdiMonitorCellphone,
      mdiReload,
      mdiGithub,
      mdiChartPie,
      menu,
      zone
    };
  },
};
</script>

<style>
body {
  @apply pt-14 xl:pl-60;
}
</style>
