<script setup>

</script>
 
<template>
<nav class=" border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a class="flex items-center">
      <img src="../assets/ntwlogo.png" class="mr-3 h-28 sm:h-32" alt="ntw logo" />
   
  </a>
  <div class="flex md:order-2">

      <div class="relative group drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150 ">
        <div class="absolute -inset-0
         bg-gradient-to-r from-yellow-500 to-red-700
          rounded-lg blur opacity-95        
          "> </div>
      <button  class=" relative px-7 py-4 bg-black rounded-lg leading-none flex items-center text-white">Resume</button>
    </div>


      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
     
    </button>
  </div>
  <div class=" justify-between items-center w-full md:flex md:w-auto md:order-1" >
    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-100">
      <li>
       <router-link
              :to="{name: 'Home' }"
              class="
                  block
                md:hover:bg-yellow-100 md:hover:px-1  md:hover:rounded-lg
                md:hover:text-orange-500 md:p-0
                hover:bg-gray-100 md:hover:bg-transparent md:p-0 
                py-2 pr-4 pl-3
              "
              >Home</router-link
            >
      </li>
      <li>
       <router-link
              :to="{name: 'About'  }"
              class="
                       block
                md:hover:bg-yellow-100 md:hover:px-1  md:hover:rounded-lg
                md:hover:text-orange-500 md:p-0
                hover:bg-gray-100 md:hover:bg-transparent md:p-0 
                py-2 pr-4 pl-3
              "
              >About</router-link
            >
          
      </li>
      <li>
<router-link
              :to="{name: 'Project' }"
              class="
                 block
                md:hover:bg-yellow-100 md:hover:px-1  md:hover:rounded-lg
                md:hover:text-orange-500 md:p-0
                hover:bg-gray-100 md:hover:bg-transparent md:p-0 
                py-2 pr-4 pl-3
              "
              >Project</router-link
            >      </li>
      <li>
<router-link
              :to="{name: 'Contact' }"
              class="
                 block
                md:hover:bg-yellow-100 md:hover:px-1  md:hover:rounded-lg
                md:hover:text-orange-500 md:p-0
                hover:bg-gray-100 md:hover:bg-transparent md:p-0 
                py-2 pr-4 pl-3
              "
              >Contact</router-link
            >       </li>
    </ul>
  </div>
  </div>
</nav>
</template>
 
<style>
.router-link-active {
  color: rgb(224, 38, 38);
  /* border-color: #0a0e0b; */
}

</style>