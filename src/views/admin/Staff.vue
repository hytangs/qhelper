<template>
<nav-bar/>
<aside-menu :menu="menu"/>
<title-bar :title-stack="titleStack" />
<hero-bar v-if="zone === '1'">HR Management</hero-bar>
<hero-bar v-else>Unauthorized - Please contact web administrator.</hero-bar>
<main-section v-if="zone === '1'">
  <br>
  <card-component class="mb-6" has-table>
      <HRTable/>
  </card-component>
  <br> <br>
  <jb-buttons type="justify-left lg:justify-left" no-wrap>
    <jb-button color="info" label="Add New Staff" v-on:click="isModalActive = true"/>
  </jb-buttons>
</main-section>

<modal-box v-model="isModalActive" title="Add New Staff">
  <p>Staff Information</p>
  <field label="Name" help="Minimum length: 5">
    <control placeholder="Account Name" v-model="new_name" id = "account"/>
    <control placeholder="Staff Name" v-model="new_id" id = "name"/>
  </field>
  <field label="Position">
    <control :options="positionOptions" v-model="new_position" id = "position"/>
  </field>
  <field label="Deployed">
    <control :options="deployOptions" v-model="new_deploy" id = "deployed"/>
  </field>
  <field label="Password Assignment" help="Minimum length: 5; Maximum length: 13">
    <control placeholder="Password" v-model="new_pass" id = "password"/>
  </field>
  <jb-buttons type="justify-left lg:justify-left" no-wrap>
    <jb-button color="info" label="Confirm" v-on:click="addNewStaff()"/>
  </jb-buttons>
</modal-box>

<footer-bar v-if="zone === '1'" />
<overlay v-show="isAsideLgActive" z-index="z-30" @overlay-click="overlayClick" />
</template>

<script>
import {ref} from "vue"
import menu from '../../../src/views/admin/menu.js'
import NavBar from '../../../src/components/plugins/NavBar'
import AsideMenu from '../../../src/components/plugins/AsideMenu'
import FooterBar from '../../../src/components/plugins/FooterBar'
import Overlay from '../../../src/components/plugins/Overlay'
import TitleBar from '../../../src/components/plugins/TitleBar'
import HeroBar from '../../../src/components/plugins/HeroBar'
import Field from '../../components/plugins/Field'
import Control from '../../components/plugins/Control'
import ModalBox from '../../components/plugins/ModalBox'
import JbButton from '../../components/plugins/JbButton'
import JbButtons from '../../components/plugins/JbButtons'
import HRTable from '../../../src/components/admin/admin-components/HRTable'
import sha256 from "../../components/plugins/helpers/sha256";

import firebaseApp from "../../firebase.js";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import localsession from "../../store/localsession";
const db = getFirestore(firebaseApp);

export default {
  name: "AdminTemplate",
  components: {
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar,
    TitleBar,
    HeroBar,
    Field,
    Control,
    JbButton,
    JbButtons,
    HRTable,
    ModalBox
  },
  setup() {
    const titleStack = ref(['Admin', 'Staff'])

    const zone = localsession.methods.getAdminZone()

    const isModalActive = ref(false)

    const positionOptions = [
      "Hotel Admin", "Quarantine Manager", "Guest Service Manager",
      "Food & Logistic Manager", "Financial Manager", "Security Manager"
    ]

    const deployOptions = [
      "Yes", "No"
    ]

    return {
      titleStack,
      menu,
      positionOptions,
      isModalActive,
      deployOptions,
      zone
    }
  },

  data() {
    return{
      new_name:"",
      new_id: "",
      new_position: "",
      new_deploy: "",
      new_pass: ""
    }

  },

  methods: {
    async addNewStaff() {
      //add new staff to firestore
      try {
          var passed = true;

          var name = this.new_name
          if (name.length <= 5) {
            passed = false;
          }

          var account = this.new_id
          if (account.length <= 5) {
            passed = false;
          }

          var position = this.new_position

          var access = '0' // 0 => No access
          if (position === 'Hotel Admin') {
            access = '1'; // 1 => Master access
          } else if (position === 'Quarantine Manager') {
            access = '2';
          } else if (position === 'Guest Service Manager') {
            access = '3';
          } else if (position === 'Food & Logistic Manager') {
            access = '4';
          } else if (position === 'Financial Manager') {
            access = '5';
          } else if (position === 'Security Manager') {
            access = '6';
          } else {
            passed = false;
          }

          var deployed = this.new_deploy
          var deployRef;
          if (deployed === "Yes") {
            deployRef = '1';
          } else if (deployed === 'No') {
            deployRef = '0';
          } else {
            passed = false;
          }

          var password = this.new_pass
          if (password.length <= 5 || password.length >= 13) {
            passed = false;
          }

          if (passed) {
            const docRef = await setDoc(doc(db, "AdminAccount", account), {
              name: name,
              account: account,
              role: position,
              zone: access,
              deployed: deployRef,
              lastLogin: 'No Record',
              passwordhash: sha256(password),
              created: localsession.methods.getAdminName()
            });
            console.log(docRef);
            this.$emit("added");
            alert("New staff account created successfully. Please remember the password.");
          } else {
            alert("Error in entering new staff credentials. Please try again.")
          }
        } catch (e) {
          alert("Error in creating new staff account. Please try again.");
        }
    },

  }
}
</script>

<style>
body {
  @apply pt-14 xl:pl-60;
}
</style>
