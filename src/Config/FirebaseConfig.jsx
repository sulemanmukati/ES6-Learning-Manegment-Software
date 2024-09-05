import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDU3eq2rhbNjSFR5bW8HORhH-uTL2fDKHA",
    authDomain: "school-mangment-software.firebaseapp.com",
    projectId: "school-mangment-software",
    storageBucket: "school-mangment-software.appspot.com",
    messagingSenderId: "222015004632",
    appId: "1:222015004632:web:bdd62de9706548386c9cad"
  };


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


// const analytics = getAnalytics(app);

export default app;

