<template>
  <div class="container" id="top-left">
    <text id="logo">qhelper </text>
    <text id="hotel"> Hotel Miracle</text>
  </div>
  <div class="container" id="top-right">
    <text id="title">Post Arrival Registration</text>
  </div>
  <div class="topbar" id="mid">
    <text id="done">
      1. Personal information
    </text>
    <text id="not-done"
      >--------------------- 2. Room Selection ---------------------- 3. Pass
      Generation
    </text>
  </div>
  <div id="reg_form">
    <div class="container" id="left">
      <div class="row">
        <div class="col-name">
          <label>Name</label>
        </div>
        <div class="col-con">
          <select id="gender" name="gender">
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
            <option value="ms">Ms</option>
          </select>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="First name"
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-name">
          <label for="nric">NRIC / Passport Number</label>
        </div>
        <div class="col-con">
          <input
            type="text"
            id="nric"
            name="nric"
            placeholder="e.g: A12345678"
          />
        </div>
        <br />
        <div class="col-name">
          <label for="doa">Date of Arrival</label>
        </div>
        <div class="col-con">
          <input
            type="text"
            id="doa"
            name="doa"
            placeholder="e.g: 01/09/2021"
          />
        </div>
        <br />
        <div class="col-name">
          <label for="flight">Flight / Coach / Ferry Number</label>
        </div>
        <div class="col-con">
          <input
            type="text"
            id="flight"
            name="flight"
            placeholder="e.g: MU567"
          />
        </div>
        <br />
        <text>Travel History (Past 14 days)</text>
        <div class="col-name">
          <label for="sdate"
            >Start date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;</label
          >
          <label for="edate"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; End
            date</label
          >
        </div>
        <div class="col-con">
          <input type="date" id="sdate" name="sdate" />
          ---
          <input type="date" id="edate" name="edate" />
        </div>
        <br />
        <div class="col-name">
          <label for="vaccine">COVID-19 Vaccination History</label>
        </div>
        <div class="col-con">
          <select id="vaccine" name="vaccine">
            <option value="vaccinated_Pfizer">Vaccinated - Pfizer</option>
            <option value="vaccinated_Comirnaty">Vaccinated - Comirnaty</option>
            <option value="not_vaccinated">Not Vaccinated</option>
          </select>
        </div>
      </div>
    </div>
    <div class="container" id="middle">
      <div class="row">
        <div class="col-name">
          <br />
          <label></label>
        </div>
        <div class="col-con">
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Last name"
          />
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-name">
          <label for="contact">Contact Number</label>
        </div>
        <div class="col-con">
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="e.g: +65 12345678"
          />
        </div>
        <br />
        <div class="col-name">
          <label for="cod">Country of Departure</label>
        </div>
        <div class="col-con">
          <select id="cod" name="cod">
            <option value="china">China</option>
          </select>
        </div>
        <br />
        <div class="col-name">
          <label for="seat">Seat Number</label>
        </div>
        <div class="col-con">
          <input type="text" id="seat" name="seat" placeholder="e.g: 45D" />
        </div>
        <br /><br />
        <div class="col-name">
          <label for="country">Country & Region</label>
        </div>
        <div class="col-con">
          <select id="country" name="country">
            <option value="china">China</option>
          </select>
        </div>
        <br />
        <div class="col-name">
          <label for="passtype">Arrival Passenger Type</label>
        </div>
        <div class="col-con">
          <select id="passtype" name="passtype">
            <option value="singapore citizen">Singapore Citizen</option>
            <option value="short term visitor">Short Term Visitor</option>
            <option value="long term pass holder">Long Term Pass Holder</option>
          </select>
        </div>
      </div>
    </div>
    <div class="container" id="right">
      <h4>
        I hereby declare that the information above mentioned is true to the
        best of my knowledge.
      </h4>
      <h4>
        I understand that in the event of my information being found false or
        incorrect at any stage, I shall fully be liable to the prevaling laws
        and / or subject to sanictions.
      </h4>
      <input type="submit" value="Declare and Continue  >" class="btn" />
    </div>
  </div>
</template>

<script>
import firebaseApp from '..../firebase.js';
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';
const db = getFirestore(firebaseApp);

export default {
    methods: {
        async savetofs() {    
            var gender  = document.getElementById("gender").value
            var fname  = document.getElementById("fname").value
            var lname =  document.getElementById("lname").value
            var nric  = document.getElementById("nric").value
            var contact =  document.getElementById("contact").value
            var doa =  document.getElementById("doa").value
            var cod =  document.getElementById("cod").value
            var flight =  document.getElementById("flight").value
            var seat =  document.getElementById("seat").value
            var sdate =  document.getElementById("sdate").value
            var edate =  document.getElementById("edate").value
            var country =  document.getElementById("country").value
            var vaccine =  document.getElementById("vaccine").value
            var passtype =  document.getElementById("passtype").value

            alert(" Welcome " + gender + " "  + fname + "! Information submitted successfully.") 

            try {
                const docRef = await setDoc(doc(db, "RegInfo", nric), {
                    Gender: gender, Fname: fname, Lname: lname, NRIC: nric, Contact: contact,
                    DOA: doa, COD: cod, Flight: flight, Seat: seat, Sdate: sdate, Edate: edate, 
                    Country: country, Vaccine: vaccine, Passtype: passtype,
                })
                console.log(docRef)
                document.getElementById("regform").reset();
                this.$emit("added")
            }
            catch(error) {
                console.error("Error adding document: ", error);
            }
        }
    }

}
</script>


<style scoped>
#logo {
  font-size: 40px;
  text-align: left;
}
#hotel {
  font-size: 30px;
  color: rgb(154, 177, 206);
}
#title {
  font-size: 30px;
  color: rgb(133, 130, 130);
}
#top-left {
  position: relative;
  width: 50%;
  height: 10vh;
  top: 10vh;
  text-align: center;
  float: left;
}
#top-right {
  position: relative;
  width: 50%;
  height: 10vh;
  top: 10vh;
  text-align: center;
  float: left;
}
#mid {
  position: relative;
  width: 100%;
  height: 10vh;
  top: 12vh;
  text-align: center;
}
#reg_form {
  position: relative;
  width: 80vw;
  height: 60vh;
  top: 20vh;
  left: 9vw;
  border-style: solid;
  border-width: 5px;
  border-color: lavender;
}
#left {
  position: relative;
  width: 35%;
  height: 100%;
  top: 5%;
  left: 8%;
  float: left;
  text-align: left;
}
#middle {
  position: relative;
  width: 25%;
  height: 100%;
  top: 5%;
  left: 8%;
  float: left;
  text-align: left;
}
#right {
  position: relative;
  width: 20%;
  height: 80%;
  top: 15%;
  left: 10%;
  float: left;
}
text,
.col-name {
  color: rgb(55, 55, 156);
  font-size: large;
  font-weight: bold;
}
.btn {
  width: 240px;
  height: 30px;
  color: white;
  padding: 0;
  border: none;
  font-size: large;
  font-weight: bold;
  background: rgb(77, 77, 236);
}
</style>
