<template>
    <div class="accomodationFAQ">
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
            clicked: false, title: "How to ask for repair services of the hotel facilities?",
            desc: "The equals sign (British English, Unicode) or equal sign (American English), formerly known as the equality sign, is the mathematical symbol =, which is used to indicate equality in some well-defined sense."
          },
          {
            clicked: false, title: "How to cancel or change the meal selection?",
            desc: "The equals sign (British English, Unicode) or equal sign (American English), formerly known as the equality sign, is the mathematical symbol =, which is used to indicate equality in some well-defined sense."
          },
          {
            clicked: false, title: "What is the WiFi password for my room?",
            desc: "The equals sign The equals sign (British English, Unicode) (British English, Unicode) or equal sign (American English), formerly known as the equality sign, is the mathematical symbol =, which is used to indicate equality in some well-defined sense."
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
.accomodationFAQ{
    text-align: left;
}
</style>
