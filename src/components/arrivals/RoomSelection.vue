<template>
<full-screen-section bg="login"> 
  <div class="grid">
    <div class="row text-center py-20 lg:px-0 lg:max-w-2xl lg:mx-auto text-3xl text-dark">
      <h1>Hi {{name}}, Please select the room type according to your preference.</h1>
    </div>
    <div class="row">
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4 text-xl">
        <card-component>
          <div class="text-center py-24 lg:py-10 text-dark">
            <strong>Smart Single Room</strong>
            <img alt="Single photo" src="../../../public/assets/single.png"><br>
            <strong>$200</strong>
            /Day <br>
            including meals &amp; GST. <br>
          </div>
          <jb-button color="info" label="Select" v-on:click="selectRoom1()"/>
        </card-component>

        <card-component>
          <div class="text-center py-24 lg:py-10 text-dark">
            <strong>Premium Queens Room</strong>
            <img alt="queen photo" src="../../../public/assets/queen.png"><br>
            <strong>$300</strong>
            /Day <br>
            including meals &amp; GST. <br>
          </div>
          <jb-button color="info" label="Select" v-on:click="selectRoom2()"/>
        </card-component>

        <card-component>
          <div class="text-center py-24 lg:py-10 text-dark">
            <strong>Premium Kings Room</strong>
            <img alt="king photo" src="../../../public/assets/king.png"><br>
            <strong>$400</strong>
            /Day <br>
            including meals &amp; GST. <br>
          </div>
          <jb-button color="info" label="Select" v-on:click="selectRoom3()"/>
        </card-component>

        <card-component>
          <div class="text-center py-24 lg:py-10 text-dark">
            <strong>Premium Apartment</strong>
            <img alt="apartment photo" src="../../../public/assets/apartment.png"><br>
            <strong>$800</strong>
            /Day <br>
            including meals &amp; GST. <br>
          </div>
          <jb-button color="info" label="Select" v-on:click="selectRoom4()"/>
        </card-component>

        <jb-buttons>
            <jb-button type="submit" color="info" label="Confirm >" @click="savetofs(), passgenerate()"/>
        </jb-buttons>
      </div>
    </div>
  </div>
</full-screen-section>
</template>

<script>
// import firebaseApp from '../../firebase.js';
// import { getFirestore } from 'firebase/firestore';
// import { doc, setDoc } from 'firebase/firestore';
// const db = getFirestore(firebaseApp);
import FullScreenSection from '../plugins/FullScreenSection'
import CardComponent from '../plugins/CardComponent'
import JbButton from '../plugins/JbButton'
import JbButtons from '../plugins/JbButtons'
var roomType = false;

export default {
    name: 'RoomSelection',
    components: {
    FullScreenSection,
    CardComponent,
    JbButton,
    JbButtons,
    },

    props: {
      name:String
    },

    methods: {
      selectRoom1() {
        roomType = "single";
      },

      selectRoom2() {
        roomType = "queens"
      },

      selectRoom3() {
        roomType = "kings"
      },

      selectRoom4() {
        roomType = "apartment"
      },

      async savetofs() {
        alert("You have selected "+ roomType + "!")

        // save to fs 
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
    display: block;
    margin-left: auto;
    margin-right: auto;
}

</style>
