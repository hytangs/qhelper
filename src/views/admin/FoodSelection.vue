<template>
  <nav-bar />
  <aside-menu :menu="menu" />
  <title-bar :title-stack="titleStack" />
  <hero-bar v-if="zone === '1' || zone === '4'">Food Selection</hero-bar>
  <hero-bar v-else>Unauthorized - Please contact web administrator.</hero-bar>
  <main-section v-if="zone === '1' || zone === '4'">
    <!-- <notification color="info" :icon="mdiMonitorCellphone">
      <b>Responsive table.</b> Collapses on mobile
    </notification> -->

    <card-component
      class="mb-6"
      title="Breakfast"
      :icon="mdiAccountMultiple"
      has-table
    >
      <food-selection-table checkable />
    </card-component>

    <!-- <title-sub-bar :icon="mdiTableBorder" title="Wrapped variation"/> -->

    <!-- <notification color="success" :icon="mdiTableBorder">
      <b>Tightly wrapped</b> &mdash; table header becomes card header
    </notification> -->

    <card-component
      class="mb-6"
      title="Lunch"
      :icon="mdiAccountMultiple"
      has-table
    >
      <food-selection-table checkable />
    </card-component>

    <!-- <title-sub-bar :icon="mdiTableOff" title="Empty variation"/> -->

    <!-- <notification color="danger" :icon="mdiTableOff">
      <b>Empty table.</b> When there's nothing to show
    </notification> -->

    <!-- <card-component empty/> -->
    <card-component
      class="mb-6"
      title="Dinner"
      :icon="mdiAccountMultiple"
      has-table
    >
      <food-selection-table checkable />
    </card-component>

    <card-component
      title="Upload Meal Information"
      :icon="mdiAccountCircle"
      @submit.prevent="submitFoodInfo"
      form
    >
      <field label="Dropdown">
        <control :options="selectOptions" v-model="form.meals" />
      </field>

      <field label="Food Picture" help="Max 500kb">
        <file-picker />
      </field>

      <field label="Food Title" help="Required. Food Name">
        <control :icon="mdiAccount" name="foodn" />
      </field>

      <field label="Description" help="Dishes and Ingredients">
        <control :icon="mdiMail" type="description" name="description" />
      </field>

      <divider />

      <jb-buttons>
        <jb-button color="info" type="submit" label="Submit" />
        <jb-button color="info" label="Options" outline />
      </jb-buttons>
    </card-component>
  </main-section>
  <footer-bar v-if="zone === '1' || zone === '4'"/>
  <overlay
    v-show="isAsideLgActive"
    z-index="z-30"
    @overlay-click="overlayClick"
  />
</template>

<script>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import {
  mdiAccount,
  mdiMonitorCellphone,
  mdiAccountCircle,
  mdiAccountMultiple,
  mdiMail,
  mdiTableBorder,
  mdiTableOff,
} from "@mdi/js";
import MainSection from "../../components/plugins/MainSection";
//import Notification from '../../components/plugins/Notification'
import FoodSelectionTable from "../../components/plugins/FoodSelectionTable";
import CardComponent from "../../components/plugins/CardComponent";
import TitleBar from "../../components/plugins/TitleBar";
import HeroBar from "../../components/plugins/HeroBar";
//import TitleSubBar from '../../components/plugins/TitleSubBar'
import menu from "../../../src/views/admin/menu.js";
import NavBar from "../../../src/components/plugins/NavBar";
import AsideMenu from "../../../src/components/plugins/AsideMenu";
import FooterBar from "../../../src/components/plugins/FooterBar";
import Overlay from "../../../src/components/plugins/Overlay";

import Divider from "../../components/plugins/Divider";
import Field from "../../components/plugins/Field";
import Control from "../../components/plugins/Control";
import FilePicker from "../../components/plugins/FilePicker";
import JbButton from "../../components/plugins/JbButton";
import JbButtons from "../../components/plugins/JbButtons";
import localsession from "../../store/localsession";

export default {
  name: "Tables",
  components: {
    //TitleSubBar,
    MainSection,
    HeroBar,
    TitleBar,
    CardComponent,
    FoodSelectionTable,
    //Notification,
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar,
    Divider,
    Field,
    Control,
    JbButton,
    JbButtons,
    FilePicker,
  },
  setup() {
    const store = useStore();

    const titleStack = ref(["Admin", "Foods"]);

    const zone = localsession.methods.getAdminZone()

    const FoodInfo = reactive({
      food: store.state.food,
      description: store.state.description,
    });

    const submitFoodInfo = () => {
      store.commit("user", FoodInfo);
    };

    const selectOptions = [
      { id: 1, label: 'Breakfast' },
      { id: 2, label: 'Lunch' },
      { id: 3, label: 'Dinner' }
    ]

    const form = reactive({
      meals: selectOptions[0],
    })

    return {
      titleStack,
      zone,
      mdiAccount,
      mdiMonitorCellphone,
      mdiAccountCircle,
      mdiAccountMultiple,
      mdiMail,
      mdiTableBorder,
      mdiTableOff,
      menu,
      FoodInfo,
      submitFoodInfo,
      form,
      selectOptions
    };
  },
};
</script>

<style>
body {
  @apply pt-14 xl:pl-60;
}
</style>
