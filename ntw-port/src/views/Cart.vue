<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { onSnapshot , query , collection , getDoc , getDocs, deleteDoc , doc , orderBy , setDoc, Timestamp , addDoc , updateDoc , where  , limit ,getCountFromServer} from "firebase/firestore"
import db from '../firebase/init.js'

const cart = ref({count:"",price:"",user:""})
const PizzaCart = ref([])

async function getCart(){
    console.log(Username.value + "xx")
  const qry =  query(collection(db, 'cart'))
  const postsQry = query(qry,where("user","==",Username.value))
  const snapshot2 = await getCountFromServer(collection(db,"cart",Username.value,"Pizza"));
  countPizz.value =   snapshot2.data().count
  const un = await onSnapshot(postsQry, (querySnap) => {
    cart.value=[]
  querySnap.forEach((doc) => {
      console.log(doc.data());
      let data = doc.data();
      data.id = doc.id;
      cart.value = data;
    })
  })

  pizzaList(countPizz.value)

}

const countPizz =ref(0)
async function pizzaList (ssss) {
    PizzaCart.value=[]
    const pizzaRef = query(collection(db,"cart",Username.value,"Pizza"),limit(ssss))
    const snapshot2 = await getCountFromServer(collection(db,"cart",Username.value,"Pizza"));
  countPizz.value =   snapshot2.data().count
  
      const pizzaSnapshot = await getDocs(pizzaRef)
      pizzaSnapshot.forEach((pizza)=> {
        let pizzadata = pizza.data()
        pizzadata.id = pizza.id
        PizzaCart.value.push(pizzadata)
        console.log(PizzaCart.value)
      })

  }


  async function pizzaListSearch (ssss) {
    if(ssss!="") {

        PizzaCart.value=[]
    const userRef = doc(db,"cart/nut/Pizza",ssss)
  const userSnap = await getDoc(userRef)
  PizzaCart.value.push(userSnap.data())
    }else
    pizzaList(limitPizza.value)

 

  }

  async function pizzaListAsc (ssss) {
    PizzaCart.value=[]
    const pizzaRef = query(collection(db,"cart",Username.value,"Pizza"),limit(ssss) , orderBy("price","asc"))
    const snapshot2 = await getCountFromServer(collection(db,"cart",Username.value,"Pizza"));
  countPizz.value =   snapshot2.data().count
  
      const pizzaSnapshot = await getDocs(pizzaRef)
      pizzaSnapshot.forEach((pizza)=> {
        let pizzadata = pizza.data()
        pizzadata.id = pizza.id
        PizzaCart.value.push(pizzadata)
        console.log(PizzaCart.value)
      })

  }

  async function pizzaListDesc (ssss) {
    PizzaCart.value=[]
    const pizzaRef = query(collection(db,"cart",Username.value,"Pizza"),limit(ssss) , orderBy("price","desc"))
    const snapshot2 = await getCountFromServer(collection(db,"cart",Username.value,"Pizza"));
  countPizz.value =   snapshot2.data().count
  
      const pizzaSnapshot = await getDocs(pizzaRef)
      pizzaSnapshot.forEach((pizza)=> {
        let pizzadata = pizza.data()
        pizzadata.id = pizza.id
        PizzaCart.value.push(pizzadata)
        console.log(PizzaCart.value)
      })

  }

const PriceThan = ref(1)

  async function pizzaListPriceThan (ssss) {
    PizzaCart.value=[]
    const pizzaRef = query(collection(db,"cart",Username.value,"Pizza"),limit(ssss) , where("price", ">", ssss))
   
  
      const pizzaSnapshot = await getDocs(pizzaRef)
      pizzaSnapshot.forEach((pizza)=> {
        let pizzadata = pizza.data()
        pizzadata.id = pizza.id
        PizzaCart.value.push(pizzadata)
        console.log(PizzaCart.value)
      })

  }

  const PricelessThan = ref(1)

  async function pizzaListPricelessThan (ssss) {
    PizzaCart.value=[]
    const pizzaRef = query(collection(db,"cart",Username.value,"Pizza"),limit(ssss) , where("price", "<", ssss))
   
  
      const pizzaSnapshot = await getDocs(pizzaRef)
      pizzaSnapshot.forEach((pizza)=> {
        let pizzadata = pizza.data()
        pizzadata.id = pizza.id
        PizzaCart.value.push(pizzadata)
        console.log(PizzaCart.value)
      })

  }



  async function pizzaListMax () {
    
    PizzaCart.value=[]
    const pizzaRef = query(collection(db,"cart",Username.value,"Pizza"),limit(1) , orderBy("price","desc"))
    var MaxPrice = 0
  
      const pizzaSnapshot = await getDocs(pizzaRef)
      pizzaSnapshot.forEach((pizza)=> {
        MaxPrice = pizza.data().price
      })

      const pizzaRef2 = query(collection(db,"cart",Username.value,"Pizza") , where("price", "==", MaxPrice))
   
  
      const pizzaSnapshot2 = await getDocs(pizzaRef2)
      pizzaSnapshot.forEach((pizza)=> {
        let pizzadata = pizza.data()
        pizzadata.id = pizza.id
        PizzaCart.value.push(pizzadata)
        console.log(PizzaCart.value)
      })

  }

  async function pizzaListMin () {
    
    PizzaCart.value=[]
    const pizzaRef = query(collection(db,"cart",Username.value,"Pizza"),limit(1) , orderBy("price","asc"))
    var MaxPrice = 0
  
      const pizzaSnapshot = await getDocs(pizzaRef)
      pizzaSnapshot.forEach((pizza)=> {
        MaxPrice = pizza.data().price
      })

      const pizzaRef2 = query(collection(db,"cart",Username.value,"Pizza") , where("price", "==", MaxPrice))
   
  
      const pizzaSnapshot2 = await getDocs(pizzaRef2)
      pizzaSnapshot.forEach((pizza)=> {
        let pizzadata = pizza.data()
        pizzadata.id = pizza.id
        PizzaCart.value.push(pizzadata)
        console.log(PizzaCart.value)
      })

  }


