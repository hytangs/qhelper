<template>
<div id="mealpage">
    <div class= "meals">
        <form class="breakfast">
            <h1>Menu for 31st October, 2021</h1>
            <div class="mealtype">
                <h3>Breakfast</h3>
            </div>
            <div class="grid grid-cols-2 gap-6 lg:grid-cols-3 mb-6">
            <div class="hover:bg-light-blue-200 bg-black border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                <div class="foodimg">
                    <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" width="30%">
                </div>    
                <input type = "radio" id= "pancakes" name="main">
                <label for="food1">Food 1</label>
            </div>
            <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                <div class="foodimg">
                    <img src="https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale" width="30%">
                </div> 
                <input type="radio" id="food2" name="main">
                <label for="food2">Food 2</label>
            </div>
            <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                <div class="foodimg">
                    <img src="https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale" width="30%">
                </div> 
                <input type="radio" id="food2" name="main">
                <label for="food2">Food 3</label>
            </div>
            <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                <div class="foodimg">
                    <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" width="30%">
                </div>    
                <input type = "radio" id= "pancakes" name="main">
                <label for="food1">Food 1</label>
            </div>
            <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                <div class="foodimg">
                    <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" width="30%">
                </div>    
                <input type = "radio" id= "pancakes" name="main">
                <label for="food1">Food 1</label>
            </div>
            <div class="bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-900 md:rounded shadow">
                <div class="foodimg">
                    <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" width="30%">
                </div>    
                <input type = "radio" id= "pancakes" name="main">
                <label for="food1">Food 1</label>
            </div>
            <div class="sideChoice">
                <h2>Choose 3 sides</h2>
                <input type="checkbox" id="side1" name="side">
                <label for="side1">Side 1</label><br>
                <input type="checkbox" id="side2" name="side">
                <label for="side2">Side 2</label><br>
                <input type="checkbox" id="side3" name="side">
                <label for="side3">Side 3</label><br>
                <input type="checkbox" id="side4" name="side">
                <label for="side4">Side 4</label><br>
                <input type="checkbox" id="side5" name="side">
                <label for="side5">Side 5</label><br>
                <input type="checkbox" id="side6" name="side">
                <label for="side6">Side 6</label><br>
            </div>
            <div class="submit">
                <button id="submission" type ="button">Submit</button>
            </div>
            </div>
        </form>
    </div>    
</div>
</template> 

<style scoped>
#mealpage{
  /*grid-template-rows: repeat(2,minmax(0,1fr));;*/
  width: 80%;
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

.foodimg {
    text-align: center;
}


</style>