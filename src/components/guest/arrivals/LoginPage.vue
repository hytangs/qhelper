<template>
  <div class="container" id="background">
    <div class="container" id="container_left">
      <h1>qhelper</h1>
      <h2>Hotel Miracle Quarantine Assistance System</h2>
    </div>
    <div class="container" id="container_right">
      <form action="/action_page.php">
        <div class="row">
          <button class = "bar_btn" type="button">Guests</button>
          <button class = "bar_btn" type="button">Admin</button> 
          <br><br>
          <input
            type="text"
            name="roomNumber"
            placeholder="Room Number"
            required
          />
          <br>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <br><br>
          <input type="submit" value="Enter" class="btn" />
        </div>
      </form>
      <br>
      New guest?
      <a href="./RegistrationForm.vue">Register here when you arrive!</a>
    </div>
  </div>
</template>

<style scoped>
h1 {
    font-size: 80px;
    color: rgb(96, 96, 194);
}
h2 {
    font-size: 40px;
    color: rgb(154, 177, 206);
}
#background {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/plane.png");
  background-size: 100% 100%;
  position: fixed;
}
#container_left {
  position: relative;
  width: 45%;
  height: 80%;
  top: 20%;
  float: left;
  text-align: right;
}
#container_right {
  position: relative;
  width: 55%;
  height: 80%;
  top: 30%;
  float: left;
  text-align: center;
}
.btn {
    width: 100px;
    height: 30px;
    color: white;
    padding: 0;
    border: none;
    font-size: large;
    background: rgb(77, 77, 236);
}
.bar_btn {
    width: 100px;
    height: 30px;
    color: white;
    padding: 0;
    border: none;
    font-size: large;
    background: rgb(162, 162, 255);
}
</style>
