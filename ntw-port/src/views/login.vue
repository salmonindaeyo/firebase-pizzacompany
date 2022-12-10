<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { onSnapshot , query , collection , getDocs, deleteDoc , doc , setDoc, Timestamp , addDoc , updateDoc , where } from "firebase/firestore"
import db from '../firebase/init.js'

const dataLogin = ref({username:"",password:""})
function login () {

}

</script>
 
<template>
<div>
    <div class="flex flex-col items-center justify-center mt-24 bg-white">
	<div class="bg-yellow-200 w-full sm:w-3/4 max-w-lg p-12 pb-6 shadow-2xl rounded">
		<div class="text-red-500 pb-4 text-3xl font-semibold">Pizza login</div>
		<input
			class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
			v-model="dataLogin.username"
			type="text"
			placeholder="your username"
		/>
		<input
			class="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300"
            v-model="dataLogin.password"
			type="password"
			placeholder="password"
		/>
		<button
			class="inline-block mt-2 bg-yellow-500 hover:bg-green-700 focus:bg-green-800 px-6 py-2 rounded text-white shadow-lg"
        @click="Login()"
            >
			Login
		</button>
		<div class="pt-10 flex items-center justify-between">
			<a
				href=""
				class="inline-block text-green-700 hover:text-green-900 align-baseline font-normal text-sm"
			>
				Forgot password?
			</a>
			<a href="" class="inline-block text-green-700 hover:text-green-900 font-normal text-sm">
				Create an Account
			</a>
		</div>
	</div>
	<p class="mt-4 text-center text-gray-400 text-xs">
		&copy;2022 int305 assignment
	</p>
</div>
</div>
</template>
 
<style>

</style>