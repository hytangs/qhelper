<template>
<div class="p-6">
    <div class="mb-6 last:mb-0" wrap-body="">
        <label class="block font-bold mb-2">Date & Time</label>
    <p>{{currentDateTime()}} {{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}</p>
    </div>
    <hr class="my-6 -mx-6 border-t border-gray-100 dark:border-gray-700">
    <div class="mb-6 last:mb-0" wrap-body="">
        <label class="block font-bold mb-2">
            Health Condition
        </label>
        <p>Do you have any Covid-19 symptoms that you recently acquired?</p><br>
        <div class="">
            <div class="flex justify-start flex-wrap -mb-3">
                <label class="checkbox mr-6 mb-3 last:mr-0">
                    <input type="checkbox" name="sample-checkbox" value="lorem">
                    <span class="check"></span><span class="control-label">YES</span>
                </label>
                <label class="checkbox mr-6 mb-3 last:mr-0">
                    <input type="checkbox" name="sample-checkbox" value="ipsum">
                    <span class="check"></span><span class="control-label">NO</span>
                </label>
            </div>
        </div>
    </div>
    <hr class="my-6 -mx-6 border-t border-gray-100 dark:border-gray-700">
    <div class="mb-6 last:mb-0">
        <label class="block font-bold mb-2">Temperature Declaration</label>
        <div class="temperature_container">
            <input type="text" class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-gray-800 pl-10 temperature">
            &nbsp;&nbsp; <span>&#8451;</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="mb-6 last:mb-0">
                <div class="">
                    <div class="flex items-stretch justify-start relative">
                        <label class="inline-flex">
                            <a class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600">
                                <span class="inline-flex justify-center items-center w-6 h-6" data-v-3ca1866b="">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                </span>
                                <span class="px-2">Upload Images</span>
                            </a>
                            <input type="file" class="absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1"></label>
                    </div>
                </div>
                <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">Max 500kb</div>
            </div>
        </div>
    </div>
    <hr class="my-6 -mx-6 border-t border-gray-100 dark:border-gray-700">
</div>    
</template>

<script>
const date = new Date();

export default {
  name: "HealthDeclare",

  data() {
    return {
      dateTime: {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      },
      timer: undefined,
    };
  },
  methods: {
    currentDateTime() {
      const current = new Date();
      const date = current.getDate()+'-'+(current.getMonth()+1)+'-'+current.getFullYear();
      const dateTime = date;

      return dateTime;
    },

    setDateTime() {
      const date = new Date();
      this.dateTime = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      };
    },
  },

  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000);
  },

  beforeUnmount() {
    clearInterval(this.timer);
  },
};

</script>

<style scoped>
.temperature{
    width: 20%;
}

.temperature_container{
    display: flex;
    justify-content: space space-between;
}
</style>