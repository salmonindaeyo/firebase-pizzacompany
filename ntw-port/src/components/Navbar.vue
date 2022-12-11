<script setup>
  import { ref, onBeforeMount , onMounted} from "vue";


      
const checkUser =ref(true)
onMounted(() => {

    const check = localStorage.getItem("username")
if(check==null) {
	checkUser.value = false
}

})

function logout ( ) {

  localStorage.removeItem("username");
  location.reload();

}


const open = ref(true)

function toggle () {
    if(open.value==false){
      open.value=true
    }else
    open.value=false
}
</script>
 
<template>
<div class="font-sans antialiased " id="app">
  <nav class="container flex flex-wrap justify-between items-center mx-auto">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <img src="../assets/cat.png" class="w-24" />
  
    </div>
    <div class="visible  md:invisible  ">
      <button @click="toggle ()" class="mr-4 bg-white  flex items-center px-3 py-2 border rounded text-teal-lighter border-black hover:text-black hover:border-red-300">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full  flex-warp sm:flex sm:items-center sm:w-auto">
      <div class="text-sm sm:flex-grow ">
        <ul class="  flex flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-7xl md:font-medium md:border-0 ">
      <li>
       <router-link
              :to="{name: 'Home' }"
              class="
                text-2xl
                  block
                md:hover:bg-yellow-100 md:hover:px-1  md:hover:rounded-lg
                md:hover:text-orange-500 md:p-0
                hover:bg-gray-100 md:hover:bg-transparent md:p-0 
                py-2 pr-4 pl-3
              "
              >🏠 Home</router-link
            >
      </li>
      <li>
       <router-link
              :to="{name: 'addPizza'  }"
              class="
                  text-2xl     block
                md:hover:bg-yellow-100 md:hover:px-1  md:hover:rounded-lg
                md:hover:text-orange-500 md:p-0
                hover:bg-gray-100 md:hover:bg-transparent md:p-0 
                py-2 pr-4 pl-3
              "
              >🍕 add pizza</router-link
            >
          
      </li>

      <li v-if="!checkUser">
       <router-link
              :to="{name: 'login'  }"
              class="
                  text-2xl     block
                md:hover:bg-yellow-100 md:hover:px-1  md:hover:rounded-lg
                md:hover:text-orange-500 md:p-0
                hover:bg-gray-100 md:hover:bg-transparent md:p-0 
                py-2 pr-4 pl-3
              "
              >👤 login</router-link
            >
          
      </li>

      <li v-if="!checkUser">
       <router-link
              :to="{name: 'SignUp'  }"
              class="
                  text-2xl     block
                md:hover:bg-yellow-100 md:hover:px-1  md:hover:rounded-lg
                md:hover:text-orange-500 md:p-0
                hover:bg-gray-100 md:hover:bg-transparent md:p-0 
                py-2 pr-4 pl-3
              "
              > SignUp</router-link
            >
          
      </li>

      <li v-if="checkUser">
       <span
              :to="{name: ''  }"
              class="
                  text-2xl     block
                md:hover:bg-yellow-100 md:hover:px-1  md:hover:rounded-lg
                md:hover:text-orange-500 md:p-0
                hover:bg-gray-100 md:hover:bg-transparent md:p-0 
                py-2 pr-4 pl-3
              "
              @click="logout()"
              >👤 log out</span
            >
          
      </li>
     
    </ul>
      </div>
      <div>
        <router-link  :to="{name: 'cart'  }" class="ml-5 no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-red-500 mt-4 sm:mt-0">🛒</router-link>
      </div>
    </div>
  </nav>
  
</div>
</template>
 
<style>
.router-link-active {
  color: rgb(224, 38, 38);
  /* border-color: #0a0e0b; */
}

</style>