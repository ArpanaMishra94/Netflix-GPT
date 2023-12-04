// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNwkteJLqaPF0KvYpmu1phR5ibthHdzA0",
    authDomain: "netflix-gpt-6dae1.firebaseapp.com",
    projectId: "netflix-gpt-6dae1",
    storageBucket: "netflix-gpt-6dae1.appspot.com",
    messagingSenderId: "300509041673",
    appId: "1:300509041673:web:f326672270c80dfe4754d8",
    measurementId: "G-MBH1B0KRXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);