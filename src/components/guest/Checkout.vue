<template>
  <header>
    <a href = "#guest/dashboard" class = "logo text-3xl"> QHELPER </a>
    <ul>
      <li><a class = "title" href = "#home">Home</a></li>
      <li><a class = "title" href = "#meals">Meals</a></li>
      <li><a class = "title" href = "#shop">Shop</a></li>
      <li><a class = "title" href = "#entertainment">Entertainment</a></li>
      <li><a class = "title" href = "#contact">Contact</a></li>
      <li><a class = "title" href = "#checkout">Checkout</a></li>

    </ul>
    <a class="color flex items-center flex-grow-0 flex-shrink-0 relative cursor-pointer hover:text-white text-dark dark:text-white dark:hover:text-gray-400 py-2 px-3 lg:w-16 lg:justify-center" href="/">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
    <!--<span class="inline-flex justify-center items-center w-6 h-6 transition-colors" data-v-3ca1866b="">
      <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block" data-v-42f089b8="">
        <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" data-v-42f089b8=""></path>
      </svg>
    </span>
    <span class="px-2 transition-colors lg:hidden">Log out</span>--></a>
  </header>

  <br><br><br><br>

  <div id="checkout-page" v-if="this.guestroom !== 'Undefined' && this.guestroom !== 'null'">
    <div class="text-center">
      <br><br>
      <h1 class="text-3xl text-gray-800 hover:text-gray-600 mb-6" v-if="authorized">Our Final Goodbye...</h1>
      <h1 class="text-3xl text-gray-800 hover:text-gray-600 mb-6" v-if="!authorized">Sorry, but it's not ready.</h1>
      <br>
      <p class="text-gray-700 hover:text-gray-600" v-if="!authorized">Please remain in your room. Thank you for keeping Singapore safe!</p>
      <br>
      <div v-if="showpay && authorized" class="payment-container">
        <Payment/>
      </div>
      <button v-on:click="showpay = !showpay" v-if="showpay && authorized" class="donebtn"> Done </button>
      <button v-on:click="complete" v-if="!authorized" class="donebtn"> Check-out Restricted</button>

      <div v-if="!showpay" class="checkoutlist-container">
        <div v-if="showlist">
            <Arrival/>
            <br>
            <button v-on:click="showlist = !showlist, doCheckOut()" class="setbtn">We're All Set!</button>
        </div>
      </div>
      <div id="finally" v-if="!showlist">
          <br><br>
          <p class="text-gray-900 hover:text-gray-600 text-2xl">We hope that you have enjoyed your stay.</p>
          <br>
          <p class="text-gray-900 hover:text-gray-600 text-2xl">Thank you and have a pleasant journey!</p>
          <br>
          <div id="qrcode" class="center">
            <p class="text-gray-900 hover:text-gray-600 text-xl">Exit Pass for {{this.guestname}}</p>
            <QrcodeVue :value=this.exportQRValue :size="275" />
            <p class="text-gray-900 hover:text-gray-600 text-xl">Valid for {{this.checkout}}</p>
          </div>
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
import datequery from "../plugins/helpers/datequery";
import QrcodeVue from "qrcode.vue";

const db = getFirestore(firebaseApp);

export default {
  name: "checkout",
  components:{
    Arrival,
    Payment,
    QrcodeVue
  },

  methods: {
    complete() {
      alert('Check out early is only allowed for exceptional medical situations. Please contact our staff for assistance.')
    },

    async doCheckOut() {
      const room = this.guestroom;

      if (this.checkout < datequery.methods.fetchTodayString()) {
        alert("Check out early is only allowed for exceptional medical situations. Please contact our staff for assistance.")
      } else {
        await deleteDoc(doc(db, "RegInfo", room));

        var out_roomtype;
        var vacant;

        const docRef = await getDocs(collection(db, "RoomMeta"))
        docRef.forEach((doc) => {
          var x = doc.data();
          try {
            if (x[room] !== '' && x[room] !== 'undefined' && x[room].length === 8) {
              out_roomtype = x['identity']
              vacant = parseInt(x['vacant']) + 1
            }
          } catch (e) {
            //pass
          }
        });

        await updateDoc(doc(db, "RoomMeta", out_roomtype), {
          vacant: String(vacant),
          [room]: '0',
        });

        alert("Check out completed and recorded. Please note that you will not be able to login again. If you have any further concerns, please contact the hotel helpline. Thank you.")
      }
    },

    emitQR() {
      this.exportQRValue = "{ QRREAD/" + String(this.$route.params.roomNumber) + "/"
          + String(this.$route.params.fname) + "/"
          + String(this.$route.params.lname) + "/"
          + datequery.methods.fetchTodayString() + "/"
          + "QHELPER/QR02 }";
    }
  },

  data() {
        var checkout;
        if (localsession.methods.getGuestCheckout() <= datequery.methods.fetchTodayString()) {
          checkout = true;
        } else {
          checkout = false;
        }
        return {
            showpay: true,
            showlist: true,
            guestroom: localsession.methods.getGuestRoom(),
            checkout: localsession.methods.getGuestCheckout(),
            guestname: localsession.methods.getGuestName(),
            authorized: checkout,
            exportQRValue: "{ QRREAD/UNDEFINED/QHELPER/QR02 }"
        }
    },

  mounted() {
    this.emitQR();
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

#qrcode {
  width: 275px;
  height: 275px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
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
