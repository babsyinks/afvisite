// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjOnSmWyAu6eqFZBEoW_pdRd2_1RVaOrc",
  authDomain: "afviwebsite.firebaseapp.com",
  projectId: "afviwebsite",
  storageBucket: "afviwebsite.appspot.com",
  messagingSenderId: "144576559241",
  appId: "1:144576559241:web:35f517d35a0a717b7bae58",
  measurementId: "G-MDQ5LZTQD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);