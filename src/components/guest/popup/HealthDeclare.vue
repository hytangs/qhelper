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
                    <input type="radio" name="sample-checkbox" value="lorem">
                    <span class="check"></span><span class="control-label">YES</span>
                </label>
                <label class="checkbox mr-6 mb-3 last:mr-0">
                    <input type="radio" name="sample-checkbox" value="ipsum">
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
        </div>
    </div>
    <hr class="my-6 -mx-6 border-t border-gray-100 dark:border-gray-700">
        <div class="mb-6 last:mb-0">
        <label class="block font-bold mb-2">Remarks</label>
    <textarea class="remark px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-24 border bg-white dark:bg-gray-800" placeholder="Explain how we can help you" spellcheck="false"></textarea>
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

.remark{
  
}
</style>