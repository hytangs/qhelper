<template>
  <nav
    v-show="isNavBarVisible"
    class="top-0 left-0 right-0 fixed flex bg-white h-14 border-b border-gray-100 z-30 w-screen
    transition-position xl:pl-60 lg:w-auto lg:items-stretch dark:bg-gray-900 dark:border-gray-900"
    :class="{'ml-60':isAsideMobileExpanded}"
  >
    <div class="flex-1 items-stretch flex h-14">
      <nav-bar-item type="flex lg:hidden" @click.prevent="menuToggleMobile">
        <icon :path="menuToggleMobileIcon" size="24" />
      </nav-bar-item>
      <nav-bar-item type="hidden lg:flex xl:hidden" @click.prevent="menuOpenLg">
        <icon :path="mdiMenu" size="24" />
      </nav-bar-item>
    </div>
    <div class="flex-none items-stretch flex h-14 lg:hidden">
      <nav-bar-item class="items-center flex" @click.prevent="menuNavBarToggle">
        <icon :path="menuNavBarToggleIcon" size="24" />
      </nav-bar-item>
    </div>
    <div
      class="absolute w-screen top-14 left-0 bg-white shadow
        lg:w-auto lg:items-stretch lg:flex lg:flex-grow lg:static lg:border-b-0 lg:overflow-visible lg:shadow-none dark:bg-gray-900"
      :class="{ 'hidden': !isMenuNavBarActive, 'block': isMenuNavBarActive }"
    >
      <div
        class="max-h-screen-menu overflow-y-auto lg:overflow-visible lg:flex lg:items-stretch lg:justify-end lg:ml-auto"
      >
        <nav-bar-menu has-divider>
          <user-avatar class="w-6 h-6 mr-3 inline-flex" />
          <div>
            <span>{{ userName }}</span>
          </div>

          <template #dropdown>
            <nav-bar-item @click="settings()">
              <nav-bar-item-label :icon="mdiCogOutline" label="Settings"/>
            </nav-bar-item>
            <nav-bar-item href="https://outlook.com" target="_blank">
              <nav-bar-item-label :icon="mdiEmail" label="Messages"/>
            </nav-bar-item>
            <nav-bar-menu-divider/>
          </template>
        </nav-bar-menu>
        <nav-bar-item @click.prevent="toggleLightDark" has-divider is-desktop-icon-only>
          <nav-bar-item-label :icon="mdiThemeLightDark" label="Light/Dark" is-desktop-icon-only />
        </nav-bar-item>

        <nav-bar-item @click="localsession.methods.initializeStorage()" href='/' is-desktop-icon-only>
          <nav-bar-item-label :icon="mdiLogout" label="Log out" is-desktop-icon-only />
        </nav-bar-item>
      </div>
    </div>
  </nav>
</template>

<script>

import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import localsession from '../../store/localsession';

import {
  mdiForwardburger,
  mdiBackburger,
  mdiClose,
  mdiDotsVertical,
  mdiMenu,
  mdiClockOutline,
  mdiCloud,
  mdiCrop,
  mdiAccount,
  mdiCogOutline,
  mdiEmail,
  mdiLogout,
  mdiGithub,
  mdiThemeLightDark
} from '@mdi/js'
import NavBarItem from './NavBarItem'
import NavBarItemLabel from './NavBarItemLabel'
import NavBarMenu from './NavBarMenu'
import NavBarMenuDivider from './NavBarMenuDivider'
import UserAvatar from './UserAvatar'
import Icon from './Icon'


export default {
  name: 'NavBar',
  components: {
    //NavBarSearch,
    UserAvatar,
    NavBarMenu,
    NavBarItem,
    NavBarItemLabel,
    NavBarMenuDivider,
    Icon
  },

  methods: {
    settings() {
      alert("Currently, settings of staff accounts are in RESTRICTED mode. Please contact web administrator for more details.")
    },
  },

  setup () {
    const store = useStore()

    const toggleLightDark = () => {
      store.dispatch('darkMode')
    }

    const isNavBarVisible = computed(() => !store.state.isFullScreen)

    const isAsideMobileExpanded = computed(() => store.state.isAsideMobileExpanded)

    const userName = computed(() => localsession.methods.getAdminName())

    const menuToggleMobileIcon = computed(() => isAsideMobileExpanded.value ? mdiBackburger : mdiForwardburger)

    const menuToggleMobile = () => store.dispatch('asideMobileToggle')

    const isMenuNavBarActive = ref(false)

    const menuNavBarToggleIcon = computed(() => isMenuNavBarActive.value ? mdiClose : mdiDotsVertical)

    const menuNavBarToggle = () => {
      isMenuNavBarActive.value = !isMenuNavBarActive.value
    }

    const menuOpenLg = () => {
      store.dispatch('asideLgToggle', true)
    }

    return {
      toggleLightDark,
      isNavBarVisible,
      isAsideMobileExpanded,
      userName,
      menuToggleMobileIcon,
      menuToggleMobile,
      isMenuNavBarActive,
      menuNavBarToggleIcon,
      menuNavBarToggle,
      menuOpenLg,
      mdiMenu,
      mdiClockOutline,
      mdiCloud,
      mdiCrop,
      mdiAccount,
      mdiCogOutline,
      mdiEmail,
      mdiLogout,
      mdiGithub,
      mdiThemeLightDark,
      localsession
    }
  }
}
</script>
