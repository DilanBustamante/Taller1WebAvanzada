import { initializeApp , firebase } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//utils
const auth = firebase.auth();

export {auth};