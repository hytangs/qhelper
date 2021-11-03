<template>
<full-screen-section bg="login"> 
  <div class="grid">
    <div class="row text-center py-20 lg:px-0 lg:max-w-2xl lg:mx-auto text-3xl text-dark">
      <h1>Hi {{this.$route.params.fname}}, Please select the room type according to your preference.</h1>
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
          <div v-if = "roomType=='Single'">
            <jb-button color="info" label="Selected"/>
          </div>
          <div v-else>
            <jb-button color="info" label="Select" v-on:click="selectRoom1()"/>
          </div>
        </card-component>

        <card-component>
          <div class="text-center py-24 lg:py-10 text-dark">
            <strong>Premium Queens Room</strong>
            <img alt="queen photo" src="../../../public/assets/queen.png"><br>
            <strong>$300</strong>
            /Day <br>
            including meals &amp; GST. <br>
          </div>
          <div v-if = "roomType=='Queens'">
            <jb-button color="info" label="Selected"/>
          </div>
          <div v-else>
            <jb-button color="info" label="Select" v-on:click="selectRoom2()"/>
          </div>
        </card-component>

        <card-component>
          <div class="text-center py-24 lg:py-10 text-dark">
            <strong>Premium Kings Room</strong>
            <img alt="king photo" src="../../../public/assets/king.png"><br>
            <strong>$400</strong>
            /Day <br>
            including meals &amp; GST. <br>
          </div>
          <div v-if = "roomType=='Kings'">
            <jb-button color="info" label="Selected"/>
          </div>
          <div v-else>
            <jb-button color="info" label="Select" v-on:click="selectRoom3()"/>
          </div>
        </card-component>

        <card-component>
          <div class="text-center py-24 lg:py-10 text-dark">
            <strong>Premium Apartment</strong>
            <img alt="apartment photo" src="../../../public/assets/apartment.png"><br>
            <strong>$800</strong>
            /Day <br>
            including meals &amp; GST. <br>
          </div>
          <div v-if = "roomType=='Apartment'">
            <jb-button color="info" label="Selected"/>
          </div>
          <div v-else>
            <jb-button color="info" label="Select" v-on:click="selectRoom4()"/>
          </div>
        </card-component>

        <div v-if = "roomType">
          <jb-buttons> 
              <jb-button type="submit" color="info" label="Confirm >" @click="savetofs(), passgenerate()"/>
          </jb-buttons>
        </div>
      </div>
    </div>
  </div>
</full-screen-section>
</template>

<script>
import firebaseApp from '../../firebase.js';
import { getFirestore } from 'firebase/firestore';
import { doc, updateDoc } from 'firebase/firestore';
const db = getFirestore(firebaseApp);

import FullScreenSection from '../plugins/FullScreenSection'
import CardComponent from '../plugins/CardComponent'
import JbButton from '../plugins/JbButton'
import JbButtons from '../plugins/JbButtons'

export default {
    name: 'RoomSelection',
    components: {
    FullScreenSection,
    CardComponent,
    JbButton,
    JbButtons,
    },

    data(){
      return{
        roomType : false,
        // room1: "",
        // room2: "",
        // room3: "",
        // room4: "",
        // price1: "",
        // price2: "",
        // price3: "",
        // price4: "",
        // rooms: [],
        // prices: []
      }
    },

    // mounted() {
    //   async function display(){
    //     let z = await getDocs(collection(db, "RoomMeta"))

    //     z.forEach((docs) => {
    //       let room = docs.data()
    //       var type = room.type
    //       var price = room.price

    //       this.rooms.push(type)
    //       this.prices.push(price)
    //     })
    //   }
    //   display()
    // },

    methods: {
      selectRoom1() {
        this.roomType = "Single";
      },

      selectRoom2() {
        this.roomType = "Queens"
      },

      selectRoom3() {
        this.roomType = "Kings"
      },

      selectRoom4() {
        this.roomType = "Apartment"
      },

      async savetofs() {
        var a = this.roomType
        // var dict = this.$route.params.info
        // dict["RoomType"] = a
        alert("You have selected "+ a + "!")
        try{
          const docRef = await updateDoc(doc(db, "RegInfo", this.$route.params.email), {
            RoomType: a})
          console.log(docRef)
          this.$emit("added")
        }
        catch(error) {
          console.error("Error adding document: ", error);
        }
      },

      passgenerate() {
        this.$router.push({name: "PassGenerationPage", 
        path: '/arrivals/passgeneration', params: {
          roomtype: this.roomType}})
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
