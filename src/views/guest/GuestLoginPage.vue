<template>
  <full-screen-section bg="login" v-slot="{ cardClass, cardRounded }">
    <card-component  :class="cardClass" :rounded="cardRounded" @submit.prevent="submit" form>
      <h1 class="text-2xl">QHelper <b>Daily Assist</b></h1> <br>
      <field label="Room Number" help="Please enter your room number.">
        <control v-model="form.roomnum" :icon="mdiAccount" name="login" autocomplete="Room Number"/>
      </field>

      <field label="Identification" help="Please enter your password.">
        <control v-model="form.idcheck" :icon="mdiAsterisk" type="password" name="password" autocomplete="current-password"/>
      </field>

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
import Field from '../../../src/components/plugins/Field'
import Control from '../../../src/components/plugins/Control'
import Divider from '../../../src/components/plugins/Divider.vue'
import JbButton from '../../../src/components/plugins/JbButton'
import JbButtons from '../../../src/components/plugins/JbButtons'
import connector from "../../connector";
import LocalSession from "../../store/localsession";


export default {
  name: 'GuestLoginPage',
  components: {
    FullScreenSection,
    CardComponent,
    Field,
    Control,
    Divider,
    JbButton,
    JbButtons
  },
  setup () {

    const form = reactive({
      roomnum: '1001',
      idcheck: '123456'
    })

    const router = useRouter()

    const submit = async () => {
      // eslint-disable-next-line no-unused-vars
      await connector.methods.checkGuestLogin(form.roomnum, form.idcheck).then(result => {
        if (result === "@Undefined") {
          alert("Room number / Password error!")
        } else {
          LocalSession.methods.initializeGuestSession(result)
            connector.methods.updateLoginDateGuest(form.roomnum)
            router.push('/guest/dashboard')
        }
      })
    }

    return {
      form,
      submit,
      mdiAccount,
      mdiAsterisk,
    }
  }
}
</script>
