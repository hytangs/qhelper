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
            <strong>Single Room</strong>
            <img alt="Single photo" src="../../../public/assets/single.png"><br>
            <strong>${{ roomMeta.singlerate }}</strong>
            /Day <br>
            including meals &amp; GST. <br>
          </div>
          <div v-if = "roomType==='Single Room'">
            <jb-button color="info" label="Selected"/>
          </div>
          <div v-else-if = "roomMeta.havesingle === '0'">
            <jb-button label="Not Available" />
          </div>
          <div v-else>
            <jb-button color="info" label="Select" v-on:click="selectRoom1()"/>
          </div>
        </card-component>

        <card-component>
          <div class="text-center py-24 lg:py-10 text-dark">
            <strong>Double Room</strong>
            <img alt="queen photo" src="../../../public/assets/queen.png"><br>
            <strong>${{ roomMeta.doublerate }}</strong>
            /Day <br>
            including meals &amp; GST. <br>
          </div>
          <div v-if = "roomType==='Double Room'">
            <jb-button color="info" label="Selected"/>
          </div>
          <div v-else-if = "roomMeta.havedouble === '0'">
            <jb-button label="Not Available" />
          </div>
          <div v-else>
            <jb-button color="info" label="Select" v-on:click="selectRoom2()"/>
          </div>
        </card-component>

        <card-component>
          <div class="text-center py-24 lg:py-10 text-dark">
            <strong>Premium Double Room</strong>
            <img alt="king photo" src="../../../public/assets/king.png"><br>
            <strong>${{ roomMeta.premiumrate }}</strong>
            /Day <br>
            including meals &amp; GST. <br>
          </div>
          <div v-if = "roomType==='Premium Double Room'">
            <jb-button color="info" label="Selected"/>
          </div>
          <div v-else-if = "roomMeta.havepremium === '0'">
            <jb-button label="Not Available" />
          </div>
          <div v-else>
            <jb-button color="info" label="Select" v-on:click="selectRoom3()"/>
          </div>
        </card-component>

        <card-component>
          <div class="text-center py-24 lg:py-10 text-dark">
            <strong>Premium Apartment</strong>
            <img alt="apartment photo" src="../../../public/assets/apartment.png"><br>
            <strong>${{ roomMeta.apartmentrate }}</strong>
            /Day <br>
            including meals &amp; GST. <br>
          </div>
          <div v-if = "roomType === 'Premium Apartment'">
            <jb-button color="info" label="Selected"/>
          </div>
          <div v-else-if = "roomMeta.haveapartment === '0'">
            <jb-button label="Not Available" />
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
import { doc, setDoc } from 'firebase/firestore';
const db = getFirestore(firebaseApp);
import { useStore } from 'vuex'
import FullScreenSection from '../plugins/FullScreenSection'
import CardComponent from '../plugins/CardComponent'
import JbButton from '../plugins/JbButton'
import JbButtons from '../plugins/JbButtons'
import connector from '../../connector.js'

export default {
  name: 'RoomSelection',
  components: {
  FullScreenSection,
  CardComponent,
  JbButton,
  JbButtons,
  },

  props: {
    fname: String,
    email: String,
    gender: String,
    lname: String,
    password: String,
    identity: String,
    contact: String,
    doa: String,
    cod: String,
    flight: String,
    seat: String,
    vaccine: String,
    passtype: String,
    pcr: Array,
  },

  data(){
    return{
      roomType : false,
      room: false,
      roomNumber: false,
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
      this.roomType = "Single Room"
      this.room = "Single"
    },

    selectRoom2() {
      this.roomType = "Double Room"
      this.room= "Double"
    },

    selectRoom3() {
      this.roomType = "Premium Double Room"
      this.room = "PremiumDouble"
    },

    selectRoom4() {
      this.roomType = "Premium Apartment"
      this.room = "Apartment"
    },

    async savetofs() {
      this.roomNumber = await connector.methods.assignRoom(this.room)
      // const lname = this.$route.params.lname
      // const gender = this.$route.params.gender
      // const fname = this.$route.params.fname
      // const identity = this.$route.params.identity
      // const contact = this.$route.params.contact
      // const email = this.$route.params.email
      // const doa = this.$route.params.doa
      // const cod = this.$route.params.cod
      // const flight = this.$route.params.flight
      // const seat = this.$route.params.seat
      // const vaccine = this.$route.params.vaccine
      // const passtype = this.$route.params.passtype
      // const password = this.$route.params.password
      // const pcr = this.$route.params.pcr
      try {
        const docRef = await setDoc(doc(db, "RegInfo", this.$props.fname), {
          Lname: this.$props.lname, Gender: this.$props.gender, Fname: this.$props.fname, identity: this.$props.identity, Contact: this.$props.contact,
          Email: this.$props.email, DOA: this.$props.doa, COD: this.$props.cod, Flight: this.$props.flight, Seat: this.$props.seat,
          Vaccine: this.$props.vaccine, Passtype: this.$props.passtype, Password: this.$props.password, PCR: this.$props.pcr,
          RoomType: this.roomType, RoomNumber: this.roomNumber,
        })
        console.log(docRef)
        this.$emit("added")
      } catch (error) {
        console.error("Error adding document: ", error);
      } finally {
        alert("You have selected "+ this.roomType + "!")
      }
    },

    passgenerate() {
      this.$router.push({name: "PassGenerationPage",
      path: '/arrivals/passgeneration', params: {
        roomtype: this.roomType,
        roomNumber: this.roomNumber,
        gender: this.$route.params.gender,
        fname: this.$route.params.fname}})
    }
  },

  setup() {
    const store = useStore()

    const roomMeta = store.state.roomMetaToGuest[0]
    // const lname = this.$route.params.lname
    // const gender = this.$route.params.gender
    // const fname = this.$route.params.fname
    // const identity = this.$route.params.identity
    // const contact = this.$route.params.contact
    // const email = this.$route.params.email
    // const doa = this.$route.params.doa
    // const cod = this.$route.params.cod
    // const flight = this.$route.params.flight
    // const seat = this.$route.params.seat
    // const vaccine = this.$route.params.vaccine
    // const passtype = this.$route.params.passtype
    // const password = this.$route.params.password
    // const pcr = this.$route.params.pcr

    return {
      store,
      roomMeta
      // lname,
      // gender,
      // fname,
      // identity,
      // contact,
      // email,
      // doa,
      // cod,
      // flight,
      // seat,
      // vaccine,
      // passtype,
      // password,
      // pcr
    }
  },

  async created() {
    const store = useStore()
    let meta = await connector.methods.getRoomMetaGuest().then(x => x)
    console.log(meta)
    store.commit('alterGuestRoomSelect' , meta)
    alert("Please select the room type according to your preference.")
  },


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
