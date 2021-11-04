<template>
    <div id=supplies>
        <Splide :options="{ rewind: true }">
        <SplideSlide>
        <div class="grid grid-cols-2 gap-6 lg:grid-cols-3 mb-6">
                <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="https://i.insider.com/5b845ea5b354cdb8228b49b4?width=600&format=jpeg&auto=webp">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Electric Razor</h5>
                        <h6 style="float: right">$15.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_razor()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative"  @click = "update_razor()">
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
                        <img src="https://www.laneige.com/int/en/skincare/__icsFiles/afieldfile/2020/09/10/20200826_final_Perfect-Renew-Youth-Regenerator_mood-04_pc_4_1.png">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Laneige Skincare Travel Kit</h5>
                        <h6 style="float: right">$15.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_kit()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_kit()">
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
                        <img src="https://cdn.thewirecutter.com/wp-content/media/2020/11/humidifiers-2048px-2714.jpg?auto=webp&quality=60&width=570">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Mini Air Humidifier</h5>
                        <h6 style="float: right">$30.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_humidifier()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative"  @click = "update_humidifier()">
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
                        <img src="https://www.parkwayparade.com.sg/-/media/retail/asia/parkway-parade/yankee-candle/yankee_candle_pic_640x400px.jpg?as=0&mh=1130&hash=95C9AD2A1EDBECC47538E3E225DB4AF5908ED915">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Yankee Candle (small)</h5>
                        <h6 style="float: right">$15.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_candle()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_candle()">
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
                        <img src="https://azcdn.messenger.pgsitecore.com/en-us/-/media/Febreze/Images/Article_Images/Desktop/ArticleDetail/ArticleDetailImages/July%202021%20Updates/DT_FRUses_Header.jpg?la=en-US&v=1-202105202114">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Febreze Fabric Spray</h5>
                        <h6 style="float: right">$4.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_spray()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_spray()">
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
                        <img src="https://assets.bonappetit.com/photos/5a970667ddb9b821cf7076ee/4:3/w_960,h_720,c_limit/water-bottle-test-group-lede.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Thermal Bottles</h5>
                        <h6 style="float: right">$25.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_bottles()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_bottles()">
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
                        <img src="https://media.istockphoto.com/photos/bowl-rose-bath-salts-spoon-white-background-top-view-picture-id527072821?k=20&m=527072821&s=612x612&w=0&h=eflMc7InFk_ItBkDGmAz3KPPfvs0g05ZxjvfgALRgb8=">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Himalayan Bath Salt</h5>
                        <h6 style="float: right">$12.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_bathsalt()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_bathsalt()">
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
                        <img src="https://cdn.thewirecutter.com/wp-content/uploads/2018/10/essentialoildiffusers-lowres-9320.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Aroma Diffuser</h5>
                        <h6 style="float: right">$35.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_diffuser()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_diffuser()">
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
                        <img src="https://cdn.tatlerasia.com/asiatatler/i/hk/2020/04/28123531-grown-alchemist-hand-sanitiser_cover_630x472.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Hand Sanitiser</h5>
                        <h6 style="float: right">$7.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_sanitiser()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_sanitiser()">
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
                        <img src="http://astrityas.com/wp-content/uploads/2018/08/94234265-B882-455D-8821-365D46DC9F30.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Aveeno Body Lotion</h5>
                        <h6 style="float: right">$15.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_lotion">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_lotion()">
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
                        <img src="https://www.galderma.com/sites/default/files/CETAPHIL_02.png">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Cetaphil Gentle Skin Cleanser</h5>
                        <h6 style="float: right">$13.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_cleanser()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_cleanser()">
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
                        <img src="https://wwd.com/wp-content/uploads/2021/01/Silk_Bundle_IvoryBlush_Detail1_1200x.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Silk Sleep Mask</h5>
                        <h6 style="float: right">$35.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_mask()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_mask()">
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
    update_razor() {
        this.razor = this.razor + 1
        //console.log(this.razor)
        this.$emit("update_razor", this.razor)
    },
    update_kit() {
        this.kit = this.kit + 1
        //console.log(this.kit)
        this.$emit("update_kit", this.kit)
    },
    update_humidifier() {
        this.humidifier = this.humidifier + 1
        //console.log(this.humidifier)
        this.$emit("update_humidifier", this.humidifier)
    },
    update_candle() {
        this.candle = this.candle + 1
        //console.log(this.candle)
        this.$emit("update_candle", this.candle)
    },
    update_spray() {
        this.spray = this.spray + 1
        //console.log(this.spray)
        this.$emit("update_spray", this.spray)
    },
    update_bottles() {
        this.bottles = this.bottles + 1
        //console.log(this.bottles)
        this.$emit("update_bottles", this.bottles)
    },
    update_bathsalt() {
        this.bathsalt = this.bathsalt + 1
        //console.log(this.bathsalt)
        this.$emit("update_bathsalt", this.bathsalt)
    },
    update_diffuser() {
        this.diffuser = this.diffuser + 1
        //console.log(this.diffuser)
        this.$emit("update_diffuser", this.diffuser)
    },
    update_lotion() {
        this.lotion = this.lotion + 1
        //console.log(this.lotion)
        this.$emit("update_lotion", this.lotion)
    },
    update_cleanser() {
        this.cleanser = this.cleanser + 1
        //console.log(this.cleanser)
        this.$emit("update_cleanser", this.cleanser)
    },
    update_sanitiser() {
        this.sanitiser = this.sanitiser + 1
        //console.log(this.sanitiser)
        this.$emit("update_sanitiser", this.sanitiser)
    },
    update_mask() {
        this.mask = this.mask + 1
        //console.log(this.mask)
        this.$emit("update_mask", this.mask)
    },

    remove_razor() {
        this.razor = 0
        //console.log(this.razor)
        this.$emit("update_razor", this.razor)
    },
    remove_kit() {
        this.kit = 0
        //console.log(this.kit)
        this.$emit("update_kit", this.kit)
    },
    remove_humidifier() {
        this.humidifier = 0
        //console.log(this.humidifier)
        this.$emit("update_humidifier", this.humidifier)
    },
    remove_candle() {
        this.candle = 0
        //console.log(this.candle)
        this.$emit("update_candle", this.candle)
    },
    remove_spray() {
        this.spray = 0
        //console.log(this.spray)
        this.$emit("update_spray", this.spray)
    },
    remove_bottles() {
        this.bottles = 0
        //console.log(this.bottles)
        this.$emit("update_bottles", this.bottles)
    },
    remove_bathsalt() {
        this.bathsalt = 0
        //console.log(this.bathsalt)
        this.$emit("update_bathsalt", this.bathsalt)
    },
    remove_diffuser() {
        this.diffuser = 0
        //console.log(this.diffuser)
        this.$emit("update_diffuser", this.diffuser)
    },
    remove_lotion() {
        this.lotion = 0
        //console.log(this.lotion)
        this.$emit("update_lotion", this.lotion)
    },
    remove_cleanser() {
        this.cleanser = 0
        //console.log(this.cleanser)
        this.$emit("update_cleanser", this.cleanser)
    },
    remove_sanitiser() {
        this.sanitiser = 0
        //console.log(this.sanitiser)
        this.$emit("update_sanitiser", this.sanitiser)
    },
    remove_mask() {
        this.mask = 0
        //console.log(this.mask)
        this.$emit("update_mask", this.mask)
    },
  },

  setup() {
      var razor = 0
      var kit = 0
      var humidifier = 0
      var candle = 0
      var spray = 0
      var bottles = 0
      var bathsalt = 0
      var diffuser = 0
      var sanitiser = 0
      var lotion = 0
      var cleanser = 0
      var mask = 0
      return {
        razor,
        kit,
        humidifier,
        candle,
        spray,
        bottles,
        bathsalt,
        diffuser,
        sanitiser,
        lotion,
        cleanser,
        mask,
      }
  }

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
    height: 25vh;
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
