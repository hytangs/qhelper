<template>
  <body>
  <header>
    <a href = "#" class = "logo text-3xl"> QHELPER </a>
    <ul>
      <li><a class = "title" href = "#home">Home</a></li>
      <li><a class = "title" href = "#">Meals</a></li>
      <li><a class = "title" href = "#">Shop</a></li>
      <li><a class = "title" href = "#entertainment">Entertainment</a></li>
      <li><a class = "title" href = "#">Checkout</a></li>
      <li><a class = "title" href = "#">Contact</a></li>
    </ul>
    <div class="date">
      <p>Current Date & Time: {{currentDateTime()}} {{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}</p>
    </div>
  </header>
  <section class="banner"></section>
  <div class = "home_area" id="home">
    <div class = "area"><Home/></div>
  </div>
  <!--<div class = "costs_area" id = "costs">
    <costs/>
  </div>-->
  <div class = "entertainment_area" id = "entertainment">
    <Entertainment/>
  </div>
  </body>
</template>

<script>
import Home from '../../components/guest/Home'
import Entertainment from '../../components/guest/Entertainment'

const date = new Date();

export default {
  name: "GuestDashboard",
  components: {
    Home,
    Entertainment
  },

  data() {
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
  },
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
header.sticky .date {
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
  height: 100vh;
  background-color:whitesmoke;
}

.costs_area{
  position:relative;
  display:flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  width:100%;
  height: 70vh;
  background-color:beige;
}

.date {
  width:16%;
  position:relative;
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

.area{ /* change the width of the white cards */
  width: 70%;
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
</style>
