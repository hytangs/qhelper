<template>
<full-screen-section class="bg" id = "container" v-slot="{ cardClass, cardRounded }">
  <card-component style="overflow-y:scroll; height:600px;"
  form id = "regform" :class="cardClass" :rounded="cardRounded" @submit.prevent="submit">
      <h1 class="text-3xl">QHelper <b>Miracle Check In</b></h1> <br>
      <p class="text-lg text-gray-900">Welcome to Singapore. Your health and safety is
        important to us. Please fill up the registration form before check in.</p> <br>

      <field label="Gender">
        <control :options="genderOptions" v-model="form.gender" id = "gender"/>
      </field>

      <field label="Name">
        <control placeholder="First Name" v-model="form.firstName" id = "fname"/>
        <control placeholder="Last Name" v-model="form.lastName" id = "lname"/>
      </field>

      <field label="Email">
        <control placeholder="Your email address" v-model="form.email" id = "email"/>
      </field>

      <field label="Password">
        <control placeholder="Enter a password with 6 - 12 digits" v-model="form.password" type="password" id = "password"/>
      </field>

      <field label="Passport / Travel Document Number">
        <control placeholder="e.g. A12345678" v-model="form.identity" id = "identity"/>
      </field>

      <field label="Contact Number">
        <control type="tel" placeholder="Your phone number" v-model="form.contact" id = "contact"/>
      </field>

      <field label="Country of Departure and Date of Arrival">
        <control :options="countryOptions" v-model="form.country" id = "cod"/>
        <control placeholder="YYYYMMDD format (eg. 20211031)" v-model="form.arrivalDate" id = "doa"/>
      </field>

      <!-- <field label="Country of Departure">
        <control :options="countryOptions" v-model="form.country" id = "cod"/>
      </field> -->

      <field label="Flight / Coach / Ferry Details">
        <control placeholder="Flight Number" v-model="form.travelNumber" id = "flight"/>
        <control placeholder="Seat Number" v-model="form.travelSeat" id = "seat" />
      </field>

      <field label="Covid-19 Vaccination History">
        <control :options="vaccineOptions" v-model="form.vaccine" id ="vaccine"/>
      </field>

      <field label="Arrival Passenger Type">
        <control :options="passengerOptions" v-model="form.passengerType" id = "passtype"/>
      </field>

    <card-component>
      <div class="text-center text-gray-500 dark:text-gray-400">
        I hereby declare that the information above mentioned is true to the best of my knowledge.
        <br><br>
        I understand that in the event of my information being found false or
        incorrect at any stage, I shall fully be liable to the prevailing laws
        and / or subject to sanctions.
        <br><br>
        <jb-buttons>
          <jb-button type="submit" color="info" label="Declare and Continue >"
            @click="savetofs()"/>
        </jb-buttons>
      </div>
    </card-component>

    </card-component>

</full-screen-section>
</template>

<script>
// import firebaseApp from '../../firebase.js';
// import { getFirestore } from 'firebase/firestore';
// import { doc, setDoc } from 'firebase/firestore';
// const db = getFirestore(firebaseApp);
import {useStore} from 'vuex'
import FullScreenSection from '../plugins/FullScreenSection'
import CardComponent from '../plugins/CardComponent'
// import CheckRadioPicker from '../../../src/components/plugins/CheckRadioPicker'
import JbButton from '../plugins/JbButton'
import JbButtons from '../plugins/JbButtons'
import Field from '../plugins/Field'
import Control from '../plugins/Control'
import datequery from '../plugins/helpers/datequery'


