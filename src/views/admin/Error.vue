<template>
  <full-screen-section bg="error" v-slot="{ cardClass, cardRounded }">
    <card-component :class="cardClass" :rounded="cardRounded">

      <div class="space-y-3">
        <h1 class="text-2xl">Unhandled exception</h1>

        <p>An Error Occurred</p>
      </div>

      <divider />

      <jb-buttons>
        <jb-button label="Done" to="/" color="danger" />
      </jb-buttons>
    </card-component>
  </full-screen-section>
</template>

<script>
import FullScreenSection from '../../components/plugins/FullScreenSection'
import CardComponent from '../../components/plugins/CardComponent'
import Divider from '../../components/plugins/Divider.vue'
import JbButton from '../../components/plugins/JbButton'
import JbButtons from '../../components/plugins/JbButtons'

export default {
  name: 'Error',
  components: {
    FullScreenSection,
    CardComponent,
    Divider,
    JbButton,
    JbButtons
  }
}
</script>
