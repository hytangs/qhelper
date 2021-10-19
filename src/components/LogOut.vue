<template>
<button id = "btn" @click="signOut()" v-if="user"> Logout </button>
    
</template>

<script>

// import firebaseApp from '@/firebase.js'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


export default {
  name: 'Logout',

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

  methods: {
    signOut() {
      const auth = getAuth();      
      const user = auth.currentUser;  
      signOut(auth, user)
      this.$router.push({name:'Login'}) 
                      
    }
  }
}

</script>

style <style scoped>
#btn{
    text-align: center;
    margin: auto;
}
#btn:hover{
    color:rgb(243, 236, 236);
    background-color: rgb(255, 94, 0);
    box-shadow: 3px 3px grey 
}

</style>