export default {

  props: {
    fname: String,
    email: Number
  },

  components:{
    FullScreenSection,
    CardComponent,
    //CheckRadioPicker,
    Field,
    Control,
    JbButton,
    JbButtons,
  },

  methods: {
      roomselect() {
        this.$router.push({name: "RoomSelectionPage",
        path: '/arrivals/roomselection', params: {
          fname: document.getElementById("fname").value,
          lname: document.getElementById("lname").value,
          gender: document.getElementById("gender").value
          },})
      },

      checkTodayIsArrivalDate(arrive) {
        return arrive === datequery.methods.fetchTodayString();
      },

      // need to update based on the quarantine period policy
      checkQuarantine(cod, arrive) {
        const arrivetoday = this.checkTodayIsArrivalDate(arrive)
        if (["Australia", "Austria", "Bahrain", "Belgium", "Bhutan", "Brunei", "Bulgaria",
        "Canada", "Croatia", "Cyprus", "Czech Republic", "Denmark" , "Fiji", "France" ,
        "Finland", "Germany", "Greece", "Iceland", "Ireland", "Italy", "Japan", "Liechtenstein",
        "Luxembourg", "Malta", "New Zealand", "Norway", "Poland", "Portugal", "the Republic of Korea",
        "Saudi Arabia", "Slovakia", "Spain", "Sweden", "Switzerland", "Turkey", "The Netherlands",
        "The United Kingdom", "The United States", "Vatican City"].includes(cod)) {
          return (arrivetoday) ? "7" : "6";
        } else if (["Cambodia", "Egypt", "Estonia", "Hungary", "Indonesia", "Israel", "Latvia", "Lithuania",
        "Malaysia", "Maldives", "Mongolia", "Qatar", "Rwanda", "Samoa", "Seychelles", "Slovenia", "South Africa",
        "Tonga", "UAE", "Vietnam"].includes(cod)) {
          return (arrivetoday) ? "10" : "9";
        } else if (["Hong Kong", "Macao", "China", "Taiwan"].includes(cod)) {
          return (arrivetoday) ? "1" : "0";
        } else {
          return (arrivetoday) ? "14" : "13";
        }
      },

      checkPCR(quarantinePeriod) {
        if (quarantinePeriod === "7") {
          const d2 = datequery.methods.addDays(2)
          const d6 = datequery.methods.addDays(6)
          return [d2, d6]
        } if (quarantinePeriod === "6") {
          const today = datequery.methods.fetchTodayString()
          const d5 = datequery.methods.addDays(5)
          return [today, d5]
        } else if (quarantinePeriod === "14" || quarantinePeriod === "13") {
          const d2 = datequery.methods.addDays(2)
          const d7 = datequery.methods.addDays(7)
          const d12 = datequery.methods.addDays(14)
          return [d2, d7, d12]
        } else if (quarantinePeriod === "10" || quarantinePeriod === "9") {
          const today = datequery.methods.fetchTodayString()
          const d3 = datequery.methods.addDays(3)
          const d9 = datequery.methods.addDays(8)
          return [today, d3, d9]
        } else {
          const today = datequery.methods.fetchTodayString()
          return [today]
        }
      },

      savetofs() {
        var passed = true
        var error = []

        var gender = document.getElementById("gender").value
        if (gender === '' || gender === " - Choose Below - ") {
          passed = false
          error.push("Please select your gender")
        }

        var fname = document.getElementById("fname").value
        if (fname === '') {
          passed = false
          error.push("Please fill in first name")
        }

        var lname = document.getElementById("lname").value
        if (lname === '') {
          passed = false
          error.push("Please fill in last name (Single name guests should fill in first name again)")
        }

        var email = document.getElementById("email").value
        if (email === '') {
          passed = false
          error.push("Please fill in an email address")
        } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
          passed = false
          error.push("Please fill in a valid email address")
        }

        var password = document.getElementById("password").value
        if (password.length < 6 || password.length > 12) {
          passed = false
          error.push("Please input a password with 6 - 12 digits")
        }

        var identity = document.getElementById("identity").value
        if (identity === '') {
          passed = false
          error.push("Please fill in your passport / travel document number")
        }

        var contact = document.getElementById("contact").value
        if (contact === '') {
          passed = false
          error.push("Please fill in your contact number")
        } else if (isNaN(parseInt(contact))) {
          passed = false
          error.push("Please fill in a valid contact number")
        }

        var doa = document.getElementById("doa").value
        if (doa.length !== 8 || isNaN(parseInt(doa))) {
          passed = false
          error.push("Please fill in your correct date of arrival")
        } else if (datequery.methods.dateStringCompareCurrent(doa) === false) {
          passed = false
          error.push("Please fill in a correct date")
        }

        var cod = document.getElementById("cod").value
        if (cod === '' || cod === " - Choose Below - ") {
          passed = false
          error.push("Please choose your country of departure")
        }

        var flight = document.getElementById("flight").value
        if (flight.length < 3) {
          passed = false
          error.push("Please input your correct flight number")
        }

        var seat = document.getElementById("seat").value
        if (seat.length < 1) {
          passed = false
          error.push("Please input your correct seat number")
        }
        // var sdate =  document.getElementById("sdate").value
        // var edate =  document.getElementById("edate").value
        // var country =  document.getElementById("country").value
        var vaccine = document.getElementById("vaccine").value
        if (vaccine === '' || vaccine === " - Choose Below - ") {
          passed = false
          error.push("Please choose your vaccination history")
        }
        var passtype = document.getElementById("passtype").value
        if (passtype === '' || passtype === " - Choose Below - ") {
          passed = false
        }

        if (passed === false) {
          if (error.length > 1) {
            alert("Multiple issues found: " + error + ".")
          } else {
            alert("An issue found: " + error + ".")
          }
        } else {
          if (this.checkQuarantine(cod, doa) === "0") {
            alert("you are not required to complete quarantine now. Please contact staff for assistance.")
            this.$router.push({ path: '/' })
          } else {
            var length = this.checkQuarantine(cod, doa);
            var pcr = this.checkPCR(length)

            this.$store.commit("changeFname", fname);
            this.$store.commit("changeLname", lname);
            this.$store.commit("changeEmail", email);
            this.$store.commit("changeCOD", cod);
            this.$store.commit("changeContact", contact);
            this.$store.commit("changeDOA", doa);
            this.$store.commit("changeFlight", flight);
            this.$store.commit("changePasstype", passtype);
            this.$store.commit("changePassword", password);
            this.$store.commit("changeSeat", seat);
            this.$store.commit("changeVaccine", vaccine);
            this.$store.commit("changeIdentity", identity);
            this.$store.commit("changePCR", pcr);
            this.$store.commit("changeGender", gender);
            this.$store.commit("changeLength", length);

            alert("Welcome " + gender + " " + fname + "! Form submitted successfully.")
            alert("Based on the latest quarantine policy, your quarantine period will be " +
                this.checkQuarantine(cod, doa) + " days.")
            this.roomselect()


            // try {
            //   const docRef = await setDoc(doc(db, "RegInfo", email), {
            //     Gender: gender, Fname: fname, Lname: lname, identity: identity, Contact: contact,
            //     Email: email, DOA: doa, COD: cod, Flight: flight, Seat: seat,
            //     Vaccine: vaccine, Passtype: passtype, Password: password, PCR: pcr,
            //   })
            //   console.log(docRef)

            //   this.$emit("added")
            // } catch (error) {
            //   console.error("Error adding document: ", error);
            // } finally {
            // alert("Welcome " + gender + " " + fname + "! Form submitted successfully.")
            // alert("Based on the latest quarantine policy, your quarantine period will be " +
            // this.checkQuarantine(cod) +" days.")
            // this.roomselect()
            // }
          }
        }
      }
    },

    setup() {
      const countryOptions = [
        " - Choose Below - ",
        "United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa",
        "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina",
        "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan",
        "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil",
        "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso",
        "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands",
        "Central African Republic", "Chad", "Chile", "China", "Christmas Island",
        "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands",
        "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark",
        "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt",
        "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia",
        "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France",
        "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories",
        "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland",
        "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
        "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland",
        "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy",
        "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
        "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan",
        "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia",
        "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau",
        "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico",
        "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia",
        "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
        "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau",
        "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland",
        "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda",
        "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
        "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone",
        "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
        "South Georgia South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon",
        "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland",
        "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo",
        "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
        "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
        "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State",
        "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands",
        "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"
      ]

      const vaccineOptions = [
        " - Choose Below - ",
        "Not Vaccinated / Partially Vaccinated",
        "Fully Vaccinated - Pfizer/BioNTech",
        "Fully Vaccinated - Moderna",
        "Fully Vaccinated - Astrazeneca",
        "Fully Vaccinated - Covishield",
        "Fully Vaccinated - Janssen",
        "Fully Vaccinated - Sinopharm",
        "Fully Vaccinated - Sinovac",
      ]

      const passengerOptions = [
        " - Choose Below - ",
        "Singaporean",
        "Short Term Visitor",
        "Long Term Pass Holder",
      ]

      const genderOptions = [
        " - Choose Below - ",
        "Mr",
        "Miss",
        "Mrs",
        "Madam",
      ]

      const form = ({
        gender: genderOptions[0],
        firstName:'',
        lastName:'',
        nric: '',
        contact: '',
        arrivalDate:'',
        country: countryOptions[0],
        travelNumber:'',
        travelSeat:'',
        historyStart:'',
        historyEnd:'',
        historyCountry:'',
        vaccine: vaccineOptions[0],
        passengerType: passengerOptions[0],
      })

      const store = useStore()

      return {
        countryOptions,
        vaccineOptions,
        passengerOptions,
        form,
        genderOptions,
        store
      }

  },
}
</script>


<style scoped>
.bg{
  background: url("https://mocah.org/uploads/posts/353870-4k-wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
}

</style>
