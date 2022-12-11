<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { onSnapshot , query , collection , getDocs, deleteDoc , doc , setDoc, Timestamp , addDoc , updateDoc , where } from "firebase/firestore"
import db from '../firebase/init.js'

const ingredients = ref({meat:[]},{vegetable:[]},{bread:[]})

async function getIngredients(){

  const qry =  query(collection(db, 'ingredients'))
  const postsQry = query(qry,where("name","==","meat"))
  const un = await onSnapshot(postsQry, (querySnap) => {
    ingredients.value.meat=[]
  querySnap.forEach((doc) => {
      console.log(doc.data());
      let data = doc.data();
      data.id = doc.id;
      ingredients.value.meat.push(data);
    })
  })

  const qry2 =  query(collection(db, 'ingredients'))
  const postsQry2 = query(qry2,where("name","==","vegetable"))
  const un2 = await onSnapshot(postsQry2, (querySnap) => {
    ingredients.value.vegetable=[]
  querySnap.forEach((doc) => {
      console.log(doc.data());
      let data = doc.data();
      data.id = doc.id;
      ingredients.value.vegetable.push(data);
    })
  })

  const qry3 =  query(collection(db, 'ingredients'))
  const postsQry3 = query(qry3,where("name","==","bread"))
  const un3 = await onSnapshot(postsQry3, (querySnap) => {
    ingredients.value.bread=[]
  querySnap.forEach((doc) => {
      console.log(doc.data());
      let data = doc.data();
      data.id = doc.id;
      ingredients.value.bread.push(data);
    })
  })



}

    
const formShow =ref(true)
onMounted(() => {
    getIngredients() 

    const check = localStorage.getItem("username")
if(check==null) {
	formShow.value = false
}

})



</script>

<template>
  <div v-if="!formShow" class="text-center text-2xl mt-36">
      กรุณาล็อกอินเพื่อเพิ่มพิซซ่า
  </div>
  <div v-if="formShow">
 <!-- <div class="text-blue-200 text-sm">{{ingredients}}</div> -->

      
 <div v-for='item in ingredients.meat'>
    {{item.id}}
  <li v-for='element in item.ingredient'>
    {{element}}
  </li>
 </div>


 <div v-for='item in ingredients.bread'>
    {{item.id}}
  <li v-for='element in item.ingredient'>
    {{element}}
  </li>
 </div>



 <div v-for='item in ingredients.vegetable'>
    {{item.id}}
  <li v-for='element in item.ingredient'>
    {{element}}
  </li>
 </div>
 

  </div>
</template>

<style scoped>

</style>

