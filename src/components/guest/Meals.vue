<template>
  <header>
    <a href="#guest/dashboard" class="logo text-3xl"> QHELPER </a>
    <ul>
      <li><a class="title" href="#home">Home</a></li>
      <li><a class="title" href="#meals">Meals</a></li>
      <li><a class="title" href="#shop">Shop</a></li>
      <li><a class="title" href="#entertainment">Entertainment</a></li>
      <li><a class="title" href="#checkout">Checkout</a></li>
      <li><a class="title" href="#contact">Contact</a></li>
    </ul>
    <a
      class="color flex items-center flex-grow-0 flex-shrink-0 relative cursor-pointer hover:text-white text-dark dark:text-white dark:hover:text-gray-400 py-2 px-3 lg:w-16 lg:justify-center"
      href="/"
    >
      <span
        class="inline-flex justify-center items-center w-6 h-6 transition-colors"
        data-v-3ca1866b=""
      >
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          class="inline-block"
          data-v-42f089b8=""
        >
          <path
            d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"
            data-v-42f089b8=""
          ></path>
        </svg>
      </span>
      <span class="px-2 transition-colors lg:hidden">Log out</span></a
    >
  </header>

  <br /><br /><br /><br />

  <div id="mealpage">
    <br />
    <h1>Menu for {{ currentDate }}</h1>
    <br />
    <div class="form_container">
      <form
        v-bind:key="k"
        v-for="(meal, k) in mealsData.filter((i) => {
          return i.visible;
        })"
      >
        <div class="formhead  w-3/4 m-auto inline-block">
          <h3 class="font-extrabold float-left">{{ meal.time }}</h3>
          <information-circle-icon
            class="h-5 w-5 text-black sm:text-sm"
          ></information-circle-icon>
          <button
            v-on:click="showMeal(0)"
            class="showbtn content-center text-black hover:text-blue-500"
          >
            Breakfast
          </button>
          |
          <button
            v-on:click="showMeal(1)"
            class="showbtn content-center text-black hover:text-blue-500"
          >
            Lunch
          </button>
          |
          <button
            v-on:click="showMeal(2)"
            class="showbtn content-center text-black hover:text-blue-500"
          >
            Dinner
          </button>
        </div>
        <br /><br />
        <transition name="fade">
          <div class="grid grid-cols-2 gap-3 lg:grid-cols-3 mb-6 w-3/4 m-auto">
            <div
              v-bind:key="j"
              v-for="(item, j) in meal.items"
              class="max-w-sm rounded overflow-hidden shadow-lg p-3 border bg-white border-gray-400 relative hover:bg-yellow-400"
            >
              <a
                href="javascript:void(0)"
                class="absolute right-0 pr-5 pt-2"
                v-on:click="showHideModal(item)"
              >
                <information-circle-icon
                  class="h-6 w-6 text-blue-900 sm:text-sm"
                ></information-circle-icon>
              </a>
              <img class="w-1/4" :src="item.src" :alt="item.desc" />
              <div class="mt-2">
                <label class="flex items-center">
                  <input
                    :name="meal.time"
                    checked
                    v-model="selectItem"
                    type="radio"
                    class="form-checkbox h-6 w-6"
                    id="selected"
                    :value="item.name"
                  />
                  <span class="text-lg text-gray-500">{{ item.name }}</span>
                </label>
              </div>
              <!--<p class="font-black">{{ item.price }}{{ item.priceUnit }}</p>-->
            </div>
          </div>
        </transition>
        <field class="w-1/2 m-auto mb-4" label="Special Request" align="center">
          <!-- <p>Special Request</p> -->
          <!-- <label>
            <input
              type="text"
              class="form-input mt-1 m-auto block w-1/2 rounded-md border-gray-300 h-14"
              placeholder="Special"
              id="request"
            />
          </label> -->
           <control placeholder="Special" id="request" />
        </field>
        <field class="w-1/2 m-auto mb-4" label="Your Name and Room Number">
          <control placeholder="Name" id="name" />
          <control placeholder="Room Number" id="room" />
        </field>
        <div class="submit">
          <button class="submission" type="button" @click="savetofs()">
            Submit
          </button>
        </div>
      </form>
    </div>

    <div
      class="fixed z-10 overflow-y-auto top-0 w-full left-0"
      id="modal"
      v-if="popup"
    >
      <div
        class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <div
          class="inline-block align-center bg-white p-16 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-32 sm:align-middle sm:max-w-3xl sm:w-full relative"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <a
            href="javascript:void(0)"
            class="absolute right-0 top-0 pr-5 pt-4"
            v-on:click="showHideModal()"
          >
            <XIcon class="h-6 w-6 text-blue-900 sm:text-sm"></XIcon>
          </a>
          <img class="w-auto rounded-lg" :src="popup.lgSrc" :alt="popup.alt" />
          <div class="mt-3 text-left">
            <h3 class="uppercase text-blue-900 font-extrabold text-2xl">
              {{ popup.name }}
            </h3>
            <p class="text-gray-500">{{ popup.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InformationCircleIcon, XIcon } from "@heroicons/vue/solid";
import moment from "moment";
import Field from "../plugins/Field";
import Control from "../plugins/Control";

import firebaseApp from "../../firebase.js";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: "meals",

  components: {
    Field,
    Control,
    InformationCircleIcon,
    XIcon,
  },

  methods: {
    async savetofs() {
      try {
        var meal = document.getElementById("selected").name;
        var selection = document.querySelector('input[id="selected"]:checked')
          .value;
        var request = document.getElementById("request").value;
        var room = document.getElementById("room").value;
        var name = document.getElementById("name").value;
        if (meal == "Breakfast") {
          const docRef = await setDoc(doc(db, "Breakfast", room), {
            Name: name,
            Room: room,
            Meal: meal,
            Selection: selection,
            Request: request,
            OrderStatus: "Order Received",
            OrderDate: moment(String(new Date())).format("MM/DD/YYYY"),
          });
          console.log(docRef);
        }
        if (meal == "Lunch") {
          const docRef = await setDoc(doc(db, "Lunch", room), {
            Name: name,
            Room: room,
            Meal: meal,
            Selection: selection,
            Request: request,
            OrderStatus: "Order Received",
            OrderDate: moment(String(new Date())).format("MM/DD/YYYY"),
          });
          console.log(docRef);
        }
        if (meal == "Dinner") {
          const docRef = await setDoc(doc(db, "Dinner", room), {
            Name: name,
            Room: room,
            Meal: meal,
            Selection: selection,
            Request: request,
            OrderStatus: "Order Received",
            OrderDate: moment(String(new Date())).format("MM/DD/YYYY"),
          });
          console.log(docRef);
        }
        this.$emit("added");
      } finally {
        alert("Orders submitted successfully.");
      }
    },
    show() {
      console.log(document.getElementById("selected").name);
      //console.log(document.getElementById("selected").checked)
      console.log(
        this.mealsData[0].items.filter((i) => {
          return i.selected;
        })
      );
      console.log(document.querySelector('input[id="selected"]:checked').value);
    },

    showHideModal(selectedItem) {
      if (selectedItem) this.popup = selectedItem;
      else this.popup = null;
    },
    showMeal(index) {
      this.mealsData = this.mealsTempData;
      this.mealsData.forEach((t) => {
        t.visible = false;
      });
      this.mealsData[index].visible = true;
    },
    setTime() {
      this.currentDate = moment(String(new Date())).format("MM/DD/YYYY");
    },
  },

  beforeMount() {
    this.mealsTempData = [
      {
        time: "Breakfast",
        isBreakfast: true,
        visible: true,
        items: [
          {
            name: "English Breakfast",
            desc: "Food",
            price: 8,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg",
            lgSrc:
              "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg",
          },
          {
            name: "Cereal Milk",
            desc: "",
            price: 3,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/642461595/cereal-milk-flakes.jpg?quality=82&strip=all",
            lgSrc:
              "https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/642461595/cereal-milk-flakes.jpg?quality=82&strip=all",
          },
          {
            name: "French Toast",
            desc: "",
            price: 9,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/12/french-toast-9582w.jpg",
            lgSrc:
              "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/12/french-toast-9582w.jpg",
          },
          {
            name: "Pancakes",
            desc: "",
            price: 7,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://thumbor.thedailymeal.com/zyAUA6IkWMK5h26dwt4ri_N6GUA=//https://www.thedailymeal.com/sites/default/files/recipe/2020/pancakes-shutterstock.JPG",
            lgSrc:
              "https://thumbor.thedailymeal.com/zyAUA6IkWMK5h26dwt4ri_N6GUA=//https://www.thedailymeal.com/sites/default/files/recipe/2020/pancakes-shutterstock.JPG",
          },
          {
            name: "Japchae",
            desc: "",
            price: 5,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/06/14/0/FNK_Japchae_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1623679822091.jpeg",
            lgSrc:
              "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/06/14/0/FNK_Japchae_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1623679822091.jpeg",
          },
          {
            name: "Congee",
            desc: "",
            price: 4,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://www.asiancookingmom.com/wp-content/uploads/2020/05/Shrimp-Congee-17-of-17.jpg",
            lgSrc:
              "https://www.asiancookingmom.com/wp-content/uploads/2020/05/Shrimp-Congee-17-of-17.jpg",
          },
        ],
      },
      {
        time: "Lunch",
        isLunch: true,
        visible: false,
        items: [
          {
            name: "Pizza",
            desc: "",
            price: 8,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=20&m=1083487948&s=612x612&w=0&h=ROZ5t1K4Kjt5FQteVxTyzv_iqFcX8aqpl7YuA1Slm7w=",
            lgSrc:
              "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=20&m=1083487948&s=612x612&w=0&h=ROZ5t1K4Kjt5FQteVxTyzv_iqFcX8aqpl7YuA1Slm7w=",
          },
          {
            name: "Grilled Cheese",
            desc: "",
            price: 5,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
            lgSrc:
              "https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
          },
          {
            name: "Spaghetti with Meatballs",
            desc: "",
            price: 8,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://hips.hearstapps.com/delish/assets/17/39/1506456062-delish-spaghetti-meatballs.jpg",
            lgSrc:
              "https://hips.hearstapps.com/delish/assets/17/39/1506456062-delish-spaghetti-meatballs.jpg",
          },
          {
            name: "Tom Yum Soup with White Rice",
            desc: "",
            price: 6,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://asianinspirations.com.au/wp-content/uploads/2019/11/R00098_Seafood_Tom_Yum_Soup-2.jpg",
            lgSrc:
              "https://asianinspirations.com.au/wp-content/uploads/2019/11/R00098_Seafood_Tom_Yum_Soup-2.jpg",
          },
          {
            name: "Hainanese Chicken Rice",
            desc: "",
            price: 7,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2020/06/chicken-rice.jpg",
            lgSrc:
              "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2020/06/chicken-rice.jpg",
          },
          {
            name: "Quinoa Salad Bowl",
            desc: "",
            price: 8,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://iheartvegetables.com/wp-content/uploads/2019/03/Greek-Quinoa-Salad-6-of-13.jpg",
            lgSrc:
              "https://iheartvegetables.com/wp-content/uploads/2019/03/Greek-Quinoa-Salad-6-of-13.jpg",
          },
        ],
      },
      {
        time: "Dinner",
        isDinner: true,
        visible: false,
        items: [
          {
            name: "Hokkien Prawn Noodle",
            desc: "",
            price: 7,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://noobcook.com/wp-content/uploads/2014/03/hokkeinmee3.jpg",
            lgSrc:
              "https://noobcook.com/wp-content/uploads/2014/03/hokkeinmee3.jpg",
          },
          {
            name: "Impossible Burger",
            desc: "",
            price: 9,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://www.dcvelocity.com/ext/resources/images/articles/2020/202005/20200514impossible_burger.jpg?1589468649",
            lgSrc:
              "https://www.dcvelocity.com/ext/resources/images/articles/2020/202005/20200514impossible_burger.jpg?1589468649",
          },
          {
            name: "Japanese Ramen",
            desc: "",
            price: 8,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2020/09/Easy-Tonkotsu-26-mini.jpg?fit=1000%2C667&ssl=1",
            lgSrc:
              "https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2020/09/Easy-Tonkotsu-26-mini.jpg?fit=1000%2C667&ssl=1",
          },
          {
            name: "Egg Fried Rice",
            desc: "",
            price: 5,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://asianfoodnetwork.com/content/dam/afn/global/en/recipes/dtf-fried-rice/AFN_din_tai_fung_fried_rice_main_image.jpg.transform/desktop-img/img.jpg",
            lgSrc:
              "https://asianfoodnetwork.com/content/dam/afn/global/en/recipes/dtf-fried-rice/AFN_din_tai_fung_fried_rice_main_image.jpg.transform/desktop-img/img.jpg",
          },
          {
            name: "Falafel Pita Pocket",
            desc: "",
            price: 8,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://missionfoods.com/uploads/falafel-pita-pocket-tahini-sauce.jpg",
            lgSrc:
              "https://missionfoods.com/uploads/falafel-pita-pocket-tahini-sauce.jpg",
          },
          {
            name: "Beef Burrito",
            desc: "",
            price: 7,
            priceUnit: " SGD",
            selected: false,
            src:
              "https://www.onceuponachef.com/images/2018/03/Breakfast-Burritos.jpg",
            lgSrc:
              "https://www.onceuponachef.com/images/2018/03/Breakfast-Burritos.jpg",
          },
        ],
      },
    ];
    this.mealsData = this.mealsTempData;
  },

  mounted() {
    this.setTime();
  },

  data() {
    return {
      popup: null,
      mealsData: {},
      mealsTempData: null,
      showBreakfast: false,
      showLunch: false,
      showDinner: false,
      currentDate: null,
      selectItem: [],
    };
  },
};
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
  background-color: rgba(37, 99, 235);
}

