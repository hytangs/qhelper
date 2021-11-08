<template>

<modal-box v-model="isModalActive" title="Modify Room Rate">
  <field label="Room Rate" help="Minimum length: 5">
    <control placeholder="Example: 400" v-model="new_rate" />
  </field>
  <jb-buttons type="justify-left lg:justify-left" no-wrap>
    <jb-button color="info" label="Confirm" v-on:click="modifyRate()"/>
  </jb-buttons>
</modal-box>

<table>
    <thead>
      <tr>
        <th>Room Type</th>
        <th>Rate</th>
        <th>Vacancy</th>
        <th>Total</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="room in itemsPaginated" :key="room.roomPrice">
        <td data-label="Room Type"> {{room.roomType}} </td>
        <td data-label="Rate"> ${{room.roomPrice}}</td>
        <td data-label="Vacancy"> {{room.roomVacancy}} </td>
        <td data-label="Total Rooms"> {{room.roomTotal}}</td>
        <td class="actions-cell">
          <jb-buttons type="justify-start lg:justify-end" no-wrap>
            <jb-button class="mr-3" color="light" :icon="mdiPencilOutline" small @click="isModalActive = true, rememberType(room.roomType)" />
          </jb-buttons>
        </td>
      </tr>
    </tbody>
</table>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { mdiPencilOutline } from '@mdi/js'
import JbButtons from '../../plugins/JbButtons'
import JbButton from '../../plugins/JbButton'
import ModalBox from '../../plugins/ModalBox'
import Field from '../../plugins/Field'
import Control from '../../plugins/Control'
import connector from "../../../connector";
// import firebaseApp from '../firebase.js';
// import {getFirestore} from "firebase/firestore"
// import {collection, getDocs} from "firebase/firestore";
// const db =getFirestore(firebaseApp);


export default {
  name: "GuestRoomType.vue",

  components: {
    JbButtons,
    JbButton,
    ModalBox,
    Field,
    Control
  },

  data() {
    return {
      new_rate: "",
      room_type: "",
    }
  },

  setup() {
    const store = useStore()

    const darkMode = computed(() => store.state.darkMode)

    const items = computed(() => store.state.roomTypeDefault)

    const isModalActive = ref(false)

    const perPage = ref(10)

    const currentPage = ref(0)

    const itemsPaginated = computed(
      () => items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
    )

    return {
        mdiPencilOutline,
        isModalActive,
        darkMode,
        store,
        itemsPaginated
      }
  },

  async created() {
    const store = useStore()
    let meta = await connector.methods.getRoomTypeInfo().then(x => x)
    console.log(meta)
    store.commit('alterroomtype' , meta)
  },

  methods: {
    rememberType(roomType) {
      this.room_type = roomType
    },

    async modifyRate() {
      await connector.methods.modifyRoomRate(this.room_type, this.new_rate)
      alert("You have changed the room rate of " + this.room_type + " to $" + this.new_rate + "!")
      let meta = await connector.methods.getRoomTypeInfo().then(x => x)
      this.$store.commit('alterroomtype' , meta);
    }
  }


  // methods: {
  //   async display() {
  //     let z = await getDocs(collection(db, "RoomType"))
  //     let ind = 1

  //     z.forEach((docs) => {
  //       let yy = docs.data()
  //       var table = document.getElementById("table")
  //       var row = table.insertRow(ind)

  //       var roomType = (yy.RoomName)
  //       var roomPrice = (yy.RoomPrice)
  //       var vacancy = (yy.Vacancy)
  //       var occupied = (yy.Occupied)

  //       var cell1 = row.insertCell(0); var cell2 = row.insertCell(1);
  //       var cell3 = row.insertCell(2); var cell4 = row.insertCell(3);

  //       cell1.innerHTML = roomType; cell2.innerHTML = roomPrice;
  //       cell3.innerHTML = occupied.toString() + " / " + vacancy.toString;

  //       var bu = document.createElement("button")
  //       bu.innerHTML = "Modify"
  //       bu.onclick = () => {
  //         this.isModalActive = true
  //       }
  //       cell4.appendChild(bu)
  //       ind+=1
  //     })
  //   }
  // }
}
</script>

<style scoped>

</style>
