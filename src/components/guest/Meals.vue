<template>
  <div id="mealpage">
    <h1>Menu for 31st October, 2021</h1>
    <br>
    <div class="form_container">
      <form v-bind:key="k" v-for="(meal, k) in mealsData.filter((i)=>{return i.visible;})">
        <div class="formhead  w-3/4 m-auto inline-block">
          <h3 class="font-extrabold float-left">{{ meal.time }}</h3>
          <information-circle-icon class="h-5 w-5 text-black sm:text-sm"></information-circle-icon>
          <button v-on:click="showMeal(0)"
                  class="showbtn content-center text-black hover:text-blue-500">Breakfast
          </button> |
          <button v-on:click="showMeal(1)"
                  class="showbtn content-center text-black hover:text-blue-500">Lunch
          </button> |
          <button v-on:click="showMeal(2)"
                  class="showbtn content-center text-black hover:text-blue-500">Dinner
          </button>
        </div>
        <br><br>
        <transition name="fade">
          <div class="grid grid-cols-2 gap-6 lg:grid-cols-3 mb-6 w-3/4 m-auto">
            <div v-bind:key="j" v-for="(item, j) in meal.items"
                 class="max-w-sm rounded overflow-hidden shadow-lg p-3 border bg-white border-gray-400 relative">
              <a href="javascript:void(0)" class="absolute right-0 pr-5 pt-2" v-on:click="showHideModal(item)">
                <information-circle-icon class="h-6 w-6 text-blue-900 sm:text-sm"></information-circle-icon>
              </a>
              <img class="w-1/4"
                   :src="item.src"
                   :alt="item.desc" v-on:click="item.selected = !item.selected">
              <div class="mt-2">
                <label class="flex items-center">
                  <input :checked="item.selected" type="checkbox" class="form-checkbox h-6 w-6">
                  <span class="text-lg text-gray-500">{{ item.name }}</span>
                </label>
              </div>
              <p class="font-black">{{ item.price }}{{ item.priceUnit }}</p>
            </div>
          </div>
        </transition>

        <div class="submit">
          <button class="submission" type="button">Submit</button>
        </div>
      </form>
    </div>
    
    <div class="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal" v-if="popup">
      <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-900 opacity-75"/>
        </div>
        <div
            class="inline-block align-center bg-white p-16 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-32 sm:align-middle sm:max-w-3xl sm:w-full relative"
            role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <a href="javascript:void(0)" class="absolute right-0 top-0 pr-5 pt-4" v-on:click="showHideModal()">
            <XIcon class="h-6 w-6 text-blue-900 sm:text-sm"></XIcon>
          </a>
          <img class="w-1/4 rounded-lg"
               :src="popup.lgSrc"
               :alt="popup.alt">
          <div class="mt-3 text-left">
            <h3 class="uppercase text-blue-900 font-extrabold text-2xl">{{ popup.name }}</h3>
            <p class="text-gray-500">{{ popup.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {InformationCircleIcon, XIcon} from '@heroicons/vue/solid'

export default {
  name: "meals",

  methods: {
    showHideModal(selectedItem) {
      if (selectedItem)
        this.popup = selectedItem;
      else
        this.popup = null
    },
    showMeal(index) {
      this.mealsData = this.mealsTempData;
      this.mealsData.forEach((t) => {
        t.visible = false;
      })
      this.mealsData[index].visible = true;
    }
  },

  beforeMount() {
    this.mealsTempData =
        [{
          time: "Breakfast", isBreakfast: true, visible: true, items: [
            {
              name: "English Breakfast",
              desc: "",
              price: 8000,
              priceUnit: "EUR",
              selected: false,
              src: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg",
              lgSrc: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg"
            },
            {
              name: "Cereal Milk",
              desc: "",
              price: 90,
              priceUnit: "EUR",
              selected: false,
              src: "https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/642461595/cereal-milk-flakes.jpg?quality=82&strip=all",
              lgSrc: "https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/642461595/cereal-milk-flakes.jpg?quality=82&strip=all"
            },
            {
              name: "French Toast",
              desc: "",
              price: 90,
              priceUnit: "EUR",
              selected: false,
              src: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/12/french-toast-9582w.jpg",
              lgSrc: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/12/french-toast-9582w.jpg"
            },
            {
              name: "Pancakes",
              desc: "",
              price: 90,
              priceUnit: "EUR",
              selected: false,
              src: "https://thumbor.thedailymeal.com/zyAUA6IkWMK5h26dwt4ri_N6GUA=//https://www.thedailymeal.com/sites/default/files/recipe/2020/pancakes-shutterstock.JPG",
              lgSrc: "https://thumbor.thedailymeal.com/zyAUA6IkWMK5h26dwt4ri_N6GUA=//https://www.thedailymeal.com/sites/default/files/recipe/2020/pancakes-shutterstock.JPG"
            },
            {
              name: "Japchae",
              desc: "",
              price: 90,
              priceUnit: "EUR",
              selected: false,
              src: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/06/14/0/FNK_Japchae_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1623679822091.jpeg",
              lgSrc: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/06/14/0/FNK_Japchae_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1623679822091.jpeg"
            },
            {
              name: "Congee",
              desc: "",
              price: 90,
              priceUnit: "EUR",
              selected: false,
              src: "https://www.asiancookingmom.com/wp-content/uploads/2020/05/Shrimp-Congee-17-of-17.jpg",
              lgSrc: "https://www.asiancookingmom.com/wp-content/uploads/2020/05/Shrimp-Congee-17-of-17.jpg"
            },
          ]
        },
          {
            time: "Lunch", isLunch: true, visible: false, items: [
              {
                name: "English Breakfast",
                desc: "",
                price: 8000,
                priceUnit: "EUR",
                selected: false,
                src: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg",
                lgSrc: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg"
              },
              {
                name: "Cereal Milk",
                desc: "",
                price: 90,
                priceUnit: "EUR",
                selected: false,
                src: "https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/642461595/cereal-milk-flakes.jpg?quality=82&strip=all",
                lgSrc: "https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/642461595/cereal-milk-flakes.jpg?quality=82&strip=all"
              },
              {
                name: "French Toast",
                desc: "",
                price: 90,
                priceUnit: "EUR",
                selected: false,
                src: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/12/french-toast-9582w.jpg",
                lgSrc: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/12/french-toast-9582w.jpg"
              },
              {
                name: "Pancakes",
                desc: "",
                price: 90,
                priceUnit: "EUR",
                selected: false,
                src: "https://thumbor.thedailymeal.com/zyAUA6IkWMK5h26dwt4ri_N6GUA=//https://www.thedailymeal.com/sites/default/files/recipe/2020/pancakes-shutterstock.JPG",
                lgSrc: "https://thumbor.thedailymeal.com/zyAUA6IkWMK5h26dwt4ri_N6GUA=//https://www.thedailymeal.com/sites/default/files/recipe/2020/pancakes-shutterstock.JPG"
              },
              {
                name: "Japchae",
                desc: "",
                price: 90,
                priceUnit: "EUR",
                selected: false,
                src: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/06/14/0/FNK_Japchae_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1623679822091.jpeg",
                lgSrc: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/06/14/0/FNK_Japchae_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1623679822091.jpeg"
              },
              {
                name: "Congee",
                desc: "",
                price: 90,
                priceUnit: "EUR",
                selected: false,
                src: "https://www.asiancookingmom.com/wp-content/uploads/2020/05/Shrimp-Congee-17-of-17.jpg",
                lgSrc: "https://www.asiancookingmom.com/wp-content/uploads/2020/05/Shrimp-Congee-17-of-17.jpg"
              },
            ]
          },
          {
            time: "Dinner", isDinner: true, visible: false, items: [
              {
                name: "English Breakfast",
                desc: "",
                price: 8000,
                priceUnit: "EUR",
                selected: false,
                src: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg",
                lgSrc: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg"
              },
              {
                name: "Cereal Milk",
                desc: "",
                price: 90,
                priceUnit: "EUR",
                selected: false,
                src: "https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/642461595/cereal-milk-flakes.jpg?quality=82&strip=all",
                lgSrc: "https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/642461595/cereal-milk-flakes.jpg?quality=82&strip=all"
              },
              {
                name: "French Toast",
                desc: "",
                price: 90,
                priceUnit: "EUR",
                selected: false,
                src: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/12/french-toast-9582w.jpg",
                lgSrc: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/12/french-toast-9582w.jpg"
              },
              {
                name: "Pancakes",
                desc: "",
                price: 90,
                priceUnit: "EUR",
                selected: false,
                src: "https://thumbor.thedailymeal.com/zyAUA6IkWMK5h26dwt4ri_N6GUA=//https://www.thedailymeal.com/sites/default/files/recipe/2020/pancakes-shutterstock.JPG",
                lgSrc: "https://thumbor.thedailymeal.com/zyAUA6IkWMK5h26dwt4ri_N6GUA=//https://www.thedailymeal.com/sites/default/files/recipe/2020/pancakes-shutterstock.JPG"
              },
              {
                name: "Japchae",
                desc: "",
                price: 90,
                priceUnit: "EUR",
                selected: false,
                src: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/06/14/0/FNK_Japchae_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1623679822091.jpeg",
                lgSrc: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/06/14/0/FNK_Japchae_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1623679822091.jpeg"
              },
              {
                name: "Congee",
                desc: "",
                price: 90,
                priceUnit: "EUR",
                selected: false,
                src: "https://www.asiancookingmom.com/wp-content/uploads/2020/05/Shrimp-Congee-17-of-17.jpg",
                lgSrc: "https://www.asiancookingmom.com/wp-content/uploads/2020/05/Shrimp-Congee-17-of-17.jpg"
              },
            ]
          }]
    this.mealsData = this.mealsTempData;
  },

  data() {
    return {
      popup: null,
      mealsData: {},
      mealsTempData: null,
      showBreakfast: false,
      showLunch: false,
      showDinner: false,
    }
  },
  components: {InformationCircleIcon, XIcon}
}
</script>

<style scoped>
#mealpage {
  /*grid-template-rows: repeat(2,minmax(0,1fr));;*/
  width: 100%;
  text-align: center;
  text-indent: 20px;
}

.form_container {
  border-style: solid;
  border-color: gray;
  box-shadow: gray;
}

.shadow {
  box-shadow: 0px 8px 8px -8px grey;
}

.bottomgap {
  margin-bottom: 4rem;
}

.submission:hover {
  background-color: rgb(136, 100, 9);
}

.submission {
  background-color: darkgoldenrod;
  text-align: center;
  color: white;
  border-radius: 8px;
  padding: 10px 24px;
}

img {
  text-align: center;
  display: block;
  width: 100%;
  height: 200px;
}

.showbtn:hover {
  color: goldenrod;
  text-underline-position: below;
  text-decoration: underline;
}

.showbtn {
  font-size: 20px;
  /*position: absolute;*/
  /*right: 0;*/
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}


/*.formhead {*/
/*  display: inline-flex;*/
/*}*/

h1 {
  font-size: 30px;
  font: bold;
  font-family: 'Lucida Handwriting';
}


</style>
