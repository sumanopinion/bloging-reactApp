// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth' 
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiyvwozNmsRWEvO01I-KxA6uKfAsx4Foc",
  authDomain: "react-firebase-sumanopinion.firebaseapp.com",
  projectId: "react-firebase-sumanopinion",
  storageBucket: "react-firebase-sumanopinion.appspot.com",
  messagingSenderId: "829997399413",
  appId: "1:829997399413:web:1527ce90171c62e92e273c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);