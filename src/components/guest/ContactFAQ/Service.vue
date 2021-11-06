<template>
  <main class="w-3/5 p-8 mx-auto">
    <section class="shadow row">
      <div class="tabs">
        <div class="border-b tab color">
          <div class="border-l-2 border-transparent relative">
            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1">
            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                                <span class="text-grey-darkest font-thick text-l">
                                    What is the urgent contact number of the hotel?
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
                The urgent contact number is (+65) 80808888, available 24 hours. Emergencies number for Singapore: 999, also available 24 hours.
              </div>
            </div>
          </div>
        </div>
        <div class="border-b tab color">
          <div class="border-l-2 border-transparent relative">
            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2">
            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck2">
                                <span class="text-grey-darkest font-thick text-l">
                                    How to raise a non urgent request?
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
                Kindly fill up the feedback form and we will get back to you shortly.
              </div>
            </div>
          </div>
        </div>
        <div class="border-b tab color">
          <div class="border-l-2 border-transparent relative">
            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2">
            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck2">
                                <span class="text-grey-darkest font-thick text-l">
                                    Where shall I contact for system issues?
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
                Kindly contact webmaster by sending an email to tech.svc@qhelper.web.app. Urgent issues please contact hotel staff.
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
