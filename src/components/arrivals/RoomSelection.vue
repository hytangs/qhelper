<template>
<titled-section>Hi {{name}}, Please select the room type according to your preference.</titled-section>
<full-screen-section bg="login"> 
  <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4 ">
    <card-component>
      <div class="text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400">
        <strong>Smart Single Room</strong>
        <img alt="Single photo" src="../../../public/assets/single.png"><br>
        <strong>$200</strong>
        /Day <br>
        including meals &amp; GST. <br>
      </div>
      <jb-button color="info" label="Select" v-on:click="selectRoom"/>
    </card-component>

    <card-component>
      <div class="text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400">
        <strong>Premium Queens Room</strong>
        <img alt="queen photo" src="../../../public/assets/queen.png"><br>
        <strong>$300</strong>
        /Day <br>
        including meals &amp; GST. <br>
      </div>
      <jb-button color="info" label="Select" v-on:click="selectRoom"/>
    </card-component>

    <card-component>
      <div class="text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400">
        <strong>Premium Kings Room</strong>
        <img alt="king photo" src="../../../public/assets/king.png"><br>
        <strong>$400</strong>
        /Day <br>
        including meals &amp; GST. <br>
      </div>
      <jb-button color="info" label="Select" v-on:click="selectRoom"/>
    </card-component>

    <card-component>
      <div class="text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400">
        <strong>Premium Apartment</strong>
        <img alt="apartment photo" src="../../../public/assets/apartment.png"><br>
        <strong>$800</strong>
        /Day <br>
        including meals &amp; GST. <br>
      </div>
      <jb-button color="info" label="Select" v-on:click="selectRoom()"/>
    </card-component>

    <jb-buttons>
        <jb-button type="submit" color="info" label="Confirm >" @click="passgenerate()"/>
    </jb-buttons>
  </div>
</full-screen-section>
</template>

<script>
import FullScreenSection from '../plugins/FullScreenSection'
import CardComponent from '../plugins/CardComponent'
import JbButton from '../plugins/JbButton'
import JbButtons from '../plugins/JbButtons'
import TitledSection from '../plugins/TitledSection'

export default {
    name: 'RoomSelection',
    components: {
    FullScreenSection,
    CardComponent,
    JbButton,
    JbButtons,
    TitledSection
    },

    props: {
        name:String
    },

    methods: {
    async selectRoom() {
      //
    },

    passgenerate() {
      this.$router.push('/arrivals/passgeneration')
    }
  }
}
</script>

<style scoped>
img{
    width: 243px;
    height: 202px;
    left: 427px;
    top: 440px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

</style>
