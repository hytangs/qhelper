<template>
<full-screen-section class="bg">
  <div class="grid">
    <div class="row text-center py-20 lg:px-0 lg:max-w-2xl lg:mx-auto text-3xl text-dark">
      <div class="welcome">
      <h1 class="text">Hi {{this.$route.params.fname}}, Please select the room type according to your preference.</h1>
    </div></div>
    <div class="row">
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4 text-xl">
        <card-component>
          <div class="text-center py-24 lg:py-10 text-dark">
            <strong>Single Room</strong>
            <img alt="Single photo" src="../../../public/assets/single.png"><br>
            <strong>${{ store.state.roomMetaToGuest[0].singlerate }}</strong>
            /Day <br>
            including meals &amp; GST. <br>
          </div>
          <div v-if = "roomType==='Single Room'">
            <jb-button color="info" label="Selected"/>
          </div>
          <div v-else-if = "store.state.roomMetaToGuest[0].havesingle === '0'">
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
            <strong>${{ store.state.roomMetaToGuest[0].doublerate }}</strong>
            /Day <br>
            including meals &amp; GST. <br>
          </div>
          <div v-if = "roomType==='Double Room'">
            <jb-button color="info" label="Selected"/>
          </div>
          <div v-else-if = "store.state.roomMetaToGuest[0].havedouble === '0'">
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
            <strong>${{ store.state.roomMetaToGuest[0].premiumrate }}</strong>
            /Day <br>
            including meals &amp; GST. <br>
          </div>
          <div v-if = "roomType==='Premium Double Room'">
            <jb-button color="info" label="Selected"/>
          </div>
          <div v-else-if = "store.state.roomMetaToGuest[0].havepremium === '0'">
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
            <strong>${{ store.state.roomMetaToGuest[0].apartmentrate }}</strong>
            /Day <br>
            including meals &amp; GST. <br>
          </div>
          <div v-if = "roomType === 'Premium Apartment'">
            <jb-button color="info" label="Selected"/>
          </div>
          <div v-else-if = "store.state.roomMetaToGuest[0].haveapartment === '0'">
            <jb-button label="Not Available" />
          </div>
          <div v-else>
            <jb-button color="info" label="Select" v-on:click="selectRoom4()"/>
          </div>
        </card-component>

        <div v-if = "roomType">
          <jb-buttons>
              <jb-button type="submit" color="info" label="Confirm >" @click="savetofs()"/>
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
import { doc, setDoc, updateDoc } from 'firebase/firestore';
const db = getFirestore(firebaseApp);
import { useStore } from 'vuex'
import FullScreenSection from '../plugins/FullScreenSection'
import CardComponent from '../plugins/CardComponent'
import JbButton from '../plugins/JbButton'
import JbButtons from '../plugins/JbButtons'
import connector from '../../connector.js'
import datequery from "../plugins/helpers/datequery";
import sha256 from "../plugins/helpers/sha256";

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
      room: false,
      roomNumber: false,
      rate: 0
    }
  },


  methods: {
    selectRoom1() {
      this.roomType = "Single Room"
      this.room = "Single"
      this.rate = parseInt(this.$store.state.roomMetaToGuest[0].singlerate) * parseInt(this.$store.state.guestInfo.Length)
      console.log(this.$store.state.roomMetaToGuest[0].singlerate)
      console.log(this.rate)
      console.log(this.$store.state.guestInfo.Length)
    },

    selectRoom2() {
      this.roomType = "Double Room"
      this.room= "Double"
      this.rate = parseInt(this.$store.state.roomMetaToGuest[0].doublerate) * parseInt(this.$store.state.guestInfo.Length)
      console.log(this.rate)
    },

    selectRoom3() {
      this.roomType = "Premium Double Room"
      this.room = "PremiumDouble"
      this.rate = parseInt(this.$store.state.roomMetaToGuest[0].premiumrate) * parseInt(this.$store.state.guestInfo.Length)
      console.log(this.rate)
    },

    selectRoom4() {
      this.roomType = "Premium Apartment"
      this.room = "Apartment"
      this.rate = parseInt(this.$store.state.roomMetaToGuest[0].apartmentrate) * parseInt(this.$store.state.guestInfo.Length)
      console.log(this.rate)
    },

    async savetofs() {
      alert("You have selected "+ this.roomType + "!")
      this.roomNumber = await connector.methods.assignRoom(this.room);
      this.totalrooms = await connector.methods.getRoomVacantMinusOne(this.room);

      var lname = this.$store.getters.lname
      var fname = this.$store.getters.fname
      var email = this.$store.getters.email
      var cod = this.$store.getters.cod
      var contact = this.$store.getters.contact
      var doa = this.$store.getters.doa
      var flight = this.$store.getters.flight
      var passtype = this.$store.getters.passtype
      var password = this.$store.getters.password
      var seat = this.$store.getters.seat
      var vaccine = this.$store.getters.vaccine
      var identity = this.$store.getters.identity
      var pcr = this.$store.getters.pcr
      var gender = this.$store.getters.gender
      var Length = this.$store.getters.getLength

      try {
        const docRef = await setDoc(doc(db, "RegInfo", this.roomNumber), {
          Lname: lname,
          Gender: gender,
          Fname: fname,
          identity: identity,
          Contact: contact,
          Email: email,
          DOA: doa,
          COD: cod,
          Flight:
          flight,
          Seat: seat,
          Vaccine: vaccine,
          Passtype: passtype,
          PasswordHash: sha256(password),
          PCR: pcr,
          RoomType: this.roomType,
          RoomNumber: this.roomNumber,
          lastMealSelection: "",
          lastHealthDeclaration: "",
          lastLogin: "No Record",
          finance: this.rate,
          checkout: String(datequery.methods.addDays(parseInt(Length))),
          quarantineLength: Length,
          mealOption: '000',
        })
        console.log(docRef)
        this.$emit("added")

        const docRef2 = await updateDoc(doc(db, "RoomMeta", this.room), {
          [this.roomNumber]: datequery.methods.fetchTodayString(),
          vacant: this.totalrooms
        })
        console.log(docRef2)
        this.$emit("added")

        this.$router.push({
          name: "PassGenerationPage",
          path: '/arrivals/passgeneration', params: {
            roomtype: this.roomType,
            roomNumber: this.roomNumber,
            gender: this.$route.params.gender,
            fname: this.$route.params.fname,
            lname: this.$route.params.lname,
          }
        })
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  },

  setup() {
    const store = useStore()

    return {
      store
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

.bg{
  background: url("https://mocah.org/uploads/posts/353870-4k-wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
}

.welcome{
  background-color:rgb(0, 0, 0, 0.4);
}

.text{
  color: white;
}
</style>