async function deletePizza(index) {

    const test = await updateDoc(doc(db,"cart",Username.value), {
    count: cart.value.count-1,
    price :cart.value.price - PizzaCart.value[index].price
   
});

    const docRef = doc(db,"cart",Username.value,"Pizza",PizzaCart.value[index].id);
    PizzaCart.value.splice(index, 1)

deleteDoc(docRef)
.then(() => {
    console.log("Entire Document has been deleted successfully.")
})
.catch(error => {
    console.log(error);
})




}

    
const formShow =ref(true)
const Username = ref(null)
onMounted(() => {

     Username.value = localStorage.getItem("username")
if(Username.value==null) {
	formShow.value = false
}
getCart() 

})

const limitPizza = ref(1)
const searchValue =ref("")

</script>

<template>
  <div v-if="!formShow" class="text-center text-2xl mt-36">
      กรุณาล็อกอินเพื่อดูรถเข็น
  </div>

  <div  >
<div v-for="test in PizzaCart"></div>
<body v-if="formShow" class="">
  <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-4/5 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Pizza Cart</h1>
          <h2 class="font-semibold text-2xl">{{cart.count}} Items</h2>
          <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input v-model="searchValue"  class="block w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ID PIZZA
        " >
        <div @click="pizzaListSearch(searchValue)" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</div>
    </div>
</form>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">order code</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">meat</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">vegetable</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">bread</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">cheese crust</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
        </div>
       
        <div v-for="(PizzaCart,index) in PizzaCart" class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> <!-- product -->
            <div class="">
             {{PizzaCart.id}}
            </div>
          </div>
            
          <div class="flex justify-center w-1/5 font-semibold text-sm">  <span v-for="(meat, index) in PizzaCart.meat">{{meat}}<span v-if="index!=PizzaCart.meat.length-1">,</span></span></div>
          <div class="flex justify-center w-1/5 font-semibold text-sm">  <span v-for="(vegetable, index) in PizzaCart.vegetable">{{vegetable}}<span v-if="index!=PizzaCart.vegetable.length-1">,</span></span></div>
          <span class="text-center w-1/5 font-semibold text-sm">{{PizzaCart.bread}}</span>
          <span class="text-center w-1/5 font-semibold text-sm"><span v-if="PizzaCart.CheeseCrust==true">✅</span><span v-if="PizzaCart.CheeseCrust==false">❌</span></span>
          <span class="text-center w-1/5 font-semibold text-sm">${{PizzaCart.price}}
            <div @click="deletePizza(index)" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</div>

        </span>

        </div>

        <div @click="pizzaList(countPizz) " class="grid justify-items-center text-blue-700  underline underline-offset-4">------ see all ------</div>

<Div class="flex flex">
        

        <router-link  :to="{name: 'addPizza'  }" class="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </router-link >

        <div class="flex font-semibold text-gray-600 text-sm mt-10 ml-20">limit 

            <input @change=" pizzaList(limitPizza)" :max="countPizz" min="1" type="number" class="ml-2 w-16 outline-none focus:outline-none text-center h-5 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" v-model="limitPizza"/>


        </div>

        <div @click="pizzaListAsc(countPizz)" class="flex font-semibold text-gray-600 text-sm mt-10 ml-20"> asc 
        </div>

        <div @click="pizzaListDesc(countPizz)" class="flex font-semibold text-gray-600 text-sm mt-10 ml-20"> desc 
        </div>
        

        <div class="flex font-semibold text-gray-600 text-sm mt-10 ml-20">โชว์ราคามากกว่า 

<input @change=" pizzaListPriceThan(PriceThan)"  min="1" type="number" class="ml-2 w-16 outline-none focus:outline-none text-center h-5 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" v-model="PriceThan"/>


</div>

<div class="flex font-semibold text-gray-600 text-sm mt-10 ml-20">โชว์ราคาน้อยกว่า 

<input @change=" pizzaListPricelessThan(PricelessThan)"  min="1" type="number" class="ml-2 w-16 outline-none focus:outline-none text-center h-5 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" v-model="PricelessThan"/>


</div>



    </Div>
<div class="flex justify-center">

     <div @click="pizzaListMax()" class="flex font-semibold text-gray-600 text-sm mt-10 ml-20"> max 
        </div>

        <div @click="pizzaListMin()" class="flex font-semibold text-gray-600 text-sm mt-10 ml-20"> min
        </div>
</div>
   

      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">User </span>
          <span class="font-semibold text-sm">{{cart.user}}</span>

        </div>

        
      
        <div class="border-t ">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span class="font-semibold text-sm uppercase">Items </span>
          <span class="font-semibold text-sm">{{cart.count}}</span>
          </div>


        <div class="border-t"> 
             <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span class="font-semibold text-sm">{{cart.price}}$</span>
          </div></div>

          <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
  </div>
</body>

  </div>
 
</template>

<style scoped>

</style>

