<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onBeforeUpdate, onUpdated } from 'vue'
import { onSnapshot, query, collection, getDocs ,getDoc, deleteDoc, doc, setDoc, Timestamp, addDoc, updateDoc, where ,getCountFromServer } from "firebase/firestore"
import db from '../firebase/init.js'

//const ingredients = ref({ meat: [""] }, { vegetable: [] } ,{ bread: [] } )
const ingredients = ref({ meat: [], vegetable: [], bread: [{ingredient:[{name:"asdasd", price: 60}]}]  })
async function getIngredients() {



  const qry = query(collection(db, 'ingredients'))
  const postsQry = query(qry, where("name", "==", "meat"))
  const un = await onSnapshot(postsQry, (querySnap) => {
    ingredients.value.meat = []
    querySnap.forEach((doc) => {
      
      let data = doc.data();
      data.id = doc.id;
      ingredients.value.meat.push(data);
    })
  })

  const qry2 = query(collection(db, 'ingredients'))
  const postsQry2 = query(qry2, where("name", "==", "vegetable"))
  const un2 = await onSnapshot(postsQry2, (querySnap) => {
    ingredients.value.vegetable = []
    querySnap.forEach((doc) => {
     
      let data = doc.data();
      data.id = doc.id;
      ingredients.value.vegetable.push(data);
    })
  })

  const qry3 = query(collection(db, 'ingredients'))
  const postsQry3 = query(qry3, where("name", "==", "bread"))
  const un3 = await onSnapshot(postsQry3, (querySnap) => {
    ingredients.value.bread = []
    querySnap.forEach((doc) => {
      
      let data = doc.data();
      data.id = doc.id;
      ingredients.value.bread.push(data);
    })
  })



}

const check=ref()
const formShow = ref(true)
onMounted(() => {
  getIngredients()
    CalPrice()

   check.value = localStorage.getItem("username")
  if (check == null) {
    formShow.value = false
  }

  

})

onBeforeUpdate(async ()  => {

  await CalPrice()

})

const data = ref({ meat: [], vegetable: [], bread: []  , CheeseCrust : false})

const TotalPrice = ref(0)

 async function CalPrice() {
  
  TotalPrice.value = 0

 
   
  for (let h = 0; h < data.value.meat.length; h++) {

    for (let i = 0; i < ingredients.value.meat[0].ingredient.length; i++) {

      if (data.value.meat[h] == ingredients.value.meat[0].ingredient[i].name) {

        TotalPrice.value = TotalPrice.value + ingredients.value.meat[0].ingredient[i].price

      }

    }
  }

  for (let h = 0; h < data.value.vegetable.length; h++) {

    for (let i = 0; i < ingredients.value.vegetable[0].ingredient.length; i++) {

      if (data.value.vegetable[h] == ingredients.value.vegetable[0].ingredient[i].name) {
        //console.log(ingredients.value.bread[0].ingredient[0].name)
        TotalPrice.value = TotalPrice.value + ingredients.value.vegetable[0].ingredient[i].price

      }

    }


  }


  if(data.value.CheeseCrust==true) {
    TotalPrice.value =TotalPrice.value+20
  }

  for (let h = 0; h < ingredients.value.bread[0].ingredient.length; h++) {
    
    if(ingredients.value.bread[0].ingredient[h].name == data.value.bread ) {
      TotalPrice.value =TotalPrice.value+ingredients.value.bread[0].ingredient[h].price
    }

  }


}


async function addPizza() {

  // const newDoc = await addDoc(collection(db, `cart/${check.value}/Pizza`), {
  //   CheeseCrust : data.CheeseCrust ,
  //   vegetable : data.vegetable ,
  //   bread : data.bread ,
  //   meat : data.meat ,
  //   price : TotalPrice.value


  // });
if( data.value.bread.length!=0 ){
console.log("add")

  const docRef = await addDoc(collection(db, `cart/${check.value}/Pizza`), {
          CheeseCrust : data.value.CheeseCrust ,
     vegetable : data.value.vegetable ,
     bread : data.value.bread ,
     meat : data.value.meat ,
     price : TotalPrice.value })

     alert("เพิ่มพิซซ่าลงตะกล้าสินค้าเรียบร้อย");
      data.value = { meat: [], vegetable: [], bread: []  , CheeseCrust : false}

      calPriceCart()

}else

alert("กรุณาเลือกแป้ง");




}

const checked = ref(true)

const cartPrice =ref(0)
const countCart =ref(0)
async function calPriceCart () {

  //const qry = query(collection(db, `cart/${check.value}/Pizza`))
  const PizzaRef = collection(db,"cart",check.value,"Pizza")
  console.log(PizzaRef)
  const querySnapshot = await getDocs(PizzaRef);

  const snapshot2 = await getCountFromServer(PizzaRef);
  countCart.value =   snapshot2.data().count

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  cartPrice.value = cartPrice.value + doc.data().price
});

