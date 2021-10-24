<template>
<div id="mealpage">
    <div class= "meals">
        <form class="breakfast">
            <h1>Menu for 31st October, 2021</h1>
            <div class="mealtype">
                <h3>Breakfast</h3>
                <button v-on:click="showbf = !showbf" id="showbtn">Show/Hide Breakfast Options</button>
                <transition name="fade">
                <div v-if="showbf" class="grid grid-cols-2 gap-6 lg:grid-cols-3 mb-6">
                    <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                        <div class="foodimg">
                            <img src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=20&m=1083487948&s=612x612&w=0&h=ROZ5t1K4Kjt5FQteVxTyzv_iqFcX8aqpl7YuA1Slm7w=">
                        </div>    
                        <input type = "radio" id= "food1" name="bf">
                        <label for="food1">Pizza</label>
                    </div>
                    <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                        <div class="foodimg">
                            <img src="https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale" width="100%">
                        </div> 
                        <input type="radio" id="food2" name="bf">
                        <label for="food2">Grilled Cheese</label>
                    </div>
                    <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                        <div class="foodimg">
                            <img src="https://hips.hearstapps.com/delish/assets/17/39/1506456062-delish-spaghetti-meatballs.jpg" width="100%">
                        </div> 
                        <input type="radio" id="food3" name="bf">
                        <label for="food3">Spaghetti</label>
                    </div>
                    <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                        <div class="foodimg">
                            <img src="https://thumbor.thedailymeal.com/zyAUA6IkWMK5h26dwt4ri_N6GUA=//https://www.thedailymeal.com/sites/default/files/recipe/2020/pancakes-shutterstock.JPG" width="100%">
                        </div>    
                        <input type = "radio" id= "food4" name="bf">
                        <label for="food4">Pancakes</label>
                    </div>
                    <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                        <div class="foodimg">
                            <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/06/14/0/FNK_Japchae_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1623679822091.jpeg" width="100%">
                        </div>    
                        <input type = "radio" id= "food5" name="bf">
                        <label for="food5">Japchae</label>
                    </div>
                    <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                        <div class="foodimg">
                            <img src="https://www.asiancookingmom.com/wp-content/uploads/2020/05/Shrimp-Congee-17-of-17.jpg">
                        </div>    
                        <input type = "radio" id= "food6" name="bf">
                        <label for="food6">Congee</label>
                    </div>
                </div>
                </transition>
                <div v-if="showbf" class="submit">
                        <button id="submission" type ="button">Submit</button>
                </div>
            </div>
        </form>
    </div>    
</div>
</template> 

<script>
export default {
    data() {
        return {
            showbf: true,
        }
    }
}
</script>

<style scoped>
#mealpage{
  /*grid-template-rows: repeat(2,minmax(0,1fr));;*/
  width: 100%;
  text-align: center;
  text-indent: 20px;
}

.shadow {
  box-shadow: 0px 8px 8px -8px grey;
}

.bottomgap{
  margin-bottom: 4rem;
}

#submission:hover{ 
    color:darkgoldenrod;
}

img {
    text-align: center;
    display: block;
    width: 100%;
    height: 200px;
}

#showbtn:hover{
    color:darkslategrey;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
