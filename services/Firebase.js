// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
// signup function
export const handleSignUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth,email, password)
      .then(() => {
        console.log("wesh")
        console.log(auth.currentUser);
        const user = auth.currentUser;
      })
      .catch((error) => {
        console.error(error);
      });
  };
// sign in function
export const handleSignIn = async (email, password) => {
    await signInWithEmailAndPassword(auth,email, password)
      .then(() => {
        console.log(auth.currentUser);    
      })
      .catch((error) => {
        console.error(error);
      });
  };