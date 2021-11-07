<template>
  <div id="payment">
    <div class="w-1/2 my-8 mx-auto">
      <h1 class="text-3xl text-gray-500">Payment</h1>
      <p class="text-gray-400">All transaction are secure and encrypted</p>
      <p class="text-gray-400">Your Total Cost is: {{ this.finance }}</p>
      <div class="panel mt-8">
        <div class="rounded border border-gray-300">
          <!-- pannel inner -->
          <div class="panel-inner">
            <div class="px-6 py-3 bg-white border-b text-left">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio text-blue-500"
                  id="creditcard"
                  name="radio"
                  @change="hideShow('creditCard')"
                  checked
                />
                <span class="ml-2">Credit Card</span>
              </label>
            </div>
            <div v-if="paymentOptions.creditCard" class="px-6 py-3 bg-gray-100">
              <label class="relative block">
                <input
                  type="text"
                  class="form-input mt-1 block w-full rounded-md border-gray-300 h-14"
                  placeholder="Card number"
                />
                <LockClosedIcon
                  class="h-5 w-5 text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3"
                />
              </label>
              <label class="block mt-3">
                <input
                  type="text"
                  class="form-input mt-1 block w-full rounded-md border-gray-300 h-14"
                  placeholder="Name on card"
                />
              </label>
              <div class="grid grid-cols-2 gap-4">
                <label class="block mt-3">
                  <input
                    type="text"
                    class="form-input mt-1 block w-full rounded-md border-gray-300 h-14"
                    placeholder="Expiration date (MM/YY)"
                  />
                </label>
                <label class="relative block mt-3">
                  <input
                    type="text"
                    class="form-input mt-1 block w-full rounded-md border-gray-300 h-14"
                    placeholder="Security code"
                  />
                  <QuestionMarkCircleIcon
                    class="h-5 w-5 text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3"
                  />
                </label>
              </div>
            </div>
          </div>
          <!-- pannel inner end -->
          <!-- pannel inner -->
          <div class="panel-inner">
            <div class="px-6 py-3 bg-white border-b text-left">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio text-blue-500"
                  id="paynow"
                  name="radio"
                  @change="hideShow('payNow')"
                  checked
                />
                <span class="ml-2">Pay Now</span>
              </label>
            </div>
            <div
              v-if="paymentOptions.payNow"
              class="px-6 py-3 bg-gray-100 text-gray-400"
            >
              <CreditCardIcon class="h-72 w-72 m-auto text-gray-400" />
              <p class="text-center">
                After "Clicking Complete order", You will be redirect to
                HitPay-PayNow QR Checkout to complete your purchase securely
              </p>
            </div>
          </div>
          <!-- pannel inner end -->
          <!-- pannel inner -->
          <div class="panel-inner">
            <div class="px-6 py-3 bg-white border-b text-left">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  class="form-radio text-blue-500"
                  id="grab"
                  name="radio"
                  @change="hideShow('grabPay')"
                  checked
                />
                <span class="ml-2">Grab</span>
              </label>
            </div>
            <div
              v-if="paymentOptions.grabPay"
              class="px-6 py-3 bg-gray-100 text-gray-400"
            >
              <CreditCardIcon class="h-72 w-72 m-auto text-gray-400" />
              <p class="text-center">
                After "Clicking Complete order", You will be redirect to GrabPay
                to complete your purchase securely
              </p>
            </div>
          </div>
          <!-- pannel inner end -->
        </div>
      </div>
      <!-- pannel end -->

      <!-- Billing Address -->
      <div class="bg-gray-100 border rounded mt-8 px-6 py-3">
        <label class="block mt-4">
          <select
            class="form-select mt-1 block w-full rounded-md border-gray-400 text-gray-400 h-14"
          >
            <option value="" disabled selected>Country/Region</option>
            <option>Singapore</option>
          </select>
        </label>
        <div class="grid grid-cols-2 gap-4">
          <label class="block mt-3">
            <input
              type="text"
              class="form-input mt-1 block w-full rounded-md border-gray-300 h-14"
              placeholder="First Name"
            />
          </label>
          <label class="block mt-3">
            <input
              type="text"
              class="form-input mt-1 block w-full rounded-md border-gray-300 h-14"
              placeholder="Last Name"
            />
          </label>
        </div>
        <label class="block mt-3">
          <input
            type="text"
            class="form-input mt-1 block w-full rounded-md border-gray-300 h-14"
            placeholder="Address"
          />
        </label>
        <label class="block mt-3">
          <input
            type="text"
            class="form-input mt-1 block w-full rounded-md border-gray-300 h-14"
            placeholder="Apartment,suites,etc(optional)"
          />
        </label>
        <label class="block mt-3">
          <input
            type="text"
            class="form-input mt-1 block w-full rounded-md border-gray-300 h-14"
            placeholder="Postal Code"
          />
        </label>
        <label class="relative block mt-3">
          <input
            type="text"
            class="form-input mt-1 block w-full rounded-md border-gray-300 h-14"
            placeholder="Phone"
          />
          <QuestionMarkCircleIcon
            class="h-5 w-5 text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3"
          />
        </label>
        <br>
         <button class="donebtn" @click="savetofs()">Submit your Payment</button>
      </div>
      <!-- Billing Address end-->
    </div>
  </div>
</template>

<script>
import {
  LockClosedIcon,
  QuestionMarkCircleIcon,
  CreditCardIcon,
} from "@heroicons/vue/solid";
import localsession from "../../store/localsession";

import firebaseApp from "../../firebase.js";
import { getFirestore, updateDoc, getDoc } from "firebase/firestore";
import { doc, setDoc, increment } from "firebase/firestore";
import datequery from "../plugins/helpers/datequery";
const db = getFirestore(firebaseApp);

export default {
  name: "checkout",

  components: { LockClosedIcon, QuestionMarkCircleIcon, CreditCardIcon },

  methods: {
    hideShow(ref) {
      this.paymentOptions.creditCard = false;
      this.paymentOptions.payNow = false;
      this.paymentOptions.grabPay = false;
      this.paymentOptions[ref] = true;
      console.log(this.paymentOptions);
    },

    async savetofs() {
      const id_pack = await getDoc(doc(db, "PaymentRecord", "block"));
      const id_data = id_pack.data();
      const id = id_data['identification']

      var paymentMethod = document.querySelector('input[name="radio"]:checked').id;

      //var request = document.getElementById("Lunch").value;
      var room = this.roomNumber;

      const docRef = await setDoc(doc(db, "PaymentRecord", String(id)), {
        GuestName: this.guestname,
        GuestRoom: room,
        Payment: String(this.finance),
        PaymentMethod: paymentMethod,
        Date: datequery.methods.fetchTodayString(),
      });

      console.log(docRef);
      this.$emit("added");

      const docRef2 = await updateDoc(doc(db, "PaymentRecord", "block"), {
        identification: increment(1)
      });
      console.log(docRef2);

      alert("Payment Success!");

    },
  },

  data() {
    return {
      paymentOptions: {
        creditCard: false,
        payNow: false,
        grabPay: false,
      },
      finance: localsession.methods.getGuestFinance(),
      roomNumber: localsession.methods.getGuestRoom(),
      guestname: localsession.methods.getGuestName(),
    };
  },
};
</script>

<style scoped>
.donebtn:hover {
  background-color: rgba(37, 99, 235);
}

.donebtn {
  background-color: rgba(59, 130, 246);;
  text-align: center;
  color: white;
  border-radius: 8px;
  padding: 10px 24px;
}
</style>
