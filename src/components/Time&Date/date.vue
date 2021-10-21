<template>
  <div id="app">
    <p>Current Date & Time: {{currentDateTime()}} {{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}</p>
  </div>
</template>

<script>
const date = new Date();

export default {
name: "date",

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
      const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
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
