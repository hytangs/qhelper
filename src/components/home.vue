<template>

<!--<div class="content">
  <div class="row">
    <div class="col-12">
      <card
      type="chart"
      >
      <template v-slot:header>
        <div class="row">
          <div class="col-sm-6" :class="isRTL ? 'text-right' : 'text-left'">
            <template v-if="!isRTL">
              <h2 class="card-title"><b>Announcements</b></h2>
            </template>
          </div>
        </div>
      </template>
      <i class="tim-icons icon-pin text-primary "> </i>
      QHelper scheduled maintainence on tommorrow (Sep 9) 2am-4am. Sorry for any inconvenience caused! <br>
      <font size="1">By MasterAdmin | Sep 8 2021</font>
      </card>
    </div>
  </div>
  
  <div class="row">
    <div class="col-lg-4" :class="{'text-right': isRTL}">
      <card
      type="chart"
      cardCol
      >
      <template v-slot:header>
        <h5 class="card-category">Health Status </h5>
        <h3 class="card-title"><i class="tim-icons icon-check-2 text-primary "></i> <b> Negative</b></h3><hr>
        <font size="1">Based on health declaration and test results.</font>
      </template>
      </card>
    </div>
    <div class="col-lg-4">
      <card
      type="chart"
      cardCol
      >
      <template v-slot:header>
        <h5 class="card-category">Remaining Quarantine Time</h5>
        <h3 class="card-title"><b>4 Days</b></h3><hr>
        <font class="font" size="1">Based on your travel history.</font>
      </template>
      </card>
    </div>
    <div class="col-lg-4">
      <card
      type="chart"
      cardCol
      >
      <template v-slot:header>
        <h5 class="card-category">Next PCR Test</h5>
        <h3 class="card-title"><i class="tim-icons icon-bell-55 text-primary "></i> <b> 11 Sep 2021</b></h3><hr>
        <font class= "font" size="1">Based on current government regulations.</font>
      </template>
      </card>
    </div>
  </div>
</div>-->
<div id = "first_row">
<card>
    <div class="col-12">
    <h2 class="card-title"><b>Announcements</b></h2>
    QHelper scheduled maintainence on tommorrow (Sep 9) 2am-4am. Sorry for any inconvenience caused! <br>
    <font size="1">By MasterAdmin | Sep 8 2021</font>
    </div>
</card>
</div>

<div id = "second_row">
    <card id = "health">
    <div class = "col-lg-4">
        <h5 class="card-category">Health Status </h5>
        <h3 class="card-title"><i class="tim-icons icon-check-2 text-primary "></i> <b> Negative</b></h3><hr>
        <font size="1">Based on health declaration and test results.</font>
    </div>
    </card>

    <card id = "time">
    <div class="col-lg-4">
        <h5 class="card-category">Remaining Quarantine Time</h5>
        <h3 class="card-title"><b>4 Days</b></h3><hr>
        <font class="font" size="1">Based on your travel history.</font>    
    </div>
    </card>

    <card id ="next">
    <div class="col-lg-4">
        <h5 class="card-category">Next PCR Test</h5>
        <h3 class="card-title"><i class="tim-icons icon-bell-55 text-primary "></i> <b> 11 Sep 2021</b></h3><hr>
        <font class= "font" size="1">Based on current government regulations.</font>
    </div>
    </card>    
</div>
</template>

<script>
import { Card } from "@/components/index";

export default {
    name:'home',
    components: {
        Card
    }
}
</script>

<style>
.col-12{
  text-align: left;
}

.col-lg-4 {
    text-align: left;
}

#first_row{
    background-color: rosybrown;
    width:100%;
}

#second_row{
    background-color: aliceblue;
}
</style>