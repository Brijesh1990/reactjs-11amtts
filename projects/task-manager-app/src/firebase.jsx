// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyDgCmy1Fu96aNsOLznag09hhP1sFxFjyM0",
  
    authDomain: "fir-auth-56719.firebaseapp.com",
  
    projectId: "fir-auth-56719",
  
    storageBucket: "fir-auth-56719.firebasestorage.app",
  
    messagingSenderId: "20393885260",
  
    appId: "1:20393885260:web:2b5605df0a993de4bcbee9",
  
    measurementId: "G-55M51V1QWG"
  
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
