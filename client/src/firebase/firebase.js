// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr8caVe-2dz04orLGV_0IXde4N63IuB1g",
  authDomain: "intern-arena.firebaseapp.com",
  projectId: "intern-arena",
  storageBucket: "intern-arena.appspot.com",
  messagingSenderId: "972361611430",
  appId: "1:972361611430:web:24a73478ec0cca58ff1c67",
  measurementId: "G-3JNL59NWMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider= new GoogleAuthProvider();
export {auth,provider};