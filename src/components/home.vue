<template>
<div id="home">
<div id="announcement">
  <div><h2>Announcement</h2></div>
</div>

<div id = "three">
  <div class="subcards"><h4>Health Status</h4></div>
  <div class="subcards"><h4>Remaining Quarantine Time</h4></div>
  <div class="subcards"><h4>Next PCR Test Date</h4></div>
</div>
</div>
</template>

<script>

</script>

<style>

#announcement {
  --tw-bg-opacity: 1;
  background-color: rgba(255,255,255,var(--tw-bg-opacity));
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgba(243,244,246,var(--tw-border-opacity));
  width:100%;
  height: 35vh;
  margin-bottom: 4rem;
  border-radius: 10px;
  box-shadow: 0px 8px 8px -8px grey;
}

#three{
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: 1.5rem;
  height: 30vh;
  width: 100%;
}

.subcards{
  --tw-bg-opacity: 1;
  background-color: rgba(255,255,255,var(--tw-bg-opacity));
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgba(243,244,246,var(--tw-border-opacity));
  border-radius: 10px;
  box-shadow: 0px 8px 8px -8px grey;
}

#home{
  grid-template-rows: repeat(2,minmax(0,1fr));;
  width: 99%;
  text-align: left;
  text-indent: 20px;
}
</style>
