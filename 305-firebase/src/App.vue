<script setup>
import { ref, onBeforeMount } from "vue";
import Navbar from '../src/components/Navbar.vue'
</script>

<template>
  <div
    class="
      bg-white
      relative
       
      min-h-screen
      flex-col
      justify-center
      overflow-hidden
     
      font-rubik
      
    "
  >
    
    <Navbar/>
      <div class="mt-3"><router-view> </router-view> </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Rubik");
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

html,
body {
  font-family: "Rubik", sans-serif;
}

#app {
  font-family: "Rubik", sans-serif;
}
</style>
