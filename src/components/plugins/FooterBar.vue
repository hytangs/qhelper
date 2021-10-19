<template>
  <footer v-show="isFooterBarVisible" class="bg-white py-2 px-6 dark:bg-gray-900">
    <level>
      <div>
        &copy; {{ year }}, <b>QHelper COVID-19 Quarantine Assistance System</b>
        by NUS BT3103 Group 10. Please visit our <a href="https://github.com/hytangs/qhelper" target="_blank" class="text-blue-500">Github Repository</a>.
      </div>
      <div class="md:py-2">
      <a href="https://github.com/hytangs/qhelper">
          <jb-logo class="w-auto h-8 md:h-6" />
      </a>
      </div>
    </level>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Level from './Level'
import JbLogo from './JbLogo'

export default {
  name: 'FooterBar',
  components: {
    Level,
    JbLogo
  },
  setup () {
    const store = useStore()

    const year = computed(() => new Date().getFullYear())

    const isFooterBarVisible = computed(() => !store.state.isFullScreen)

    return {
      year,
      isFooterBarVisible
    }
  }
}
</script>