.submission {
  background-color: rgba(59, 130, 246);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

/*.formhead {*/
/*  display: inline-flex;*/
/*}*/

h1 {
  font-size: 30px;
  font: bold;
  font-family: "Lucida Handwriting";
}

@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");
* {
  font-family: "Poppins", sans-serif;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 15px 100px;
  z-index: 100000;
  background-color: black;
}

header.sticky {
  padding: 10px 100px;
  background-color: black;
}

header .logo {
  position: relative;
  font-weight: 700;
  color: white;
  text-decoration: none;
  font-size: 2em;
  letter-spacing: 2px;
  transition: 0.6s;
}

header ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

header ul li {
  position: relative;
  list-style: none;
}

header ul li a {
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: white;
  letter-spacing: 2px;
  font-weight: 500px;
  transition: 0.6s;
}

header.sticky .logo,
header.sticky ul li a,
header.sticky .exit,
header.sticky .color {
  color: white;
}

/* titles changing color when hovering */

.title:hover {
  color: goldenrod;
}

.title:hover::after {
  content: "";
  position: absolute;
  left: 25%;
  right: 25%;
  bottom: 0;
  margin: -7px;
  border-bottom: 2px solid goldenrod;
}

header.sticky ul li a:hover {
  color: goldenrod;
}

header.sticky .title:hover::after {
  content: "";
  position: absolute;
  left: 25%;
  right: 25%;
  bottom: 0;
  margin: -7px;
  border-bottom: 2px solid goldenrod;
}

.color {
  color: white;
}

.shadow:hover {
  box-shadow: 0px 1px 15px grey;
}
</style>