const docRef = doc(db,"cart",check.value);
const docSnap = await getDoc(docRef);




if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());

await updateDoc(doc(db, "cart", check.value), {
    count:countCart.value ,
   price: cartPrice.value,
});
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}


}
</script>

<template>


<form>
  <div class="mt-10 sm:mt-0">
   
    <!-- {{data}} -->
    <!-- {{ingredients.bread[0].ingredient[0].name}} -->

    <div class="flex justify-center mt-20 ">

      <div class="mt-5 md:col-span-2 md:mt-0 w-2/6">

        <div class="overflow-hidden shadow sm:rounded-md ">
          <div class="space-y-6 bg-white px-4 py-5 sm:p-6 ">

            <div class="flex justify-center"> <img class="w-96 " src="../assets/cat.png" /></div>

            <div class="text-2xl text-center">เลือกหน้าพิซซ่าของคุณ</div>

            <fieldset v-for='item in ingredients.meat'>
              <legend class="sr-only"></legend>
              <div class="text-base font-medium text-gray-900">{{ item.id }}</div>
              <div class="mt-4 space-y-4">


                <div class="flex items-start" v-for='element in item.ingredient'>

                  <div class="flex h-5 items-center">
                    <input  v-model="data.meat" :value="element.name" :name="element.name" type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                  </div>
                  <div class="ml-3 text-sm">
                    <label :for="element.name" class="font-medium text-gray-700">{{ element.name }}</label>
                    <p class="text-gray-500">${{ element.price }}</p>
                  </div>


                </div>


              </div>
            </fieldset>

            <fieldset v-for='item in ingredients.vegetable'>
              <legend class="sr-only"></legend>
              <div class="text-base font-medium text-gray-900">{{ item.id }}</div>
              <div class="mt-4 space-y-4">


                <div class="flex items-start" v-for='element in item.ingredient'>

                  <div class="flex h-5 items-center">
                    <input   v-model="data.vegetable" :value="element.name" name="comments" type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                  </div>
                  <div class="ml-3 text-sm">
                    <label  class="font-medium text-gray-700">{{ element.name }}</label>
                    <p class="text-gray-500">${{ element.price }}</p>
                  </div>


                </div>


              </div>
            </fieldset>

            <fieldset v-for='item in ingredients.bread'>
              <legend class="contents text-base font-medium text-gray-900">{{ item.id }}</legend>
              <p class="text-sm text-gray-500">ขนมปังหอมๆ แป้งทำเอง นวดสดทุกชิ้น</p>
              <div class="mt-4 space-y-4">


                <div class="flex items-start" v-for='element in item.ingredient'>
                  <div class="flex h-5 items-center">
                    <input required v-model="data.bread" :value="element.name" id="push-everything" name="push-notifications"
                      type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500">
                  </div>
                  <div class=" text-sm">
                    <label for="push-everything"
                      class="ml-3 block text-sm font-medium text-gray-700">{{ element.name }}</label>
                    <p class="text-gray-500 ml-3">${{ element.price }}</p>
                  </div>
                </div>


              </div>
            </fieldset>

            <fieldset>
              <legend class="sr-only"></legend>
              <div class="text-base font-medium text-gray-900">CheeseCrust (ขอบชีท)</div>
              <div class="mt-4 space-y-4">


                <div class="flex items-start">

<div class="flex h-5 items-center">
  <input class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" type="checkbox" id="checkbox" v-model="data.CheeseCrust" />

<div class="ml-3 text-sm">
  <label  class="font-medium text-gray-700">CheeseCrust</label>
  <p class="text-gray-500 ">$20</p>

</div></div>



                </div>


              </div>
            </fieldset>

          </div>

    




          <div>

            <div class="ml-3 block text-xl font-medium text-gray-700"> <span class="text-sky-700 font-bold">summary
              </span>
              <br />
              <span class="font-bold"> meat :</span> <span v-for="(item, index) in data.meat">{{ item }} <span
                  v-if="index != data.meat.length - 1">,</span></span>
              <br />
              <span class="font-bold"> vegetable :</span> <span v-for="(item, index) in data.vegetable">{{ item }} <span
                  v-if="index != data.vegetable.length - 1">,</span></span>
            </div>

            <div class="ml-3 block text-xl font-medium text-gray-700">

              <span class="text-sky-700 font-bold">total price : </span>{{ TotalPrice }}
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <div  @click="addPizza()"
              class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">add
              to cart</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</form>
</template>

<style scoped>

</style>

