<template>
  <nav-bar/>
  <aside-menu :menu="menu"/>
  <title-bar v-if="zone !== '0'" :title-stack="titleStack" />
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
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
      <card-widget
          trend="12%"
          trend-type="up"
          color="text-green-500"
          :icon="mdiAccountMultiple"
          :number="512"
          label="Clients"
      />
      <card-widget
          trend="12%"
          trend-type="down"
          color="text-blue-500"
          :icon="mdiCartOutline"
          :number="7770"
          prefix="$"
          label="Sales"
      />
      <card-widget
          trend="Overflow"
          trend-type="alert"
          color="text-red-500"
          :icon="mdiChartTimelineVariant"
          :number="256"
          suffix="%"
          label="Performance"
      />
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
      <div class="flex flex-col justify-between">
        <card-transaction-bar
            v-for="(transaction,index) in transactionBarItems"
            :key="index"
            :amount="transaction.amount"
            :date="transaction.date"
            :business="transaction.business"
            :type="transaction.type"
            :name="transaction.name"
            :account="transaction.account"/>
      </div>
      <div class="flex flex-col justify-between">
        <card-client-bar
            v-for="client in clientBarItems"
            :key="client.id"
            :name="client.name"
            :login="client.login"
            :date="client.created"
            :progress="client.progress"/>
      </div>
    </div>

    <title-sub-bar :icon="mdiChartPie" title="Trends overview"/>

    <card-component
        title="Performance"
        :icon="mdiFinance"
        :header-icon="mdiReload"
        class="mb-6"
        @header-icon-click="fillChartData"
    >
      <div v-if="chartData">
        <line-chart :data="chartData" class="h-96"/>
      </div>
    </card-component>

    <title-sub-bar :icon="mdiAccountMultiple" title="Clients"/>

    <notification color="info" :icon="mdiMonitorCellphone">
      <b>Responsive table.</b> Collapses on mobile
    </notification>

    <card-component :icon="mdiMonitorCellphone" title="Responsive table" has-table>
      <clients-table />
    </card-component>
  </main-section>
  <main-section v-else>
    <h1 class="text-2xl text-gray-700 hover:text-gray-900">
      You don't have access to visit this page.<br>
      Please contact web administrator for more info.
    </h1>
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
  mdiChartPie,
  mdiAlertCircle,
} from '@mdi/js'
import * as chartConfig from '../../../src/components/plugins/Charts/chart.config'
import LineChart from '../../../src/components/plugins/Charts/LineChart'
import MainSection from '../../../src/components/plugins/MainSection'
import TitleBar from '../../../src/components/plugins/TitleBar'
import HeroBar from '../../../src/components/plugins/HeroBar'
import CardWidget from '../../../src/components/plugins/CardWidget'
import CardComponent from '../../../src/components/plugins/CardComponent'
import ClientsTable from '../../../src/components/plugins/ClientsTable'
import Notification from '../../../src/components/plugins/Notification'
import JbButton from '../../../src/components/plugins/JbButton'
import CardTransactionBar from '../../../src/components/plugins/CardTransactionBar'
import CardClientBar from '../../../src/components/plugins/CardClientBar'
import TitleSubBar from '../../../src/components/plugins/TitleSubBar'
import menu from '../../../src/views/admin/menu.js'
import NavBar from '../../../src/components/plugins/NavBar'
import AsideMenu from '../../../src/components/plugins/AsideMenu'
import FooterBar from '../../../src/components/plugins/FooterBar'
import Overlay from '../../../src/components/plugins/Overlay'
import localsession from "../../store/localsession";


export default {
  name: 'AdminDashboard',
  components: {
    TitleSubBar,
    MainSection,
    ClientsTable,
    LineChart,
    CardComponent,
    CardWidget,
    HeroBar,
    TitleBar,
    Notification,
    JbButton,
    CardTransactionBar,
    CardClientBar,
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar
  },
  setup () {
    const titleStack = ref(['Admin', 'Dashboard'])

    const chartData = ref(null)

    const fillChartData = () => {
      chartData.value = chartConfig.sampleChartData()
    }

    onMounted(() => {
      fillChartData()
    })

    const store = useStore()

    const clientBarItems = computed(() => store.state.clients.slice(0, 3))

    const transactionBarItems = computed(() => store.state.history.slice(0, 3))

    const darkMode = computed(() => store.state.darkMode)

    const zone = localsession.methods.getAdminZone()


    return {
      titleStack,
      chartData,
      fillChartData,
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
      mdiAlertCircle,
      menu,
      zone
    }
  }
}
</script>

<style>
body {
  @apply pt-14 xl:pl-60;
}
</style>