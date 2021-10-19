<template>
    <div class ="container">
        <form >
            <h2>Add Coins</h2>

            <div class = "formli" >            
                <label for="coin1">Coin Name:</label>
                <input type="text" id = "coin1" required ="" placeholder="Enter your coin" v-model="a"> <br><br>              
                <label for="ticker">Ticker: </label>
                <input type="text" id = "ticker" required =""  placeholder="Valid (eg: BTC/USDT) " v-model="b"><br><br>               
                <label for="buy1">Buy Price: </label>
                <input type="number" id = "buy1" required =""  placeholder="Enter the price" v-model="c" ><br><br>
                <label for="quant1">Buy Quantity: </label>
                <input type="number" id = "quant1" required =""  placeholder="Enter the quantity"  v-model="d"><br><br>

                <div class ="save" >
                    <button  id = "savebutton"  type="button"  @click="savetofs()"> Save </button>
               </div>
            </div>
        </form> 
    </div>

</template>

<script>
console.log("in AC")
import firebaseApp from '@/firebase.js';
import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore";
import { getAuth} from "firebase/auth";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const db = getFirestore(firebaseApp);

export default {
  //fbuser is nothing but email here
  data(){
    return{
      a:"", b:"", c:"", d:"", fbuser:""
    }
  },

  methods: {
    
    async savetofs(){   
    
    const auth = getAuth(); 
    this.fbuser = auth.currentUser.email;
    
    let re = /\//g
    // let re2 = /[a-zA-Z]/
    let re2 = /</g

    let result = re.exec(this.b)
    let result2 = !re2.exec(this.a)
    let result3 = !re2.exec (this.b)

    if(result && result2 && result3){
   
    if (!((this.a ==""  || this.b == "")  || (this.c == "" || this.d == ""))){

      try{
        const docRef = await setDoc(doc(db, String(this.fbuser), this.a),{
        Coin: this.a , Ticker : this.b, Buy_Price: this.c, Buy_Quantity : this.d
        })
        console.log(docRef)
        this.a= this.b=this.c=this.d=""  
        this.$emit("added")
        }
      catch(error) {
          console.error("Error adding document: ", error);
      }
    }

    else alert("Cannot take empty Values. Please enter the values")

  }
  else alert("Inalid ticker or Coin Name, Valid - BTC/USDT")
  
  
  }
  }
}
 
</script>

<style scoped>
h2{
background-color: rgb(129, 184,99);
}

.formli{
display: inline-block;
text-align: right;
}

form {
  text-align: center;
  align-items: center;
  margin: auto;
}

input:hover {
  box-shadow: 3px 3px purple;
  border-radius: 2px
}

.save{
text-align: center ;
}
</style>
