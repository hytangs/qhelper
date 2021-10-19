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
    <text class = "number"> 1. </text>
    <text class = "head"> Personal information --------------------- </text>
    <text class = "number"> 2. </text>
    <text class = "head"> Room Selection ---------------------- </text>
    <text class = "number"> 3. </text>
    <text class = "head"> Pass Generation </text> 
</div>
<br><br>
<div class = "body">
    <div id = "qr">
        <text id="name"> {{name}} </text> <br>
        <text id="room"> Room {{roomNo}} </text> <br>
        <text id="checkin"> Check In </text> <br>
        <img alt="qr" src="@/assets/qr_checkin.png"> <br>
        Room Type: {{roomType}} <br>
        Valid Until: {{time}} <br>
        For One Time Use Only
    </div>
    <div id = "instruction">
        <text> Congratulations! </text> <br><br>
        <text> Check In Completed! Enjoy your stay with us! </text> <br><br>
        <text id="list"> Quarantine Reminder: </text> 
        <ul>
            <li> Do not leave the room. </li>
            <li> No visitors allowed. </li>
            <li> Complete health declaration once a day. </li>
        </ul>
        <button> Save to Photos </button>
        <button> Go to Dashboard </button>
    </div>
</div>
</template>

<script>
export default {
    name: 'PassGeneration',
    props: {
        name:String,
        roomNo:String,
        roomType:String,
        time:String,
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
.head {
  color: rgb(55, 55, 156);
  font-size: 24px;
  font-weight: bold;
}
.number {
    color: white;
    font-size: 23px;
    font-weight: bold;
    background-color: rgba(54, 68, 189, 1);
    border-radius: 100px;
    padding: 1px;
    box-sizing: border-box;
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
  margin: auto;
}
.body {
    width: 95%;
    background-color: rgba(196, 196, 196, 0.15);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
}
#qr {
    border: 7px double #0C9C2C;
    box-sizing: border-box;
    text-align: center;
    font-weight: bold;
    float:left;
    width: 50%;
}
#name, #room, #checkin {
    color: #3644BD;
    font-weight: bold;
}
#name {
    font-size: 22px;
}
#room {
    font-size: 21px;
}
#checkin {
    font-size: 20px;
}
text {
    color: #3644BD;
    font-weight: bold;
    font-size: 22px;
}
img {
    width: 275px;
    height: 269px;
}
#instruction {
    float: left;
    text-align: left;
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
}
ul {
    color: #524C4C;
    font-weight: bold;
    font-size: 21px;
}
button {
    background-color: #3D5ABD;
    color: white;
    font-size: 18px;
    margin-left: 7px;
}
</style>