<template>
<main class="w-3/5 p-8 mx-auto">
            <section class="shadow row">
                <div class="tabs">
                    <div class="border-b tab">
                        <div class="border-l-2 border-transparent relative bg-white">
                            <div class="ticks">
                                <input type="checkbox" class="ticks">
                            </div>
                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                                <span class="text-grey-darkest font-thick text-xl">
                                    Check Your Health Status
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
                                    <ul class="pl-4">
                                        <li class="pb-2">
                                            Make sure your PCR test result is negative.
                                        </li>
                                        <li class="pb-2">
                                            Temperature is below 37.6 degrees.
                                        </li>
                                        <li class="pb-2">
                                            Ensure you do not have cough, flu or any common COVID symptoms.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b tab">
                        <div class="border-l-2 border-transparent relative bg-white">
                            <div class="ticks">
                                <input type="checkbox" class="ticks">
                            </div>
                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck2">
                                <span class="text-grey-darkest font-thick text-xl">
                                    Checking Out
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
                                    <ul class="pl-4">
                                        <br>
                                        <li class="pb-2">
                                            Make sure you have your passport and all your belongings packed before checkout.
                                        </li>
                                        <li class="pb-2">
                                            Checkout Time: 11am 
                                        </li>
                                        <li class="pb-2">
                                            Simply drop the room card off at the box located at Level 1.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b tab">
                        <div class="border-l-2 border-transparent relative bg-white">
                            <div class="ticks">
                                <input type="checkbox" class="ticks">
                            </div>
                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck3">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck3">
                                <span class="text-grey-darkest font-thick text-xl">
                                    Settling your Transport
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
                                    <ul class="pl-4">
                                        <li class="pb-2">
                                            <br>
                                            <h1>Train</h1>
                                            <br>
                                            <h3>Nearest MRT station from our hotel Tanjong Pagar MRT Station(EW15)</h3>
                                            <h2>First/Last Train terminating at Pasir Ris (EW1):</h2>
                                            <h2>First Train:</h2>
                                            <ul id="bullet">
                                                <li>Monday to Saturday: 6:02 AM</li>
                                                <li>Sunday and public holidays: 6:28 AM</li>
                                            </ul>
                                            <h2>Last Train:</h2>
                                            <ul id="bullet">
                                                <li>Daily: 00:00 AM</li>
                                            </ul>
                                            <h2>First/Last Train terminating at Tuas Link (EW33):</h2>
                                            <h2>First Train:</h2>
                                            <ul id="bullet">
                                                <li>Monday to Saturday: 5:56 AM</li>
                                                <li>Sunday and public holidays: 6:24 AM</li>
                                            </ul>
                                            <h2>Last Train:</h2>
                                            <ul id="bullet">
                                                <li>Daily: 00:05 AM</li>
                                            </ul>
                                            <h3>Single-ride tickets and EZ-link cards can be purchased at all train stations.</h3>
                                        </li>
                                        <br>
                                        <li class="pb-2">
                                            <h1>Public Bus</h1>
                                            <br>
                                            <h2>Nearest Bus Stop: Tanjong Pagar Stn Exit C</h2>
                                            <ul id="bullet">
                                                <li>Bus Services available are 24, 27, 34, 36, 53, 110 and 858.</li>
                                            </ul>
                                            <h3>Please prepare the exact fare for your trip as no change will be given. Alternatively, a stored-value EZ-link card for multiple rides can be purchased from any Changi Recommends store or the Changi Airport train station.</h3>
                                        </li>
                                        <br>
                                        <li class="pb-2">
                                            <h1>Taxi</h1>
                                            <br>
                                            <h3>Hail a taxi on the street, or make a booking in advance by contacting one of the following taxi operators at their respective hotlines. Surcharges may apply.</h3>
                                            <ul id="bullet">
                                                <li>Comfort or CityCab: +65 6552 1111</li>
                                                <li>Premier Taxis: +65 6363 6888</li>
                                                <li>Prime Taxi: +65 6778 0808</li>
                                                <li>SMRT Taxis: +65 6555 8888</li>
                                                <li>Trans-Cab: +65 6555 3333</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b tab">
                        <div class="border-l-2 border-transparent relative bg-white">
                            <div class="ticks">
                                <input type="checkbox" class="ticks">
                            </div>
                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck2">
                                <span class="text-grey-darkest font-thick text-xl">
                                    Things you might want to know about: Attractions in Singapore
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
                                    <ul class="pl-4">
                                        <li class="pb-2">
                                            <h2>Shopping</h2>
                                            <ul id="bullet">
                                                <li>Marina Bay Sands</li>
                                                <li>Orchard</li>
                                                <li>Bugis</li>
                                            </ul>
                                        </li>
                                        <li class="pb-2">
                                            <h2>Attractions</h2>
                                            <ul id="bullet">
                                                <li>Sentosa</li>
                                                <li>Singapore Zoo</li>
                                                <li>Singapore Flyer</li>
                                                <li>Garden by the Bay</li>
                                            </ul>
                                        </li>
                                        <li class="pb-2">
                                            <h2>Heritage Sites</h2>
                                            <ul id="bullet">
                                                <li>Chinatown</li>
                                                <li>Little India</li>
                                                <li>Botanic Gardens</li>
                                                <li>Fort Canning</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-b tab">
                        <div class="border-l-2 border-transparent relative bg-white">
                            <div class="ticks">
                                <input type="checkbox" class="ticks">
                            </div>
                            <input class="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2">
                            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck2">
                                <span class="text-grey-darkest font-thick text-xl">
                                    Things you might want to know about: Singapore Duty Free
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
                                    <ul class="pl-4">
                                        <h1>GST Refunds</h1>
                                        <h3>When you buy goods in Singapore, you are required to pay GST on your purchases if the retailer is registered for GST.</h3>
                                        <h3>The Tourist Refund Scheme (TRS) allows you to claim a refund of the GST that you paid on goods purchased from the participating retailers if they are brought out of Singapore via Changi International Airport or Seletar Airport, subject to the criteria and conditions of the scheme.</h3>
                                        <br>
                                        <h2>For more information click on the links below:</h2>
                                        <ul id="bullet">
                                            <li class="link"><a href="https://www.customs.gov.sg/individuals/going-through-customs/departure/tourist-refund-scheme" target="_blank"><b>Tourist Refund Scheme (Singapore Customs)</b></a></li>
                                            <li class="link"><a href="https://www.iras.gov.sg/irashome/uploadedFiles/IRASHome/e-Tax_Guides/GST%20Guide%20For%20Visitors%20on%20Tourist%20Refund%20Scheme%20(Refund%20claims%20made%20on%20or%20after%204%20Apr%202019).pdf" target="_blank"><b>Guide for Visitors on Tourist Refund Scheme</b></a></li>
                                        </ul>
                                    </ul>
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
        font-size: 20px;
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
</style>

<script>
export default {
    name: "arrival"
}
</script>
