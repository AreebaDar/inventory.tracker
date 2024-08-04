// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZEksvrCFgslhbdmJWH38KWPbBUDGV6WE",
  authDomain: "inventory-management-d3c4c.firebaseapp.com",
  projectId: "inventory-management-d3c4c",
  storageBucket: "inventory-management-d3c4c.appspot.com",
  messagingSenderId: "252050437152",
  appId: "1:252050437152:web:7eb3800576953105107845",
  measurementId: "G-MSTC3WF4V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}