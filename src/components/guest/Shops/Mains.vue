<template>
    <div id="snacks">
        <Splide :options="{ rewind: true }">
        <SplideSlide>
        <div class="slider">
        <div class="grid grid-cols-2 gap-6 lg:grid-cols-3 mb-6">
                <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="https://images.food52.com/lQS4pWAs5NP6SKag2fYJ6kD1TUE=/fit-in/1200x1200/6dce5818-5cc6-4858-a733-ad93ad51469a--2019-0813_shin-ramyun_3x2_ty-mecham_001.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Shin Ramyun</h5>
                        <h6 style="float: right">$3.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_ramyun()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_ramyun()">
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
                        <img src="https://www.gourmetz.com.sg/wp-content/uploads/2020/09/gourmetzBento6-1.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Chinese Style Bento</h5>
                        <h6 style="float: right">$7.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_bento()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_bento()">
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
                        <img src="https://t4.ftcdn.net/jpg/03/31/41/97/360_F_331419759_SZdw93F2MXm7c8dUYFQ0n2UkT473jYf2.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Nugget and Fries</h5>
                        <h6 style="float: right">$5.50</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_nuggets()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_nuggets()">
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
                        <img src="https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Beef Lagsana</h5>
                        <h6 style="float: right">$8.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_lagsana()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_lagsana()">
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
                        <img src="https://asianinspirations.com.au/wp-content/uploads/2019/04/R02156_Mums-NasiLemak.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Nasi Lemak</h5>
                        <h6 style="float: right">$6.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_lemak()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_lemak()">
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
                        <img src="https://www.palatesensations.com/images/e0a528b00b4ec64425d1b3191aa40d46.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Prata with Curry</h5>
                        <h6 style="float: right">$4.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_prata()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_prata()">
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
        </div>
            </SplideSlide>
        <SplideSlide>
        <div class="slider">
        <div class="grid grid-cols-2 gap-6 lg:grid-cols-3 mb-6">
                <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Garlic-Naan.JPG">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Butter Chicken</h5>
                        <h6 style="float: right">$15.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_butter()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_butter()">
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
                        <img src="https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/sites/5/2020/10/27162538/AFN_assam_laksa_main_image1-1350x900.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Penang Asam Laksa</h5>
                        <h6 style="float: right">$7.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_penang()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_penang()">
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
                        <img src="http://cdn.cnn.com/cnnnext/dam/assets/160325033254-hk-dim-sum-fook-lam-moon.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Dim Sum Set</h5>
                        <h6 style="float: right">$15.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_dimsum()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_dimsum()">
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
                        <img src="https://i1.wp.com/topsushimaker.com/wp-content/uploads/2019/05/2843-top.jpeg?fit=960%2C598&ssl=1">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Japanese Sushi Platter</h5>
                        <h6 style="float: right">$18.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_sushi()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_sushi()">
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
                        <img src="https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/korean-fried-chicken-4-ways.jpg?itok=zCqhrLHx">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Korean Fried Chicken</h5>
                        <h6 style="float: right">$18.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_fried()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_fried()">
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
                        <img src="https://asianfoodnetwork.com/content/dam/afn/global/en/recipes/thai-mango-salad/AFN_thai_mango_salad_main_image.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Som Tum Mamuang</h5>
                        <h6 style="float: right">$5.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_mamuang()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_mamuang()">
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
        </div>
        </SplideSlide></Splide>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default defineComponent( {
  components: { Splide, SplideSlide },
  
  methods: {
    update_ramyun() {
        this.ramyun = this.ramyun + 1
        //console.log(this.ramyun)
        this.$emit("update_ramyun", this.ramyun)
    },
    update_bento() {
        this.bento = this.bento + 1
        //console.log(this.bento)
        this.$emit("update_bento", this.bento)
    },
    update_nuggets() {
        this.nuggets = this.nuggets + 1
        //console.log(this.nuggets)
        this.$emit("update_nuggets", this.nuggets)
    },
    update_lagsana() {
        this.lagsana = this.lagsana + 1
        //console.log(this.lagsana)
        this.$emit("update_lagsana", this.lagsana)
    },
    update_lemak() {
        this.lemak = this.lemak + 1
        //console.log(this.lemak)
        this.$emit("update_lemak", this.lemak)
    },
    update_prata() {
        this.prata = this.prata + 1
        //console.log(this.prata)
        this.$emit("update_prata", this.prata)
    },
    update_butter() {
        this.butter = this.butter + 1
        //console.log(this.butter)
        this.$emit("update_butter", this.butter)
    },
    update_penang() {
        this.penang = this.penang + 1
        //console.log(this.penang)
        this.$emit("update_penang", this.penang)
    },
    update_dimsum() {
        this.dimsum = this.dimsum + 1
        //console.log(this.dimsum)
        this.$emit("update_dimsum", this.dimsum)
    },
    update_sushi() {
        this.sushi = this.sushi + 1
        //console.log(this.sushi)
        this.$emit("update_sushi", this.sushi)
    },
    update_fried() {
        this.fried = this.fried + 1
        //console.log(this.fried)
        this.$emit("update_fried", this.fried)
    },
    update_mamuang() {
        this.mamuang = this.mamuang + 1
        //console.log(this.mamuang)
        this.$emit("update_mamuang", this.mamuang)
    },

    remove_ramyun() {
        this.ramyun = 0
        //console.log(this.ramyun)
        this.$emit("update_ramyun", this.ramyun)
    },
    remove_bento() {
        this.bento = 0
        //console.log(this.bento)
        this.$emit("update_bento", this.bento)
    },
    remove_nuggets() {
        this.nuggets = 0
        //console.log(this.nuggets)
        this.$emit("update_nuggets", this.nuggets)
    },
    remove_lagsana() {
        this.lagsana = 0
        //console.log(this.lagsana)
        this.$emit("update_lagsana", this.lagsana)
    },
    remove_lemak() {
        this.lemak = 0
        //console.log(this.lemak)
        this.$emit("update_lemak", this.lemak)
    },
    remove_prata() {
        this.prata = 0
        //console.log(this.prata)
        this.$emit("update_prata", this.prata)
    },
    remove_butter() {
        this.butter = 0
        //console.log(this.butter)
        this.$emit("update_butter", this.butter)
    },
    remove_penang() {
        this.penang = 0
        //console.log(this.penang)
        this.$emit("update_penang", this.penang)
    },
    remove_dimsum() {
        this.dimsum = 0
        //console.log(this.dimsum)
        this.$emit("update_dimsum", this.dimsum)
    },
    remove_sushi() {
        this.sushi = 0
        //console.log(this.sushi)
        this.$emit("update_sushi", this.sushi)
    },
    remove_fried() {
        this.fried = 0
        //console.log(this.fried)
        this.$emit("update_fried", this.fried)
    },
    remove_mamuang() {
        this.mamuang = 0
        //console.log(this.mamuang)
        this.$emit("update_mamuang", this.mamuang)
    },
  },

  setup() {
      var ramyun = 0
      var bento = 0
      var nuggets = 0
      var lagsana = 0
      var lemak = 0
      var prata = 0
      var butter = 0
      var penang = 0
      var dimsum = 0
      var sushi = 0
      var fried = 0
      var mamuang = 0
      return {
          ramyun,
          bento,
          nuggets,
          lagsana,
          lemak,
          prata,
          butter,
          penang,
          dimsum,
          sushi,
          fried,
          mamuang
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
