<!--<template>
    <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded">
        <div class = "bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded">
            <slot/>
            <button class ="popup-close" @click="TogglePopup()"><b>Declare</b></button>
        </div>
    </div>
</template>-->

<template>
    <form class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded">
        <header class="flex items-stretch border-b border-gray-100 dark:border-gray-700">
            <p class="flex items-center py-3 flex-grow font-bold px-4">
                <span class="inline-flex justify-center items-center w-6 h-6 mr-3" data-v-3ca1866b="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </span> Health Declaration Form
            </p>
            <a href="#" class="flex items-center py-3 px-4 justify-center ring-blue-700 focus:ring" aria-label="more options">
                <span class="inline-flex justify-center items-center w-6 h-6" data-v-3ca1866b="">
                    <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block" data-v-3ca1866b="">
                          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </span>
            </a>
        </header>
        <div class="p-6">
          <slot/>
          <div class="p-6">
            <div class="mb-6 last:mb-0" wrap-body="">
              <label class="block font-bold mb-2">Date & Time</label>
              <p>{{currentDateTime()}} {{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}</p>
            </div>
            <hr class="my-6 -mx-6 border-t border-gray-100 dark:border-gray-700">
            <div class="mb-6 last:mb-0" wrap-body="">
              <label class="block font-bold mb-2">
                Health Condition
              </label>
              <p>Do you have any Covid-19 symptoms that you recently acquired?</p><br>
              <div class="">
                <div class="flex justify-start flex-wrap -mb-3">
                  <label class="checkbox mr-6 mb-3 last:mr-0">
                    <input type="radio" name="submit-checkbox" value="yes" v-model="submit_symptoms">
                    <span class="check"></span><span class="control-label">YES</span>
                  </label>
                  <label class="checkbox mr-6 mb-3 last:mr-0">
                    <input type="radio" name="submit-checkbox" value="no" v-model="submit_symptoms">
                    <span class="check"></span><span class="control-label">NO</span>
                  </label>
                </div>
              </div>
            </div>
            <hr class="my-6 -mx-6 border-t border-gray-100 dark:border-gray-700">
            <div class="mb-6 last:mb-0">
              <label class="block font-bold mb-2">Temperature Declaration</label>
              <div class="temperature_container">
                <input type="text" class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-gray-800 pl-10 temperature" id="submit_temp">
                &nbsp;&nbsp; <span>&#8451;</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </div>
            <hr class="my-6 -mx-6 border-t border-gray-100 dark:border-gray-700">
            <div class="mb-6 last:mb-0">
              <label class="block font-bold mb-2">Remarks</label>
              <textarea class="remark px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-24 border bg-white dark:bg-gray-800" placeholder="Explain in detail how we can help you. Please only write down here for health issues. Thank you!" spellcheck="false" id="submit_request"></textarea>
            </div>
            <hr class="my-6 -mx-6 border-t border-gray-100 dark:border-gray-700">
          </div>
          <div class="declare flex items-center justify-start flex-wrap -mb-3">
            <button class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3" type="submit" @click="submitcheck(), TogglePopup()">
              <span class="px-2">Declare</span>
            </button>
            <!--<button class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-500 hover:text-white text-blue-500 border-blue-600 mr-3 last:mr-0 mb-3" type="reset">
              <span class="px-2">Reset</span>
            </button>-->
          </div>
        </div>
    </form>
</template>

<script>
//import HealthDeclare from './HealthDeclare.vue'
import firebaseApp from "../../../firebase.js";
import { getFirestore } from "firebase/firestore";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import localsession from "../../../store/localsession";
import datequery from "../../plugins/helpers/datequery";
const db = getFirestore(firebaseApp);

const date = new Date();

export default {
  name: "Popup",
  props:['TogglePopup'],


  data() {
    return {
      dateTime: {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      },
      timer: undefined,
      submit_symptoms: ''
    };
  },
  methods: {
    currentDateTime() {
      const current = new Date();
      const date = current.getDate()+'-'+(current.getMonth()+1)+'-'+current.getFullYear();
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

    async submitcheck() {
      var alerted = false;
      var incorrect = false;

      var request = document.getElementById("submit_request").value;
      if (request.length > 0) {
        alerted = true;
      }

      var temperature = document.getElementById("submit_temp").value;
      if (temperature.length < 2) {
        incorrect = true;
      } else if (parseFloat(temperature) > 37.3 || parseFloat(temperature) < 35.6) {
        alerted = true;
      }

      var symptoms = this.submit_symptoms
      if (symptoms === '') {
        incorrect = true;
      } else if (symptoms === 'yes') {
        alerted = true;
      }

      if (incorrect === true) {
        alert("The health declaration you filled in is not complete!")
      } else if (alerted === false) {
        await updateDoc(doc(db, "RegInfo", localsession.methods.getGuestRoom()), {
          lastHealthDeclaration: datequery.methods.fetchTodayString(),
        });

        alert("Health status declared today! Please continue to monitor your health and report tomorrow!")
      } else {
        await updateDoc(doc(db, "RegInfo", localsession.methods.getGuestRoom()), {
          lastHealthDeclaration: datequery.methods.fetchTodayString(),
        });

        await setDoc(doc(db, "HealthOrder", localsession.methods.getGuestRoom()), {
          Guest: localsession.methods.getGuestName(),
          Room: localsession.methods.getGuestRoom(),
          Date: datequery.methods.fetchTodayString(),
          Symptoms: symptoms,
          Request: request,
          Temperature: temperature,
        });

        alert("We have recorded your health declaration. Our healthcare professionals will attend to you very soon.")
      }
    }
  },

  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000);
  },

  beforeUnmount() {
    clearInterval(this.timer);
  },
};

</script>

<style scoped>
.declare{
    margin-top: -1rem;
}

.temperature{
  width: 20%;
}

.temperature_container{
  display: flex;
  justify-content: space space-between;
}

.remark{

}
</style>
