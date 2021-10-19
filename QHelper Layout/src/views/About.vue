<template>

<div style="text-align:center;" v-if="user">

    <NavBar/>

    <h3>This is an About Page</h3>
    <h2>Welcome to CPP</h2>
    <h3>Crypto Paper Portfolio (CPP) is an app to track your crypto portfolio. 
        <br> This is just a demo version and is made for learning puposes. Please use accordingly. <br> <br>
    </h3>
    <LogOut /> <br><br>    

    <!-- <div class ="about">

    <p><strong>  Below are the theoretical steps to create this project. </strong></p>

    <ul style="list-style-position: outside;" >
        <li> Create a project in Vue js using Vue CLI </li>
        <li> Make Components</li>
        <li> Install Vue Router</li>
        <li> Make Views for the website</li>
        <li> Add components in the views</li>
    </ul>   

    </div> -->

</div>

<!-- <div v-else> 
    <h3> Please login to CPP</h3>
    <router-link to="/">Login</router-link>   
</div> -->
    
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import LogOut from '@/components/LogOut.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default {
    name:"About" ,

    components:{
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

<style scoped>

.about{
   
    text-align: left;
    border: 2px solid black;
    box-shadow: 3px 3px grey 

}
