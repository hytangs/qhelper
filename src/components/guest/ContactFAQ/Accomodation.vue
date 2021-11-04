<!--<template>
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
            desc: "Kindly contact the frontdesk and our staff will tend to your request within 30 minutes from the call time."
          },
          {
            clicked: false, title: "How to cancel or change the meal selection?",
            desc: "Kindly contact the frontdesk at least 1 hour before the scheduled meal time if you wish to make any changes to your meal plan."
          },
          {
            clicked: false, title: "What is the WiFi password for my room?",
            desc: "Your room WiFi password is 'QHELPER' + your room number."
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
</style>-->

<template>
<main class="w-3/5 p-8 mx-auto">
            <section class="shadow row">
                <div class="tabs">
                    <div class="border-b tab color">
                        <div class="border-l-2 border-transparent relative">
                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                                <span class="text-grey-darkest font-thick text-l">
                                    How to ask for repair services of the hotel facilities?
                                </span>
                                <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    <!-- icon by feathericons.com -->
                                    <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div class="tab-content">
                                <div class="pl-8 pr-8 pb-5 text-grey-darkest bg-blue-50 text-left">
                                    <br>
                                    Kindly contact the frontdesk and our staff will tend to your request within 30 minutes from the call time.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b tab color">
                        <div class="border-l-2 border-transparent relative">
                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck2">
                                <span class="text-grey-darkest font-thick text-l">
                                    How to cancel or change the meal selection?
                                </span>
                                <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    <!-- icon by feathericons.com -->
                                    <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div class="tab-content">
                                <div class="pl-8 pr-8 pb-5 text-grey-darkest bg-blue-50 text-left"><br>
                                  Kindly contact the frontdesk at least 1 hour before the scheduled meal time if you wish to make any changes to your meal plan.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b tab color">
                        <div class="border-l-2 border-transparent relative">
                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck2">
                                <span class="text-grey-darkest font-thick text-l">
                                    What is the WiFi password for my room?
                                </span>
                                <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    <!-- icon by feathericons.com -->
                                    <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div class="tab-content">
                                <div class="pl-8 pr-8 pb-5 text-grey-darkest bg-blue-50 text-left"><br>
                                  Your room WiFi password is 'QHELPER' + your room number.
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
            </section>
        </main>
</template>

<style scoped>

    .tab {
        overflow: hidden;
    }
    
    .tab-content {
        max-height: 0;
        transition: all 0.5s;
    }
    
    input:checked + .tab-label .test {
        background-color: #000;
    }
    
    input:checked + .tab-label .test svg {
            transform: rotate(180deg);
            stroke: #fff;
    }
        
    input:checked + .tab-label::after {
        transform: rotate(90deg);
    }
    
    input:checked ~ .tab-content {
        max-height: 150vh;
    }

    #bullet {
        list-style-type: circle;
        padding-left: 50px;
    }

    h1 {
        font-weight: bold;
        font-size: 30px;
    }

    h2{
        font-weight: bold;
        font-size: 16px;
    }

    h3{
        font-size: 20px;
    }
    li {
        font-size: 20px;
    }
    ol {
        list-style-type: upper-roman;
        padding-left: 50px;
    }

    .link:hover {
        color:goldenrod;
    }

    .link {
        text-decoration: underline;
    }
    
    .ticks {
        margin-top: 13.5px;
        margin-left: 20px;
        float: left;
    }

    .color{
      background-color: white;
    }

    main{
      width: 71%;
      margin-left: 14.5%;
      margin-right: 14.5%;
    }
</style>

<script>
export default {
    name: "arrival"
}
</script>
