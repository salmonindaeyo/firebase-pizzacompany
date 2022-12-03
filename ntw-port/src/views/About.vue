<script setup>
import { ref, onBeforeMount } from "vue";

<<<<<<< Updated upstream
=======
const portData = ref([])

const getData = async () => {
  const res = await fetch(
    `https://gitconnected.com/v1/portfolio/salmonindaeyo`
  );
  if (res.status === 200) {
    portData.value = await res.json();
  } else {
    console.log("fetch error")
  }
};
>>>>>>> Stashed changes

onBeforeMount(async () => {

  getData()

});
</script>
 
<template>
<<<<<<< Updated upstream
<div class="flex mt-48 ">
  <div class="m-auto">
    <img src="../assets/person.jpg" class="w-64 rounded-full "/>
  </div>
</div>
    
=======
  <div>
    <div class="color2"> </div>
    <div class="color2"></div>
    <div class="color2"></div>

    <div class="text-center font-extrabold  text-6xl drop-shadow-lg
            "> about <span class=" bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-gray-400 to-yellow-500
            "> nuttawat </span></div>
    <div class="text-sm text-center text-gray-300 mt-4 ">ข้อมูลในหน้านี้ใช้การ fetch จาก <a
        class="text-blue-200 underline underline-offset-1" href="https://gitconnected.com/v1/portfolio/salmonindaeyo"
        target="_blank">https://gitconnected.com/v1/portfolio/salmonindaeyo</a> </div>



    <div class="grid grid-cols-6 gap-4 text-center">

      <div class="col-start-2 col-span-4 mt-4 flex justify-center">

        <img :src="portData.basics.image" class="rounded-full h-64 drop-shadow-2xl my-8" />

      </div>

      <div class="col-start-2 col-end-4  bg-white py-14 px-6  rounded-md  drop-shadow-lg
">
        <p class="text-4xl mb-1">{{ portData.basics.name.toUpperCase() }}</p>
        <p class="text-sm mb-3 text-gray-400">{{ portData.basics.headline }}</p>
        <hr />
        <p class="text-gray-600 mt-1 mb-1">{{ portData.basics.summary }}</p>
        <hr />

      </div>

      <div class="col-end-6 col-span-2   bg-white py-14 px-6  w-fit  rounded-md  drop-shadow-lg">

        <p class="my-2"> education : <span class="text-gray-700">{{ portData.education[0].institution }}</span></p>
        <p class="my-2"> faculty :<span class="text-gray-700"> {{ portData.education[0].area }}</span></p>
        <p class="my-2"> website : <span class="underline underline-offset-1 text-gray-700">{{ portData.education[0].url
        }}</span> </p>
        <!-- <p class="my-2"> GPAX : <span class="text-gray-700"> {{ portData.education[0].score }}</span></p> -->

      </div>


      <div class="col-start-1 col-end-7  ">
      
       
              <div v-for="(skill, index) in portData.skills" :key="index"
                class="ml-4 shadow-2xl  rounded-lg mx-10  py-12 space-y-2 bg-white px-20  mt-5 sm:mx-auto sm:max-w-lg w-96">
               <p class="text-2xl">{{skill.name}}</p>
               <p>level : {{skill.level}}</p>
               <p>yearsOfExperience : {{skill.yearsOfExperience}}</p>
              </div>
             
      </div>
    </div>

  </div>

>>>>>>> Stashed changes
</template>
 
<style>
div .color2 {
  position: absolute;
  filter: blur(350px);
}

div .color2:nth-child(1) {

  width: 400px;
  height: 400px;

  background: #ffbf00
}



div .color2:nth-child(3) {
  bottom: 50px;
  right: 100px;
  height: 500px;
  width: 500px;
  background: #70f074;

}
</style>