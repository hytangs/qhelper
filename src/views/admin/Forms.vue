<template>
  <nav-bar/>
  <aside-menu :menu="menu"/>
  <title-bar :title-stack="titleStack" />
  <hero-bar>Forms</hero-bar>

  <main-section>
    <title-sub-bar :icon="mdiBallotOutline" title="Forms example"/>
    <card-component title="Forms" :icon="mdiBallot" @submit.prevent="submit" form>
      <field label="Grouped with icons">
        <control :icon="mdiAccount" v-model="form.name" />
        <control type="email" :icon="mdiMail" v-model="form.email" />
      </field>

      <field label="With help line" help="Do not enter the leading zero">
        <control type="tel" placeholder="Your phone number" v-model="form.phone" />
      </field>

      <field label="Dropdown">
        <control :options="selectOptions" v-model="form.department" />
      </field>

      <divider/>

      <field label="Question" help="Your question. Max 255 characters">
        <control type="textarea" placeholder="Explain how we can help you"/>
      </field>

      <divider/>

      <jb-buttons>
        <jb-button type="submit" color="info" label="Submit" />
        <jb-button type="reset" color="info" outline label="Reset" />
      </jb-buttons>
    </card-component>
  </main-section>

  <titled-section>
    Custom elements
  </titled-section>

  <main-section>
    <card-component title="Custom elements" :icon="mdiBallotOutline">

      <field label="Checkbox" wrap-body>
        <check-radio-picker
          name="sample-checkbox"
          v-model="customElementsForm.checkbox"
          :options="{ lorem: 'Lorem', ipsum: 'Ipsum', dolore: 'Dolore' }"
        />
      </field>

      <divider />

      <field label="Radio" wrap-body>
        <check-radio-picker
          name="sample-radio"
          type="radio"
          v-model="customElementsForm.radio"
          :options="{ one: 'One', two: 'Two' }"
        ></check-radio-picker>
      </field>

      <divider />

      <field label="Switch">
        <check-radio-picker
          name="sample-switch"
          type="switch"
          v-model="customElementsForm.switch"
          :options="{ one: 'One', two: 'Two' }"
        ></check-radio-picker>
      </field>

      <divider />

      <file-picker v-model="customElementsForm.file" />
    </card-component>
  </main-section>

  <bottom-other-pages-section />
  <footer-bar/>
  <overlay v-show="isAsideLgActive" z-index="z-30" @overlay-click="overlayClick" />
</template>

<script>
import { ref, reactive } from 'vue'
import { mdiBallot, mdiBallotOutline, mdiAccount, mdiMail, mdiCheck } from '@mdi/js'
import MainSection from '../../components/plugins/MainSection'
import TitleBar from '../../components/plugins/TitleBar'
import CardComponent from '../../components/plugins/CardComponent'
import CheckRadioPicker from '../../components/plugins/CheckRadioPicker'
import FilePicker from '../../components/plugins/FilePicker'
import HeroBar from '../../components/plugins/HeroBar'
import Field from '../../components/plugins/Field'
import Control from '../../components/plugins/Control'
import Divider from '../../components/plugins/Divider.vue'
import JbButton from '../../components/plugins/JbButton'
import JbButtons from '../../components/plugins/JbButtons'
import BottomOtherPagesSection from '../../components/plugins/BottomOtherPagesSection'
import TitledSection from '../../components/plugins/TitledSection'
import TitleSubBar from '../../components/plugins/TitleSubBar'
import menu from '../../../src/views/admin/menu.js'
import NavBar from '../../../src/components/plugins/NavBar'
import AsideMenu from '../../../src/components/plugins/AsideMenu'
import FooterBar from '../../../src/components/plugins/FooterBar'
import Overlay from '../../../src/components/plugins/Overlay'

export default {
  name: 'Forms',
  components: {
    TitleSubBar,
    TitledSection,
    Divider,
    MainSection,
    HeroBar,
    FilePicker,
    CheckRadioPicker,
    CardComponent,
    TitleBar,
    Field,
    Control,
    JbButton,
    JbButtons,
    BottomOtherPagesSection,
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar
  },
  setup () {
    const titleStack = ref(['Admin', 'Forms'])

    const selectOptions = [
      { id: 1, label: 'Business development' },
      { id: 2, label: 'Marketing' },
      { id: 3, label: 'Sales' }
    ]

    const form = reactive({
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '',
      department: selectOptions[0],
      subject: '',
      question: ''
    })

    const customElementsForm = reactive({
      checkbox: ['lorem'],
      radio: 'one',
      switch: ['one'],
      file: null
    })

    const submit = () => {
      //
    }

    return {
      titleStack,
      selectOptions,
      form,
      customElementsForm,
      submit,
      mdiBallot,
      mdiBallotOutline,
      mdiAccount,
      mdiMail,
      mdiCheck,
      menu
    }
  }
}
</script>
