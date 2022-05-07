// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import firebase from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'
import {collection} from'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0Cg17o3_pSLz9saw_tMeuXhdqiC1CFVk",
  authDomain: "dev-mobile-project-f7b08.firebaseapp.com",
  projectId: "dev-mobile-project-f7b08",
  storageBucket: "dev-mobile-project-f7b08.appspot.com",
  messagingSenderId: "567348985086",
  appId: "1:567348985086:web:9fa7494dd19b52e71839af",
  measurementId: "G-N7749PHGR8"
};
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


