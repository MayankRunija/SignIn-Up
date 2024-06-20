// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtaSZX5x-NN92uh8znJBnd3hHUNcoKasw",
  authDomain: "signin-up-a31a8.firebaseapp.com",
  projectId: "signin-up-a31a8",
  storageBucket: "signin-up-a31a8.appspot.com",
  messagingSenderId: "336469779911",
  appId: "1:336469779911:web:2bc435cdedab38fae9e5e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;