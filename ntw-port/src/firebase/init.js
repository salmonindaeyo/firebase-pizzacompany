// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore" ;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBphGYeWgQPxMXCPxJL_iB9JKNHT9vbeH8",
  authDomain: "int305fb069.firebaseapp.com",
  projectId: "int305fb069",
  storageBucket: "int305fb069.appspot.com",
  messagingSenderId: "538091175039",
  appId: "1:538091175039:web:1657161e19e251e48b134a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore()

export default db