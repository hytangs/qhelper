<template>
    <div class="paymentFAQ">
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
            clicked: false, title: "How and when to make a payment for my stay?",
            desc: "At the end of your quarantine period with us, kindly proceed to make payment for all expenditures under the checkout tab."
          },
          {
            clicked: false, title: "How to get the physical receipt of my payment?",
            desc: "Guest can request for a physical receipt of your payment from our frontdesk staff upon checkout."
          },
          {
            clicked: false, title: "What payment method is accepted?",
            desc: "QHelper currently supports 3 payment methods. They are Credit Cards, PayNow, and GrabPay respectively."
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
.paymentFAQ{
    text-align: left;
}
</style>
