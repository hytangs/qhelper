<template>
  <nav-bar/>
  <aside-menu :menu="menu"/>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Financial Data Summary</hero-bar>
  <main-section>
    <title-sub-bar :icon="mdiChartPie" title="Sales Data overview"/>

    <card-component
      title="Sales Data of Meals, Retail and Housing"
      :icon="mdiFinance"
      :header-icon="mdiReload"
      class="mb-6"
      @header-icon-click="fillLineChartData"
    >
      <div v-if="linechartData">
        <line-chart :data="linechartData" class="h-96"/>
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
        <bar-chart :data="barchartData" class="h-96"/>
      </div>
    </card-component>

  </main-section>
  <footer-bar/>
  <overlay v-show="isAsideLgActive" z-index="z-30" @overlay-click="overlayClick" />
</template>

<script>
// @ is an alias to /src
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiFinance,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie
} from '@mdi/js'
import * as charts from '../../../src/components/admin/admin-components/Charts/charts'
import LineChart from '../../../src/components/admin/admin-components/Charts/LineChart'
import BarChart from '../../../src/components/admin/admin-components/Charts/BarChart'
import MainSection from '../../../src/components/plugins/MainSection'
import TitleBar from '../../../src/components/plugins/TitleBar'
import HeroBar from '../../../src/components/plugins/HeroBar'
import CardComponent from '../../../src/components/plugins/CardComponent'
import TitleSubBar from '../../../src/components/plugins/TitleSubBar'
import menu from '../../../src/views/admin/menu.js'
import NavBar from '../../../src/components/plugins/NavBar'
import AsideMenu from '../../../src/components/plugins/AsideMenu'
import FooterBar from '../../../src/components/plugins/FooterBar'
import Overlay from '../../../src/components/plugins/Overlay'

export default {
  name: 'Home',
  components: {
    TitleSubBar,
    MainSection,
    LineChart,
    BarChart,
    CardComponent,
    HeroBar,
    TitleBar,
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar

  },
  setup () {
    const titleStack = ref(['Admin', 'Finance'])

    const linechartData = ref(null)
    const barchartData = ref(null)

    const fillLineChartData = () => {
      linechartData.value = charts.sampleLineChartData()
    }

    const fillBarChartData = () => {
      barchartData.value = charts.sampleBarChartData()
    }

    onMounted(() => {
      fillLineChartData(),
      fillBarChartData()
    })

    const store = useStore()

    const clientBarItems = computed(() => store.state.clients.slice(0, 3))

    const transactionBarItems = computed(() => store.state.history.slice(0, 3))

    const darkMode = computed(() => store.state.darkMode)

    return {
      titleStack,
      linechartData,
      fillLineChartData,
      barchartData,
      fillBarChartData,
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
      menu
    }
  }
}
</script>