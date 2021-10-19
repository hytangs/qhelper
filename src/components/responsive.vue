<template>
  <body>
  <header>
    <a href = "#" class = "logo">QHelper</a>
    <ul>
      <li><a href = "#home">Home</a></li>
      <li><a href = "#">Meals</a></li>
      <li><a href = "#">Costs</a></li>
      <li><a href = "#">Entertainment</a></li>
      <li><a href = "#">Checkout</a></li>
      <li><a href = "#">Contact</a></li>
    </ul>
  </header>
  <section class="banner"></section>
  <div class = "home_area" id="home">
    <home/>
  </div>
  </body>
</template>

<script>
import home from '@/components/home.vue'

export default {
  name: 'responsive',
  components: {
    home
  }
}

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
  padding: 40px 100px;
  z-index: 100000;
}

header.sticky{
  padding: 5px 100px;
  background-color: white;
}

header .logo{
  position: relative;
  font-weight: 700;
  color: black;
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
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
  background: url("C:/Users/Jie Hui/Documents/BT3103/Project/test/src/assets/welcome_page.png");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
}

header.sticky .logo,
header.sticky ul li a {
  color:black;
}

.home_area{
  position:relative;
  display:flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  width:100%;
  height: 70vh;
  background-color:whitesmoke;
}
</style>