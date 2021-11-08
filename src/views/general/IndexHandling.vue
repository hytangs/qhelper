<template>
    <full-screen-section class = "bg" v-slot="{ cardClass, cardRounded }">
      <card-component
        :class="cardClass"
        :rounded="cardRounded"
      >
        <h1 class="text-3xl">Welcome to <b>QHelper!</b></h1>
        <br>
        <p>QHelper is <b> World's First </b> integrated solution to efficient COVID-19  quarantine hotel processing. </p>
        <p>We hope you will like this service, born in Singapore. </p>
        <br />
        <p>Please enter via respective portals.</p>

        <divider />

        <!-- <jb-buttons> -->
          <jb-button
            to="/arrivals"
            color="info"
            outline
            label="Guest Arrivals"
          />
          <jb-button
            to="/guest/login"
            color="info"
            outline
            label="Guest Portal"
          />
          <jb-button
            to="/admin/login"
            color="info"
            outline
            label="Admin Portal"
          />
        <!-- </jb-buttons> -->
      </card-component>
    </full-screen-section>
</template>

<script>
import FullScreenSection from '../../../src/components/plugins/FullScreenSection';
import CardComponent from '../../../src/components/plugins/CardComponent';
import Divider from '../../../src/components/plugins/Divider.vue';
import JbButton from '../../../src/components/plugins/JbButton';
//import JbButtons from '../../../src/components/plugins/JbButtons'

export default {
  name: "IndexHandling",
  components: {
    FullScreenSection,
    CardComponent,
    Divider,
    JbButton,
    //JbButtons
  },
};
</script>

<style scoped>
#index {
  margin-top: 50px;
  margin-left: 100px;
}

.bg{
  background: url("https://mocah.org/uploads/posts/353870-4k-wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
}
</style>
