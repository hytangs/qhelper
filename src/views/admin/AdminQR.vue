<template>
  <nav-bar/>
  <aside-menu :menu="menu"/>
  <title-bar :title-stack="titleStack" />
  <hero-bar>QR Pass for Admin</hero-bar>
  <main-section>
    <br> <br> <h1 class="text-2xl">Blank Page for construction</h1> <br> <br>
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
import {ref} from "vue";

export default {
  name: "AdminQR",
  components: {
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar,
    TitleBar,
    HeroBar
  },
  setup() {
    const titleStack = ref(['Admin', 'QR Pass'])

    return {
      titleStack,
      menu,
    }
  }
}
</script>


<style>
body {
  @apply pt-14 xl:pl-60;
}
</style>
