<template>
  <full-screen-section class="bg" v-slot="{ cardClass, cardRounded }">
    <card-component  :class="cardClass" :rounded="cardRounded" @submit.prevent="submit" form>
      <h1 class="text-2xl">QHelper <b>Smart Admin</b></h1> <br>
      <field label="Account" help="Please enter your admin account name.">
        <control v-model="form.login" :icon="mdiAccount" name="login" autocomplete="username"/>
      </field>

      <field label="Password" help="Please enter your password.">
        <control v-model="form.pass" :icon="mdiAsterisk" type="password" name="password" autocomplete="current-password"/>
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
  name: 'Login',
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
      login: 'masteradmin',
      pass: '123456',
    })

    const router = useRouter()

    const submit = async () => {
      // eslint-disable-next-line no-unused-vars
      await connector.methods.checkLogin(form.login, form.pass).then(result => {
        if (result === "@Undefined") {
          alert("Account Username / Password error!")
        } else if (result === "@Undeployed") {
          alert("You are not deployed now. Please contact admin to grant access.")
        } else {
          connector.methods.getZone(form.login).then(zone => {
            LocalSession.methods.initializeAdminSession(result, form.pass, zone)
            connector.methods.updateLoginDate(form.login)
            router.push('/admin/dashboard')
          })
        }
      })
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

<style scoped>
.bg{
  background: url("https://mocah.org/uploads/posts/353870-4k-wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
}

</style>
