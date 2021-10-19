<template>
  <div style="text-align:center;" v-if="user">
    <NavBar/>
    <h3>This is Home Page</h3>
    <WelcomeCpp/>
    <AddCoin  @added="change" />
    <ProfitDisplay :key="refreshComp" />
    <img id = "bg" src="@/assets/Coins2.png" alt="">
    <LogOut/>
  </div>
</template>

<script>

import { getAuth, onAuthStateChanged } from "firebase/auth";
import WelcomeCpp from '@/components/WelcomeCpp.vue'
import AddCoin from '@/components/AddCoin.vue'
import ProfitDisplay from '@/components/ProfitDisplay.vue'
import NavBar from '@/components/NavBar.vue'
import LogOut from '@/components/LogOut.vue'

export default {
  name: 'Home',
  components:{
    WelcomeCpp,
    AddCoin,
    ProfitDisplay,
    NavBar,
    LogOut
  },

  data(){
    return{
      user:false,
      refreshComp:0
      }
    },

  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      this.user = user;
      })
  },
  
  methods:{

  change(){
     this.refreshComp += 1
    }
  }
}

</script>

<style scoped>
#bg { 
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;