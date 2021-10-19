<template>

<div style="text-align:center;" v-if="user">

  <NavBar/>

  <h3>This is Profit Page</h3>
  <ProfitDisplay/>

  <LogOut/>

</div>
</template>

<script>
// import firebase from '@/firebase.js'
import ProfitDisplay from '@/components/ProfitDisplay.vue'
import NavBar from '@/components/NavBar.vue'
import LogOut from '@/components/LogOut.vue'
// import firebase from '@/firebase.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'OnlyProfit',

  components:{
    ProfitDisplay,
    NavBar,
    LogOut
  },

      data() {
    return {
      user:false,        
        }
    },

    mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
      this.user = user;      
      }
  })
    },


  }

</script>



