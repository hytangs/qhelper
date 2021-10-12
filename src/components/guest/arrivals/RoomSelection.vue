<template>
   <div class="container"> 
       <div id="top-left"> 
           <text id="logo"> qhelper </text>
           <text id="hotel"> Hotel Miracle</text>
       </div>
       <div id="top-right">
           <text id="title">Post Arrival Registration</text>
        </div>
   </div>
   <br><br>
   <div id="mid">
        <text id = "head">
            1. Personal information --------------------- 2. Room Selection ---------------------- 3. Pass Generation
        </text> 
   </div>
   <div class="body">
       <br><br>
       <div class = "statement"> 
           Hi {{name}}, Please select the room type according to your preference.
       </div>
       <br>
       <div class = "single">
           <b>Smart Single Room</b> <br><br>
           <img alt="Single photo" src="@/assets/single.png"><br>
           <text id="cost">$200</text>
           /Day <br>
           including meals &amp; GST. <br>
           <button> Select </button>
       </div>
       <div class = "queen">
           <b>Premium Queens Room</b> <br><br>
           <img alt="Single photo" src="@/assets/queen.png"><br>
           <text id="cost">$300</text>
           /Day <br>
           including meals &amp; GST. <br>
           <button> Select </button>
       </div>
       <div class = "king">
           <b>Premium Kings Room</b> <br><br>
           <img alt="Single photo" src="@/assets/king.png"><br>
           <text id="cost">$400</text>
           /Day <br>
           including meals &amp; GST. <br>
           <button> Select </button>
       </div> 
       <div class = "apartment">
           <b>Premium Apartment Room</b> <br><br>
           <img alt="Single photo" src="@/assets/apartment.png"><br>
           <text id="cost">$800</text>
           /Day <br>
           including meals &amp; GST. <br>
           <button> Select </button>
       </div>
   </div>
   
   <br><br>
   <button id="end"> Confirm > </button>

</template>

<script>
export default {
    name: 'RoomSelection',
    props: {
        name:String
    }
}
</script>

<style scoped>
#logo {
  font-size: 40px;
  font-weight: bold;
}
#hotel {
  font-size: 30px;
  color: rgb(154, 177, 206);
  font-weight: bold;
}
#title {
  font-size: 30px;
  color: rgb(133, 130, 130);
  font-weight: bold;
}
#head {
  color: rgb(55, 55, 156);
  font-size: 24px;
  font-weight: bold;
}
#top-left {
  float: left;
}
#top-right {
  float: right;
}
.container {
    text-align: center;
    width:100%;
    height:2vh;
}
#mid {
  width: 100%;
  text-align: center;
  background-color: #F0F0F0;
  float: left;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.statement{
    font-size: 20px;
    font-weight: bold;
    color: #948E8E;

}
#cost {
    font-size:30px;
    font-weight:bold;
    color:black
}
.single, .queen, .king, .apartment{
    background-color: rgba(196, 196, 196, 0.15);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    float:left;
    text-align: center;
    width:25%;
}
.body{
    width: 100%;
    text-align: center;
    position:relative;
    display: inline-block;
}
img{
    width: 243px;
    height: 202px;
    left: 427px;
    top: 440px;
}
button{
    position: relative;
    background-color: #3996EC;
    color: white;
    font-size: 20px;
}
#end{
    float: right;
    background-color: #3D5ABD;
    color: white;
    font-size: 24px
}
</style>