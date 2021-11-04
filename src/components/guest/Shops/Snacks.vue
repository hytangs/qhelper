<template>
    <div id=snacks>        
        <Splide :options="{ rewind: true }">
        <SplideSlide>
        <div class="grid grid-cols-2 gap-6 lg:grid-cols-3 mb-6">
                <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="http://sethlui.com/wp-content/uploads/2015/07/amk-curry-puff-best-singapore.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Curry Puff</h5>
                        <h6 style="float: right">$2.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_puff()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_puff()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(255, 255, 255); border-color: rgb(212, 212, 216); transform-origin: 50% 50% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-black font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 0% 50% 0px;">Add to Cart</span>
                                    </span>
                                    
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/13/0/FN_FNK-Veggie-Lovers-Club-Sandwich_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371614457375.jpeg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Chicken Ham Sandwich</h5>
                        <h6 style="float: right">$4.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_sandwich()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_sandwich()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(255, 255, 255); border-color: rgb(212, 212, 216); transform-origin: 50% 50% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-black font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 0% 50% 0px;">Add to Cart</span>
                                    </span>
                                    
                                </div>
                            </button>
                        </div>
                    </div>
                </div><div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="https://assets.bonappetit.com/photos/5f5be1c811f07f9f3605dd1b/3:2/w_4476,h_2984,c_limit/Basically-Onigiri-01.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Tuna Onigiri</h5>
                        <h6 style="float: right">$3.50</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_onigiri()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_onigiri()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(255, 255, 255); border-color: rgb(212, 212, 216); transform-origin: 50% 50% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-black font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 0% 50% 0px;">Add to Cart</span>
                                    </span>
                                    
                                </div>
                            </button>
                        </div>
                    </div>
                </div><div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="https://i.ytimg.com/vi/imi8YDvyWn0/maxresdefault.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Corn Dog</h5>
                        <h6 style="float: right">$3.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_corndog()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_corndog()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(255, 255, 255); border-color: rgb(212, 212, 216); transform-origin: 50% 50% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-black font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 0% 50% 0px;">Add to Cart</span>
                                    </span>
                                    
                                </div>
                            </button>
                        </div>
                    </div>
                </div><div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="https://assets.epicurious.com/photos/5d2dee06bcca5400095d4de4/16:9/w_2560%2Cc_limit/Taste_Test_Thin_Chips_HERO_071119_025.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Mini Lay's Classic Chips</h5>
                        <h6 style="float: right">$2.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_chips()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_chips()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(255, 255, 255); border-color: rgb(212, 212, 216); transform-origin: 50% 50% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-black font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 0% 50% 0px;">Add to Cart</span>
                                    </span>
                                    
                                </div>
                            </button>
                        </div>
                    </div>
                </div><div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="https://i.gzn.jp/img/2018/07/24/haagen-dazs-kuromitsu-and-kinako/00.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Haagen Daz Kinako Cup</h5>
                        <h6 style="float: right">$4.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_haagen()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_haagen()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(255, 255, 255); border-color: rgb(212, 212, 216); transform-origin: 50% 50% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-black font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 0% 50% 0px;">Add to Cart</span>
                                    </span>
                                    
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
        </SplideSlide>
        <SplideSlide>
        <div class="grid grid-cols-2 gap-6 lg:grid-cols-3 mb-6">
                <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="https://cdn.lifestyleasia.com/wp-content/uploads/sites/2/2021/07/12133754/best-loaded-fries-hong-kong-scaled.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Truffle Fries</h5>
                        <h6 style="float: right">$5.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_truffle()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_truffle()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(255, 255, 255); border-color: rgb(212, 212, 216); transform-origin: 50% 50% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-black font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 0% 50% 0px;">Add to Cart</span>
                                    </span>
                                    
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="https://assets.epicurious.com/photos/5fca6f8d9014cc9a8df3d074/2:1/w_3000,h_1500,c_limit/Malted_Forever_Brownies_VOG_final.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Fudgy Brownie</h5>
                        <h6 style="float: right">$4.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_brownie()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_brownie()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(255, 255, 255); border-color: rgb(212, 212, 216); transform-origin: 50% 50% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-black font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 0% 50% 0px;">Add to Cart</span>
                                    </span>
                                    
                                </div>
                            </button>
                        </div>
                    </div>
                </div><div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="https://2.bp.blogspot.com/-eu7iHP0VeHY/XHMby8JSRRI/AAAAAAAAKUo/zcLJN8JN1yoZ3q0eNxgmjPXRN9UbPFEwgCLcBGAs/s1600/red-velvet-macarons.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Red Velvet Macarons</h5>
                        <h6 style="float: right">$3.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_macarons()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_macarons()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(255, 255, 255); border-color: rgb(212, 212, 216); transform-origin: 50% 50% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-black font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 0% 50% 0px;">Add to Cart</span>
                                    </span>
                                    
                                </div>
                            </button>
                        </div>
                    </div>
                </div><div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="https://www.thespruceeats.com/thmb/tj-pYJwN7NCw74Mwxb2gPXDZExk=/2252x1689/smart/filters:no_upscale()/worlds-best-carrot-cake-recipe-101235-hero1-89e77304773e44c0bab7f30ec590cf97.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Carrot Cake</h5>
                        <h6 style="float: right">$6.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_cake()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_cake()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(255, 255, 255); border-color: rgb(212, 212, 216); transform-origin: 50% 50% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-black font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 0% 50% 0px;">Add to Cart</span>
                                    </span>
                                    
                                </div>
                            </button>
                        </div>
                    </div>
                </div><div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="https://d1sag4ddilekf6.azureedge.net/compressed/merchants/4-CYWYAT63GAD3AA/hero/3b1cb6980147449096782c01f8ff92d3_1618797179118882188.jpeg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Peanut Tutu Kueh</h5>
                        <h6 style="float: right">$5.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_tutu()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_tutu()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(255, 255, 255); border-color: rgb(212, 212, 216); transform-origin: 50% 50% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-black font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 0% 50% 0px;">Add to Cart</span>
                                    </span>
                                    
                                </div>
                            </button>
                        </div>
                    </div>
                </div><div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="https://asianinspirations.com.au/wp-content/uploads/2018/11/R00126_Mango-Sticky-Rice-619x412.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Mango Sticky Rice</h5>
                        <h6 style="float: right">$6.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_rice()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_rice()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(255, 255, 255); border-color: rgb(212, 212, 216); transform-origin: 50% 50% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-black font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 0% 50% 0px;">Add to Cart</span>
                                    </span>
                                    
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
        </SplideSlide>
        </Splide>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default defineComponent( {
  components: { Splide, SplideSlide },

  methods: {
    update_puff() {
      this.puff = this.puff + 1;
      //console.log(this.puff)
      this.$emit("update_puff", this.puff);
    },
    update_sandwich() {
      this.sandwich = this.sandwich + 1;
      //console.log(this.sandwich)
      this.$emit("update_sandwich", this.sandwich);
    },
    update_onigiri() {
      this.onigiri = this.onigiri + 1;
      //console.log(this.onigiri)
      this.$emit("update_onigiri", this.onigiri);
    },
    update_corndog() {
      this.corndog = this.corndog + 1;
      //console.log(this.corndog)
      this.$emit("update_corndog", this.corndog);
    },
    update_chips() {
      this.chips = this.chips + 1;
      //console.log(this.chips)
      this.$emit("update_chips", this.chips);
    },
    update_haagen() {
      this.haagen = this.haagen + 1;
      //console.log(this.haagen)
      this.$emit("update_haagen", this.haagen);
    },
    update_truffle() {
      this.truffle = this.truffle + 1;
      //console.log(this.truffle)
      this.$emit("update_truffle", this.truffle);
    },
    update_brownie() {
      this.brownie = this.brownie + 1;
      //console.log(this.brownie)
      this.$emit("update_brownie", this.brownie);
    },
    update_macarons() {
      this.macarons = this.macarons + 1;
      //console.log(this.macarons)
      this.$emit("update_macarons", this.macarons);
    },
    update_cake() {
      this.cake = this.cake + 1;
      //console.log(this.cake)
      this.$emit("update_cake", this.cake);
    },
    update_tutu() {
      this.tutu = this.tutu + 1;
      //console.log(this.tutu)
      this.$emit("update_tutu", this.tutu);
    },
    update_rice() {
      this.rice = this.rice + 1;
      //console.log(this.rice)
      this.$emit("update_rice", this.rice);
    },

    remove_puff() {
      this.puff = 0;
      //console.log(this.puff)
      this.$emit("update_puff", this.puff);
    },
    remove_sandwich() {
      this.sandwich = 0;
      //console.log(this.sandwich)
      this.$emit("update_sandwich", this.sandwich);
    },
    remove_onigiri() {
      this.onigiri = 0;
      //console.log(this.onigiri)
      this.$emit("update_onigiri", this.onigiri);
    },
    remove_corndog() {
      this.corndog = 0;
      //console.log(this.corndog)
      this.$emit("update_corndog", this.corndog);
    },
    remove_chips() {
      this.chips = 0;
      //console.log(this.chips)
      this.$emit("update_chips", this.chips);
    },
    remove_haagen() {
      this.haagen = 0;
      //console.log(this.haagen)
      this.$emit("update_haagen", this.haagen);
    },
    remove_truffle() {
      this.truffle = 0;
      //console.log(this.truffle)
      this.$emit("update_truffle", this.truffle);
    },
    remove_brownie() {
      this.brownie = 0;
      //console.log(this.brownie)
      this.$emit("update_brownie", this.brownie);
    },
    remove_macarons() {
      this.macarons = 0;
      //console.log(this.macarons)
      this.$emit("update_macarons", this.macarons);
    },
    remove_cake() {
      this.cake = 0;
      //console.log(this.cake)
      this.$emit("update_cake", this.cake);
    },
    remove_tutu() {
      this.tutu = 0;
      //console.log(this.tutu)
      this.$emit("update_tutu", this.tutu);
    },
    remove_rice() {
      this.rice = 0;
      //console.log(this.rice)
      this.$emit("update_rice", this.rice);
    },
  },

  setup() {
    var puff = 0;
    var sandwich = 0;
    var onigiri = 0;
    var corndog = 0;
    var chips = 0;
    var haagen = 0;
    var truffle = 0;
    var brownie = 0;
    var macarons = 0;
    var cake = 0;
    var tutu = 0;
    var rice = 0;
    return {
      puff,
      sandwich,
      onigiri,
      corndog,
      chips,
      haagen,
      truffle,
      brownie,
      macarons,
      cake,
      tutu,
      rice,
    };
  },

} );
</script>


<style scoped>
.item_info{
    display: inline-flex,
}

h4{
    font-size: 20px
}

img {
    text-align: center;
    display: block;
    width: 100%;
    height:25vh;
}

.shadow{
    box-shadow: 0px 8px 8px -8px grey;
}

.shadow:hover{
    box-shadow: 0px 1px 15px grey;
}

button:hover{
    box-shadow: 0px 1px 15px grey;
}

</style>
