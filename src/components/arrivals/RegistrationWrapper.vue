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
    <text class = "head"> Room Selection --------------------- </text>
    <text class = "number"> 3. </text>
    <text class = "head"> Pass Generation </text> 
</div>
<br><br>
</template>

<script>
export default {
  name: "RegWrapper.vue"
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
</style>