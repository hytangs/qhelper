<template>
  <full-screen-section bg="login">
    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 ">
      <card-component>
        <div class="text-center py-24 lg:py-4 text-gray-500 dark:text-gray-400">
          <text class="text-2xl"><b>
            {{ this.$route.params.gender }} {{this.$route.params.fname}} </b></text>
          <br />
          <text class="text-xl">
            Room: {{ this.$route.params.roomNumber }} <br />
            Check In Time:
            {{this.currentDate}}<br />
          </text>
          <br />
          <div id="qrcode" class="center">
            <QrcodeVue :value=this.exportQRValue :size="275" />
          </div>
          <br />
          <text>
            <b>
              Room Type: {{ this.$route.params.roomtype }} <br />
              Valid Until: {{ this.currentTime }} <br />
              For One Time Use Only
            </b>
          </text>
        </div>
      </card-component>

      <card-component>
        <div
          id="rules"
          class="text-center py-24 lg:py-4 text-gray-500 dark:text-gray-400"
        >
          <text class="text-2xl"
            ><b>
              Congratulations!<br />
              Check In Completed!<br />
              Enjoy your stay with us! <br /><br />
              <h1>Quarantine Reminder:</h1>
            </b>
          </text>
          <br />
          <ul>
            <li>1. Do not leave the room.</li>
            <li>2. No visitors allowed.</li>
            <li>3. Complete health declaration once a day.</li>
          </ul>
          <br /><br />
          <jb-buttons>
            <jb-button
              color="info"
              label="Save to Photos"
              v-on:click="saveToPhotos()"
            />
            <jb-button
              color="info"
              label="Go to Dashboard"
              v-on:click="goDashboard()"
            />
          </jb-buttons>
        </div>
      </card-component>
    </div>
  </full-screen-section>
</template>

<script>
import FullScreenSection from "../plugins/FullScreenSection";
import CardComponent from "../plugins/CardComponent";
import JbButton from "../plugins/JbButton";
import JbButtons from "../plugins/JbButtons";
import QrcodeVue from "qrcode.vue";
import moment from "moment";
import datequery from "../plugins/helpers/datequery";

export default {
  name: "PassGeneration",

  props: {
    name: String,
    roomNo: String,
    roomType: String,
    time: String,
  },

  components: {
    FullScreenSection,
    CardComponent,
    JbButton,
    JbButtons,
    QrcodeVue,
  },

  methods: {
    saveToPhotos() {
      alert("You are not using a mobile phone now. Saving failed.")
      //save to photos
    },

    goDashboard() {
      this.$router.push({ path: "/" });
    },
    setTime() {
      this.currentDate = moment(String(new Date())).format("MM/DD/YYYY HH:mm:ss");
      this.currentTime = moment(String(new Date())).add(3, 'hours').format("MM/DD/YYYY HH:mm:ss");
    },
  },

  mounted() {
    this.setTime();
  },

  setup() {
    const exportQRValue = String(this.$route.params.roomNumber) + "/"
        + String(this.$route.params.fname) + "/"
        + String(this.$route.params.lname) + "/"
        + datequery.methods.fetchTodayString() + "/"
        + "QHELPER/MIRACLE"

    return { exportQRValue }
  },

  data() {
    return {
      currentDate: null,
      currentTime: null
    }
  }
};
</script>

<style scoped>
#qrcode {
  width: 275px;
  height: 275px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

li {
  text-align: left;
  font-weight: bold;
}

h1 {
  text-align: left;
}

#rules {
  margin: 60px auto 20px;
}
</style>
