<template>
  <full-screen-section bg="login" v-slot="{ cardClass, cardRounded }">
    <card-component  :class="cardClass" :rounded="cardRounded" @submit.prevent="submit" form>
      <h1 class="text-2xl">QHelper <b>Daily Assist</b></h1> <br>
      <field label="Room Number" help="Please enter your room number.">
        <control v-model="form.roomnum" :icon="mdiAccount" name="login" autocomplete="username"/>
      </field>

      <field label="Identification" help="Please enter the last four digits of your travel document.">
        <control v-model="form.idcheck" :icon="mdiAsterisk" type="password" name="password" autocomplete="current-password"/>
      </field>

      <check-radio-picker name="remember" v-model="form.remember" :options="{ remember: 'Remember' }" />

      <divider />

      <jb-buttons>
        <jb-button type="submit" color="info" label="Login" />
      </jb-buttons>
    </card-component>
  </full-screen-section>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import FullScreenSection from '../../../src/components/plugins/FullScreenSection'
import CardComponent from '../../../src/components/plugins/CardComponent'
import CheckRadioPicker from '../../../src/components/plugins/CheckRadioPicker'
import Field from '../../../src/components/plugins/Field'
import Control from '../../../src/components/plugins/Control'
import Divider from '../../../src/components/plugins/Divider.vue'
import JbButton from '../../../src/components/plugins/JbButton'
import JbButtons from '../../../src/components/plugins/JbButtons'


export default {
  name: 'GuestLoginPage',
  components: {
    FullScreenSection,
    CardComponent,
    CheckRadioPicker,
    Field,
    Control,
    Divider,
    JbButton,
    JbButtons
  },
  setup () {

    const form = reactive({
      roomnum: '1102',
      idcheck: '3902',
      remember: ['remember']
    })

    const router = useRouter()

    const submit = () => {
      router.push('/guest/dashboard')
    }

    return {
      form,
      submit,
      mdiAccount,
      mdiAsterisk
    }
  }
}
</script>
