<template>
  <header>
    <a href = "#guest/dashboard" class = "logo text-3xl"> QHELPER </a>
    <ul>
      <li><a class = "title" href = "#home">Home</a></li>
      <li><a class = "title" href = "#meals">Meals</a></li>
      <li><a class = "title" href = "#shop">Shop</a></li>
      <li><a class = "title" href = "#entertainment">Entertainment</a></li>
      <li><a class = "title" href = "#checkout">Checkout</a></li>
      <li><a class = "title" href = "#contact">Contact</a></li>
    </ul>
    <a class="color flex items-center flex-grow-0 flex-shrink-0 relative cursor-pointer hover:text-white text-dark dark:text-white dark:hover:text-gray-400 py-2 px-3 lg:w-16 lg:justify-center" href="/">
    <span class="inline-flex justify-center items-center w-6 h-6 transition-colors" data-v-3ca1866b="">
      <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block" data-v-42f089b8="">
        <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" data-v-42f089b8=""></path>
      </svg>
    </span>
    <span class="px-2 transition-colors lg:hidden">Log out</span></a>
  </header>

  <br><br><br><br>

  <div id="checkout-page" v-if="this.guestroom !== 'Undefined' && this.guestroom !== 'null'">
    <div class="text-center">
      <br><br>
      <h1 class="text-3xl text-blue-500 mb-6">Our Final Goodbye...</h1>
      <br>
      <div v-if="showpay" class="payment-container">
        <Payment/>
      </div>
      <button v-on:click="showpay = !showpay" v-if="showpay" class="donebtn">Done</button>
      <div v-if="!showpay" class="checkoutlist-container">
        <div v-if="showlist">
            <Arrival/>
            <br>
            <button v-on:click="showlist = !showlist" class="setbtn">We're All Set!</button>
        </div>
      </div>
      <div id="finally" v-if="!showlist">
          <br><br><br><br><br><br><br><br><br><br>
          <h1>We hope that you have enjoyed your stay</h1>
          <br>
          <h1>Thank you and have a pleasant journey!</h1>
        </div>
    </div><br><br>
    </div>
  <div v-else>
    <br />
    <p class="text-3xl hover:text-gray-700 left-1"><b>Unauthorized Guest</b></p>
    <br />
    <h2 class="text-xl text-gray-700 hover:text-gray-900 left-1">Please contact the web administrator for assistance.</h2>
  </div>
</template>

<script>
import Arrival from './Arrival'
import Payment from './Payment'
import localsession from "../../store/localsession";

import firebaseApp from "../../firebase.js";
import {getFirestore, getDocs, collection} from "firebase/firestore";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp);

export default {
  name: "checkout",
  components:{
    Arrival,
    Payment
  },

  methods: {
    async doCheckOut(room) {
      await deleteDoc(doc(db, "RegInfo", room));

      var out_roomtype;
      var vacant;

      const docRef = await getDocs(collection(db, "RoomMeta"))
      docRef.forEach((doc) => {
        var x = doc.data();
        if (x[room] !== '' && x[room] !== 'undefined' && x['room'].length === 8) {
          out_roomtype = x['identity']
          vacant = parseInt(x['vacant']) + 1
        }
      });

      await updateDoc(doc(db, "RoomMeta", out_roomtype), {
        vacant: String(vacant),
        [room]: '0',
      })
    }
  },

  data() {
        return {
            showpay: true,
            showlist:true,
            guestroom: localsession.methods.getGuestRoom(),
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');
*
{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

header{
  position: fixed;
  top:0;
  left: 0;
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 15px 100px;
  z-index: 100000;
  background-color: black;
}

header.sticky{
  padding: 10px 100px;
  background-color: black;
}

header .logo{
  position: relative;
  font-weight: 700;
  color: white;
  text-decoration: none;
  font-size: 2em;
  letter-spacing: 2px;
  transition: 0.6s;
}

header ul{
  position: relative;
  display:flex;
  justify-content: center;
  align-items: center;
}

header ul li{
  position: relative;
  list-style: none;
}

header ul li a{
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: white;
  letter-spacing: 2px;
  font-weight: 500px;
  transition: 0.6s;
}

header.sticky .logo,
header.sticky ul li a,
header.sticky .exit,
header.sticky .color {
  color:white;
}
/* titles changing color when hovering */

.title:hover {
  color:goldenrod;
}

.title:hover::after {
  content: "";
  position: absolute;
  left: 25%;
  right: 25%;
  bottom: 0;
  margin: -7px;
  border-bottom: 2px solid goldenrod;
}

header.sticky ul li a:hover {
  color: goldenrod;
}

header.sticky .title:hover::after {
  content: "";
  position: absolute;
  left: 25%;
  right: 25%;
  bottom: 0;
  margin: -7px;
  border-bottom: 2px solid goldenrod;
}
.checkoutlist-container {
    width: 100%;
    margin-left: 20%;
}

.donebtn:hover {
  background-color: rgba(37, 99, 235);
}

.donebtn {
  background-color: rgba(59, 130, 246);;
  text-align: center;
  color: white;
  border-radius: 8px;
  padding: 10px 24px;
}

.setbtn:hover {
  background-color: rgba(37, 99, 235);
}

.setbtn {
  background-color: rgba(59, 130, 246);;
  text-align: center;
  color: white;
  border-radius: 8px;
  padding: 10px 24px;
}

h1{
    font-size: 50px;
    text-align: center;
}

.color{
  color:white;
}
</style>
