
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDlHlxnho21BVCaV-YoXsMSdvv5Q6Ixhn4",
  authDomain: "react-auth-119f1.firebaseapp.com",
  projectId: "react-auth-119f1",
  storageBucket: "react-auth-119f1.appspot.com",
  messagingSenderId: "52323930863",
  appId: "1:52323930863:web:4435ff013cf8885bdc811a",
  measurementId: "G-0QGSV2905N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {auth}