<template>
<full-screen-section bg = "login" id = "container" v-slot="{ cardClass, cardRounded }">
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
        <control placeholder="Enter your password" v-model="form.password" id = "password"/>
      </field>

      <field label="NRIC / Passport Number">
        <control placeholder="e.g. A12345678" v-model="form.nric" id = "nric"/>
      </field>

      <field label="Contact Number">
        <control type="tel" placeholder="Your phone number" v-model="form.contact" id = "contact"/>
      </field>

      <field label="Country of Departure and Date of Arrival">
        <control :options="countryOptions" v-model="form.country" id = "cod"/>
        <control placeholder="DD/MM/YYYY" v-model="form.arrivalDate" id = "doa"/>
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

      <!-- <check-radio-picker class="text-gray-500 dark:text-gray-400"
      name="declare" v-model="form.declare"
      :options="{
        declare: 'I hereby declare that the information above mentioned is true to the best of my knowledge.'
        }" />

        <check-radio-picker class="text-gray-500 dark:text-gray-400"
      name="law" v-model="form.law"
      :options="{
        law: 'I understand that in the event of my information being found false or incorrect at any stage, \
        I shall fully be liable to the prevaling laws and / or subject to sanictions.'
        }" /> -->

        <!-- <jb-buttons>
          <jb-button type="submit" color="info" label="Declare and Continue >"
            @click="roomselect(), savetofs()"/>
        </jb-buttons> -->
    <card-component>
      <div class="text-center text-gray-500 dark:text-gray-400">
        I hereby declare that the information above mentioned is true to the best of my knowledge.
        <br><br>
        I understand that in the event of my information being found false or
        incorrect at any stage, I shall fully be liable to the prevaling laws
        and / or subject to sanictions.
        <br><br>
        <jb-buttons>
          <jb-button type="submit" color="info" label="Declare and Continue >"
            @click="savetofs(), roomselect()"/>
        </jb-buttons>
      </div>
    </card-component>

    </card-component>

</full-screen-section>
</template>

<script>
import firebaseApp from '../../firebase.js';
import { getFirestore } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';
const db = getFirestore(firebaseApp);
import FullScreenSection from '../plugins/FullScreenSection'
import CardComponent from '../plugins/CardComponent'
//import CheckRadioPicker from '../../../src/components/plugins/CheckRadioPicker'
import JbButton from '../plugins/JbButton'
import JbButtons from '../plugins/JbButtons'
import Field from '../plugins/Field'
import Control from '../plugins/Control'

export default {

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
        this.$router.push('/arrivals/roomselection')
      },

      async savetofs() {
        var gender  = document.getElementById("gender").value
        var fname  = document.getElementById("fname").value
        var lname =  document.getElementById("lname").value
        var email =  document.getElementById("email").value
        var password =  document.getElementById("password").value
        var nric  = document.getElementById("nric").value
        var contact =  document.getElementById("contact").value
        var doa =  document.getElementById("doa").value
        var cod =  document.getElementById("cod").value
        var flight =  document.getElementById("flight").value
        var seat =  document.getElementById("seat").value
        // var sdate =  document.getElementById("sdate").value
        // var edate =  document.getElementById("edate").value
        // var country =  document.getElementById("country").value
        var vaccine =  document.getElementById("vaccine").value
        var passtype =  document.getElementById("passtype").value

        alert(" Welcome " + gender + " "  + fname + "! Information submitted successfully.")

        try {
            const docRef = await setDoc(doc(db, "RegInfo", email), {
                Gender: gender, Fname: fname, Lname: lname, NRIC: nric, Contact: contact,
                Email: email, DOA: doa, COD: cod, Flight: flight, Seat: seat, //Sdate: sdate, 
                //Edate: edate, Country: country, 
                Vaccine: vaccine, Passtype: passtype, Password: password,
            })
            console.log(docRef)
            // document.getElementById("regform").reset();
            this.$emit("added")
        }
        catch(error) {
            console.error("Error adding document: ", error);
        }
      }
    },

    setup() {
      const countryOptions = [
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
        // {id:1, label:'Brunei'},
        // {id:2, label:'Germany'},
        // {id:3, label:'HongKong'},
        // {id:4, label:'Macao'},
        // {id:5, label:'Mainland China'},
        // {id:6, label:'Canada'},
        // {id:7, label:'Denmark'},
        // {id:8, label:'France'},
        // {id:9, label:'Italy'},
        // {id:10, label:'Netherlands'},
        // {id:11, label:'Spain'},
        // {id:12, label:'United Kingdom'},
        // {id:13, label:'United States'},
        // {id:14, label:'South Korea'},
      ]

      const vaccineOptions = [
        "Not Vaccinated",
        "Fully Vaccinated - Pfizer/BioNTech",
        "Fully Vaccinated - Moderna",
        "Fully Vaccinated - Astrazeneca",
        "Fully Vaccinated - Covishield",
        "Fully Vaccinated - Janssen",
        "Fully Vaccinated - Janssen",
        "Fully Vaccinated - Sinopharm",
        "Fully Vaccinated - Sinovac",
        // {id:1, label:'Not Vaccinated'},
        // {id:2, label:'Fully Vaccinated - Pfizer/BioNTech'},
        // {id:3, label:'Fully Vaccinated - Moderna'},
        // {id:4, label:'Fully Vaccinated - Astrazeneca'},
        // {id:5, label:'Fully Vaccinated - Covishield'},
        // {id:6, label:'Fully Vaccinated - Janssen'},
        // {id:7, label:'Fully Vaccinated - Sinopharm'},
        // {id:8, label:'Fully Vaccinated - Sinovac'},
      ]

      const passengerOptions = [
        "Singaporean",
        "Short Term Visitor",
        "Long Term Pass Holder",
        // {id:1, label:'Singaporean'},
        // {id:2, label:'Short Term Visitor'},
        // {id:3, label:'Long Term Pass Holder'},
      ]

      const genderOptions = [
        "Mr",
        "Miss",
        "Mrs",
        "Madam",
        // {id:1, label:'Mr'},
        // {id:2, label:'Miss'},
        // {id:3, label:'Mrs'},
        // {id:4, label:'Madam'},
      ]
      const form = ({
        gender:genderOptions[0],
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

      const submit = () => {
        //
      }

      return {
        countryOptions,
        vaccineOptions,
        passengerOptions,
        form,
        genderOptions,
        submit
      }

  },
}
</script>


<style scoped>
</style>
