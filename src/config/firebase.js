import { initializeApp } from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqu6M8uuPiVEr-SZus6XSBYfP_lGU6M3s",
  authDomain: "forowebavanzada.firebaseapp.com",
  projectId: "forowebavanzada",
  storageBucket: "forowebavanzada.appspot.com",
  messagingSenderId: "579537452123",
  appId: "1:579537452123:web:24729ee8f06860ad8f937e",
  measurementId: "G-S9Q1PQYGW2"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;