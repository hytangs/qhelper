<template>
    <div id=drinks>
        <Splide :options="{ rewind: true }">
        <SplideSlide>
        <div class="grid grid-cols-2 gap-6 lg:grid-cols-3 mb-6">
                <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="item_img">
                        <img src="https://www.kuali.com/wp-content/uploads/2016/06/Teh-Tarik-stock-photo.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Teh Tarik</h5>
                        <h6 style="float: right">$3.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_tarik()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_tarik()">
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
                        <img src="https://media.npr.org/assets/img/2015/11/19/salt-iconic-branding-0037edit_custom-106133bb015b56c78e6bd554cfcbc9cc648156bb.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Coca Cola</h5>
                        <h6 style="float: right">$5.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_cola()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_cola()">
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
                        <img src="http://cdn.shopify.com/s/files/1/1057/7864/files/blog_shutterstock_460627045.jpg?4410922092542058212">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Soya Milk</h5>
                        <h6 style="float: right">$3.50</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_soya()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_soya()">
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
                        <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e325c56f133f400076b17b9%2F0x0.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Corona Beer</h5>
                        <h6 style="float: right">$8.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_beer()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_beer()">
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
                        <img src="https://res.cloudinary.com/enotria/image/upload/ar_16:9,c_fill,dpr_3.0,w_600/v1615237634/Singpore_S_Ling_banner_8dbba080d7.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Singapore Sling</h5>
                        <h6 style="float: right">$10.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_sling()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_sling()">
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
                        <img src="https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-2-bubble-tea-1608310012.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Milk Tea with Pearls</h5>
                        <h6 style="float: right">$5.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_milktea()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_milktea()">
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
                        <img src="https://www.washingtonpost.com/rf/image_1024w/2010-2019/WashingtonPost/2021/08/25/Food/Images/v-rr-cooldrinks-001.JPG">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Mango Lasi</h5>
                        <h6 style="float: right">$5.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_lasi()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_lasi()">
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
                        <img src="https://www.cleaneatingkitchen.com/wp-content/uploads/2021/08/coconut-shake-hero.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Coconut Shake</h5>
                        <h6 style="float: right">$8.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_coconut()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_coconut()">
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
                        <img src="https://jenaroundtheworld.com/wp-content/uploads/2019/06/3-Ingredient-Oreo-Cookies-Cream-Milkshake.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Oreo Milkshake</h5>
                        <h6 style="float: right">$8.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_oreo()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_oreo()">
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
                        <img src="https://healthylittlepeach.com/wp-content/uploads/2019/01/IMG_1937-1.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Matcha Latte</h5>
                        <h6 style="float: right">$7.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_latte()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_latte()">
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
                        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2021%2F07%2F13%2Fvietnamese-coffee-with-phin-drip.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Vietnamese Coffee</h5>
                        <h6 style="float: right">$6.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_coffee()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_coffee()">
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
                        <img src="https://www.tastycebuph.com/wp-content/uploads/2020/05/IMG_8835-1280x640.jpg">
                    </div>    
                    <div style="margin:15px 30px 15px 30px " class="item_info">
                        <h5 style="float: left">Milo Dinosaur</h5>
                        <h6 style="float: right">$5.00</h6>
                        <br><br>
                        <div class="flex-none w-full grid gap-3 text-center" style="grid-template-columns: 1fr 1fr auto;">
                            <button class="relative" @click = "remove_milo()">
                                <div class="absolute bg-black inset-px" style="transform-origin: 0% 0% 0px; border-radius: 4.44444% / 16.6666%;"></div>
                                <div class="relative text-sm border cursor-pointer" style="height: 38px; background-color: rgb(0,0,0); border-color: rgb(0, 0, 0); transform-origin: 0% 100% 0px; border-radius: 4.37956% / 15.7895%;">
                                    <span class="absolute inset-0 flex items-center justify-center text-white font-medium" style="opacity: 1;">
                                        <span style="transform-origin: 50% 50% 0px;">Remove</span>
                                    </span>
                                </div>
                            </button>
                            <button class="relative" @click = "update_milo()">
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
    update_tarik() {
        this.tarik = this.tarik + 1
        //console.log(this.tarik)
        this.$emit("update_tarik", this.tarik)
    },
    update_cola() {
        this.cola = this.cola + 1
        //console.log(this.cola)
        this.$emit("update_cola", this.cola)
    },
    update_soya() {
        this.soya = this.soya + 1
        //console.log(this.soya)
        this.$emit("update_soya", this.soya)
    },
    update_beer() {
        this.beer = this.beer + 1
        //console.log(this.beer)
        this.$emit("update_beer", this.beer)
    },
    update_sling() {
        this.sling = this.sling + 1
        //console.log(this.sling)
        this.$emit("update_sling", this.sling)
    },
    update_milktea() {
        this.milktea = this.milktea + 1
        //console.log(this.milktea)
        this.$emit("update_milktea", this.milktea)
    },
    update_lasi() {
        this.lasi = this.lasi + 1
        //console.log(this.lasi)
        this.$emit("update_lasi", this.lasi)
    },
    update_coconut() {
        this.coconut = this.coconut + 1
        //console.log(this.penang)
        this.$emit("update_coconut", this.coconut)
    },
    update_oreo() {
        this.oreo = this.oreo + 1
        //console.log(this.oreo)
        this.$emit("update_oreo", this.oreo)
    },
    update_latte() {
        this.latte = this.latte + 1
        //console.log(this.latte)
        this.$emit("update_latte", this.latte)
    },
    update_coffee() {
        this.coffee = this.coffee + 1
        //console.log(this.coffee)
        this.$emit("update_coffee", this.coffee)
    },
    update_milo() {
        this.milo = this.milo + 1
        //console.log(this.milo)
        this.$emit("update_milo", this.milo)
    },

    remove_tarik() {
        this.tarik = 0
        //console.log(this.tarik)
        this.$emit("update_tarik", this.tarik)
    },
    remove_cola() {
        this.cola = 0
        //console.log(this.cola)
        this.$emit("update_cola", this.cola)
    },
    remove_soya() {
        this.soya = 0
        //console.log(this.soya)
        this.$emit("update_soya", this.soya)
    },
    remove_beer() {
        this.beer = 0
        //console.log(this.beer)
        this.$emit("update_beer", this.beer)
    },
    remove_sling() {
        this.sling = 0
        //console.log(this.sling)
        this.$emit("update_sling", this.sling)
    },
    remove_milktea() {
        this.milktea = 0
        //console.log(this.milktea)
        this.$emit("update_milktea", this.milktea)
    },
    remove_lasi() {
        this.lasi = 0
        //console.log(this.lasi)
        this.$emit("update_lasi", this.lasi)
    },
    remove_coconut() {
        this.coconut = 0
        //console.log(this.coconut)
        this.$emit("update_coconut", this.coconut)
    },
    remove_oreo() {
        this.oreo = 0
        //console.log(this.oreo)
        this.$emit("update_oreo", this.oreo)
    },
    remove_latte() {
        this.latte = 0
        //console.log(this.latte)
        this.$emit("update_latte", this.latte)
    },
    remove_coffee() {
        this.coffee = 0
        //console.log(this.coffee)
        this.$emit("update_coffee", this.coffee)
    },
    remove_milo() {
        this.milo = 0
        //console.log(this.milo)
        this.$emit("update_milo", this.milo)
    },
  },

  setup() {
      var tarik = 0
      var cola = 0
      var soya = 0
      var beer = 0
      var sling = 0
      var milktea = 0
      var lasi = 0
      var coconut = 0
      var oreo = 0
      var latte = 0
      var coffee = 0
      var milo = 0
      return {
          tarik,
          cola,
          soya,
          beer,
          sling,
          milktea,
          lasi,
          coconut,
          oreo,
          latte,
          coffee,
          milo
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
