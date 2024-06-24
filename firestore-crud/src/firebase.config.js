// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCjX4POy1jUQ02q7Azv6IHfBFG7sEGUi90",
  authDomain: "react-crud-d50b9.firebaseapp.com",
  projectId: "react-crud-d50b9",
  storageBucket: "react-crud-d50b9.appspot.com",
  messagingSenderId: "994926351177",
  appId: "1:994926351177:web:62288e3570b383dd75c098",
  measurementId: "G-EV221LLS5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)