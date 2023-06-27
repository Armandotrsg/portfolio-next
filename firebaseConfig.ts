// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4okDlF3mKJBTXCelPSHxFf6JmrnDimLw",
  authDomain: "portfolio-f6166.firebaseapp.com",
  projectId: "portfolio-f6166",
  storageBucket: "portfolio-f6166.appspot.com",
  messagingSenderId: "807804904472",
  appId: "1:807804904472:web:64ef9c399fbfac0cc44f6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);