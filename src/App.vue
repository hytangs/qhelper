<template>
  <router-view/>
</template>

<script>
// @ is an alias to /src
import { computed } from 'vue'
import { useStore } from 'vuex'
import menu from './views/admin/menu.js'
import localsession from "./store/localsession";


export default {
  name: 'Home',
  components: {
  },
  setup () {
    const store = useStore()

    localsession.methods.initializeStorage()

    store.commit('user', {
      name: 'John Doe',
      email: 'john@example.com',
      zones: 0,
      avatar: 'https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93'
    })

    const isAsideLgActive = computed(() => store.state.isAsideLgActive)

    const overlayClick = () => {
      store.dispatch('asideLgToggle', false)
    }

    return {
      isAsideLgActive,
      overlayClick,
      menu
    }
  }
}
</script>
