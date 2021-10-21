<template>
<full-screen-section bg = "login" id = "container" v-slot="{ cardClass, cardRounded }">
  <!-- <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 "> -->
    <card-component style="overflow-y:scroll; height:600px;"
    :class="cardClass" :rounded="cardRounded" form id = "regform">
      <field label="Gender">
        <control :options="genderOptions" v-model="form.gender" id = "gender"/>
      </field>

      <field label="Name">
        <control placeholder="First Name" v-model="form.firstName" id = "fname"/>
        <control placeholder="Last Name" v-model="form.lastName" id = "lname"/>
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

      <!-- <field label="Travel History (Past 14 Days)" help="DD/MM/YYYY">
        <control placeholder="Start Date" v-model="form.historyStart" id="sdate" />
        <control placeholder="End Date" v-model="form.historyEnd" id="edate"/>
        <control placeholder="Country" v-model="form.historyCountry" id="country" />
      </field> -->

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
            @click="RegistrationDone = true, roomselect(), savetofs()"/>
        </jb-buttons> -->

    <card-component @submit.prevent="submit">
      <div class="text-center text-gray-500 dark:text-gray-400">
        I hereby declare that the information above mentioned is true to the best of my knowledge.
        <br><br>
        I understand that in the event of my information being found false or
        incorrect at any stage, I shall fully be liable to the prevaling laws
        and / or subject to sanictions.
        <br><br>
        <jb-buttons>
          <jb-button type="submit" color="info" label="Declare and Continue >" 
            @click="roomselect(), savetofs()"/>
        </jb-buttons>
      </div>
    </card-component>

    </card-component>
  <!-- </div> -->
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
            const docRef = await setDoc(doc(db, "RegInfo", nric), {
                Gender: gender, Fname: fname, Lname: lname, NRIC: nric, Contact: contact,
                DOA: doa, COD: cod, Flight: flight, Seat: seat, //Sdate: sdate, Edate: edate,
                //Country: country, 
                Vaccine: vaccine, Passtype: passtype,
            })
            console.log(docRef)
            document.getElementById("regform").reset();
            this.$emit("added")
        }
        catch(error) {
            console.error("Error adding document: ", error);
        }
      }
    },

    setup() {
      const countryOptions = [
        "Germany",
        "Hong Kong",
        "Mainland China",
        "Canada",
        "Danmark",
        "France",
        "Italy",
        "Spain",
        "United Kingdom",
        "United States",
        "South Korea",
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
        this.savetofs()
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
jb-buttons {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
