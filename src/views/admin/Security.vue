<template>
  <nav-bar/>
  <aside-menu :menu="menu"/>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Security</hero-bar>
  <main-section>
    <br>
    <card-component class="mb-6" title="Invalid QR Code Overview">
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <div class="col-span-1">
          <card-widget
            color="text-red-500"
            :icon="mdiAlertCircle"
            :number="30"
            label="Number of Invalid QR Code"
          />
        </div>
        <div class="col-span-2">
          <card-component class="mb-6" title="Location for Invalid QR Code">
            <div v-if="piechartData">
              <pie-chart :data="piechartData" class="h-96" />
            </div>
          </card-component>
        </div>
      </div>
    </card-component>
    <br>
    <card-component class="mb-6" title="Public Broadcast" has-table>
      <GuestRoomBroadcast/>
    </card-component>
  </main-section>
  <footer-bar/>
  <overlay v-show="isAsideLgActive" z-index="z-30" @overlay-click="overlayClick" />
</template>

<script>
import menu from '../../../src/views/admin/menu.js'
import NavBar from '../../../src/components/plugins/NavBar'
import AsideMenu from '../../../src/components/plugins/AsideMenu'
import FooterBar from '../../../src/components/plugins/FooterBar'
import Overlay from '../../../src/components/plugins/Overlay'
import TitleBar from '../../../src/components/plugins/TitleBar'
import HeroBar from '../../../src/components/plugins/HeroBar'
import { ref, onMounted } from "vue";
import { mdiAlertCircle } from "@mdi/js"
import PieChart from "../../../src/components/admin/admin-components/Charts/PieChart"
import * as charts from "../../../src/components/admin/admin-components/Charts/charts"
import CardComponent from "../../components/plugins/CardComponent"
import CardWidget from "../../../src/components/plugins/CardWidget"
import GuestRoomBroadcast from "../../components/admin/admin-components/PublicBroadcast";

export default {
  name: "AdminTemplate",
  components: {
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar,
    TitleBar,
    HeroBar,
    PieChart,
    CardComponent,
    CardWidget,
    GuestRoomBroadcast,
  },
  setup() {
    const titleStack = ref(['Admin', 'Security'])

    const piechartData = ref(null);

    const fillPieChartData = () => {
      piechartData.value = charts.samplePieChartData3();
    };

    onMounted(() => {
      fillPieChartData()
    });

    return {
      titleStack,
      menu,
      mdiAlertCircle,
      piechartData,
    }
  },

  methods: {
    broadcast() {
      // add broadcast
    }
  }
}
</script>

<style>
body {
  @apply pt-14 xl:pl-60;
}
</style>
