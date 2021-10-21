<template>
<main-section>
    <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 ">
        
      <card-component>
        <div class="text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400">
            {{name}} <br>
            Room {{roomNo}} <br>
            Check In <br>
            <img alt="qr" src="../../../public/assets/qr_checkin.png"> <br>
            Room Type: {{roomType}} <br>
            Valid Until: {{time}} <br>
            For One Time Use Only
        </div>
      </card-component>

      <card-component>
        <div class="text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400">
            Congratulations!<br><br>
            Check In Completed! Enjoy your stay with us! <br><br>
            Quarantine Reminder:
            <ul>
                <li> Do not leave the room. </li>
                <li> No visitors allowed. </li>
                <li> Complete health declaration once a day. </li>
            </ul>
            <jb-buttons>
                <jb-button color="info" label="Save to Photos" v-on:click="saveToPhotos()"/>
                <jb-button color="info" label="Go to Dashboard" v-on:click="goDashboard()"/>
            </jb-buttons>
        </div>
      </card-component>

    </div>
  </main-section>
</template>

<script>
import MainSection from '../plugins/MainSection'
import CardComponent from '../plugins/CardComponent'
import JbButton from '../plugins/JbButton'
import JbButtons from '../plugins/JbButtons'

export default {
    name: 'PassGeneration',

    props: {
        name:String,
        roomNo:String,
        roomType:String,
        time:String,
    },

    components: {
        MainSection,
        CardComponent,
        JbButton,
        JbButtons,
    },

    methods: {
        saveToPhotos() {
            //save to photos
        },

        goDashboard() {
            this.$router.push({path: '/'})
        }
    }

}

</script>

<style scoped>

img {
    width: 275px;
    height: 269px;
}

</style>