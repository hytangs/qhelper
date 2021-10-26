<template>
<div id="mealpage">
    <h1>Menu for 31st October, 2021</h1>
    <br>
    <div class= "form_container">
        <form id="breakfast">
            <div class="formhead">
                <h3>Breakfast</h3>
                <button v-on:click="showbf = !showbf" class="showbtn">Show/Hide Breakfast Options</button>
            </div>
            <transition name="fade">
            <div v-if="showbf" class="grid grid-cols-2 gap-6 lg:grid-cols-3 mb-6">
                <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="foodimg">
                        <img src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg">
                    </div>    
                    <input type = "radio" id= "food1" name="bf">
                    <label for="food1">English Breakfast</label>
                </div>
                <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="foodimg">
                        <img src="https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/642461595/cereal-milk-flakes.jpg?quality=82&strip=all">
                    </div> 
                    <input type="radio" id="food2" name="bf">
                    <label for="food2">Cereal with Milk</label>
                </div>
                <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="foodimg">
                        <img src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/12/french-toast-9582w.jpg">
                    </div> 
                    <input type="radio" id="food3" name="bf">
                    <label for="food3">French Toast</label>
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
                    <button class="submission" type ="button">Submit</button>
            </div>
        </form>
    </div>
    <div class="form_container">
        <form id="Lunch">
            <div class="formhead">
                <h3>Lunch</h3>
                <button v-on:click="showlun = !showlun" class="showbtn">Show/Hide Lunch Options</button>
            </div>
            <transition name="fade">
            <div v-if="showlun" class="grid grid-cols-2 gap-6 lg:grid-cols-3 mb-6">
                <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="foodimg">
                        <img src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=20&m=1083487948&s=612x612&w=0&h=ROZ5t1K4Kjt5FQteVxTyzv_iqFcX8aqpl7YuA1Slm7w=">
                    </div>    
                    <input type = "radio" id= "lunch1" name="lunch">
                    <label for="lunch1">Pizza</label>
                </div>
                <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="foodimg">
                        <img src="https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale" width="100%">
                    </div> 
                    <input type="radio" id="lunch2" name="lunch">
                    <label for="lunch2">Grilled Cheese</label>
                </div>
                <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="foodimg">
                        <img src="https://hips.hearstapps.com/delish/assets/17/39/1506456062-delish-spaghetti-meatballs.jpg" width="100%">
                    </div> 
                    <input type="radio" id="lunch3" name="lunch">
                    <label for="lunch3">Spaghetti</label>
                </div>
                <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="foodimg">
                        <img src="https://asianinspirations.com.au/wp-content/uploads/2019/11/R00098_Seafood_Tom_Yum_Soup-2.jpg">
                    </div>    
                    <input type = "radio" id= "lunch4" name="lunch">
                    <label for="lunch4">Tom Yum Soup with Rice</label>
                </div>
                <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="foodimg">
                        <img src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2020/06/chicken-rice.jpg">
                    </div>    
                    <input type = "radio" id= "lunch5" name="lunch">
                    <label for="lunch5">Hainanese Chicken Rice</label>
                </div>
                <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="foodimg">
                        <img src="https://iheartvegetables.com/wp-content/uploads/2019/03/Greek-Quinoa-Salad-6-of-13.jpg">
                    </div>    
                    <input type = "radio" id= "lunch6" name="bf">
                    <label for="lunch6">Quinoa Salad Bowl</label>
                </div>
            </div>
            </transition>
            <div v-if="showlun" class="submit">
                    <button class="submission" type ="button">Submit</button>
            </div>
        </form>
    </div> 
    <div class="form_container">
        <form id="Dinner">
            <div class="formhead">
                <h3>Dinner</h3>
                <button v-on:click="showdin = !showdin" class="showbtn">Show/Hide Dinner Options</button>
            </div>
            <transition name="fade">
            <div v-if="showdin" class="grid grid-cols-2 gap-6 lg:grid-cols-3 mb-6">
                <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="foodimg">
                        <img src="https://noobcook.com/wp-content/uploads/2014/03/hokkeinmee3.jpg">
                    </div>    
                    <input type = "radio" id= "dinner1" name="dinner">
                    <label for="dinner1">Hokkien Prawn Noodles</label>
                </div>
                <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="foodimg">
                        <img src="https://www.dcvelocity.com/ext/resources/images/articles/2020/202005/20200514impossible_burger.jpg?1589468649">
                    </div> 
                    <input type="radio" id="dinner2" name="dinner">
                    <label for="dinner">Impossible Burger</label>
                </div>
                <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="foodimg">
                        <img src="https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2020/09/Easy-Tonkotsu-26-mini.jpg?fit=1000%2C667&ssl=1">
                    </div> 
                    <input type="radio" id="dinner3" name="dinner">
                    <label for="dinner3">Japanese Ramen</label>
                </div>
                <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="foodimg">
                        <img src="https://asianfoodnetwork.com/content/dam/afn/global/en/recipes/dtf-fried-rice/AFN_din_tai_fung_fried_rice_main_image.jpg.transform/desktop-img/img.jpg">
                    </div>    
                    <input type = "radio" id= "dinner4" name="dinner">
                    <label for="dinner4">Egg Fried Rice</label>
                </div>
                <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="foodimg">
                        <img src="https://missionfoods.com/uploads/falafel-pita-pocket-tahini-sauce.jpg">
                    </div>    
                    <input type = "radio" id= "dinner5" name="dinner">
                    <label for="dinner5">Falafel Pita Pocket</label>
                </div>
                <div class="bg-white border hover:bg-yellow-400 border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                    <div class="foodimg">
                        <img src="https://www.onceuponachef.com/images/2018/03/Breakfast-Burritos.jpg">
                    </div>    
                    <input type = "radio" id= "dinner6" name="dinner">
                    <label for="dinner6">Beef Burrito</label>
                </div>
            </div>
            </transition>
            <div v-if="showdin" class="submit">
                    <button class="submission" type ="button">Submit</button>
            </div>
        </form>
    </div>    
</div>
</template> 

<script>
export default {
    data() {
        return {
            showbf: false,
            showlun: false,
            showdin: false,
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

.form_container{
    border-style: solid;
    border-color: gray;
    box-shadow: gray;
}

.shadow {
  box-shadow: 0px 8px 8px -8px grey;
}

.bottomgap{
  margin-bottom: 4rem;
}

.submission:hover{ 
    background-color: rgb(136, 100, 9);
}

.submission{
    background-color: darkgoldenrod;
    text-align: center;
    color:white;
    border-radius: 8px;
    padding:10px 24px;
}

img {
    text-align: center;
    display: block;
    width: 100%;
    height: 200px;
}

.showbtn:hover{
    color:darkslategrey;
    text-underline-position: below;
    text-decoration: underline;
}

.showbtn{
    font-size: 15px;
    position: absolute;
    right:0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}


.formhead{
    display: inline-flex;
}

h1{
    font-size: 30px;
    font:bold;
    font-family: 'Lucida Handwriting';
}
</style>
