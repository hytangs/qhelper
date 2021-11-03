<template>
  <header>
    <a href = "#guest/dashboard" class = "logo text-3xl"> QHELPER </a>
    <ul>
      <li><a class = "title" href = "#home">Home</a></li>
      <li><a class = "title" href = "#meals">Meals</a></li>
      <li><a class = "title" href = "#shop">Shop</a></li>
      <li><a class = "title" href = "#entertainment">Entertainment</a></li>
      <li><a class = "title" href = "#">Checkout</a></li>
      <li><a class = "title" href = "#contact">Contact</a></li>
    </ul>
    <a class="color flex items-center flex-grow-0 flex-shrink-0 relative cursor-pointer hover:text-white text-dark dark:text-white dark:hover:text-gray-400 py-2 px-3 lg:w-16 lg:justify-center" href="/">
    <span class="inline-flex justify-center items-center w-6 h-6 transition-colors" data-v-3ca1866b="">
      <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block" data-v-42f089b8="">
        <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" data-v-42f089b8=""></path>
      </svg>
    </span>
    <span class="px-2 transition-colors lg:hidden">Log out</span></a>
  </header>

  <br><br><br><br>

  <div id="contact-page">
    <div class="text-center">
      <br><br>
      <h1 class="text-3xl text-blue-500 mb-6">How Can We Help You?</h1>
      <NavBarContact/>
    </div><br><br>
    <!--Review Form Here-->
    <div class="reviewform">
      <div class="">
      <section class="px-0 md:px-6 py-6">
        <form class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded">
          <div class="flex items-stretch border-b border-gray-100 dark:border-gray-700">
            <p class="flex items-center py-3 flex-grow font-bold px-4 first">
                <span class="inline-flex justify-center items-center w-6 h-6 mr-3" data-v-3ca1866b="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 symbol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </span> Your Feedback
            </p>
          </div>
          <div class="p-6">
            <div class="mb-6 last:mb-0 text">
              <label class="block font-bold mb-2 second">What is your opinion of QHelper's service?</label>
              <div class="flex justify-start flex-wrap -mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 checkbox" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                </svg>
                <label class="checkbox mr-6 mb-3 last:mr-0 checkbox">
                  <input type="checkbox" name="sample-checkbox" value="lorem">
                  <span class="check"></span><span class="control-label">Very Bad</span>
                </label>
                <label class="checkbox mr-6 mb-3 last:mr-0 checkbox">
                  <input type="checkbox" name="sample-checkbox" value="ipsum">
                  <span class="check"></span><span class="control-label">Bad</span>
                </label>
                <label class="checkbox mr-6 mb-3 last:mr-0 checkbox">
                  <input type="checkbox" name="sample-checkbox" value="dolore">
                  <span class="check"></span><span class="control-label">Acceptable</span>
                </label>
                <label class="checkbox mr-6 mb-3 last:mr-0 checkbox">
                  <input type="checkbox" name="sample-checkbox" value="dolore">
                  <span class="check"></span><span class="control-label">Good</span>
                </label>
                <label class="checkbox mr-6 mb-3 last:mr-0 checkbox">
                  <input type="checkbox" name="sample-checkbox" value="dolore">
                  <span class="check"></span><span class="control-label">Very Good</span>
                </label>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 checkbox" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
          </div>
          <hr class="my-6 -mx-6 border-t border-gray-100 dark:border-gray-700">
          <div class="mb-6 last:mb-0 text">
            <label class="block font-bold mb-2 third">Please leave your feedback below:</label>
            <div class="textbox">
              <div class="relative">
                <grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none;" class="cGcvT"></grammarly-extension>
                <grammarly-extension data-grammarly-shadow-root="true" style="mix-blend-mode: darken; position: absolute; top: 0px; left: 0px; pointer-events: none;" class="cGcvT"></grammarly-extension>
                <textarea class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-24 border bg-white dark:bg-gray-800" placeholder="&#10;   We would like your feedback to improve our service." spellcheck="false"></textarea>
              </div>
            </div>
          </div>
          <hr class="my-6 -mx-6 border-t border-gray-100 dark:border-gray-700">
          <div class="flex items-center justify-start flex-wrap -mb-3 fourth">
            <button class="fifth inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3" type="submit">
            <span class="px-2">Submit</span>
            </button>
          </div>
        </div>
      </form>
    </section>
    </div>
    </div>
    </div>
  
</template>

<script>
import NavBarContact from './ContactFAQ/NavBarContact'

export default {
  name: "Contact",
  components:{
    NavBarContact,
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');
*
{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

header{
  position: fixed;
  top:0;
  left: 0;
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 15px 100px;
  z-index: 100000;
  background-color: black;
}

header.sticky{
  padding: 10px 100px;
  background-color: black;
}

header .logo{
  position: relative;
  font-weight: 700;
  color: white;
  text-decoration: none;
  font-size: 2em;
  letter-spacing: 2px;
  transition: 0.6s;
}

header ul{
  position: relative;
  display:flex;
  justify-content: center;
  align-items: center;
}

header ul li{
  position: relative;
  list-style: none;
}

header ul li a{
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: white;
  letter-spacing: 2px;
  font-weight: 500px;
  transition: 0.6s;
}

header.sticky .logo,
header.sticky ul li a,
header.sticky .exit,
header.sticky .color {
  color:white;
}
/* titles changing color when hovering */

.title:hover {
  color:goldenrod;
}

.title:hover::after {
  content: "";
  position: absolute;
  left: 25%;
  right: 25%;
  bottom: 0;
  margin: -7px;
  border-bottom: 2px solid goldenrod;
}

header.sticky ul li a:hover {
  color: goldenrod;
}

header.sticky .title:hover::after {
  content: "";
  position: absolute;
  left: 25%;
  right: 25%;
  bottom: 0;
  margin: -7px;
  border-bottom: 2px solid goldenrod;
}

.reviewform{
  margin-left: 16.67%;
  margin-right: 16.67%;
  margin-bottom: 3rem;
}

.first{
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-indent: 17px;
}

.second{
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-indent: 42px;
}

.third{
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-indent: 42px;
}

.symbol{
  margin-right:-20px;
}

.fourth{
  margin-top:1rem;
  margin-bottom:1rem;
  margin-left: 42px;
}
.textbox{
  margin-right:42px;
  margin-left:42px;
  margin-bottom: 1rem;
}

.p-2{
  padding:0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.checkbox{
  margin-left: 42px;
}

.text{
  margin-bottom: 1rem;
}
</style>
