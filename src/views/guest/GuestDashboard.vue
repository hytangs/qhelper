<template>
  <body ref ="top">
  <header>
    <a @click="scrollMeTo('top')" class = "logo text-3xl"> QHELPER </a>
    <ul>
      <li><a class = "title" @click="scrollMeTo('home')">Home</a></li>
      <li><a class = "title" href = "#meals">Meals</a></li>
      <li><a class = "title" href = "#shop">Shop</a></li>
      <li><a class = "title" href = "#entertainment">Entertainment</a></li>
      <li><a class = "title" href = "#contact">Contact</a></li>
      <li><a class = "title" href = "#checkout">Checkout</a></li>
      
    </ul>
    <!--<div class="date">
      <p>Date & Time : {{currentDateTime()}} {{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}</p>
    </div>-->
    <!--Exit Icon-->
    <!--<div class="exit flex items-center flex-grow-0 flex-shrink-0 relative cursor-pointer hover:text-blue-500 text-black dark:text-white dark:hover:text-gray-400 py-2 px-3 lg:w-16 lg:justify-center">
      <span class="inline-flex justify-center items-center w-6 h-6 transition-colors" data-v-3ca1866b="">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </span>
      <span class="px-2 transition-colors lg:hidden">Log out</span>
    </div>-->
    <a class="color flex items-center flex-grow-0 flex-shrink-0 relative cursor-pointer hover:text-white text-black dark:text-white dark:hover:text-gray-400 py-2 px-3 lg:w-16 lg:justify-center" href="/">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
    <!--<span class="inline-flex justify-center items-center w-6 h-6 transition-colors" data-v-3ca1866b="">
      <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block" data-v-42f089b8="">
        <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" data-v-42f089b8=""></path>
      </svg>
    </span>
    <span class="px-2 transition-colors lg:hidden" >Log out</span>--></a>
    
  </header>
  <!--<section class="banner"></section>-->
  <div class="slider mb-5">
    <div class="slides">
      <input type="radio" name="radio-btn" id="radio1">
      <input type="radio" name="radio-btn" id="radio2">
      <input type="radio" name="radio-btn" id="radio3">


      <div class="slide first">
        <img src="../../../public/assets/Welcome1.png" alt="">
      </div>
      <div class="slide">
        <img src="../../../public/assets/Welcome2.png" alt="">
      </div>
      <div class="slide">
        <img src="../../../public/assets/Welcome3.png" alt="">
      </div>

          <div class="navigation-manual">
      <label for="radio1" class="manual-btn"></label>
      <label for="radio2" class="manual-btn"></label>
      <label for="radio3" class="manual-btn"></label>
    </div>

      <!--<div class="navigation-auto">
        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
        <div class="auto-btn3"></div>
      </div>-->

    </div>

    <!--<div class="navigation-manual">
      <label for="radio1" class="manual-btn"></label>
      <label for="radio2" class="manual-btn"></label>
      <label for="radio3" class="manual-btn"></label>
    </div>-->
      <div class="navigation-auto">
        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
        <div class="auto-btn3"></div>
      </div>


  </div>

  <div class = "home_area" ref="home">
    <div class = "white_home_area"><br><br><br><Home/></div>
  </div>
  <!--<div class = "meal_page" id="meals">
    <div class="white_shop_area"><Meals/></div>
  </div>
  <div class="shop_page" id="shops">
    <div class="white_shop_area"><Shop/></div>
  </div>-->
  </body>
</template>

<script>
import Home from '../../components/guest/Home'
//import Meals from '../../components/guest/Meals'
//import Shop from '../../components/guest/Shop'

/*const date = new Date();*/

export default {
  name: "GuestDashboard",
  components: {
    Home,
    /*Meals,
    Shop*/
  },

  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
  }
},

  mounted() {
    setInterval( () =>{
      document.getElementById('radio' + this.counter).checked = true;
      this.counter++;
      if (this.counter > 3) {
        this.counter = 1;
      }
    }, 5000);
  },

  data() {
    return {counter : 1};
  },

  /*data() {
    return {
      dateTime: {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      },
      timer: undefined,
    };
  },
  methods: {
    currentDateTime() {
      const current = new Date();
      const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
      const dateTime = date;

      return dateTime;
    },

    setDateTime() {
      const date = new Date();
      this.dateTime = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      };
    },
  },

  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000);
  },

  beforeUnmount() {
    clearInterval(this.timer);
  },*/
};

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY)

})
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

body{
  min-height: 200vh;
  background-color: whitesmoke;
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
}

header.sticky{
  padding: 10px 100px;
  background-color: black;
}

header .logo{
  position: relative;
  font-weight: 700;
  color: black;
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
  color: black;
  letter-spacing: 2px;
  font-weight: 500px;
  transition: 0.6s;
}

.banner{
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("https://www.wallpaperkiss.com/wimg/b/181-1810457_big.jpg");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
}

header.sticky .logo,
header.sticky ul li a,
header.sticky .exit,
header.sticky .color {
  color:white;
}

.home_area{
  position:relative;
  display:flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  width:100%;
  height: 100%;
  background-color:whitesmoke;
}

.meal_page{
  position:relative;
  display:flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  width:100%;
  height: 100%;
  background-color:whitesmoke;
}

/*.date {
  width:16%;
  position:relative;
}*/

.shop_page{
  position:relative;
  display:flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  width:100%;
  height: 100%;
  background-color:whitesmoke;
}

.entertainment_area{
  position:relative;
  display:flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  width:100%;
  height: 100vh;
  background-color:whitesmoke;
}

.white_home_area{ /* change the width of the white cards */
  width: 70%;

}

.white_entertainment_area {
  width: 90%;
}

.white_shop_area{
  width:70%
}

/* titles changing color when hovering */

.title:hover {
  color: white;
}

.title:hover::after {
  content: "";
  position: absolute;
  left: 25%;
  right: 25%;
  bottom: 0;
  margin: -7px;
  border-bottom: 2px solid white;
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

.exit:hover{
  color: white;
}

.slider {
  width: 100%;
  /*height: 500px;*/
  /*border-radius: 10px;*/
  overflow: hidden;
}

.slides {
  width: 500%;
  /*height: 500px;*/
  display: flex;
}

.slides input {
  display: none;
}

.slide {
  width: 20%;
  transition: 4s;
}

.slide img {
  width: 100%;
  /*height: 500px;*/
  height:100vh;
}

/*css for manual slide navigation*/

.navigation-manual {
  position: absolute;
  width: 100%;
  margin-top: 90vh;
  display: flex;
  justify-content: center;
}

.manual-btn {
  border: 2px solid white; /* what we see the circle button border */
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
}

.manual-btn:not(:last-child) {
  margin-right: 40px;
}

.manual-btn:hover {
  background: whitesmoke; /* what we see the hover colour */
}

#radio1:checked ~ .first {
  margin-left: 0;
}

#radio2:checked ~ .first {
  margin-left: -20%;
}

#radio3:checked ~ .first {
  margin-left: -40%;
}

/*css for automatic navigation*/

.navigation-auto {
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;

}

.navigation-auto div {
  border: 2px solid black;
  padding: 5px;
  border-radius: 10px;
  transition: 10s;
}

.navigation-auto div:not(:last-child) {
  margin-right: 40px;
}

#radio1:checked ~ .navigation-auto .auto-btn1 {
  background: black;
}

#radio2:checked ~ .navigation-auto .auto-btn2 {
  background: black;
}

#radio3:checked ~ .navigation-auto .auto-btn3 {
  background: black;
}
</style>
