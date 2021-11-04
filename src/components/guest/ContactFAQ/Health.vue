<template>
    <div class="healthFAQ">
      <div class="w-2/3 my-4 mx-auto">
        <div v-for="(qna, i) in qAndAs" v-bind:key="i" class="rounded-sm">
          <div class="border border-b-0 bg-white px-10 py-3">
            <button @click="qna.clicked=!qna.clicked" class="text-black-500 hover:text-black focus:outline-none text"
                    type="button">
              {{ qna.title }} 
            </button>
            <svg style="float:right" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="border border-b-0 px-10 py-6 bg-blue-50 text-gray-500" v-if="qna.clicked">
            {{ qna.desc }}
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "Contact",
  beforeMount() {
    this.qAndAs =
        [
          {
            clicked: false, title: "How often do we need to submit the Health Declaration Form?",
            desc: "All guests are required to declare their health status once a day."
          },
          {
            clicked: false, title: "How to obtain a physical certificate of PCR test?",
            desc: "Physical certificate of ones PCR test can be obtained upon request. Kindly contact the frontdesk and it will be delivered to you within 1 working day."
          },
          {
            clicked: false, title: "What is TraceTogether?",
            desc: "TraceTogether is a digital system the Government of Singapore implemented to facilitate contact tracing efforts in response to the COVID-19 pandemic in Singapore. All guests entering Singapore are highly encouraged to download the app to ease your travel around Singapore."
          },
        ]
  },
  methods: {
  },
  data() {
    return {
      qAndAs: []
    }
  }
}
</script>

<style scoped>
.healthFAQ{
    text-align:left;
}
</style>
