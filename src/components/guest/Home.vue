<template>
<div id="home">
<div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow bottomgap">
  <div class="p-6">
    <h2>Announcement</h2>
  </div>
  <div id = "announcement">
    <!--Announcements to be located here-->
  </div>
</div>

<div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
  <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
    <div class="p-6">
      <h4>Health Status</h4>
    </div>
    <div class="subcards">
      <!--Health Status to be located here-->
    </div>
  </div>
  <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
    <div class="p-6">
      <h4>Remaining Quarantine Time</h4>
    </div>
    <div class="subcards">
      <!--Quarantine Time to be located here-->
    </div>
  </div>
  <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
    <div class="p-6">
      <h4>Next PCR Test Date</h4>
    </div>
    <div class="subcards">
      <!--Next PCR Test Date to be located here-->
    </div>
  </div>
</div>
</div>
</template>

<script>

</script>

<style scoped>

#announcement {
  width:100%;
  height: 25vh;
  margin-bottom: 1rem;
}

.shadow {
  box-shadow: 0px 8px 8px -8px grey;
}

.bottomgap{
  margin-bottom: 4rem;
}

#three{
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: 1.5rem;
  height: 30vh;
  width: 100%;
}

.subcards{
  width: 100%;
  height: 20vh;
  margin-bottom: 1rem;
}

#home{
  grid-template-rows: repeat(2,minmax(0,1fr));;
  width: 99%;
  text-align: left;
  text-indent: 20px;
}
</style>