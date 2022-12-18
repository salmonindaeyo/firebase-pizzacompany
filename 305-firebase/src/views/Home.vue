<script setup>
import TextHome from "../components/TextHome.vue"

</script>
 
<template>
  <div>
    <div class="grid grid-cols-2  text-gray-900 space-y-7 drop-shadow-lg  items-center  ml-36  relative">

         <div class=""> 
          
          <TextHome/>
          
          <p class="text-neutral-500 text-2xl	drop-shadow-lg w-3/4 mt-12">เว็บสำหรับการเลือกซื้อพิซซ่า 🥳</p>

      <br /> 
        <ButtonLink name="get to know me →" link="About" addStyle="bg-red-400" class="text-white mt-8"/>
       
          </div>


      <div class="  pt-24  ">
        <div class="relative w-full max-w-lg ">
          <div
            class="absolute top-0 -left-4 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob">
          </div>
          <div
            class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-1000">
          </div>
          <div
            class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-2000">
          </div>
          <div class="m-8 relative space-y-4">


            <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8 mr-10">
              <div class="flex-1 ">
                <div class="mb-2 ml-1 text-gray-600">พิซซ่า ฮาวายเอี้ยน 🍕</div>
                <div class="text-sm">
                  <span class="w-24 px-4 py-0.5 h-6 rounded-lg bg-yellow-100 text-yellow-600 text-center font-semibold">
                    แฮม </span>
                  <span
                    class="ml-2 w-24 h-6 px-4 py-0.5 rounded-lg bg-green-100 text-green-900 text-center font-semibold">
                    สับประรด </span>
                  <span
                    class="ml-2 w-24 h-6 px-4 py-0.5 rounded-lg bg-emerald-200 text-green-700 text-center font-semibold">
                    ชีท </span>
                  <span class="ml-2 w-24 h-6 px-4 py-0.5 rounded-lg bg-rose-200 text-red-500 text-center font-semibold">
                    แป้งหนาหนุ่ม </span>
                  


                </div>
              </div>

            </div>

            <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8 ml-10">
              <div class="flex-1 ">
                <div class="mb-2 ml-1 text-gray-600">พิซซ่า โฟร์ชีสและเบคอน 🍕</div>
                <div class="text-sm">
                  <span class="w-24 px-4 py-0.5 h-6 rounded-lg bg-lime-200 text-green-600 text-center font-semibold">
                    เบคอน </span>
                  <span
                    class="ml-2 w-24 h-6 px-4 py-0.5 rounded-lg bg-violet-200 text-violet-700 text-center font-semibold">basic
                    ชีท </span>



                </div>
              </div>

            </div>


            <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8 mr-7 ml-3">
              <div class="flex-1 ">
                <div class="mb-2 ml-1 text-gray-600">สไปซี่ ซุปเปอร์ซีฟู้ด พิซซ่า 🍕</div>
                <div class="text-sm">
                  <span class="w-24 px-4 py-0.5 h-6 rounded-lg bg-gray-200 text-gray-600 text-center font-semibold">
                    กุ้งปลาหมึก </span>
                  <span
                    class="ml-2 w-24 h-6 px-4 py-0.5 rounded-lg bg-sky-200 text-sky-700 text-center font-semibold">
                    พริกหยวก </span>
                  <span
                    class="ml-2 w-24 h-6 px-4 py-0.5 rounded-lg bg-orange-200 text-orange-700 text-center font-semibold">
                    ชีท </span>



                </div>
              </div>

            </div>

          </div>
        </div>

   



    </div>

  </div>
</div>
</template>


 
<style>

</style>