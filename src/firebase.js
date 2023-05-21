// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCacs6qbpDyA2XO7IfOXUGO2PKf9v5j8uQ",
  authDomain: "todo-app-3a6f9.firebaseapp.com",
  projectId: "todo-app-3a6f9",
  storageBucket: "todo-app-3a6f9.appspot.com",
  messagingSenderId: "538968079666",
  appId: "1:538968079666:web:5db3c194fb621b948d6b2b",
  measurementId: "G-ZNGHKSKVF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)