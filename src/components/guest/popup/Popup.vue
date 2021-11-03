<!--<template>
    <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded">
        <div class = "bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded">
            <slot/>
            <button class ="popup-close" @click="TogglePopup()"><b>Declare</b></button>
        </div>
    </div>
</template>-->

<template>
    <form class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded">
        <header class="flex items-stretch border-b border-gray-100 dark:border-gray-700">
            <p class="flex items-center py-3 flex-grow font-bold px-4">
                <span class="inline-flex justify-center items-center w-6 h-6 mr-3" data-v-3ca1866b="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </span> Health Declaration Form
            </p>
            <a href="#" class="flex items-center py-3 px-4 justify-center ring-blue-700 focus:ring" aria-label="more options">
                <span class="inline-flex justify-center items-center w-6 h-6" data-v-3ca1866b="">
                    <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block" data-v-3ca1866b="">
                          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </span> 
            </a> 
        </header>
        <div class="p-6">
            <slot/><HealthDeclare/>
            <div class="declare flex items-center justify-start flex-wrap -mb-3">
                <button class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3" type="submit" @click="TogglePopup()">
                    <span class="px-2">Declare</span>
                </button>
                <!--<button class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-500 hover:text-white text-blue-500 border-blue-600 mr-3 last:mr-0 mb-3" type="reset">
                    <span class="px-2">Reset</span>
                </button>-->
            </div>
        </div>
    </form>
</template>

<script>
import HealthDeclare from './HealthDeclare.vue'

export default {
    name: "Popup",
    components:{
        HealthDeclare
    },
    props:['TogglePopup']
}
</script>

<style scoped>
.declare{
    margin-top: -1rem;
}
</style>