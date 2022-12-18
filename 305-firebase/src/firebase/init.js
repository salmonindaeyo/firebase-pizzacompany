// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore" ;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlVmcJcCf3ob1z2Xbf7162RnZGo9dXYCk",
  authDomain: "pizza305lab.firebaseapp.com",
  projectId: "pizza305lab",
  storageBucket: "pizza305lab.appspot.com",
  messagingSenderId: "264011206701",
  appId: "1:264011206701:web:56b8bd95578482f50e28a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore()

export default db